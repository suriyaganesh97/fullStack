import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isActive:String | undefined;
  isCollapsed = false;
  ngOnInit() {
    this.isActive='home';
    
  }
  scrollPointAbout(about_point:HTMLElement){
    about_point.scrollIntoView({behavior: "smooth"});
    this.isActive='about'
  }
  scrollPointExperience(experience_point:HTMLElement){
    experience_point.scrollIntoView({behavior: "smooth"});
    this.isActive='experience'
  }
  scrollPointProjects(projects_point:HTMLElement){
    projects_point.scrollIntoView({behavior: "smooth"});
    this.isActive='projects'
  }
  scrollPointSkills(skills_point:HTMLElement){
    skills_point.scrollIntoView({behavior: "smooth"});
    this.isActive='skills'
  }
  scrollPointEducation(education_point:HTMLElement){
    education_point.scrollIntoView({behavior: "smooth"});
    this.isActive='education'
  }
  scrollPointHobbies(hobbies_point:HTMLElement){
    hobbies_point.scrollIntoView({behavior: "smooth"});
    this.isActive='hobbies'
  }
  
  scrollPointContact(contact_point:HTMLElement){
    contact_point.scrollIntoView({behavior: "smooth"});
    this.isActive='contact'
  }
}
