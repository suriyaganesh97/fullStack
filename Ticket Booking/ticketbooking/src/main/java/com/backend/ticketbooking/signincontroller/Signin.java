package com.backend.ticketbooking.signincontroller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.Logger;
@CrossOrigin(origins = "http://localhost:4200")
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

	boolean isPasswordMatching=false;
	String nameInBackend="suriya";
	String passwordInBackend="Password";
	@RequestMapping("/login")
	public ResponseEntity<HttpStatus> logIn(@RequestParam String name,@RequestParam String password) {
		logger.debug(name);
		logger.debug(password);
		logger.debug(nameInBackend);
		logger.debug(passwordInBackend);
		if(name.equals(nameInBackend) && password.equals(passwordInBackend)) {
			return new ResponseEntity<>( HttpStatus.OK);
		} 
			return new ResponseEntity<>( HttpStatus.NOT_FOUND);

}
	
}