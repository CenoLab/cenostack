package com.cenostack.ms.devops.core;

import com.cenostack.ms.devops.dto.base.Result;
import com.cenostack.ms.devops.exceptions.ApiException;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.exceptions.DevopsRequestParamsInompleteException;
import com.cenostack.ms.devops.utils.UtilJson;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.core.ParameterNameDiscoverer;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.util.*;

@Component
public class ApiGatewayHandler implements InitializingBean, ApplicationContextAware {
    private static final Logger logger = LoggerFactory.getLogger(ApiGatewayHandler.class);

    private static final String METHOD = "method";
    private static final String PARAMS = "params";

    ApiStore apiStore;
    final ParameterNameDiscoverer parameterNameDiscoverer;


    public ApiGatewayHandler() {
        parameterNameDiscoverer = new LocalVariableTableParameterNameDiscoverer();
    }

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        apiStore = new ApiStore(applicationContext, parameterNameDiscoverer);
    }
    /*
    异常处理
     */
    public void afterPropertiesSet() throws Exception {
        apiStore.loadApiFromSpringBeans();
    }

    public void handle(HttpServletRequest request, HttpServletResponse response) {
        String params = request.getParameter(PARAMS);
        Result<Object> result = new Result<>();
        ApiStore.ApiRunnable apiRunnable = null;
        try {

            paramsValdate(request);
            /*
            循环并处理异常
             */
            apiRunnable = sysParamsValdate(request);
            Object[] args = buildParams(apiRunnable, params, request, response);
            result.setData(true);
            result.setCode(1000);
            result.setData(apiRunnable.run(args));

        } catch (IllegalAccessException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (InvocationTargetException e) {
            response.setStatus(500);
            result = handleErr(e.getTargetException());
        }catch (InstantiationException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (ApiException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (NoSuchFieldException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (FileNotFoundException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (IOException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        } catch (DeveloperInCorrectException e) {
            response.setStatus(500);
            result = handleErr(e.fillInStackTrace());
        }

        returnResult(result, response);
    }

    private Result<Object> handleErr(Throwable e) {
        Integer code = 2000;
        String message = "";
        if (e instanceof ApiException) {
            code = 2001;
            message = e.getMessage();
        } else {
            code = 2002;
            message = e.getMessage();
            e.printStackTrace();
        }
        Result<Object> objectResult = new Result<>();
        objectResult.setState(false);
        objectResult.setCode(code);
        objectResult.setMsg(message);

        //ByteArrayOutputStream out = new ByteArrayOutputStream();
        //PrintStream stream = new PrintStream(out);
        //e.printStackTrace(stream);
        //result.put("track", e.getStackTrace());

        return objectResult;
    }


    private void paramsValdate(HttpServletRequest request) throws ApiException {
        String apiName = request.getParameter(METHOD);
        String json = request.getParameter(PARAMS);

        if (apiName == null || "".equals(apiName)) {
            throw new ApiException("调用失败，参数 'method' 为空");
        } else if (json == null || "".equals(json)) {
            throw new ApiException("调用失败，" +
                    "参数 'params' 为空");
        }
    }

    private ApiStore.ApiRunnable sysParamsValdate(HttpServletRequest request) throws ApiException {
        String apiName = request.getParameter(METHOD);
        ApiStore.ApiRunnable apiRunnable;
        paramsValdate(request);
        if ((apiRunnable = apiStore.findApiRunnable(apiName)) == null) {
            throw new ApiException("调用失败：指定API不存在，API：" + apiName);
        }
        return apiRunnable;
    }

    /*
    调用函数
     */
    private Object[] buildParams(ApiStore.ApiRunnable apiRunnable, String params, HttpServletRequest request, HttpServletResponse response) throws ApiException {
        Map<String, Object> map = null;
        try {
            map = UtilJson.toMap(params);

        } catch (IllegalArgumentException e) {
            throw new ApiException("调用失败：JSON字符串格式化失败，请检查params参数");
        } catch (ParseException e) {
            throw new ApiException("调用失败：JSON字符串toMap失败，请检查params参数");
        }
        if (map == null) {
            map = new HashMap<String, Object>();
        }
        Method method = apiRunnable.getTargetMethod();
        List<String> paramsNames = Arrays.asList(parameterNameDiscoverer.getParameterNames(method));
        Class<?>[] paramType = method.getParameterTypes();

        for (Map.Entry<String, Object> m : map.entrySet()) {
            if (!paramsNames.contains(m.getKey())) {
                throw new ApiException("调用失败，接口 '" + apiRunnable.getApiName() + "' 对应方法 '" + method.getName() + "' 不存在 '" + m.getKey() + "' 参数");
            }
        }

        Object[] args = new Object[paramType.length];
        for (int i = 0; i < paramType.length; i++) {
            if (paramType[i].isAssignableFrom(HttpServletRequest.class)) {
                args[i] = request;
            } else if (map.containsKey(paramsNames.get(i))) {
                try {
                    args[i] = convertJsonToBean(map.get(paramsNames.get(i)), paramType[i]);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                    throw new ApiException("调用失败：指定参数格式错误或值错误 '" + paramsNames.get(i) + "' :" + e.getMessage());
                } catch (DevopsRequestParamsInompleteException e) {
                    e.printStackTrace();
                    throw new ApiException("调用失败：指定参数格式错误或值错误 '" + paramsNames.get(i) + "' :" + e.getMessage());
                } catch (NoSuchFieldException e) {
                    e.printStackTrace();
                    throw new ApiException("调用失败：指定参数格式错误或值错误 '" + paramsNames.get(i) + "' :" + e.getMessage());
                }
            } else {
                args[i] = null;
            }
        }
        logger.error("__________ARGS : " + args.toString());
        return args;
    }

    private <T> Object convertJsonToBean(Object val, Class<?> targetClass) throws IllegalAccessException, NoSuchFieldException, DevopsRequestParamsInompleteException {
        Object result = null;
        if (val == null) {
            return null;
        } else if (Integer.class.equals(targetClass)) {
            result = Integer.parseInt(val.toString());
        } else if (Long.class.equals(targetClass)) {
            result = Long.parseLong(val.toString());
        } else if (Date.class.equals(targetClass)) {
            if (val.toString().matches("[0-9]+")) {
                result = new Date(Long.parseLong(val.toString()));
            } else {
                throw new IllegalArgumentException("日期必须是长整型的时间戳");
            }
        } else if (String.class.equals(targetClass)) {
            if (val instanceof String) {
                result = val;
            } else {
                throw new IllegalArgumentException("转换目标类型为字符串");
            }
        } else {
            result = UtilJson.convertValue(val, targetClass);
        }
        return result;
    }


    private void returnResult(Object result, HttpServletResponse response) {
        try {
            UtilJson.JSON_MAPPER.configure(
                    SerializationFeature.WRITE_NULL_MAP_VALUES, true);

            Result<Object> objectResult = new Result<>();
            objectResult.setState(true);
            objectResult.setCode(200);
            objectResult.setData(result);

            String json = new Gson().toJson(objectResult,Result.class);

            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html/json;charset=utf-8");
            response.setHeader("Cache-Control", "no-cache");
            response.setHeader("Pragma", "no-cache");
            response.setDateHeader("Expires", 0);
            if (json != null) {
                response.getWriter().write(json);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
