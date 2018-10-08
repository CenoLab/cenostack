package com.cenostack.ms.devops.dto.base;

import java.io.Serializable;

public class Result<T> implements Serializable {
    private String msg;
    private T data;
    private boolean state;
    private Integer code;


    public Result() {
    }

    public Result(String msg, T data, boolean state) {
        this.msg = msg;
        this.data = data;
        this.state = state;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "Result{" +
                "msg='" + msg + '\'' +
                ", data=" + data +
                ", state=" + state +
                '}';
    }
}
