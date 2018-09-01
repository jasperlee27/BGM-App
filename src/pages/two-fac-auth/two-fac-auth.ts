import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { timer } from '../../../node_modules/rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';
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
  codeInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: GlobalAuthProvider, private dataProvider: DataProvider, public alertCtrl: AlertController) {
    this.isRequestHidden=false;
    this.isRequestEnabled=true;
    this.isTimerHidden=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoFacAuthPage');
  }
  requestedSMS(){

    this.dataProvider.postSMSreq(this.auth.getAccId()).subscribe(data => {
      if (parseInt(data.status) === 200) {
        console.log("SMS sent " + data.message);
        this.isRequestEnabled=false;
        this.startCountdownTimer(30);
        // let alert = this.alertCtrl.create({
        //   title: 'SUCCESS',
        //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
        //   buttons: ['OK']
        // });
        // alert.present();
        // alert.onDidDismiss(() => {
        // })
      }
    },
      err => {
        console.log("Error occured while triggering SMS request");
        console.log(err.message);

        if (err.status === 0) {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Server cannot be reached at this time. <br> Please try again later',
            buttons: ['OK']
          });

          alert.present();
          console.log("Hit Error 0");
        }
        else {

          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.error.message,
            buttons: ['OK']
          });
          alert.present();
          alert.onDidDismiss(() => {
          })
        }
      }
    );
  }

  verify2FA(){
    console.log("Posted with codeInput = " + this.codeInput);
    this.dataProvider.postLogin2FA(this.auth.getAccId(), this.codeInput).subscribe(data => {

      if (parseInt(data.status) === 200) {
        this.auth.setGuestLogin(false);
        this.navCtrl.setRoot(TabsPage);
        this.auth.setAccValue(data.accountValue);
        console.log("Set acc balance as  " + this.auth.getAccValue());
        this.auth.setSessionToken(data.token);
        console.log("session Token set as " + this.auth.getSessionToken());
        // let alert = this.alertCtrl.create({
        //   title: 'SUCCESS',
        //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
        //   buttons: ['OK']
        // });
        // alert.present();
        // alert.onDidDismiss(() => {
        // })
      }
    },
      err => {
        console.log("Error occured while logging in w 2FA");
        console.log(err.message);

        if (err.status === 0) {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Server cannot be reached at this time. <br> Please try again later',
            buttons: ['OK']
          });

          alert.present();
          console.log("Hit Error 0");
        }
        else {

          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.error.message,
            buttons: ['OK']
          });
          alert.present();
          alert.onDidDismiss(() => {
          })
        }
      }
    );
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
