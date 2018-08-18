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
  private accId: string;

  constructor() {
    console.log('Hello GlobalAuthProvider Provider');
  }

  setAccId(accId: string){
    this.accId=accId;
  }

  getAccId(){
    return this.accId;
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
