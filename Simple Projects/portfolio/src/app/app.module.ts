import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes,RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
const appRoutes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'users', component: IntroComponent},
  {path:'servers', component: ExperienceComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
