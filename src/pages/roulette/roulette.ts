import { Component } from '@angular/core';
import { NavController, SelectPopover } from 'ionic-angular/';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { AlertController } from 'ionic-angular/';
// import * as Raphael from '../../assets/js/raphael-min.js';
// import * as mersenne from '../../assets/js/mersenne-twister.js';
// import * as roulette from '../../assets/js/roulette.js';

declare function init():any;
declare function randomSpin(): any;
declare function reset(): any;
declare function refreshUi(): any;
declare var paper;
declare var winnerId;
// declare function init(): any; 
// declare function drawRouletteShadow();
// declare function drawArcs();
// declare function drawPointer();

@IonicPage()
@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html'
})
export class RoulettePage {
  disabled= false;
  walletBallance = 1000;
  betAmount;
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    // refreshUi();
    // init();
  }

  async onSpin(){
    this.disableSpinButton();
    reset();
    init();
    randomSpin();
    this.updateWalletBallance(-this.betAmount);
    await this.delay(5010);
    this.presentAlert(winnerId);
  }

  ngOnInit(){
    init();
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  enableSpinButton(){
    this.disabled= false;
  }

  disableSpinButton(){
    this.disabled= true;
  }
  
  updateWalletBallance(amount: number){
    this.walletBallance += amount;
  }

  presentAlert(winnerId) {
    let alert = this.alertCtrl.create({
      title: 'Congratualations',
      subTitle: 'You have won ' +winnerId,
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss(() => {
      this.enableSpinButton();
    })
  }

  back() {
    this.navCtrl.pop();
  }
}
