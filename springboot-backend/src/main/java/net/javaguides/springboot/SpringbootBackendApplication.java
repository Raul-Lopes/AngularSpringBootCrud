package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class SpringbootBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
}


//Composition of SpringBootApplication:
//@SpringBootConfiguration
//@EnableAutoConfiguration
//@ComponentScan