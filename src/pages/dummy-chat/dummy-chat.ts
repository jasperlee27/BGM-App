import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the DummyChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: GlobalAuthProvider) {
    this.username = this.auth.getUsername();
    this.socket = io.connect('http://178.128.50.224:3006');
    console.log("socket for hashing conencted");

    this.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log("subscribed and after pushing into msgs  " + this.messages);
    });

    this.messages = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DummyChatPage');
  }

  ngOnInit() {
    // var username = this.auth.getUsername();
    //CODE FOR SOCKET//
 
    this.socket.on('chat message', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });

    //emit to server
    var objToSend = {username: this.username, msg: " test json msg message Input" };
    var jsonToSend = JSON.stringify(objToSend);
    this.socket.emit('chat message', jsonToSend);

    this.socket.on('chat message', (data: any) => {
      // console.log("Parsing JSON sent: " + JSON.parse(data));
      var receivedData = JSON.parse(data);
      console.log("JSON Username " + receivedData.username);
      console.log("JSON message " + receivedData.msg);
      console.log("Received chat message here " + data);
    });

  }

  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('chatmessage', (data) => {
        observer.next(data);
        console.log("in get messages " + data);
      });
    })
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

}
