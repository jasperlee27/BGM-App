import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalAuthProvider {
  public isGuest: boolean = true;
  public isAuthenticated: boolean = false;
  private username: string;
  private accId: string;
  private accValue: number;
  private sessionToken: string;
  private twoFAstatus: number;
  private refID: string;
  constructor() {
    console.log('Hello GlobalAuthProvider Provider');
  }
  
  setUsername(username: string){
    this.username=username;
  }

  get2FAStatus(){
    return this.twoFAstatus;
  }

  set2FAStatus(twoFAstatus: number){
    this.twoFAstatus=twoFAstatus;
  }

  getUsername(){
    return this.username;
  }

  setAccId(accId: string){
    this.accId=accId;
  }

  getAccId(){
    return this.accId;
  }

  setSessionToken(sessionToken: string){
    this.sessionToken=sessionToken;
  }

  getSessionToken(){
    return this.sessionToken;
  }

  setAccValue(currValue){
    this.accValue = currValue;
  }

  getAccValue(){
    return parseInt(this.accValue.toFixed(2));
  }

  addAccValue(amount){
    this.accValue += parseFloat(amount);
  }

  setRefID(refId){
    this.refID = refId;
  }

  getRefID(){
    return this.refID;
  }

  setGuestLogin(control: boolean){
    this.isGuest=control;
  }

  getGuestLogin(){
    return this.isGuest;
  }

  setIsAuth(control: boolean){
    this.isAuthenticated=control;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }
}
