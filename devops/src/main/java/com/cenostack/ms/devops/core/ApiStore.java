package com.cenostack.ms.devops.core;

import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.annotation.DevopsLog;
import com.cenostack.ms.devops.constant.CONSTANT;
import com.cenostack.ms.devops.dao.DeveloperEntityMapper;
import com.cenostack.ms.devops.dto.developer.BaseAuthority;
import com.cenostack.ms.devops.dto.devlog.DevopsLogEntity;
import com.cenostack.ms.devops.entity.DeveloperEntity;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.dao.DevopsOpLogEntityMapper;
import com.cenostack.ms.devops.entity.DevopsOpLogEntity;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.core.ParameterNameDiscoverer;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ApiStore {

    private DevopsOpLogEntityMapper devopsOpLogEntityMapper;
    private DeveloperEntityMapper developerEntityMapper;


    private ApplicationContext applicationContext;


    private static HashMap<String,ApiRunnable> apiRunnableHashMap = new HashMap<String, ApiRunnable>();
    final ParameterNameDiscoverer parameterNameDiscoverer;

    public ApiStore(ApplicationContext applicationContext,ParameterNameDiscoverer parameterNameDiscoverer) {
        this.applicationContext = applicationContext;
        this.parameterNameDiscoverer = parameterNameDiscoverer;
    }

    public void loadApiFromSpringBeans(){
        String[] names = applicationContext.getBeanDefinitionNames();
        Class<?> type;

        for(String name:names){
            type = applicationContext.getType(name);
            for(Method method:type.getDeclaredMethods()){
                ApiMapping apiMapping = method.getAnnotation(ApiMapping.class);
                if(apiMapping!=null){
                    addApiItem(apiMapping,name,method);
                }
            }
        }
    }

    public ApiRunnable findApiRunnable(String apiName){
        if(apiName==null){
            throw new IllegalArgumentException("apiName不能为空");
        }
        return apiRunnableHashMap.get(apiName);
    }

    private void addApiItem(ApiMapping apiMapping, String name, Method method) {

        for(Field f:method.getReturnType().getFields()){
            if(f.getType().equals(Object.class)){
                throw new RuntimeException("接口模型不符合规范，请改正："+method.getName());
            }
        }

        ApiRunnable apiRunnable = new ApiRunnable();
        apiRunnable.apiName = apiMapping.value();
        apiRunnable.targetMethod = method;
        apiRunnable.returnType = method.getReturnType();
        apiRunnable.parameters = method.getParameters();
        apiRunnable.paramsName = Arrays.asList(parameterNameDiscoverer.getParameterNames(method));
        apiRunnable.annotations = method.getDeclaredAnnotations();
        apiRunnable.paramType = method.getParameterTypes();
        apiRunnable.targetName = name;
        apiRunnableHashMap.put(apiMapping.value(),apiRunnable);
    }

    public ApiRunnable findApiRunnable(String apiName,String Version){
        if(apiName==null){
            throw new IllegalArgumentException("apiName不能为空");
        }
        return (ApiRunnable) apiRunnableHashMap.get(apiName+"_"+Version);
    }

    public static List<ApiRunnable> findApiRunnables(){

        List<ApiRunnable> list = new ArrayList<ApiRunnable>(20);
        for(ApiRunnable apiRunnable:apiRunnableHashMap.values()){
            list.add(apiRunnable);
        }
        return list;
    }



    public class ApiRunnable implements Serializable {


        String apiName;
        String targetName;

        Object target;
        Method targetMethod;
        Class<?> returnType;
        Class<?>[] paramType;
        Parameter[] parameters;
        List<String> paramsName;
        Annotation[] annotations;



        public Class<?> getReturnType() {
            return returnType;
        }

        public void setReturnType(Class<?> returnType) {
            this.returnType = returnType;
        }

        public Class<?>[] getParamType() {
            return paramType;
        }

        public void setParamType(Class<?>[] paramType) {
            this.paramType = paramType;
        }

        public Parameter[] getParameters() {
            return parameters;
        }

        public void setParameters(Parameter[] parameters) {
            this.parameters = parameters;
        }

        public List<String> getParamsName() {
            return paramsName;
        }

        public void setParamsName(List<String> paramsName) {
            this.paramsName = paramsName;
        }

        public Annotation[] getAnnotations() {
            return annotations;
        }

        public void setAnnotations(Annotation[] annotations) {
            this.annotations = annotations;
        }

        public Object run(Object... args) throws InvocationTargetException, IllegalAccessException, InstantiationException, NoSuchFieldException, IOException, DeveloperInCorrectException {

            if(target==null){
                target = applicationContext.getBean(targetName);
            }

            InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
            SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(inputStream);


            BaseAuthority baseAuthority = new BaseAuthority();
            Auth auth = targetMethod.getAnnotation(Auth.class);
            if(auth!=null){
                Method[] methods = Auth.class.getDeclaredMethods();
                for(Method method:methods) {
                    List<String> developerUserP = GetTokens((String) method.invoke(auth));
                    Field field  = baseAuthority.getClass().getDeclaredField(method.getName());
                    field.setAccessible(true);
                    field.set(baseAuthority,method.invoke(auth));
                    for (String developer : developerUserP) {
                        if (developer.startsWith("(") && developer.endsWith(")")) {
                            String objs = developer.substring(1, developer.length() - 1);
                            String[] argg = objs.split("\\.");
                            Parameter[] parameters = targetMethod.getParameters();
                            for (Parameter parameter : parameters) {
                                if (parameter.getName().equals(argg[0])) {
                                    Field pField = parameter.getType().getDeclaredField(argg[1]);
                                    pField.setAccessible(true);
                                    for (Object o : args) {
                                        if (o.getClass() == parameter.getType()) {
                                            String v = ((String)field.get(baseAuthority)).replaceAll(developer, String.valueOf(pField.get(o)));
                                            field.set(baseAuthority,v.substring(1, v.length() - 1));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                try(SqlSession session = factory.openSession()){
                    developerEntityMapper = session.getMapper(DeveloperEntityMapper.class);
                    System.out.println(baseAuthority.toString());
                    DeveloperEntity developerEntity = developerEntityMapper.selectByBaseAuthority(baseAuthority);
                    if(developerEntity==null){
                        throw new DeveloperInCorrectException(CONSTANT.UNAUTHORIZED_OPERATION);
                    }
                    System.out.println(developerEntity.toString());
                }
            }



            Object result = targetMethod.invoke(target,args);


            DevopsLogEntity devopsLogEntity = new DevopsLogEntity();
            DevopsLog devopsLog = targetMethod.getAnnotation(DevopsLog.class);

            if(devopsLog!=null){ //devops 日志记录
                Method[] methods = DevopsLog.class.getDeclaredMethods();
                for(Method method:methods) {
                    List<String> developerUserP = GetTokens((String) method.invoke(devopsLog));
                    Field field  = devopsLogEntity.getClass().getDeclaredField(method.getName());
                    field.setAccessible(true);
                    field.set(devopsLogEntity,method.invoke(devopsLog));

                    for (String developer : developerUserP) {
                        if (developer.startsWith("(") && developer.endsWith(")")) {
                            String objs = developer.substring(1, developer.length() - 1);
                            String[] argg = objs.split("\\.");
                            Parameter[] parameters = targetMethod.getParameters();
                            for (Parameter parameter : parameters) {
                                if (parameter.getName().equals(argg[0])) {
                                    Field pField = parameter.getType().getDeclaredField(argg[1]);
                                    pField.setAccessible(true);
                                    for (Object o : args) {
                                        if (o.getClass() == parameter.getType()) {
                                            String v = ((String)field.get(devopsLogEntity)).replaceAll(developer, String.valueOf(pField.get(o)));
                                           field.set(devopsLogEntity,v);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                Field field = devopsLogEntity.getClass().getDeclaredField("result");
                field.setAccessible(true);
                field.set(devopsLogEntity,result.toString());

                try(SqlSession session = factory.openSession()){
                    devopsOpLogEntityMapper = session.getMapper(DevopsOpLogEntityMapper.class);
                    // 此处异步存储log devopsLogEntity到数据库
                    if(devopsLogEntity.notEmpty()) {
                        System.out.println(devopsLogEntity.toString());

                        Integer ins = devopsOpLogEntityMapper.insert(new DevopsOpLogEntity(
                                devopsLogEntity
                        ));
                        session.commit();
                    }
                }

            }


            return result;
        }

        public Class<?>[] getParamTypes(){
            return targetMethod.getParameterTypes();
        }

        public String getApiName() {
            return apiName;
        }

        public void setApiName(String apiName) {
            this.apiName = apiName;
        }

        public String getTargetName() {
            return targetName;
        }

        public void setTargetName(String targetName) {
            this.targetName = targetName;
        }

        public Object getTarget() {
            return target;
        }

        public void setTarget(Object target) {
            this.target = target;
        }

        public Method getTargetMethod() {
            return targetMethod;
        }

        public void setTargetMethod(Method targetMethod) {
            this.targetMethod = targetMethod;
        }

        @Override
        public String toString() {
            return "ApiRunnable{" +
                    "apiName='" + apiName + '\'' +
                    ", targetName='" + targetName + '\'' +
                    ", target=" + target +
                    ", targetMethod=" + targetMethod +
                    ", returnType=" + returnType +
                    ", paramType=" + Arrays.toString(paramType) +
                    ", parameters=" + Arrays.toString(parameters) +
                    ", paramsName=" + paramsName +
                    ", annotations=" + Arrays.toString(annotations) +
                    '}';
        }
    }


    private List<String> GetTokens(String str)
    {
        String regex = "\\(.*?\\)";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(str);

        List<String> result = new ArrayList<>();
        while (matcher.find()) {
            result.add(matcher.group(0));
        }
        return result;
    }


}
