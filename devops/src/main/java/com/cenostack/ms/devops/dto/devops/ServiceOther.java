package com.cenostack.ms.devops.dto.devops;

import java.io.Serializable;

public class ServiceOther implements Serializable {

    private String serviceId;

    private String env;
    private String port;
    private String version;

    public ServiceOther(String serviceId, String env, String port, String version) {
        this.serviceId = serviceId;
        this.env = env;
        this.port = port;
        this.version = version;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "ServiceOther{" +
                "serviceId='" + serviceId + '\'' +
                ", env='" + env + '\'' +
                ", port='" + port + '\'' +
                ", version='" + version + '\'' +
                '}';
    }
}
