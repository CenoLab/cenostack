package com.cenostack.ms.devops.exceptions;

public class ServiceRemoveException extends Exception {

    public ServiceRemoveException() {
    }

    public ServiceRemoveException(String message) {
        super(message);
    }

    public ServiceRemoveException(String message, Throwable cause) {
        super(message, cause);
    }

    public ServiceRemoveException(Throwable cause) {
        super(cause);
    }

    public ServiceRemoveException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
