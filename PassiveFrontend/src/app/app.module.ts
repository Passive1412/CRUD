import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavigationComponent } from './front/navigation/navigation.component';
import { HeaderComponent } from './front/header/header.component';
import { BannersComponent } from './front/banners/banners.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PlantComponent } from './core/plant/plant.component';
import { HeroMonsterComponent } from './core/hero-monster/hero-monster.component';
import { WebcamComponent } from './core/webcam/webcam.component';
import { StarcraftComponent } from './core/starcraft/starcraft.component';
import { MonsterListComponent } from './pages/projects/monster-list/monster-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    NotFoundComponent,
    NavigationComponent,
    HeaderComponent,
    BannersComponent,
    GalleryComponent,
    PlantComponent,
    HeroMonsterComponent,
    WebcamComponent,
    StarcraftComponent,
    MonsterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
