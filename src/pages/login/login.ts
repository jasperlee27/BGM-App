import { Component, trigger, state, style, transition, animate, keyframes, Renderer2 } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular/';
import { BiddingPage } from '../bidding/bidding';
import { RoulettePage } from '../roulette/roulette';
import { MyApp } from '../../app/app.component';
import { TwoFacAuthPage } from '../two-fac-auth/two-fac-auth';
import { TabsPage } from '../tabs/tabs';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { NativeAudio } from '../../../node_modules/@ionic-native/native-audio';
import { DataProvider } from '../../providers/data/data';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { InAppBrowser } from '../../../node_modules/@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
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
        style({ opacity: 0 }),
        animate('1000ms 2000ms ease-in')
      ])
    ]),

    //for log in form
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
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
        style({ opacity: 0 }),
        animate('1000ms 4500ms ease-in')
      ])
    ])
  ]
})

export class LoginPage {
  biddingPage = BiddingPage;
  roulettePage = RoulettePage;
  twoFApage = TwoFacAuthPage;
  enteredPassword;
  passwordType: string = 'password';
  passwordIcon: string = 'eye';
  loginState: any = "in";
  usernameInput: string = 'Eric1';
  passwordInput: string = 'eric1';
  receivedData;
  showInvalidLogin: boolean = false;

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform, public navCtrl: NavController, public smartAudio: SmartAudioProvider, public auth: GlobalAuthProvider, private dataProvider: DataProvider, private nativeAudio: NativeAudio, private alertCtrl: AlertController, public inAppBrowser: InAppBrowser) {
  }
  // NOT WORKING
  // ionViewDidLoad() {
  //   this.platform.ready().then(() => {
  //     this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {
  //       this.nativeAudio.loop('bgmLoopHome');
  //     });
  //   });
  // }

  login() {
    // this.smartAudio.play('startGame3');
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.smartAudio.play('tabSwitch'); // this.navCtrl.setRoot(TabsPage);
    var usernameToPost = this.usernameInput;
    this.showInvalidLogin = false;

    if (usernameToPost != null) {
      this.auth.setUsername(usernameToPost.toLowerCase());
      usernameToPost = usernameToPost.toLowerCase();
    }

    this.dataProvider.postLogin(usernameToPost, this.passwordInput).subscribe(data => {
      //receive successfully
      this.showInvalidLogin = false;
      this.receivedData = data;  // pass the response from HTTP Request into local variable receivedData
      //parse response from server

      this.auth.setAccId(this.receivedData._id);
      this.auth.set2FAStatus(parseInt(this.receivedData.require2FA));
    
      //set account info only if successful login i.e do not req 2FA [0,2]
      if (this.auth.get2FAStatus() !== 1) {
        this.auth.setGuestLogin(false);
        this.auth.setAccValue(this.receivedData.accountValue);
        this.auth.setAccType(this.receivedData.accType);
        this.auth.setSessionToken(this.receivedData.token);
        this.auth.setRefID(this.receivedData.referralId);
        this.navCtrl.setRoot(TabsPage);
      }

      //else nav to 2 FA page when status == 1..
      else {
        this.navCtrl.push(this.twoFApage);
      }

    },
      err => {
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
          console.log("Error occured while logging in or not authorized");
          this.showInvalidLogin = true;
        }

        console.log(err);
      });

    // this.navCtrl.setRoot(TabsPage);
  }

  viewAsGuest() {

    this.dataProvider.getServerHealth().subscribe(data => {
      if (data.message !== '') {
        this.auth.setAccId("guest");
        this.auth.setUsername("guest");
        this.auth.setGuestLogin(true);
        this.navCtrl.setRoot(TabsPage);
        this.auth.setSessionToken("");
        this.auth.setAccValue(0);
      }
    }, (err: HttpErrorResponse) => {
      console.log("Error logged " + err);

      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Server cannot be reached at this time. <br> Please try again later',
          buttons: ['OK']
        });

        alert.present();
        console.log("Server-side error occured.");
      }
    });

  }

  showHide(): any {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }

  createAccount() {
    const browser = this.inAppBrowser.create('http://ortustenoris.io/signup', '_system');

  }
}
