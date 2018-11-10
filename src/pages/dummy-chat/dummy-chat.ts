import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { Observable } from '../../../node_modules/rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-dummy-chat',
  templateUrl: 'dummy-chat.html',
})
export class DummyChatPage {
  socket: SocketIOClient.Socket;
  messages: Array<any>;
  username: string;
  message;
  private toolbarFooterColor: string
  @ViewChild('content') content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: GlobalAuthProvider) {
    this.username = this.auth.getUsername();
    this.toolbarFooterColor = 'dark';
    this.socket = io.connect('http://178.128.50.224:3006');


    this.messages = new Array();
  }

  ionViewWillEnter() {
    if (this.content._scroll) this.content.scrollToBottom(0);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
  ionViewDidLoad() {
  }

  ngOnInit() {
    // var username = this.auth.getUsername();
    //CODE FOR SOCKET//

    this.socket.on('chat message', (msg: any) => {
      var msgToPush = JSON.parse(msg);
      this.messages.push(msgToPush);
      this.scrollToBottom();
      // console.log("Original msg: " + msg);
      // console.log("parsed msg username: " + msgToPush.username);
      // console.log("parsed msg msg: " + msgToPush.msg);
      // console.log(this.messages);
    });

    //emit to server
    if (this.username !== "guest") {
      var objToSend = { username: this.username, msg: "connected#123" };
      var jsonToSend = JSON.stringify(objToSend);
      this.socket.emit('chat message', jsonToSend);
    }

    setTimeout(() => {
      this.content.scrollToBottom(300);//300ms animation speed
    });
  }

  sendMessage() {
    var objToSend = { username: this.username, msg: this.message };
    var jsonToSend = JSON.stringify(objToSend);
    this.socket.emit('chat message', jsonToSend);
    this.message = '';
  }


}
