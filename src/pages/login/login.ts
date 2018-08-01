import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/';
import { BiddingPage } from '../bidding/bidding';
import { RoulettePage } from '../roulette/roulette';
import { MyApp } from '../../app/app.component';
import { TwoFacAuthPage } from '../two-fac-auth/two-fac-auth';
// import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  biddingPage = BiddingPage;
  roulettePage = RoulettePage;
  twoFApage= TwoFacAuthPage;
  enteredPassword;
  passwordType: string = 'password';
  passwordIcon: string = 'eye';

  constructor(public navCtrl: NavController) {
    // this.app.getRootNav().setRoot(this.biddingPage);
    // app.setScrollDisabled(true);
    // this.navCtrl.setRoot(TabsPage);
  }
  login(){
    // this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(this.twoFApage);
    // this.navCtrl.setRoot(TabsPage);
    console.log("login function activated");
  }

  showHide(): any {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }
}
