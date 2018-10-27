import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, AlertController } from 'ionic-angular/';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
// import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { NativeAudio } from '../../../node_modules/@ionic-native/native-audio';
import { ToggleTwoFaPage } from '../toggle-two-fa/toggle-two-fa';
import { TwoFacAuthPage } from '../two-fac-auth/two-fac-auth';
import { QrCodePage } from '../qr-code/qr-code';
import { NewModalPage } from '../new-modal/new-modal';
import { CommTreePage } from '../comm-tree/comm-tree';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
// import { MyApp } from '../../app/app.component';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  commTreePage = CommTreePage;
  twoFApage = TwoFacAuthPage;
  toggleTwoFApage = ToggleTwoFaPage;
  qrPage = QrCodePage;
  displayStory: any;
  storyImage: any;
  messageText: string;
  messages: Array<any>;
  isGuest: boolean;
  initTwoFAstatus: boolean;
  twoFAstatus: boolean;
  isToggled;
  createdCode = "https://" + "www.google.com";
  isCordova;
  isAndroid;
  isIOS;
  // socket: SocketIOClient.Socket;

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform, private http: Http, public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, private auth: GlobalAuthProvider, public nativeAudio: NativeAudio, private alertCtrl: AlertController, public modalCtrl: ModalController) {
    // this.socket = io.connect('http://178.128.50.224:3001');
    // console.log("socket conencted");
    this.isGuest = auth.getGuestLogin();
  }

  ngOnInit() {
    this.getNews();
  }

  ionViewWillEnter() {
    //if 0 then no 2FA needed
    if (this.auth.get2FAStatus() === 0) {
      // this.initTwoFAstatus = false;
      this.twoFAstatus = false;
    }

    //else [1/2], 2FA needed is true
    else {
      // this.initTwoFAstatus = true;
      this.twoFAstatus = true;
    }
  }
  //bgm loop works in home view and portrait orientation, uncomment for mobile sound
  // ionViewDidLoad() {
  //   this.isCordova = this.platform.is("cordova");
  //   this.isAndroid = this.platform.is("android");
  //   this.isIOS = this.platform.is("ios");
  //   console.log("value of cordova " + this.isCordova + " value  of android is " + this.isAndroid + " value of ios is " + this.isIOS);
  //   if (this.isAndroid) {
  //     console.log("android screen should be locked to prtrait");
  //     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  //   }
  //   else if (this.isIOS) {
  //     console.log("ios screen should be locked to prtrait");
  //     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  //   }

  //   this.platform.ready().then(() => {
  //     this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {
  //       this.nativeAudio.setVolumeForComplexAsset('bgmLoopHome', 0.5);
  //       this.nativeAudio.loop('bgmLoopHome');
  //     });
  //   });
  // }
  //NEWS API
  getNews_Old() {
    console.log("button is working fine");
    let path = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=bc62663fa4ac4c369f426682110037c2';
    let encodedPath = encodeURI(path);
    let timeoutMS = 100000;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        console.log(responseData);
        this.displayStory = responseData.articles[0].description;
        this.storyImage = responseData.articles[0].urlToImage;
      },
        err => {
          console.log('error in getting news');
        });

  }

  getNews() {
    console.log("button is working fine");
    // let imgPath = 'http://178.128.50.224:3000/getNews';
    // let encodedImgPath = encodeURI(imgPath);
    let timeoutMS = 100000;
    this.storyImage = 'http://178.128.50.224:3000/getNews'
    // this.http.get(encodedImgPath)
    //   .timeout(timeoutMS)
    //   .map(res => res.json()).subscribe(data => {
    //     let responseData = data;
    //     console.log(responseData);
    //     this.storyImage = responseData;
    //   },
    //     err => {
    //       console.log('error in getting news');
    //     });

    let textPath = 'http://178.128.50.224:3000/getNewsText';
    let encodedTextPath = encodeURI(textPath);
    this.http.get(encodedTextPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        console.log(responseData.message);
        this.displayStory = responseData.message;
      },
        err => {
          console.log('error in getting news');
        });
  }

  showAbout() {
    let alert = this.alertCtrl.create({
      title: 'About OT',
      subTitle: 'Ortus Tenoris v1.0.0',
      buttons: ['OK']
    });

    alert.present();
  }

  showContact() {
    let alert = this.alertCtrl.create({
      title: 'Contact us',
      subTitle: 'Please send us a mail at <a href="mailto:contact@ortustenoris.io?" target="_top">contact@ortustenoris.io</a>',
      buttons: ['OK']
    });

    alert.present();
  }

  showQRcode() {
    //to do alert
    // this.navCtrl.push(this.qrPage);

    let qrModal = this.modalCtrl.create(NewModalPage);
    // qrModal.onDidDismiss(data => {
    //   console.log("Dismissed modal");
    // });
    qrModal.present();
  }

  showCommission() {
    console.log("Triggered comms page");
    this.navCtrl.push(this.commTreePage);
    //check if master or agent

  }

  logout() {
    console.log("logout is working fine");
    this.auth.setSessionToken("");
    console.log("Destroy session token " + this.auth.getSessionToken());
    // console.log("rootnav = " +this.appCtrl.getRootNav());
    this.appCtrl.getRootNav().setRoot(LoginPage);

  }

  toggle2FA() {
    // console.log("init 2fa status " + this.initTwoFAstatus);
    console.log("toggled 2fa " + this.twoFAstatus);
    //both turn on and off also need verify 2FA
    // if (this.twoFAstatus===true){
    // this.navCtrl.push(this.twoFApage);
    this.navCtrl.push(this.toggleTwoFApage);

    // }
  }
}
