package com.cenostack.ms.devops.exceptions;

public class ContainerAlreadyExistsException extends Exception {
    public ContainerAlreadyExistsException() {
    }

    public ContainerAlreadyExistsException(String message) {
        super(message);
    }

    public ContainerAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public ContainerAlreadyExistsException(Throwable cause) {
        super(cause);
    }

    public ContainerAlreadyExistsException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
