package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.constant.CONSTANT;
import com.cenostack.ms.devops.dao.ContainerEntityMapper;
import com.cenostack.ms.devops.dao.DeployEntityMapper;
import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.dto.container.Container;
import com.cenostack.ms.devops.dto.container.ContainerOther;
import com.cenostack.ms.devops.dto.devops.Command;
import com.cenostack.ms.devops.entity.DeployEntity;
import com.cenostack.ms.devops.exceptions.ContainerAlreadyExistsException;
import com.cenostack.ms.devops.exceptions.ContainerNotExistsException;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.service.IContainerService;
import com.cenostack.ms.devops.utils.BashExecutor;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.dto.container.ContainerDto;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.entity.ContainerEntity;
import com.cenostack.ms.devops.exceptions.ContainerInsertFailedException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class ContainerService implements IContainerService {


    @Resource
    private ContainerEntityMapper containerEntityMapper;

    @Resource
    private DeployEntityMapper deployEntityMapper;


    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.container.addContainer")
    public Container addContainer(Developer developer, Container container) throws ContainerNotExistsException, ContainerInsertFailedException, ContainerAlreadyExistsException, DeveloperInCorrectException {


        ContainerEntity containerEntity = containerEntityMapper.selectByContainerName(container.name);
        if(containerEntity==null){
            Integer insertId = containerEntityMapper.insert(new ContainerEntity(
                    1,developer.id,
                    container.address,
                    container.user,
                    container.pwd,
                    Integer.valueOf(container.port),
                    new Date(System.currentTimeMillis()),
                    new Date(System.currentTimeMillis()),
                    container.name,
                    container.desc));
            if(insertId<1){
                throw new ContainerInsertFailedException(CONSTANT.CONTAINER_ADD_FAINED);
            }
            return container;
        }else{
            throw new ContainerAlreadyExistsException(CONSTANT.CONTAINER_ALREADY_EXISTS);
        }
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.container.listContainer")
    public List<ContainerDto> listContainer(Developer developer, Page page) throws IOException, InterruptedException, DeveloperInCorrectException {


        List<ContainerEntity> containerDaos = containerEntityMapper.selectContainers(developer,page);
        List<ContainerDto> containers = new ArrayList<>();
        for(ContainerEntity containerDao:containerDaos){
            List<DeployEntity> deployEntities = deployEntityMapper.selectByContainerId(containerDao.getId());
            Container container = containerDao.toContainer();
            container.setServiceCnt(deployEntities.size());

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("/export/devops/shell/code/control.sh monitor ");
            stringBuilder.append(containerDao.getContainerUser() + " ");
            stringBuilder.append(containerDao.getContainerHost() + " ");
            stringBuilder.append(containerDao.getContainerPwd() + " ");
            stringBuilder.append(containerDao.getContainerName()+" ");
            stringBuilder.append(containerDao.getContainerPort());

            Command command = new Command("/bin/bash", stringBuilder.toString());
            String[] params = command.getArgs().split(" ");
            command.out();

            List<String> monitor = new BashExecutor().executeShell(command.getCommand(), params);

            ContainerOther containerOther = new ContainerOther();
            if(!monitor.isEmpty() && monitor.size()==3) {
                String cpu = monitor.get(0);
                String disk = monitor.get(1);
                String mem = monitor.get(2);
                containerOther.setCpu(cpu);
                containerOther.setDisk(disk);
                containerOther.setMem(mem);
            }


            containers.add(new ContainerDto(container,containerOther));
        }
        return containers;
    }

    @ApiMapping("api.container.count")
    public String getContainerCount() {
        return String.valueOf(containerEntityMapper.count());
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.container.count.me")
    public String getMyContainerCount(Developer developer) throws DeveloperInCorrectException {
        return containerEntityMapper.countMy(developer.id);
    }

}
