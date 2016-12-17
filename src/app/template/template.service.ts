import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Location } from '@angular/common';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TemplateService {

  constructor(private _router: Router, private http: Http, private location : Location){}

  api = 'http://localhost:3000';


  getProjects(token: any): Observable<any[]> {
    let headers = new Headers({ 'Content-Type': 'application/json', "X-Skyrec-Access-Token" : token  });
    let options = new RequestOptions({ headers : headers});
    return this.http.get(this.api+'/api/v1/projects', options).map(res => res || {}).catch(this.handleError);
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
}
