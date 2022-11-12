import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-timezonepage',
  templateUrl: './timezonepage.component.html',
  styleUrls: ['./timezonepage.component.css']
})
export class TimezonepageComponent implements OnInit {
 date:any;

  constructor(public datepipe: DatePipe) {
   }

  ngOnInit(): void {
    this.getTime();
  }
getTime(){
  this.date=new Date();
let latest_date =this.datepipe.transform(this.date, 'dd-MM-yyyy');
console.log(latest_date)
}
}
