package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.utils.BashExecutor;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.annotation.Auth;
import com.cenostack.ms.devops.dao.GitProjectEntityMapper;
import com.cenostack.ms.devops.dto.devops.Command;
import com.cenostack.ms.devops.dto.developer.Developer;
import com.cenostack.ms.devops.exceptions.DeveloperInCorrectException;
import com.cenostack.ms.devops.service.IGitService;
import com.cenostack.ms.devops.utils.ReadFile;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;


@Service
public class GitService implements IGitService {

    @Resource
    private GitProjectEntityMapper gitProjectEntityMapper;

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.git.projectDirs")
    public List<String> getGitProjectDirs(Developer developer,BuildCode buildCode) throws DeveloperInCorrectException {

        ReadFile readFile = new ReadFile();
        return readFile.readGitDir(buildCode);
    }

    @Auth(
            uid = "(developer.id)",
            username = "(developer.developerUsername)",
            token = "(developer.developerToken)"
    )
    @ApiMapping("api.git.projectBranchs")
    public List<String> getGitProjectBranchs(Developer developer,BuildCode buildCode) throws IOException, InterruptedException, DeveloperInCorrectException {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("/export/devops/shell/code/branch.sh ");
        stringBuilder.append(buildCode.codePath+" ");
        stringBuilder.append(buildCode.gitPath);

        Command command = new Command("/bin/bash",stringBuilder.toString());
        command.out();
        String[] params = command.getArgs().split(" ");
        for(String s:params){
            System.out.println(s);
        }
        return new BashExecutor().executeShell(command.getCommand(), params);
    }

    @ApiMapping("api.git.count")
    public String getGitCount() {
        return String.valueOf(gitProjectEntityMapper.count());
    }
}
