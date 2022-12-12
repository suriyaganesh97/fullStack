import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
active_class: any;
  ngOnInit() {
    let active_class="active"
  }
  scrollPointContact(contact_point:HTMLElement){
    contact_point.scrollIntoView({behavior: "smooth"});
  }
}
