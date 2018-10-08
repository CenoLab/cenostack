package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;

import java.util.List;

public interface IBuildService {

    List<String> getBuildProjects(Developer developer, DeployPackage deployPackage) throws DeveloperInCorrectException;

    List<String> getBuildProjectBranch(Developer developer,DeployPackage deployPackage) throws DeveloperInCorrectException;

    List<String> getBuildProjectVersion(Developer developer,DeployPackage deployPackage) throws DeveloperInCorrectException;

    String getBuildCount();
}

