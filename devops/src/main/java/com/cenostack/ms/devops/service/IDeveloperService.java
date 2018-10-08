package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.dto.developer.UserLogin;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.exceptions.LoginFailedException;

public interface IDeveloperService {

    Developer login(UserLogin userLogin) throws DeveloperInCorrectException, LoginFailedException;

    Developer auth(Developer developer) throws DeveloperInCorrectException, LoginFailedException;
}
