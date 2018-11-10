import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { TabsPage } from '../tabs/tabs';

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
  gameNo: string;

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
  walletBallance: number;
  betAmount: number;
  noPlayers: number;
  currentPoolNumber: number;
  currentPoolString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //can init with call post service leader board
    // this.navCtrl.setRoot(TabsPage);
    
    this.gameNo= '   12337';
    this.walletBallance= 1000;
    this.currentPoolNumber = 2500000;
    this.bidName1 = 'Jasper';
    this.bidValue1 = 4510;
    this.bidName2 = 'KerkWY';
    this.bidValue2 = 4459;
    this.bidName3 = 'Eric';
    this.bidValue3 = 4427;
    this.bidName4 = 'John';
    this.bidValue4 = 4322;
    this.bidName5 = 'Tom';
    this.bidValue5 = 4239;

    this.noPlayers=100;
  }

  ionViewDidLoad() {
  }

  bidGame(){
    this.updateWalletBallance(-this.betAmount);
    this.updatePoolAmount(+this.betAmount);
    this.updateNoPlayers(+1);
  }

  updateNoPlayers(amount: number){
    var targetNumber = this.noPlayers + amount;
    let interval = setInterval(()=>{
      this.noPlayers++;
      if(this.noPlayers == targetNumber) clearInterval(interval);
    },500)
  }

  updateWalletBallance(amount: number){
    this.walletBallance += amount;
  }

  updatePoolAmount(amount: number){
    var targetNumber = this.currentPoolNumber + amount;

    let interval = setInterval(()=>{
      this.currentPoolNumber++;
      if(this.currentPoolNumber == targetNumber) clearInterval(interval);
    },0.1)
    // this.currentPoolNumber += amount;
  }

  doRefresh(refresher) {

    this.updatePoolAmount(Math.round(Math.random() * 1000));
    this.updateNoPlayers(Math.round(Math.random() * 10));

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
