import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  createdCode;
  qrData = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: GlobalAuthProvider) {
  }
  ngOnInit(){
    this.createCode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }

  createCode(){
   console.log("Creating Code");
   this.createdCode = "http://" + "178.128.50.224:3000/qr/" + this.auth.getRefID();
  }
}
