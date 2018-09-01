import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { timer } from '../../../node_modules/rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../home/home';

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

  @ViewChild(Navbar) navBar: Navbar;

  isRequestHidden: boolean;
  isRequestEnabled: boolean;
  isTimerHidden: boolean;
  isOutline: boolean;
  countDown;
  count = 30.0;
  codeInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: GlobalAuthProvider, private dataProvider: DataProvider, public alertCtrl: AlertController) {
    this.isRequestHidden = false;
    this.isRequestEnabled = true;
    this.isTimerHidden = true;
  }

  ionViewDidLoad() {
    console.log("LAST VIEW " + this.navCtrl.last());
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Overriding navbar success");
      this.navCtrl.setRoot(TabsPage);
    }
    console.log('ionViewDidLoad TwoFacAuthPage');
    for (let i = 0; i < this.navCtrl.length(); i++) {
      let v = this.navCtrl.getViews()[i];
      console.log(v.component.name);

    }
  }
  requestedSMS() {

    this.dataProvider.postSMSreq(this.auth.getAccId()).subscribe(data => {
      if (parseInt(data.status) === 200) {
        console.log("SMS sent " + data.message);
        this.isRequestEnabled = false;
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

  toggle2FA() {
    //do post here and on success present alert on dismiss navigate back to home page
    //toggle global var
    console.log("Posted with codeInput = " + this.codeInput);
    this.dataProvider.postToggle2FA(this.auth.getAccId(), this.codeInput).subscribe(data => {

      if (parseInt(data.status) === 200) {

        this.navCtrl.setRoot(TabsPage);
        this.auth.set2FAStatus(parseInt(data.require2FA));
        console.log("Set 2FA status as " + this.auth.get2FAStatus());
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
        console.log("Error occured while toggling 2FA");
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
    // else {
    //   this.auth.set2FAStatus(1);
    // }
  }

  async startCountdownTimer(secondsToCount: number) {
    this.isTimerHidden = false;
    this.count = secondsToCount;
    var noOfCounts = (this.count * 10)

    //for 0.1s countdown
    // this.countDown = timer(0,100).pipe(
    //   take(noOfCounts),
    //   map(()=> (this.count -= 0.1).toFixed(1))
    // );
    //for 1s countdown
    this.countDown = timer(0, 1000).pipe(
      take(noOfCounts),
      map(() => (this.count -= 1))
    );

    await this.delay((secondsToCount - 1) * 1000);
    this.resetCountdown();
  }

  resetCountdown() {
    this.isRequestEnabled = true;
    this.isTimerHidden = true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
