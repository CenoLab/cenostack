package com.cenostack.ms.devops.exceptions;

public class DeveloperInCorrectException extends Exception {
    public DeveloperInCorrectException() {
    }

    public DeveloperInCorrectException(String message) {
        super(message);
    }

    public DeveloperInCorrectException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeveloperInCorrectException(Throwable cause) {
        super(cause);
    }

    public DeveloperInCorrectException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
