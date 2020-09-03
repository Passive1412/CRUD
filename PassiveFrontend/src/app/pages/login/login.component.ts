import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { SocialAuthService, SocialUser } from "angularx-social-login";
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider,
//   AmazonLoginProvider,
// } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // user = SocialUser
  busy = false;
  username = '';
  password = '';
  loginError = false;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) // private authServiceSocial: SocialAuthService
  {}

  ngOnInit(): void {
    // this.authServiceSocial.authState.subscribe((user) => {
    //   this.user = user;
    // });
    this.subscription = this.authService.user$.subscribe((x) => {
      if (this.route.snapshot.url[0].path === 'login') {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        if (x && accessToken && refreshToken) {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigate([returnUrl]);
        }
      }
    });
  }

  login() {
    if (!this.username || !this.password) {
      return;
    }
    this.busy = true;
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.authService
      .login(this.username, this.password)
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(
        () => {
          this.router.navigate([returnUrl]);
        },
        () => {
          this.loginError = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // signInWithGoogle(): void {
  //   this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signInWithAmazon(): void {
  //   this.authServiceSocial.signIn(AmazonLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authServiceSocial.signOut();
  // }
}
