import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BiddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bidding',
  templateUrl: 'bidding.html',
})
export class BiddingPage {
  private name1;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name1 = 'Jasper'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingPage');
  }

}
