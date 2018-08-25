import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { GlobalAuthProvider } from '../global-auth/global-auth';
import { RequestOptions } from '../../../node_modules/@angular/http';

const loginUrl = 'http://178.128.50.224:3000/login/';
const pastTransactionsURL = 'http://178.128.50.224:3000/account/getPastTransactions'
const trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
const trehuntBuyURL = 'http://178.128.50.224:3000/game1/placeBets';
const hashManualBetURL = 'http://178.128.50.224:3000/game2/placeBets';
const hashManualCoutURL = 'http://178.128.50.224:3000/game2/cashOut';
const walletAmountURL = 'http://178.128.50.224:3000/account/updatewalletamount';
const depositWalletURL = 'http://178.128.50.224:3000/account/deposit';
const withdrawWalletURL = 'http://178.128.50.224:3000/account/withdraw';
const binaryOptionBetURL = 'http://178.128.50.224:3000/game3/placeBets';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient, private auth: GlobalAuthProvider) {
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
  //current wallet amount
  postWalletAmount(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};
    
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(walletAmountURL, requestBody, httpHeader);
  }

  //deposit into game wallet
  postDepositWallet(accid,amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};

    var requestBody = new HttpParams().set("accid", accid).set("amount", amount);
    return this.http.post(depositWalletURL, requestBody, httpHeader);
  }

  //withdraw from game wallet
  postWithdrawWallet(accid,amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};

    var requestBody = new HttpParams().set("accid", accid).set("amount", amount);
    return this.http.post(withdrawWalletURL, requestBody, httpHeader);
  }

  //get past transactions
  postPastTransactions(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(pastTransactionsURL, requestBody, httpHeader);
  }

  // get game1 curr status
  postTrehuntStatus(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(trehuntStatusURL, requestBody, httpHeader);
  }

  //buy game 1 tickets
  postBuyGame1(accid, gameId, amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};

    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount", amount);
    return this.http.post(trehuntBuyURL, requestBody, httpHeader);
  }

  //manual bet for game 2
  postBetGame2(accid, gameId, amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount", amount);
    return this.http.post(hashManualBetURL, requestBody, httpHeader);
  }

  //manual cashout for game 2
  postCoutGame2(accid, gameId): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded"}).append('x-access-token', sessionToken)};
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId);
    return this.http.post(hashManualCoutURL, requestBody, httpHeader);
  }

  postBetGame3(amount, orderType, accid): Observable<any> {
    // var sessionToken = this.auth.getSessionToken();
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("amount", amount).set("orderType", orderType).set("accid", accid);
    return this.http.post(binaryOptionBetURL, requestBody, httpHeader);
  }

}
