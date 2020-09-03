import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LogoutComponent } from './pages/logout/logout.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },

  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Gallery', component: GalleryComponent },

  { path: 'Projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'Profile', component: ProfileComponent },

  { path: 'Register', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LogoutComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
