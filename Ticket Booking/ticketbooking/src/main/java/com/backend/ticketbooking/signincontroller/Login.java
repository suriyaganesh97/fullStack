package com.backend.ticketbooking.signincontroller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.ticketbooking.users.*;
import com.backend.ticketbooking.users.UserDataJpaRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Login {
	@Autowired
	private UserDataJpaRepository repository;
    static Logger logger =org.apache.logging.log4j.LogManager.getLogger((Login.class));
	boolean isPasswordMatching=false;
	String nameInBackend;
	String passwordInBackend;
	String name;
	String password;
	@RequestMapping("/login")
	public ResponseEntity<HttpStatus> logIn(@RequestBody Users user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(8);
		name=user.getusername();
		password=user.getPassword();
		List<Users> backendUser=repository.findByusername(name);
		nameInBackend=backendUser.get(0).getusername();
		passwordInBackend=backendUser.get(0).getPassword();
		boolean isPasswordMatching=encoder.matches(password,passwordInBackend);
		//checks if raw password from payload matches with the encoded password from DB
		System.out.println("isPasswordMatching"+isPasswordMatching);
		if(name.equals(nameInBackend) && isPasswordMatching) {
			return new ResponseEntity<>( HttpStatus.OK);
		} 
			return new ResponseEntity<>( HttpStatus.UNAUTHORIZED);
}	
}