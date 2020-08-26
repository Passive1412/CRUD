import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { WebcamComponent } from './webcam/webcam.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PlantTimelineComponent } from './projects/projects/plant-timeline/plant-timeline.component';
import { MonsterGridComponent } from './projects/projects/monster-grid/monster-grid.component';
import { PythonGameComponent } from './projects/projects/python-game/python-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    WebcamComponent,
    ProjectsComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ProfileComponent,
    PlantTimelineComponent,
    MonsterGridComponent,
    PythonGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
