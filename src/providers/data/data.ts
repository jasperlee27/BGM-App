import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { GlobalAuthProvider } from '../global-auth/global-auth';
import { RequestOptions } from '../../../node_modules/@angular/http';

const serverHealthURL = 'http://178.128.50.224:3000';
const loginUrl = 'http://178.128.50.224:3000/login/';
const login2FAUrl = 'http://178.128.50.224:3000/account/login2fa';
const toggle2FAUrl = 'http://178.128.50.224:3000/account/toggle2FA';
const aIncentiveURL = 'http://178.128.50.224:3000/account/incentiveA';
const mIncentiveURL = 'http://178.128.50.224:3000/account/incentiveM';

const pastTransactionsURL = 'http://178.128.50.224:3000/account/getPastTransactions'
const trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
const trehuntWinnerURL = 'http://178.128.50.224:3000/game1/getWinner';
const trehuntBuyURL = 'http://178.128.50.224:3000/game1/placeBets';
const hashManualBetURL = 'http://178.128.50.224:3000/game2/placeBets';
const hashManualCoutURL = 'http://178.128.50.224:3000/game2/cashOut';
const binaryOptionBetURL = 'http://178.128.50.224:3000/game3/placeBets';
const binaryOptionPastGameURL = 'http://178.128.50.224:3000/game3/getGame3PastGame';

//WALLET
const walletAmountURL = 'http://178.128.50.224:3000/account/updatewalletamount';
// const depositWalletURL = 'http://178.128.50.224:3000/account/deposit'; old
const getWalletReqURL = 'http://178.128.50.224:3000/account/getPastWithDepTransactions';
// const withdrawWalletURL = 'http://178.128.50.224:3000/account/withdraw'; old 
const reqWithdrawalURL = 'http://178.128.50.224:3000/account/requestWithdrawal' //new
const reqDepositURL = 'http://178.128.50.224:3000/account/requestDeposit' //new


const reqSMSURL = 'http://178.128.50.224:3000/requestSms';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient, private auth: GlobalAuthProvider) {
  }
  //get server health for guest view
  getServerHealth(): Observable<any> {
    return this.http.get(serverHealthURL);
  }

  postAIncentive(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }) };
    // const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(aIncentiveURL, requestBody, httpHeader);
  }

  postMIncentive(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }) };
    // const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(mIncentiveURL, requestBody, httpHeader);
  }

  //login WITHOUT 2FA
  postLogin(username, password): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("username", username).set("password", password);
    return this.http.post(loginUrl, requestBody, httpHeader);
  }

  //login WITH 2FA
  postLogin2FA(accid, codeNo): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid).set("codeNo", codeNo);
    return this.http.post(login2FAUrl, requestBody, httpHeader);
  }

  //request SMS
  postSMSreq(accid): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(reqSMSURL, requestBody, httpHeader);
  }

  //toggle 2FA
  postToggle2FA(accid, codeNo): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid).set("codeNo", codeNo);
    return this.http.post(toggle2FAUrl, requestBody, httpHeader);
  }
  //get past transactions
  postPastTransactions(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(pastTransactionsURL, requestBody, httpHeader);
  }

  // get game1 curr status
  postTrehuntStatus(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(trehuntStatusURL, requestBody, httpHeader);
  }

  postTrehuntGameWinner(accid, gameType): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid).set("gameType", gameType);
    return this.http.post(trehuntWinnerURL, requestBody, httpHeader);
  }

  //status 0 will be no draw, 1 will be draw
  //buy game 1 tickets
  postBuyGame1(accid, gameId, amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount", amount);
    return this.http.post(trehuntBuyURL, requestBody, httpHeader);
  }

  //manual bet for game 2
  postBetGame2(accid, gameId, amount): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId).set("amount", amount);
    return this.http.post(hashManualBetURL, requestBody, httpHeader);
  }

  //manual cashout for game 2
  postCoutGame2(accid, gameId): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("accid", accid).set("gameId", gameId);
    return this.http.post(hashManualCoutURL, requestBody, httpHeader);
  }

  //bet for game 3
  postBetGame3(amount, orderType, accid, gameId): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("amount", amount).set("orderType", orderType).set("accid", accid).set("gameId", gameId);
    return this.http.post(binaryOptionBetURL, requestBody, httpHeader);
  }

  //past game 3 bets
  postPastGame3(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(binaryOptionPastGameURL, requestBody, httpHeader);
  }

  //WALLET details
  //current wallet amount
  postWalletAmount(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(walletAmountURL, requestBody, httpHeader);
  }

  postOutstandingTopups(accid): Observable<any> {
    var sessionToken = this.auth.getSessionToken();
    // console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" })};

    var requestBody = new HttpParams().set("accid", accid);
    return this.http.post(getWalletReqURL, requestBody, httpHeader);
  }

  postReqWithdrawal(accid,amtReq,bankTypeReq,accNoReq): Observable<any>{
    var sessionToken = this.auth.getSessionToken();
    // console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" })};

    var requestBody = new HttpParams().set("accid", accid).set("amount",amtReq).set("bankType",bankTypeReq).set("bankNum",accNoReq);
    return this.http.post(reqWithdrawalURL, requestBody, httpHeader);
  }

  postReqDeposit(accid,amtReq): Observable<any>{
    var sessionToken = this.auth.getSessionToken();
    // console.log("session token posted " + sessionToken)
    const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" })};

    var requestBody = new HttpParams().set("accid", accid).set("amount",amtReq);
    return this.http.post(reqDepositURL, requestBody, httpHeader);
  }

  //deposit into game wallet
  // postDepositWallet(accid, amount): Observable<any> {
  //   var sessionToken = this.auth.getSessionToken();
  //   console.log("session token posted " + sessionToken)
  //   const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

  //   var requestBody = new HttpParams().set("accid", accid).set("amount", amount);
  //   return this.http.post(depositWalletURL, requestBody, httpHeader);
  // }

  //withdraw from game wallet
  // postWithdrawWallet(accid, amount): Observable<any> {
  //   var sessionToken = this.auth.getSessionToken();
  //   console.log("session token posted " + sessionToken)
  //   const httpHeader = { headers: new HttpHeaders({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };

  //   var requestBody = new HttpParams().set("accid", accid).set("amount", amount);
  //   return this.http.post(withdrawWalletURL, requestBody, httpHeader);
  // }


}
