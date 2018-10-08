package com.cenostack.ms.devops.exceptions;

public class DevopsRequestParamsInompleteException extends Exception {
    public DevopsRequestParamsInompleteException() {
    }

    public DevopsRequestParamsInompleteException(String message) {
        super(message);
    }

    public DevopsRequestParamsInompleteException(String message, Throwable cause) {
        super(message, cause);
    }

    public DevopsRequestParamsInompleteException(Throwable cause) {
        super(cause);
    }

    public DevopsRequestParamsInompleteException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
