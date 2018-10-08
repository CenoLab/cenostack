package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.dao.*;
import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.entity.*;
import com.cenostack.ms.devops.exceptions.DeployDBException;
import com.cenostack.ms.devops.service.IMavenDevService;
import com.cenostack.ms.devops.utils.BashExecutor;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.annotation.DevopsLog;
import com.cenostack.ms.devops.constant.CONSTANT;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.Command;
import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.dto.devops.GitProject;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.IOException;
import java.sql.Date;
import java.util.List;

@Service
public class MavenDevService implements IMavenDevService {

    @Resource
    private ContainerEntityMapper containerEntityMapper;

    @Resource
    private GitUserEntityMapper gitUserEntityMapper;

    @Resource
    private GitProjectEntityMapper gitProjectEntityMapper;

    @Resource
    private JavaBuildEntityMapper javaBuildEntityMapper;

    @Resource
    private DeployEntityMapper deployEntityMapper;


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    public List<String> exec(Developer developer, Command command) throws IOException, InterruptedException, DeveloperInCorrectException {

        String[] params = command.getArgs().split("// ");
        return new BashExecutor().executeShell(command.getCommand(), params);

    }


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @DevopsLog(
            user = "(developer.developerUsername)",
            command = "git",
            args = "pull",
            content = "(gitProject.gitPath)",
            time = "now",
            desc="(gitProject.gitPath)->(gitProject.gitCodePath)"
    )

    @ApiMapping("api.git.updateCode")
    public List<String> updateGitCode(Developer developer,GitProject gitProject) throws IOException, InterruptedException, DeveloperInCorrectException {

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/git.sh ");
        stringBuilder.append(gitProject.gitCodePath + " ");
        stringBuilder.append(gitProject.gitPath + " ");
        stringBuilder.append(gitProject.gitUser + " ");
        stringBuilder.append(gitProject.gitPassword);

        Command command = new Command("/bin/bash", stringBuilder.toString());
        command.out();
        String[] params = command.getArgs().split(" ");
        for (String s : params) {
            System.out.println(s);
        }

        GitUserEntity gitUserEntity = gitUserEntityMapper.selectByUser(gitProject.gitUser);
        if (gitUserEntity == null) {
            gitUserEntityMapper.insert(new GitUserEntity(
                    null,
                    developer.id,
                    gitProject.gitUser,
                    gitProject.gitPassword,
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis())
            ));
        }


        String[] projs = gitProject.gitCodePath.split("/");
        String[] proNames = projs[projs.length-1].split("\\.");

