package com.example.pixelspringapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing

public class PixelspringapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PixelspringapiApplication.class, args);
	}

}
