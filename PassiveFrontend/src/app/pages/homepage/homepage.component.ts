import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  accessToken = '';
  refreshToken = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('access_token');
    this.refreshToken = localStorage.getItem('refresh_token');
  }

  logout() {
    this.authService.logout();
  }

}
