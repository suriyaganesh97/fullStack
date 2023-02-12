package com.backend.ticketbooking.signincontroller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.ticketbooking.users.UserDataJpaRepository;

import com.backend.ticketbooking.users.*;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SignUp {
    @Autowired
	private UserDataJpaRepository repository;
    static Logger logger =org.apache.logging.log4j.LogManager.getLogger((SignUp.class));

    @RequestMapping("/signUp")
	public ResponseEntity<HttpStatus> logIn(@RequestBody Users user) {
        String name;
	    String password;
		name=user.getusername();
		password=user.getPassword();
        System.out.println("name"+name+"password"+password);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(8);
        password = encoder.encode(password);  
		System.out.println("name"+name+"password"+password);
		repository.save(new Users(0,name,password,false));
			return new ResponseEntity<>( HttpStatus.OK);
}
}
