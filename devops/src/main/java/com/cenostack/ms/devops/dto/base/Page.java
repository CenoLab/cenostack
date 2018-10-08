package com.cenostack.ms.devops.dto.base;

import java.io.Serializable;

public class Page implements Serializable {
    public Integer page;
    public Integer num;

    public Page() {
    }

    public Page(Integer page, Integer num) {
        this.page = page;
        this.num = num;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }
}
