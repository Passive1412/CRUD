import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebcamComponent } from './webcam/webcam.component';
import { AboutComponent } from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '*', component: HomepageComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Projects', component: ProjectsComponent },

  { path: 'Contact', component: ContactComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Login', component: LoginComponent },

  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
