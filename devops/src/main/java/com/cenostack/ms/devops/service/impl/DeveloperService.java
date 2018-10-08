package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.constant.CONSTANT;
import com.cenostack.ms.devops.dao.DeveloperEntityMapper;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.developer.UserLogin;
import com.cenostack.ms.devops.entity.DeveloperEntity;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.exceptions.LoginFailedException;
import com.cenostack.ms.devops.utils.Md5;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.service.IDeveloperService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.Date;
import java.util.UUID;

@Service
public class DeveloperService implements IDeveloperService {

    @Resource
    private DeveloperEntityMapper developerEntityMapper;


    @ApiMapping("api.developer.login")
    public Developer login(UserLogin userLogin) throws DeveloperInCorrectException, LoginFailedException {


        userLogin.password = Md5.MD5(userLogin.userName+userLogin.password).toLowerCase();
        DeveloperEntity developerEntity = developerEntityMapper.selectByUserLogin(userLogin);
        if(developerEntity==null){
            throw new DeveloperInCorrectException(CONSTANT.DEVELOPER_INCORRECT);
        }

        String token = Md5.MD5(userLogin.userName+UUID.randomUUID().toString()+System.currentTimeMillis()).toLowerCase();

        Integer updateToken = developerEntityMapper.updateByPrimaryKey(new DeveloperEntity(
           developerEntity.getId(),
           developerEntity.getDeveloperUsername(),
           developerEntity.getDeveloperPassword(),
           developerEntity.getDeveloperEmail(),
           developerEntity.getDeveloperPhone(),
           token,
           new Date(System.currentTimeMillis()),
           developerEntity.getCreateTime()
        ));

        if(updateToken<1){
            throw new LoginFailedException(CONSTANT.DEVELOPER_LOGIN_FAILED);
        }
        developerEntity.setDeveloperToken(token);

        return developerEntity.toDeveloper();
    }

    @ApiMapping("api.developer.auth")
    public Developer auth(Developer developer) throws DeveloperInCorrectException, LoginFailedException {
        DeveloperEntity developerEntity = developerEntityMapper.selectByDeveloper(developer);
        if(developerEntity==null){
            throw new DeveloperInCorrectException(CONSTANT.DEVELOPER_INCORRECT);
        }

        String token = Md5.MD5(developer.getDeveloperUsername()+UUID.randomUUID().toString()+System.currentTimeMillis()).toLowerCase();

        Integer updateToken = developerEntityMapper.updateByPrimaryKey(new DeveloperEntity(
                developerEntity.getId(),
                developerEntity.getDeveloperUsername(),
                developerEntity.getDeveloperPassword(),
                developerEntity.getDeveloperEmail(),
                developerEntity.getDeveloperPhone(),
                token,
                new Date(System.currentTimeMillis()),
                developerEntity.getCreateTime()
        ));

        if(updateToken<1){
            throw new LoginFailedException(CONSTANT.DEVELOPER_LOGIN_FAILED);
        }
        developerEntity.setDeveloperToken(token);

        return developerEntity.toDeveloper();
    }

}
