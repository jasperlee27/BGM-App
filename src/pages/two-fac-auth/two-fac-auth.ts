import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { timer } from '../../../node_modules/rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
/**
 * Generated class for the TwoFacAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-two-fac-auth',
  templateUrl: 'two-fac-auth.html',
})
export class TwoFacAuthPage {
 
  isRequestHidden: boolean;
  isRequestEnabled: boolean;
  isTimerHidden: boolean;
  isOutline: boolean;
  countDown;
  count = 30.0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.navCtrl.setRoot(TabsPage);
  }
  
  async startCountdownTimer(secondsToCount: number){
    this.isTimerHidden = false;
    this.count = secondsToCount;
    var noOfCounts = (this.count*10)
    
    this.countDown = timer(0,100).pipe(
      take(noOfCounts),
      map(()=> (this.count -= 0.1).toFixed(1))
    );
    await this.delay((this.count*1000)+400);
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
