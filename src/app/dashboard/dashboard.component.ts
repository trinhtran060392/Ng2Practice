import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [AuthenticationService]
})

export class DashboardComponent {

  constructor(private service : AuthenticationService) {

  }

  ngOnInit() {
    this.service.checkCredentials();
  }
}
