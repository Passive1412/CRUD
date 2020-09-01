import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';

@Component({
  selector: 'app-profile',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  accessToken = '';
  refreshToken = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('access_token');
    this.refreshToken = localStorage.getItem('refresh_token');
  }
}
