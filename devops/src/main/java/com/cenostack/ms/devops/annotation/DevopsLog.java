package com.cenostack.ms.devops.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface DevopsLog {
    String user();
    String command();
    String args();
    String time();
    String content();
    String desc();
}
