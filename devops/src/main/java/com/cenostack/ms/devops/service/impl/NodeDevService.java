package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.dto.devops.DeployPackage;
import com.cenostack.ms.devops.service.INodeDevService;
import com.cenostack.ms.devops.annotation.ApiMapping;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NodeDevService implements INodeDevService {

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.git.buildNodeCode")
    public List<String> buildNodeCode(Developer developer, BuildCode buildCode){


        return null;
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.git.deployNodePackage")
    public List<String> deployNodePackage(Developer developer,DeployPackage deployPackage) {
        return null;
    }
}
