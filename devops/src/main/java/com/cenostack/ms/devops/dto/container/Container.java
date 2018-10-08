package com.cenostack.ms.devops.dto.container;

import java.io.Serializable;

public class Container implements Serializable {
    public String name;
    public String address;
    public String user;
    public String port;
    public String pwd;
    public String desc;
    public Integer serviceCnt;


    public Container() {
    }

    public Container(String name, String address, String user, String port, String pwd, String desc, Integer serviceCnt) {
        this.name = name;
        this.address = address;
        this.user = user;
        this.port = port;
        this.pwd = pwd;
        this.desc = desc;
        this.serviceCnt = serviceCnt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getServiceCnt() {
        return serviceCnt;
    }

    public void setServiceCnt(Integer serviceCnt) {
        this.serviceCnt = serviceCnt;
    }
}
