import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrehuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trehunt',
  templateUrl: 'trehunt.html',
})
export class TrehuntPage {
  currBTCtix;
  totalBTCtix;
  currETHtix;
  totalETHtix;
  loadBTCProgress;
  loadETHProgress;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currBTCtix=7382;
    this.totalBTCtix=8800;
    this.currETHtix=247;
    this.totalETHtix=600;
    this.loadBTCProgress= ((this.currBTCtix/this.totalBTCtix)*100).toFixed(2);
    this.loadETHProgress= ((this.currETHtix/this.totalETHtix)*100).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrehuntPage');
  }

}
