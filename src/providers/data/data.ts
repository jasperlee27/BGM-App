import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

const loginUrl = 'http://178.128.50.224:3000/login/';
const trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
const trehuntBuyURL = 'http://178.128.50.224:3000/game1/placeBets';
const hashManualBetURL = 'http://178.128.50.224:3000/game2/placeBets';
const hashManualCoutURL = 'http://178.128.50.224:3000/game2/cashOut';
const walletAmountURL = 'http://178.128.50.224:3000/account/updatewalletamount';

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

  postWalletAmount(accid): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(walletAmountURL, requestBody, httpHeader);
  }

  // get game1 curr status
  postTrehuntStatus(accid): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(trehuntStatusURL, requestBody, httpHeader);
  }

  //buy game 1 tickets
  postBuyGame1(accid, gameId, amount): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount",amount);
    return this.http.post(trehuntBuyURL, requestBody, httpHeader);
  }


  postBetGame2(accid, gameId, amount): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount",amount);
    return this.http.post(hashManualBetURL, requestBody, httpHeader);
  }

  postCoutGame2(accid, gameId): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId);
    return this.http.post(hashManualCoutURL, requestBody, httpHeader);
  }
}
