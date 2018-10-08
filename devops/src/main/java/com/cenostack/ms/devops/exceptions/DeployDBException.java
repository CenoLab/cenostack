package com.cenostack.ms.devops.exceptions;

public class DeployDBException extends Exception {
    public DeployDBException() {
    }

    public DeployDBException(String message) {
        super(message);
    }

    public DeployDBException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeployDBException(Throwable cause) {
        super(cause);
    }

    public DeployDBException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
