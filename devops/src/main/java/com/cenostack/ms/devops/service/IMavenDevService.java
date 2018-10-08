package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.exceptions.DeployDBException;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.Command;
import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.dto.devops.GitProject;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;

import java.io.IOException;
import java.util.List;

public interface IMavenDevService {

    List<String> exec(Developer developer, Command command) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> updateGitCode(Developer developer,GitProject gitProject) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> buildMavenCode(Developer developer,BuildCode buildCode) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> deployJavaPackage(Developer developer,DeployPackage deployPackage) throws IOException, InterruptedException, DeployDBException, DeveloperInCorrectException;
}
