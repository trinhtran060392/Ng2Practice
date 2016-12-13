import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

var users = [
  {
    email: 'trinh@gmail.com',
    password: '12345'
  }
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['/dashboard']);      
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (!localStorage.getItem("user")){
      this._router.navigate(['/']);
    }
  } 
  isAuthenticated() {
    if (localStorage.getItem("user")) return true;
    else return false;
  }
}
