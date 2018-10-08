package com.cenostack.ms.devops.dto.developer;

import java.io.Serializable;
import java.util.Date;

public class Developer  implements Serializable {
    public Integer id;


    public String developerUsername;

    public String developerEmail;

    public String developerPhone;

    public String developerToken;

    public Date lastModifyTime;

    public Date createTime;


    public Developer(Integer id, String developerUsername, String developerEmail, String developerPhone, String developerToken, Date lastModifyTime, Date createTime) {
        this.id = id;
        this.developerUsername = developerUsername;
        this.developerEmail = developerEmail;
        this.developerPhone = developerPhone;
        this.developerToken = developerToken;
        this.lastModifyTime = lastModifyTime;
        this.createTime = createTime;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDeveloperUsername() {
        return developerUsername;
    }

    public void setDeveloperUsername(String developerUsername) {
        this.developerUsername = developerUsername;
    }

    public String getDeveloperEmail() {
        return developerEmail;
    }

    public void setDeveloperEmail(String developerEmail) {
        this.developerEmail = developerEmail;
    }

    public String getDeveloperPhone() {
        return developerPhone;
    }

    public void setDeveloperPhone(String developerPhone) {
        this.developerPhone = developerPhone;
    }

    public String getDeveloperToken() {
        return developerToken;
    }

    public void setDeveloperToken(String developerToken) {
        this.developerToken = developerToken;
    }

    public Date getLastModifyTime() {
        return lastModifyTime;
    }

    public void setLastModifyTime(Date lastModifyTime) {
        this.lastModifyTime = lastModifyTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "Developer{" +
                "id=" + id +
                ", developerUsername='" + developerUsername + '\'' +
                ", developerEmail='" + developerEmail + '\'' +
                ", developerPhone='" + developerPhone + '\'' +
                ", developerToken='" + developerToken + '\'' +
                ", lastModifyTime=" + lastModifyTime +
                ", createTime=" + createTime +
                '}';
    }
}
