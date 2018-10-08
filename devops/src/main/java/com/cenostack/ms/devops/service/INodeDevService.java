package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.dto.developer.Developer;

import java.util.List;

public interface INodeDevService {

    List<String> buildNodeCode(Developer developer, BuildCode buildCode);
    List<String> deployNodePackage(Developer developer,DeployPackage deployPackage);
}
