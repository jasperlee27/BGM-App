import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

/**
 * Generated class for the NewModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-modal',
  templateUrl: 'new-modal.html',
})
export class NewModalPage {
  createdCode;
  qrData = null;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private auth: GlobalAuthProvider) {

  }

  ngOnInit() {
    this.createCode();
  }

  createCode() {
    console.log("Creating Code");
    this.createdCode = "http://" + "178.128.50.224:3000/qr/" + this.auth.getRefID();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}