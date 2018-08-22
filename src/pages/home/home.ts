import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, AlertController } from 'ionic-angular/';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
// import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { NativeAudio } from '../../../node_modules/@ionic-native/native-audio';

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
  displayStory: any;
  storyImage: any;
  messageText: string;
  messages: Array<any>;
  isGuest: boolean;

  // socket: SocketIOClient.Socket;

  constructor(public platform: Platform, private http: Http, public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, auth: GlobalAuthProvider, public nativeAudio: NativeAudio, private alertCtrl: AlertController) {
    // this.socket = io.connect('http://178.128.50.224:3001');
    // console.log("socket conencted");
    this.isGuest = auth.getGuestLogin();
  }

  ngOnInit() {
    this.getNews();
    // this.messages = new Array();
    // console.log("INITIATED");
    // this.socket.on('message-received', (msg: any) => {
    //   this.messages.push(msg);
    //   console.log(msg);
    //   console.log(this.messages);
    // });
    //emit to server
    // this.socket.emit('chat message', {
    //   msg: 'Client to server, can you hear me server?'
    // });

    // this.socket.on('Game2', (data: any) => {
      // console.log(JSON.parse(data));
      // var receivedData= JSON.parse(data);
      // console.log("Received data type  "  + receivedData.type);
      // if (receivedData.type!="busted"){
        // console.log("Received data type  "  + receivedData.number);
      }
      // this.socket.emit('event3', {
      //   msg: 'Yes, its working for me!!'
      // });
  //   });

  //   this.socket.on('Game3', (data: any) => {
  //     console.log(data.msg);
  //   });
  // }

  // sendMessage() {
  //   const message = {
  //     text: this.messageText
  //   };
  //   this.socket.emit('send-message', message);
    // console.log(message.text);
  //   this.messageText = '';
  // }

  // uncomment for mobile load sound
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.loop('bgmLoopHome');
      });
    });
  }

  getNews() {
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
  showAbout() {
    let alert = this.alertCtrl.create({
      title: 'About BGM',
      subTitle: 'Blockchain Gaming Master v1.0.0',
      buttons: ['OK']
    });

    alert.present();
  }

  showContact() {
    let alert = this.alertCtrl.create({
      title: 'Contact us',
      subTitle: 'www.bgm.com/help',
      buttons: ['OK']
    });

    alert.present();
  }

  logout() {
    console.log("logout is working fine");
    // console.log("rootnav = " +this.appCtrl.getRootNav());
    this.appCtrl.getRootNav().setRoot(LoginPage);

  }
}
