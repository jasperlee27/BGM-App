import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/';
import { IonicPage } from '../../../node_modules/ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html'
})
export class RoulettePage {

  constructor(public navCtrl: NavController) {

  }
  
  
  back() {
    this.navCtrl.pop();
  }
}
