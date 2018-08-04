import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular/';
import { BiddingPage } from '../bidding/bidding';
import { RoulettePage } from '../roulette/roulette';
import { MyApp } from '../../app/app.component';
import { TwoFacAuthPage } from '../two-fac-auth/two-fac-auth';
import { TabsPage } from '../tabs/tabs';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

// import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ]),

    //for log in form
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('3500ms ease-in-out')
      ])
    ]),

    //For the [password] form
    // trigger('bounceInBottom', [
    //   state('in', style({
    //     transform: 'translate3d(0,0,0)'
    //     })),
    //     transition('void => *', [
    //       animate('3000ms 1000ms ease-in', keyframes([
    //       style({transform: 'translate3d(0,2000px,0)', offset: 0}),
    //       style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
    //       style({transform: 'translate3d(0,0,0)', offset: 1})
    //       ]))
    //     ])
    //   ]),

    trigger('loginFadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 4500ms ease-in')
      ])
    ])
  ]
})
export class LoginPage {
  biddingPage = BiddingPage;
  roulettePage = RoulettePage;
  twoFApage= TwoFacAuthPage;
  enteredPassword;
  passwordType: string = 'password';
  passwordIcon: string = 'eye';
  loginState: any = "in";

  constructor(public navCtrl: NavController, public auth:GlobalAuthProvider) {
   
  }

  login(){
    // this.navCtrl.setRoot(TabsPage);
    this.auth.setGuestLogin(false);
    this.navCtrl.push(this.twoFApage);
    // this.navCtrl.setRoot(TabsPage);
    console.log("login function activated");
  }

  viewAsGuest(){
    // this.navCtrl.setRoot(TabsPage);
    // this.navCtrl.push(this.twoFApage);
    this.auth.setGuestLogin(true);
    this.navCtrl.setRoot(TabsPage);
    console.log("view as guest only");
  }

  showHide(): any {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }
}
