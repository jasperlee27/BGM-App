import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BiddingPage } from '../bidding/bidding';
import { RoulettePage } from '../roulette/roulette';
import { MyApp } from '../../app/app.component';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  biddingPage = BiddingPage;
  roulettePage = RoulettePage;
  
  constructor(public navCtrl: NavController) {
    // this.app.getRootNav().setRoot(this.biddingPage);
    // app.setScrollDisabled(true);
    // this.navCtrl.setRoot(TabsPage);
  }
  login(){
    // this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(this.biddingPage);
    // this.navCtrl.setRoot(TabsPage);
    console.log("login function activated");
  }
}
