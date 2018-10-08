package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.devops.DeployEntityDto;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.exceptions.ServiceRemoveException;

import java.io.IOException;
import java.util.List;

public interface IServiceService {

    List<DeployEntityDto> getDeployServices(Developer developer, Page page) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> reConfigJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> reStartJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> stopJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> checkJavaTomcatService(Developer developer,String containerName) throws IOException, InterruptedException, DeveloperInCorrectException;

    List<String> removeJavaTomcatService(Developer developer,String serviceId) throws DeveloperInCorrectException, IOException, InterruptedException, ServiceRemoveException;



    String getServiceCount();

    String getMyServiceCount(Developer developer) throws DeveloperInCorrectException;


}
