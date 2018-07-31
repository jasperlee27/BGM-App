import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BiddingPage } from '../bidding/bidding';
import { RoulettePage } from '../roulette/roulette';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  biddingPage = BiddingPage;
  roulettePage = RoulettePage
  
  constructor(public navCtrl: NavController) {
  
  }

}
