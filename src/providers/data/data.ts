import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

const trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
const loginUrl = 'http://178.128.50.224:3000/login/';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  //login
  postLogin(username, password): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("username", username).set("password", password);
    return this.http.post(loginUrl, requestBody, httpHeader);
  }

  // POST Request
  postTrehuntStatus(): Observable<any> {
    return this.http.post(trehuntStatusURL, {
    });
  }
}
