package com.cenostack.ms.devops.dto.devops;

import java.io.Serializable;

public class DeployEntityDto implements Serializable {
    private GitProject gitProject;
    private BuildCode buildCode;
    private DeployPackage deployPackage;
    private ServiceOther serviceOther;


    public DeployEntityDto() {
    }

    public DeployEntityDto(GitProject gitProject, BuildCode buildCode, DeployPackage deployPackage) {
        this.gitProject = gitProject;
        this.buildCode = buildCode;
        this.deployPackage = deployPackage;
    }


    public DeployEntityDto(GitProject gitProject, BuildCode buildCode, DeployPackage deployPackage, ServiceOther serviceOther) {
        this.gitProject = gitProject;
        this.buildCode = buildCode;
        this.deployPackage = deployPackage;
        this.serviceOther = serviceOther;
    }

    public ServiceOther getServiceOther() {
        return serviceOther;
    }

    public void setServiceOther(ServiceOther serviceOther) {
        this.serviceOther = serviceOther;
    }

    public GitProject getGitProject() {
        return gitProject;
    }

    public void setGitProject(GitProject gitProject) {
        this.gitProject = gitProject;
    }

    public BuildCode getBuildCode() {
        return buildCode;
    }

    public void setBuildCode(BuildCode buildCode) {
        this.buildCode = buildCode;
    }

    public DeployPackage getDeployPackage() {
        return deployPackage;
    }

    public void setDeployPackage(DeployPackage deployPackage) {
        this.deployPackage = deployPackage;
    }

    @Override
    public String toString() {
        return "DeployEntityDto{" +
                "gitProject=" + gitProject +
                ", buildCode=" + buildCode +
                ", deployPackage=" + deployPackage +
                ", serviceOther=" + serviceOther +
                '}';
    }
}
