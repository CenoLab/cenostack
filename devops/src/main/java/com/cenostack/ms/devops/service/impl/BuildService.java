package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.utils.ReadFile;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.dao.JavaBuildEntityMapper;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.service.IBuildService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class BuildService implements IBuildService {

    @Resource
    private JavaBuildEntityMapper javaBuildEntityMapper;

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.deploy.projects")
    public List<String> getBuildProjects(Developer developer,DeployPackage deployPackage) throws DeveloperInCorrectException {
       ReadFile readFile = new ReadFile();
        return readFile.readWarDir(deployPackage);
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.deploy.project.branchs")
    public List<String> getBuildProjectBranch(Developer developer,DeployPackage deployPackage) throws DeveloperInCorrectException {
        ReadFile readFile = new ReadFile();
        return readFile.readProgectBranchs(deployPackage);
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.deploy.project.version")
    public List<String> getBuildProjectVersion(Developer developer,DeployPackage deployPackage) throws DeveloperInCorrectException {
        ReadFile readFile = new ReadFile();
        return readFile.readProgectVersions(deployPackage);
    }

    @ApiMapping("api.build.count")
    public String getBuildCount() {
        return String.valueOf(javaBuildEntityMapper.count());
    }
}
