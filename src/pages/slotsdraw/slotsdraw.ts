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
        active: 2,
        auto: false,
        direction: 'up',
        delay: 300,
      });

      const element2 = document.querySelector('#machine2');
      const machine2 = new SlotMachine(element2, {
        active: 7,
        auto: false,
        direction: 'up',
        delay: 500,
      });


      const element3 = document.querySelector('#machine3');
      const machine3 = new SlotMachine(element3, {
        active: 3,
        auto: false,
        delay: 800,
      });


      const element4 = document.querySelector('#machine4');
      const machine4 = new SlotMachine(element4, {
        active: 3,
        auto: false,
        delay: 900,
      });

      const element5 = document.querySelector('#machine5');
      const machine5 = new SlotMachine(element5, {
        active: 1,
        auto: false,
        delay: 1100,
      });


      setTimeout(function () {
        machine1.shuffle(10, onComplete);
        machine2.shuffle(20, onComplete);
        machine3.shuffle(30, onComplete);
        machine4.shuffle(45, onComplete);
        machine5.shuffle(50, onComplete);
      }, 0);

      function onComplete(active) {
        console.log("Spin finish")
      }
    });
    // btnShuffle.addEventListener('click', () => {
    //   // for (var i=0; i<10; i++){
    // setTimeout(function(){
    //   machine1.shuffle(10);
    //   machine2.shuffle(15);
    //   machine3.shuffle(20);
    //   machine4.shuffle(25);
    //   machine5.shuffle(30);
    // machine1.shuffle(10);
    // machine2.shuffle(20);
    // machine3.shuffle(30);
    // machine4.shuffle(40);
    // machine5.shuffle(50);
    // }, 10);
    // })
  // this.randomSpin();
}

randomSpin() {
  $('#casinoShuffle').text('white');
  const element1 = document.querySelector('#machine1');
  const machine1 = new SlotMachine(element1, {
    active: 1,
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

  machine1.shuffle(10);
  machine2.shuffle(20);
  machine3.shuffle(30);
  machine4.shuffle(40);
  machine5.shuffle(50);
}
}