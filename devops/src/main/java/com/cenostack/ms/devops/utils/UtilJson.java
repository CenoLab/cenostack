package com.cenostack.ms.devops.utils;

import com.cenostack.ms.devops.exceptions.DevopsRequestParamsInompleteException;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.gson.Gson;

import java.io.IOException;
import java.lang.reflect.Field;
import java.text.ParseException;
import java.util.Map;

public class UtilJson {

    public static Object convertValue(Object val, Class<?> targetClass) throws NoSuchFieldException, IllegalAccessException, DevopsRequestParamsInompleteException {

        Gson gson = new Gson();
        Object o = gson.fromJson(gson.toJson(val),targetClass);

        Field[] fields = targetClass.getDeclaredFields();
        for(Field field:fields){
            field.setAccessible(true);
            if(null==targetClass.getDeclaredField(field.getName()).get(o) || "".equals(targetClass.getDeclaredField(field.getName()).get(o).toString())){
                throw new DevopsRequestParamsInompleteException("参数"+field.getName()+"不能为空");
            }
        }
        return o;
    }

    public static String writeValueAsString(Object result) throws IOException {
        Gson gson = new Gson();
        return gson.toJson(result);
    }

    public static Map<String,Object> toMap(String params) throws ParseException {
        return new Gson().fromJson(params,Map.class);
    }

    public static class JSON_MAPPER {
        public static void configure(SerializationFeature writeNullMapValues, boolean b) {

        }
    }
}
