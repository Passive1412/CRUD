import { Component } from '@angular/core';

import { AccountService } from './core/services';
import { Account, Role } from './core/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PassiveFrontend';
  
  Role = Role;
  account: Account;

  constructor(private accountService: AccountService) {
      this.accountService.account.subscribe(x => this.account = x);
  }

  logout() {
      this.accountService.logout();
  }
}