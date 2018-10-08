package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.dto.developer.Developer;

import java.io.IOException;
import java.util.List;

public interface IGitService {
    List<String> getGitProjectDirs(Developer developer,BuildCode buildCode) throws DeveloperInCorrectException;


    List<String> getGitProjectBranchs(Developer developer,BuildCode buildCode) throws IOException, InterruptedException, DeveloperInCorrectException;


    String getGitCount();
}
