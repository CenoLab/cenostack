package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.dto.container.Container;
import com.cenostack.ms.devops.dto.container.ContainerDto;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.exceptions.ContainerAlreadyExistsException;
import com.cenostack.ms.devops.exceptions.ContainerInsertFailedException;
import com.cenostack.ms.devops.exceptions.ContainerNotExistsException;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;

import java.io.IOException;
import java.util.List;

public interface IContainerService {

    Container addContainer(Developer developer,Container container) throws ContainerNotExistsException, ContainerInsertFailedException, ContainerAlreadyExistsException, DeveloperInCorrectException;

    List<ContainerDto> listContainer(Developer developer,Page page) throws IOException, InterruptedException, DeveloperInCorrectException;

    String getContainerCount();

    String getMyContainerCount(Developer developer) throws DeveloperInCorrectException;
}

