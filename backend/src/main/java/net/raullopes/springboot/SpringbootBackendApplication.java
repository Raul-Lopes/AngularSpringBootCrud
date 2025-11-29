package net.raullopes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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