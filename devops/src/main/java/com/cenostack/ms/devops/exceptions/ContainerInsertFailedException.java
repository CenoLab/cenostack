package com.cenostack.ms.devops.exceptions;

public class ContainerInsertFailedException extends Exception {
    public ContainerInsertFailedException() {
    }

    public ContainerInsertFailedException(String message) {
        super(message);
    }

    public ContainerInsertFailedException(String message, Throwable cause) {
        super(message, cause);
    }

    public ContainerInsertFailedException(Throwable cause) {
        super(cause);
    }

    public ContainerInsertFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
