package com.backend.ticketbooking.signincontroller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignInController {
    @RequestMapping("/hello")
    public String sayHi(){
        String password = "admin@admin";
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println("Encoded password is " + passwordEncoder.encode(password));
        return password;
        // work factor of bcrypt
       
    }
}
