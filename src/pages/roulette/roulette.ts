import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/';
import { IonicPage } from '../../../node_modules/ionic-angular/navigation/ionic-page';
import * as Raphael from '../../assets/js/raphael-min.js';
import * as mersenne from '../../assets/js/mersenne-twister.js';
import * as roulette from '../../assets/js/roulette.js';

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

  constructor(public navCtrl: NavController) {
    refreshUi();
    // paper = Raphael("holder");
    init();
  }
  onSpin(){
    reset();
    init();
    randomSpin();
    console.log ("My winner ID is " + winnerId);
  }

  // loadScript () { 
  //   var script = document.createElement('script'); 
  //   script.type = 'text/javascript'; script.src = '../build/js/roulette.js'; 
  //   document.body.appendChild(script); 
  // };

  back() {
    this.navCtrl.pop();
  }
}
