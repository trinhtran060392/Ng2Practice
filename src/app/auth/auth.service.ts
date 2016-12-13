import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user';

@Injectable()
export class AuthenticationService {

  constructor(private _router: Router, private http: Http){}

  api = 'http://localhost:3000';
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
  }

  login(user): Observable<any> {

    return this.http.post(this.api+'/api/v1/users/login', user).map(res => res || {}).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  checkCredentials( ){
    if (!localStorage.getItem("user")){
      this._router.navigate(['/']);
    } else {
      this._router.navigate(["/dashboard"]);
    }
  } 
  isAuthenticated() {
    if (localStorage.getItem("user")) return true;
    else return false;
  }

  setCookie(token: string) {
    localStorage.setItem("user", token);
  }
}
