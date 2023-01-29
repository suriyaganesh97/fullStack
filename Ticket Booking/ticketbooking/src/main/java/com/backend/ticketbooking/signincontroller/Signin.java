package com.backend.ticketbooking.signincontroller;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.Logger;

@RestController
public class Signin {
    static Logger logger =org.apache.logging.log4j.LogManager.getLogger((Signin.class));
	@RequestMapping("/hello")
	public String sayHi() {
		return "Hi";
	}
	
	@RequestMapping("/")
	public String sayHome() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(8);
String result = encoder.encode("myPassword");
System.out.println(result);
logger.error(result);
if(encoder.matches("myPassword", result)){
    System.out.println("true");
}
		return "Home";
	}
	
}