import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes,RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'intro', component: IntroComponent},
  {path:'servers', component: ExperienceComponent},
];
@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        IntroComponent,
        AboutComponent,
        ExperienceComponent,
        ProjectsComponent,
        SkillsComponent,
        EducationComponent,
        ContactComponent,
        HobbiesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        NgbModule,
        FormsModule
    ]
})
export class AppModule { }
