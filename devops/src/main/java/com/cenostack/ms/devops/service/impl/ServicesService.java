package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.constant.CONSTANT;
import com.cenostack.ms.devops.dao.ContainerEntityMapper;
import com.cenostack.ms.devops.dao.DeployEntityMapper;
import com.cenostack.ms.devops.dao.GitProjectEntityMapper;
import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.dto.devops.Command;
import com.cenostack.ms.devops.dto.devops.DeployEntityDto;
import com.cenostack.ms.devops.dto.devops.ServiceOther;
import com.cenostack.ms.devops.entity.ContainerEntity;
import com.cenostack.ms.devops.entity.DeployEntity;
import com.cenostack.ms.devops.entity.JavaBuildEntity;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.exceptions.ServiceRemoveException;
import com.cenostack.ms.devops.service.IServiceService;
import com.cenostack.ms.devops.utils.BashExecutor;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.dao.JavaBuildEntityMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesService implements IServiceService {


    @Resource
    private DeployEntityMapper deployEntityMapper;

    @Resource
    private GitProjectEntityMapper gitProjectEntityMapper;

    @Resource
    private JavaBuildEntityMapper javaBuildEntityMapper;

    @Resource
    private ContainerEntityMapper containerEntityMapper;


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.listDeploy")
    public List<DeployEntityDto> getDeployServices(Developer developer, Page page) throws IOException, InterruptedException, DeveloperInCorrectException {

        List<DeployEntityDto> deployEntityDtos = new ArrayList<>();
        List<DeployEntity> deployEntities = deployEntityMapper.listDeploys(developer,page);

        for (DeployEntity deployEntity : deployEntities) {
            JavaBuildEntity javaBuildEntity = javaBuildEntityMapper.selectByPrimaryKey(deployEntity.getJavaBuild());
            ContainerEntity containerEntity = containerEntityMapper.selectByPrimaryKey(deployEntity.getDeployContainer());

            BuildCode buildCode = javaBuildEntityMapper.selectByPrimaryKey(deployEntity.getJavaBuild()).toBuildCode();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("/export/devops/shell/code/port.sh get ");
            stringBuilder.append(containerEntity.getContainerUser() + " ");
            stringBuilder.append(containerEntity.getContainerHost() + " ");
            stringBuilder.append(containerEntity.getContainerPwd() + " ");
            stringBuilder.append(deployEntity.getDeployPath() + " ");
            stringBuilder.append(buildCode.getProjectName() + " ");
            stringBuilder.append(deployEntity.getEnv());

            Command command = new Command("/bin/bash", stringBuilder.toString());
            String[] params = command.getArgs().split(" ");
            command.out();

            List<String> ports = new BashExecutor().executeShell(command.getCommand(), params);


            deployEntityDtos.add(new DeployEntityDto(
                    null,
                    buildCode,
                    deployEntity.toDeployPackage(containerEntity,deployEntity),
                    new ServiceOther(deployEntity.getId().toString(),ports.get(0),deployEntity.getEnv(),deployEntity.getVersion())
            ));
        }

        return deployEntityDtos;
    }

    @ApiMapping("api.services.listServices")
    public List<DeployEntityDto> getContainerServices(Developer developer,String  containerName) throws IOException, InterruptedException {

        List<DeployEntityDto> deployEntityDtos = new ArrayList<>();
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(containerName);
        List<DeployEntity> deployEntities = deployEntityMapper.listContainerDeploys(containerEntity.getId());

        for (DeployEntity deployEntity : deployEntities) {
            ContainerEntity containerEntity1 = containerEntityMapper.selectByPrimaryKey(deployEntity.getDeployContainer());

            deployEntityDtos.add(new DeployEntityDto(
                    null,
                    javaBuildEntityMapper.selectByPrimaryKey(deployEntity.getJavaBuild()).toBuildCode(),
                    deployEntity.toDeployPackage(containerEntity1,deployEntity)
            ));
        }

        return deployEntityDtos;
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.reConfigJavaTomcatService")
    public List<String> reConfigJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException {


        // 此处需要从数据库查询container信息
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(containerName);

        List<DeployEntity> deployEntities = deployEntityMapper.selectByContainerId(containerEntity.getId());


        // now generate the tomcat server config
        StringBuilder configStringBuilder = new StringBuilder();
        configStringBuilder.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "\n" +
                "<Server port=\"8005\" shutdown=\"SHUTDOWN\">\n" +
                "  <Listener className=\"org.apache.catalina.startup.VersionLoggerListener\" />\n" +
                "  <Listener className=\"org.apache.catalina.core.AprLifecycleListener\" SSLEngine=\"on\" />\n" +
                "  <Listener className=\"org.apache.catalina.core.JreMemoryLeakPreventionListener\" />\n" +
                "  <Listener className=\"org.apache.catalina.mbeans.GlobalResourcesLifecycleListener\" />\n" +
                "  <Listener className=\"org.apache.catalina.core.ThreadLocalLeakPreventionListener\" />\n" +
                "\n" +
                "  \n" +
                "  <GlobalNamingResources>\n" +
                "    <Resource name=\"UserDatabase\" auth=\"Container\"\n" +
                "              type=\"org.apache.catalina.UserDatabase\"\n" +
                "              description=\"User database that can be updated and saved\"\n" +
                "              factory=\"org.apache.catalina.users.MemoryUserDatabaseFactory\"\n" +
                "              pathname=\"conf/tomcat-users.xml\" />\n" +
                "  </GlobalNamingResources>\n");


        List<String> strings = new ArrayList<>();

        Integer ajpPort = 8009;
        for (DeployEntity deployEntity : deployEntities) {
            JavaBuildEntity javaBuildEntity = javaBuildEntityMapper.selectByPrimaryKey(deployEntity.getJavaBuild());

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("/export/devops/shell/code/port.sh get ");
            stringBuilder.append(containerEntity.getContainerUser() + " ");
            stringBuilder.append(containerEntity.getContainerHost() + " ");
            stringBuilder.append(containerEntity.getContainerPwd() + " ");
            stringBuilder.append(deployEntity.getDeployPath() + " ");
            stringBuilder.append(javaBuildEntity.getProjectName() + " ");
            stringBuilder.append(deployEntity.getEnv());

            Command command = new Command("/bin/bash", stringBuilder.toString());
            String[] params = command.getArgs().split(" ");
            command.out();

            List<String> ports = new BashExecutor().executeShell(command.getCommand(), params);

            if (!ports.isEmpty()) {
                strings.add(ports.get(0));
                configStringBuilder.append(" <Service name=\"" + javaBuildEntity.getProjectName() + "\">\n" +
                        "    <Connector port=\"" + ports.get(0) + "\" protocol=\"HTTP/1.1\"\n" +
                        "               connectionTimeout=\"20000\"\n" +
                        "               redirectPort=\"8443\" />\n" +
                        "    <Connector port=\""+ajpPort+"\" protocol=\"AJP/1.3\" redirectPort=\"8443\" />\n" +
                        "    <Engine name=\"" + javaBuildEntity.getProjectName() + "\" defaultHost=\"localhost\">\n" +
                        "      <Realm className=\"org.apache.catalina.realm.LockOutRealm\">\n" +
                        "        <Realm className=\"org.apache.catalina.realm.UserDatabaseRealm\"\n" +
                        "               resourceName=\"UserDatabase\"/>\n" +
                        "      </Realm>\n" +
                        "      <Host name=\"localhost\"  appBase=\""+javaBuildEntity.getProjectName()+"-webapp\"\n" +
                        "            unpackWARs=\"true\" autoDeploy=\"true\">\n" +
                        "\t    <Context path=\"\" docBase=\"" + deployEntity.getDeployPath() +"/"+javaBuildEntity.getProjectName()+"\" debug=\"0\" reloadable=\"true\"/>\n" +
                        "        <Valve className=\"org.apache.catalina.valves.AccessLogValve\" directory=\"logs\"\n" +
                        "               prefix=\"localhost_access_log\" suffix=\".txt\"\n" +
                        "               pattern=\"%h %l %u %t &quot;%r&quot; %s %b\" />\n" +
                        "      </Host>\n" +
                        "    </Engine>\n" +
                        "  </Service>\n");
            }
            ajpPort+=1000;


            //修改项目运行环境
            StringBuilder envStringBuilder = new StringBuilder();
            envStringBuilder.append("/export/devops/shell/code/env.sh set ");
            envStringBuilder.append(containerEntity.getContainerUser() + " ");
            envStringBuilder.append(containerEntity.getContainerHost() + " ");
            envStringBuilder.append(containerEntity.getContainerPwd() + " ");
            envStringBuilder.append(deployEntity.getDeployPath() + " ");
            envStringBuilder.append(javaBuildEntity.getProjectName() + " ");
            envStringBuilder.append(deployEntity.getEnv());

            Command envCommand = new Command("/bin/bash", envStringBuilder.toString());
            String[] envParams = envCommand.getArgs().split(" ");
            envCommand.out();

            List<String> envResult = new BashExecutor().executeShell(envCommand.getCommand(), envParams);
            if(!envResult.isEmpty()){
                for(String re:envResult) {
                    strings.add(re);
                }
            }
        }

        configStringBuilder.append("</Server>");

        File file = new File("/export/devops/config/"+containerName);
        if(!file.isDirectory()) {
            file.mkdirs();
        }

        // 根据容器内项目创建tomcat配置文件
        File configFile = new File("/export/devops/config/"+containerName+"/server.xml");
        FileWriter fileWriter = new FileWriter(configFile);
        try(BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {
            bufferedWriter.write(configStringBuilder.toString());
            bufferedWriter.flush();
        }

        strings.add(configStringBuilder.toString());


        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/control.sh config ");
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(containerName+" ");
        stringBuilder.append(containerEntity.getContainerPort());

        Command command = new Command("/bin/bash", stringBuilder.toString());
        String[] params = command.getArgs().split(" ");
        command.out();

        List<String> config = new BashExecutor().executeShell(command.getCommand(), params);

        if(!config.isEmpty()){
            for(String re:config) {
                strings.add(re);
            }
        }

        return strings;
    }


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.reStartJavaTomcatService")
    public List<String> reStartJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException {

        // 此处需要从数据库查询container信息
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(containerName);

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/control.sh restart ");
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(containerName+" ");
        stringBuilder.append(containerEntity.getContainerPort());

        Command command = new Command("/bin/bash", stringBuilder.toString());
        String[] params = command.getArgs().split(" ");
        command.out();

        List<String> restart = new BashExecutor().executeShell(command.getCommand(), params);

        return restart;
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.stopJavaTomcatService")
    public List<String> stopJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException {

        // 此处需要从数据库查询container信息
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(containerName);

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/control.sh stop ");
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(containerName+" ");
        stringBuilder.append(containerEntity.getContainerPort());

        Command command = new Command("/bin/bash", stringBuilder.toString());
        String[] params = command.getArgs().split(" ");
        command.out();

        List<String> restart = new BashExecutor().executeShell(command.getCommand(), params);

        return restart;
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.checkJavaTomcatService")
    public List<String> checkJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException {

        // 此处需要从数据库查询container信息
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(containerName);

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/control.sh checkhealth ");
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(containerName+" ");
        stringBuilder.append(containerEntity.getContainerPort());

        Command command = new Command("/bin/bash", stringBuilder.toString());
        String[] params = command.getArgs().split(" ");
        command.out();

        List<String> restart = new BashExecutor().executeShell(command.getCommand(), params);

        return restart;
    }


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.services.removeService")
    public List<String> removeJavaTomcatService(Developer developer, String serviceId) throws DeveloperInCorrectException, IOException, InterruptedException, ServiceRemoveException {

        DeployEntity deployEntity = deployEntityMapper.selectByPrimaryKey(Integer.valueOf(serviceId));
        ContainerEntity containerEntity = containerEntityMapper.selectByPrimaryKey(deployEntity.getDeployContainer());
        JavaBuildEntity javaBuildEntity = javaBuildEntityMapper.selectByPrimaryKey(deployEntity.getJavaBuild());

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/control.sh remove ");
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(deployEntity.getDeployPath()+" ");
        stringBuilder.append(javaBuildEntity.getProjectName()+" ");
        stringBuilder.append(containerEntity.getContainerPort());


        Command command = new Command("/bin/bash", stringBuilder.toString());
        String[] params = command.getArgs().split(" ");
        command.out();

        List<String> remove = new BashExecutor().executeShell(command.getCommand(), params);

        Integer delete = deployEntityMapper.deleteByPrimaryKey(Integer.valueOf(serviceId));
        if(delete<1){
            throw new ServiceRemoveException(CONSTANT.SERVICE_REMOVE_FAILED);
        }

        return remove;
    }

    @ApiMapping("api.service.count")
    public String getServiceCount() {
        return String.valueOf(deployEntityMapper.count());
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.service.count.me")
    public String getMyServiceCount(Developer developer) throws DeveloperInCorrectException {
        return deployEntityMapper.countMy(developer.id);
    }


}
