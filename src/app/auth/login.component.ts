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

  formError : boolean = false;

  ngOnInit() {
    this.service.checkCredentials();
  }

  checkCredentials = this.service.isAuthenticated();

	user: User = {
	  email: '',
	  password: ''
	};

	login() {
    this.service.login(this.user).subscribe(res => {
      if (res.status === 201) {
        this.service.setCookie(res.json().token.token);
        this.router.navigate(["/dashboard"]);
      } else this.formError = true;
    });
  }
}
