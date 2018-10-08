package com.cenostack.ms.devops.dto.container;

import java.io.Serializable;

public class ContainerOther implements Serializable {
    private String disk;
    private String cpu;
    private String mem;


    public ContainerOther() {
    }

    public ContainerOther(String disk, String cpu, String mem) {
        this.disk = disk;
        this.cpu = cpu;
        this.mem = mem;
    }

    public String getDisk() {
        return disk;
    }

    public void setDisk(String disk) {
        this.disk = disk;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getMem() {
        return mem;
    }

    public void setMem(String mem) {
        this.mem = mem;
    }

    @Override
    public String toString() {
        return "ContainerOther{" +
                "disk='" + disk + '\'' +
                ", cpu='" + cpu + '\'' +
                ", mem='" + mem + '\'' +
                '}';
    }
}
