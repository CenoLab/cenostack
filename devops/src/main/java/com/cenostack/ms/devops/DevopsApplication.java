package com.cenostack.ms.devops;

import com.cenostack.ms.devops.servlet.ApiServlet;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author
 * @date 2018-08-24
 * */
@SpringBootApplication
@ComponentScan(basePackages="com.jd")
@MapperScan(basePackages="com.jd.dkh.ms.devops.dao")
public class DevopsApplication {
	@Bean
	public ServletRegistrationBean ApiServlet(){
		return new ServletRegistrationBean(new ApiServlet(),"/api/*");
	}

	public static void main(String[] args) {
		SpringApplication.run(DevopsApplication.class, args);
	}
}
