import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service'
import { User } from './user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})

export class LoginComponent {

  constructor(private router : Router, private service: AuthenticationService) {
  }

  ngOnInit() {
    this.service.checkCredentials();
  }

  checkCredentials = this.service.isAuthenticated();

	user: User = {
	  email: '',
	  password: ''
	};

	login() {
    if (!this.service.login(this.user)) {
    } else this.router.navigate(['/dashboard']);
  }
}
