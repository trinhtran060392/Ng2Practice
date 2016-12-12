import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private router : Router) {
  }

	user: User = {
	  email: '',
	  password: ''
	};

	login() {
    this.router.navigate(['/dashboard']);
  }
}