        GitProjectEntity gitProjectEntity = gitProjectEntityMapper.selectByCodePathAndDeveloperId(developer.id,gitProject.gitPath);
        if(gitProjectEntity==null) {
            gitProjectEntityMapper.insert(new GitProjectEntity(
                    null,
                    developer.id,
                    proNames[0],
                    gitProject.gitCodePath,
                    gitUserEntity.getId(),
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis())
            ));
        }

        return new BashExecutor().executeShell(command.getCommand(), params);
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @DevopsLog(
            user = "(developer.developerUsername)",
            command = "maven",
            args = "clean & package",
            content = "(buildCode.codePath)/(buildCode.projectName)",
            time = "now",
            desc="(buildCode.codePath)/(buildCode.projectName) branch (buildCode.gitBranch)->(buildCode.buildPath)"
    )
    @ApiMapping("api.git.buildMavenCode")
    public List<String> buildMavenCode(Developer developer,BuildCode buildCode) throws IOException, InterruptedException, DeveloperInCorrectException {

       StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/mvn.sh ");
        stringBuilder.append(buildCode.codePath + " ");
        stringBuilder.append(buildCode.gitPath + " ");
        stringBuilder.append(buildCode.gitBranch.trim() + " ");
        stringBuilder.append(buildCode.buildPath + " ");
        stringBuilder.append(buildCode.projectName);

        Command command = new Command("/bin/bash", stringBuilder.toString());
        command.out();
        String[] params = command.getArgs().split(" ");
        for (String s : params) {
            System.out.println(s);
        }

        GitProjectEntity gitProjectEntity = gitProjectEntityMapper.selectByProjName(buildCode.getProjectName(),developer.id);

        JavaBuildEntity javaBuildEntity = javaBuildEntityMapper.selectByProjectName(buildCode.projectName);
        if (javaBuildEntity == null) {
            javaBuildEntityMapper.insert(new JavaBuildEntity(
                    null,
                    developer.id,
                    buildCode.projectName,
                    gitProjectEntity==null?0:gitProjectEntity.getId(),
                    buildCode.gitBranch,
                    buildCode.codePath,
                    buildCode.buildPath,
                    "",
                    "",
                    "",
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis())
            ));
        } else {
            javaBuildEntityMapper.updateByPrimaryKey(
                    new JavaBuildEntity(
                            javaBuildEntity.getId(),
                            developer.id,
                            buildCode.projectName,
                            gitProjectEntity==null?0:gitProjectEntity.getId(),
                            buildCode.gitBranch,
                            buildCode.codePath,
                            buildCode.buildPath,
                            "",
                            "",
                            "",
                            new Date(System.currentTimeMillis()),
                            javaBuildEntity.getCreateTime())
            );
        }

        return new BashExecutor().executeShell(command.getCommand(), params);
    }


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @DevopsLog(
            user = "(developer.developerUsername)",
            command = "tomcat",
            args = "deploy & tomcat",
            content = "(deployPackage.buildPath)/(deployPackage.projectName)",
            time = "now",
            desc="(deployPackage.buildPath)/(deployPackage.projectName)/(deployPackage.gitBranch)/(deployPackage.buildVersion) to container (deployPackage.containerName)/(deployPackage.remoteDeployPath)"
    )
    @ApiMapping("api.git.deployJavaPackage")
    public List<String> deployJavaPackage(Developer developer,DeployPackage deployPackage) throws IOException, InterruptedException, DeployDBException, DeveloperInCorrectException {



        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/deploy.sh ");
        stringBuilder.append(deployPackage.buildPath + " ");
        stringBuilder.append(deployPackage.projectName + " ");
        stringBuilder.append(deployPackage.gitBranch.trim() + " ");
        stringBuilder.append(deployPackage.buildVersion + " ");

        // 此处需要从数据库查询container信息
        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(deployPackage.containerName);
        stringBuilder.append(containerEntity.getContainerUser() + " ");
        stringBuilder.append(containerEntity.getContainerHost() + " ");
        stringBuilder.append(containerEntity.getContainerPwd() + " ");
        stringBuilder.append(deployPackage.remoteDeployPath + " ");
        stringBuilder.append(deployPackage.remoteLogPath);

        Command command = new Command("/bin/bash", stringBuilder.toString());
        command.out();
        String[] params = command.getArgs().split(" ");
        for (String s : params) {
            System.out.println(s);
        }

        JavaBuildEntity javaBuildEntity = javaBuildEntityMapper.selectByProjectName(deployPackage.projectName);

        DeployEntity deployEntity = deployEntityMapper.selectByBuild(javaBuildEntity.getId());
        if (deployEntity == null) {
            if(deployEntityMapper.insert(new DeployEntity(
                    null,
                    developer.id,
                    containerEntity.getId(),
                    javaBuildEntity.getId(),
                    deployPackage.remoteDeployPath,
                    1,
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis()),
                    deployPackage.buildVersion,
                    deployPackage.env
            ))<1){
                throw new DeployDBException(CONSTANT.DEPLOY_DB_FAILED);
            }
        } else {
            if(deployEntityMapper.updateByPrimaryKey(new DeployEntity(
                    deployEntity.getId(),
                    developer.id,
                    containerEntity.getId(),
                    javaBuildEntity.getId(),
                    deployPackage.remoteDeployPath,
                    1,
                    new Date(System.currentTimeMillis()),
                    deployEntity.getCreateTime(),
                    deployPackage.buildVersion,
                    deployPackage.env
            ))<1){
                throw new DeployDBException(CONSTANT.DEPLOY_DB_FAILED);
            }
        }


        // 此处需要记录服务数据库
        return new BashExecutor().executeShell(command.getCommand(), params);
    }


}
