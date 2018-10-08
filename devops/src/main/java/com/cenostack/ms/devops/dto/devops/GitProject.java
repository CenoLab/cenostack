package com.cenostack.ms.devops.dto.devops;

import java.io.Serializable;

public class GitProject implements Serializable {

    public String gitPath;
    public String gitUser;
    public String gitPassword;
    public String gitCodePath;

    public GitProject() {
    }

    public GitProject(String gitPath, String gitUser, String gitPassword, String gitCodePath) {
        this.gitPath = gitPath;
        this.gitUser = gitUser;
        this.gitPassword = gitPassword;
        this.gitCodePath = gitCodePath;
    }

    public String getGitPath() {
        return gitPath;
    }

    public void setGitPath(String gitPath) {
        this.gitPath = gitPath;
    }

    public String getGitUser() {
        return gitUser;
    }

    public void setGitUser(String gitUser) {
        this.gitUser = gitUser;
    }

    public String getGitPassword() {
        return gitPassword;
    }

    public void setGitPassword(String gitPassword) {
        this.gitPassword = gitPassword;
    }

    public String getGitCodePath() {
        return gitCodePath;
    }

    public void setGitCodePath(String gitCodePath) {
        this.gitCodePath = gitCodePath;
    }
}
