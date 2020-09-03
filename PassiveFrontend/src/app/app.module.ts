// Core Modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Extra modules for Projects
import { AgGridModule } from 'ag-grid-angular';
import { WebcamModule } from 'ngx-webcam';


// Helper modules
import { JwtInterceptor, ErrorInterceptor } from './core/interceptors';
import { appInitializer } from './core/shared/app-initializer'
import { AccountService } from './core/services';
import { AlertComponent } from './core/components';


// Page modules
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavigationComponent } from './front/navigation/navigation.component';
import { HeaderComponent } from './front/header/header.component';
import { BannersComponent } from './front/banners/banners.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MonsterListComponent } from './pages/projects/monster-list/monster-list.component';

@NgModule({
  declarations: [
    AlertComponent,

    AppComponent,
    AlertComponent,
    HomepageComponent,

    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    NavigationComponent,
    HeaderComponent,
    BannersComponent,
    GalleryComponent,
    MonsterListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
