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
  bidName1: string; 
  bidValue1: number;

  bidName2: string;
  bidValue2: number; 

  bidName3: string; 
  bidValue3: number; 

  bidName4: string; 
  bidValue4: number; 

  bidName5: string; 
  bidValue5: number; 


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //can init with call post service leader board
    this.bidName1 = 'Jasper';
    this.bidValue1 = 4510;
    this.bidName2 = 'KerkWY';
    this.bidValue2 = 4459;
    this.bidName3 = 'Eric';
    this.bidValue3 = 4427;
    this.bidName4 = 'John';
    this.bidValue4 = 4322;
    this.bidName5 = 'Jom';
    this.bidValue5 = 4239;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingPage');
  }

}
