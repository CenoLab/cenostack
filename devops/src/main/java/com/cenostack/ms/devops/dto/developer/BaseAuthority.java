package com.cenostack.ms.devops.dto.developer;

public class BaseAuthority {
    public String uid;
    public String username;
    public String token;

    public BaseAuthority() {
    }

    public BaseAuthority(String uid, String username, String token) {
        this.uid = uid;
        this.username = username;
        this.token = token;
    }

    public String getId() {
        return uid;
    }

    public void setId(String uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


    @Override
    public String toString() {
        return "BaseAuthority{" +
                "uid='" + uid + '\'' +
                ", username='" + username + '\'' +
                ", token='" + token + '\'' +
                '}';
    }
}
