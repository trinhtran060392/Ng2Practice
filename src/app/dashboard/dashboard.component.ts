import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [AuthenticationService]
})

export class DashboardComponent {

  constructor(private router : Router, private service : AuthenticationService) {

  }

  ngOnInit() {
    //this.service.checkCredentials();
  }

  viewProjects() {
    this.router.navigate(["/projects"]);
  }
}
