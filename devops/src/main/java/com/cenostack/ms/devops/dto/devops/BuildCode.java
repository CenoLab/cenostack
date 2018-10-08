package com.cenostack.ms.devops.dto.devops;

import java.io.Serializable;

public class BuildCode implements Serializable {
    public String codePath;
    public String buildPath;
    public String gitPath;
    public String gitBranch;
    public String projectName;


    public BuildCode() {
    }

    public BuildCode(String codePath, String buildPath, String gitPath, String gitBranch, String projectName) {
        this.codePath = codePath;
        this.buildPath = buildPath;
        this.gitPath = gitPath;
        this.gitBranch = gitBranch;
        this.projectName = projectName;
    }

    public String getCodePath() {
        return codePath;
    }

    public void setCodePath(String codePath) {
        this.codePath = codePath;
    }

    public String getBuildPath() {
        return buildPath;
    }

    public void setBuildPath(String buildPath) {
        this.buildPath = buildPath;
    }

    public String getGitPath() {
        return gitPath;
    }

    public void setGitPath(String gitPath) {
        this.gitPath = gitPath;
    }

    public String getGitBranch() {
        return gitBranch;
    }

    public void setGitBranch(String gitBranch) {
        this.gitBranch = gitBranch;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
}
