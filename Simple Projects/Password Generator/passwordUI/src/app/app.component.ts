import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordUI';
  email="";
  password="";
  constructor(private apiService:ApiService){

  }
  generatePassword(){
    const data={
      emailId:this.email
    }
    this.apiService.generatePassword(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.password=res;
      },
      error: (e) => console.error(e)
    });
  }

  callexternal(){
    const data={
      name:'osama'
    }
    this.apiService.externalURL(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.password=res;
      },
      error: (e) => console.error(e)
    });
  }
}
