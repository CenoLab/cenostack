package com.cenostack.ms.devops.dto.devops;

import java.io.Serializable;
import java.util.Date;

public class DeployPackage implements Serializable {
    public String buildPath;
    public String containerName;
    public String projectName;
    public String gitBranch;
    public String buildVersion;
    public String remoteDeployPath;
    public String remoteLogPath;
    public String jvmOptions;
    public String env;


    public DeployPackage() {
    }

    public DeployPackage(String buildPath, String containerName, String projectName, String gitBranch, String buildVersion, String remoteDeployPath, String remoteLogPath, String jvmOptions, String env) {
        this.buildPath = buildPath;
        this.containerName = containerName;
        this.projectName = projectName;
        this.gitBranch = gitBranch;
        this.buildVersion = buildVersion;
        this.remoteDeployPath = remoteDeployPath;
        this.remoteLogPath = remoteLogPath;
        this.jvmOptions = jvmOptions;
        this.env = env;
    }


    public String getBuildPath() {
        return buildPath;
    }

    public void setBuildPath(String buildPath) {
        this.buildPath = buildPath;
    }

    public String getContainerName() {
        return containerName;
    }

    public void setContainerName(String containerName) {
        this.containerName = containerName;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getGitBranch() {
        return gitBranch;
    }

    public void setGitBranch(String gitBranch) {
        this.gitBranch = gitBranch;
    }

    public String getBuildVersion() {
        return buildVersion;
    }

    public void setBuildVersion(String buildVersion) {
        this.buildVersion = buildVersion;
    }

    public String getRemoteDeployPath() {
        return remoteDeployPath;
    }

    public void setRemoteDeployPath(String remoteDeployPath) {
        this.remoteDeployPath = remoteDeployPath;
    }

    public String getRemoteLogPath() {
        return remoteLogPath;
    }

    public void setRemoteLogPath(String remoteLogPath) {
        this.remoteLogPath = remoteLogPath;
    }

    public String getJvmOptions() {
        return jvmOptions;
    }

    public void setJvmOptions(String jvmOptions) {
        this.jvmOptions = jvmOptions;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }
}

