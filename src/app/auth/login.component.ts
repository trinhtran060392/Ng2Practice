import { Component } from '@angular/core';

import { User } from './user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

	user: User = {
	  email: '',
	  password: 'Windstorm'
	};
}
