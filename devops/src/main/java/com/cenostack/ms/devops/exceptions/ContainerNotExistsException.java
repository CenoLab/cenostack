package com.cenostack.ms.devops.exceptions;

public class ContainerNotExistsException extends Exception {
    public ContainerNotExistsException() {
    }

    public ContainerNotExistsException(String message) {
        super(message);
    }

    public ContainerNotExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public ContainerNotExistsException(Throwable cause) {
        super(cause);
    }

    public ContainerNotExistsException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
