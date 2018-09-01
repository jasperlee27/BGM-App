import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { timer } from '../../../node_modules/rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

/**
 * Generated class for the ToggleTwoFaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toggle-two-fa',
  templateUrl: 'toggle-two-fa.html',
})
export class ToggleTwoFaPage {

  
  isRequestHidden: boolean;
  isRequestEnabled: boolean;
  isTimerHidden: boolean;
  isOutline: boolean;
  countDown;
  count = 30.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: GlobalAuthProvider) {
    this.isRequestHidden=false;
    this.isRequestEnabled=true;
    this.isTimerHidden=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoFacAuthPage');
  }
  requestedSMS(){
    this.isRequestEnabled=false;
    this.startCountdownTimer(30);
  }

  verify2FA(){
    //do post here and on success present alert on dismiss navigate back to home page
    //toggle global var
    if (this.auth.get2FAStatus()===1){
      this.auth.set2FAStatus(0);
    }

    else{
      this.auth.set2FAStatus(1);
    }

    this.navCtrl.setRoot(TabsPage);
  }
  
  async startCountdownTimer(secondsToCount: number){
    this.isTimerHidden = false;
    this.count = secondsToCount;
    var noOfCounts = (this.count*10)
    
    //for 0.1s countdown
    // this.countDown = timer(0,100).pipe(
    //   take(noOfCounts),
    //   map(()=> (this.count -= 0.1).toFixed(1))
    // );
    //for 1s countdown
    this.countDown = timer(0,1000).pipe(
      take(noOfCounts),
      map(()=> (this.count -= 1))
    );

    await this.delay((secondsToCount-1)*1000);
    this.resetCountdown();
  }

  resetCountdown(){
    this.isRequestEnabled=true;
    this.isTimerHidden=true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}