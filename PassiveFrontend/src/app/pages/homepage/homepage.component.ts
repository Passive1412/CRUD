import { Component } from '@angular/core';

import { AccountService } from '../../core/services';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }
}
