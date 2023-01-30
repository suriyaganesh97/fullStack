import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginUserId:String='';
  Password:String='';
  submitted = false;
  user:User = {
    name:'',
    password:''
  }
  constructor(private loginService: LoginServiceService,
    public router: Router ) { }

  ngOnInit(): void {

  }
  logIn():void{
    console.log(this.loginUserId);
    const data={
      name:this.loginUserId,
      password:this.Password
    }
    this.loginService.login(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigate(["/homepage"]);
      },
      error: (e) => console.error(e)
    });
  }

}
