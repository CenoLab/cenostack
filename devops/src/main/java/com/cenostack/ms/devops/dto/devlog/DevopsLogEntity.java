package com.cenostack.ms.devops.dto.devlog;

import java.io.Serializable;

public class DevopsLogEntity implements Serializable {

    public String user;
    public String command;
    public String args;
    public String time;
    public String content;
    public String desc;
    public String result;


    public DevopsLogEntity() {
    }

    public DevopsLogEntity(String user, String command, String args, String time, String content, String desc, String result) {
        this.user = user;
        this.command = command;
        this.args = args;
        this.time = time;
        this.content = content;
        this.desc = desc;
        this.result = result;
    }


    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public String getArgs() {
        return args;
    }

    public void setArgs(String args) {
        this.args = args;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }


    @Override
    public String toString() {
        return "DevopsLogEntity{" +
                "user='" + user + '\'' +
                ", command='" + command + '\'' +
                ", args='" + args + '\'' +
                ", time='" + time + '\'' +
                ", content='" + content + '\'' +
                ", desc='" + desc + '\'' +
                ", result='" + result + '\'' +
                '}';
    }

    public boolean notEmpty() {
        return (this.user!=null && (!"".equals(this.user))
                && (this.command!=null && (!"".equals(this.command)))
                && (this.args!=null && (!"".equals(this.args)))
                && (this.content!=null && (!"".equals(this.content)))
                && (this.desc!=null && (!"".equals(this.desc)))
        );
    }
}
