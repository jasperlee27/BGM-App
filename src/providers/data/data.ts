import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

const trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  
  // POST Request
  postTrehuntStatus(): Observable<any> {
    return this.http.post(trehuntStatusURL, {
    });
  }
}
