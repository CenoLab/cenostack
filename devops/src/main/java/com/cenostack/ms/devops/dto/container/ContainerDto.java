package com.cenostack.ms.devops.dto.container;

import java.io.Serializable;

public class ContainerDto implements Serializable {

    public Container container;
    public ContainerOther containerOther;


    public ContainerDto(Container container, ContainerOther containerOther) {
        this.container = container;
        this.containerOther = containerOther;
    }

    public Container getContainer() {
        return container;
    }

    public void setContainer(Container container) {
        this.container = container;
    }

    public ContainerOther getContainerOther() {
        return containerOther;
    }

    public void setContainerOther(ContainerOther containerOther) {
        this.containerOther = containerOther;
    }

    @Override
    public String toString() {
        return "ContainerDto{" +
                "container=" + container +
                ", containerOther=" + containerOther +
                '}';
    }
}
