import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
// import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
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
  socket: SocketIOClient.Socket;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    // this.socket = io.connect('http://localhost:3000');
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
    // this.socket.emit('chat message', {
    //   msg: 'Client to server, can you hear me server?'
    // });
    // this.socket.on('event2', (data: any) => {
    //   console.log(data);
    //   this.socket.emit('event3', {
    //     msg: 'Yes, its working for me!!'
    //   });
    // });
    // this.socket.on('event4', (data: any) => {
    //   console.log(data.msg);
    // });
  }

  // sendMessage() {
  //   const message = {
  //     text: this.messageText
  //   };
  //   this.socket.emit('send-message', message);
  //   // console.log(message.text);
  //   this.messageText = '';
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getNews() {
    console.log("button is working fine");
    let path = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=bc62663fa4ac4c369f426682110037c2';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

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
  logout() {
    console.log("logout is working fine");
    // console.log("rootnav = " +this.appCtrl.getRootNav());

    this.appCtrl.getRootNav().setRoot(LoginPage);
    //to fix logout
    // this.navCtrl.pop();
    // this.navCtrl.popToRoot();
    // this.navCtrl.last()
    // this.navCtrl.setRoot(LoginPage).then(res => {
    // if success push the first page in line
    // this.navCtrl.push(LoginPage);
    // });
    // this.navCtrl.setRoot(LoginPage);
  }
}
