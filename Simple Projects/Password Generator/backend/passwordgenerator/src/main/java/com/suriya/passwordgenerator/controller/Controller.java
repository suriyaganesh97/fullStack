package com.suriya.passwordgenerator.controller;

import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	List<String> list_output=new ArrayList<String>();
	@GetMapping("/hello")
    // @RequestMapping("/hello")
	public String sayHi() {
		return "Hi";
}

@GetMapping("/generatePassword")
public List generatePassword() {
	String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	String specialCharacters = "!@#$";
	String numbers = "1234567890";
	String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
	int length=10;
	Random random = new Random();
	char[] password = new char[length];

	password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
	password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
	password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
	password[3] = numbers.charAt(random.nextInt(numbers.length()));
 
	for(int i = 4; i< length ; i++) {
	   password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
	}
	// System.out.println(password.toString());
	list_output.clear();
	list_output.add(password.toString());
	return list_output;
}
}
