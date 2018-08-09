import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";

declare var SlotMachine;
// declare function shuffle();
/**
 * Generated class for the SlotsdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slotsdraw',
  templateUrl: 'slotsdraw.html',
})
export class SlotsdrawPage {
  machine1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotsdrawPage');
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      const btnShuffle = document.querySelector("#casinoShuffle");
      //first machine
      const element1 = document.querySelector('#machine1');
      const machine1 = new SlotMachine(element1, {
        active: 0,
        spins: 999999,
        delay: 500,
      });
      machine1.shuffle();

      const element2 = document.querySelector('#machine2');
      var machine2 = new SlotMachine(element2, {
        // active: 7,
        auto: false,
        direction: 'up'
      });
      machine2.shuffle();

      const element3 = document.querySelector('#machine3');
      var machine3 = new SlotMachine(element3, {
        // active: 2,
        auto: false,
      });
      machine3.shuffle();

      const element4 = document.querySelector('#machine4');
      var machine4 = new SlotMachine(element4, {
        // active: 3,
        auto: false,
      });
      machine4.shuffle();

      const element5 = document.querySelector('#machine5');
      var machine5 = new SlotMachine(element5, {
        active: 0,
        auto: false,
      });
      // machine5.shuffle();

      btnShuffle.addEventListener('click', () => {
        // for (var i=0; i<10; i++){
        // setTimeout(function(){
        //   // machine1.shuffle(9999999);
        //   machine2.shuffle(15);
        //   machine3.shuffle(20);
        //   machine4.shuffle(25);
        //   machine5.shuffle(30);
        // }, 0);
      })
    });

  }

  randomSpin() {
    $('#casinoShuffle').text('white');
    const element1 = document.querySelector('#machine1');
    const machine1 = new SlotMachine(element1, {
      active: 0,
      delay: 300,
    });
    machine1.shuffle();
    const element2 = document.querySelector('#machine2');
    const machine2 = new SlotMachine(element2, {
      active: 1,
      delay: 500,
    });
    const element3 = document.querySelector('#machine3');
    const machine3 = new SlotMachine(element3, {
      active: 1,
      delay: 800,
    });
    const element4 = document.querySelector('#machine4');
    const machine4 = new SlotMachine(element4, {
      active: 1,
      delay: 900,
    });
    const element5 = document.querySelector('#machine5');
    const machine5 = new SlotMachine(element5, {
      active: 1,
      delay: 1100,
    });

    machine1.shuffle();
    machine2.shuffle();
    machine3.shuffle();
    machine4.shuffle();
    machine5.shuffle();
    // machine2.shuffle();
  }
}