import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";
import * as jquerySlot from '../../assets/js/jquery.slotmachine.js';
import * as jsSlot from '../../assets/js/jquery.slotmachine.js';

declare var SlotMachine;

// <script type="text/javascript" src="assets/js/slotmachine.js"></script>


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
      const btnShuffle = document.querySelector("#luckyDrawShuffle");
      //first machine
      const element1 = document.querySelector('#machine1');
      const machine1 = new SlotMachine(element1, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
      });

      const element2 = document.querySelector('#machine2');
      const machine2 = new SlotMachine(element2, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
      });


      const element3 = document.querySelector('#machine3');
      const machine3 = new SlotMachine(element3, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
      });


      const element4 = document.querySelector('#machine4');
      const machine4 = new SlotMachine(element4, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
      });

      const element5 = document.querySelector('#machine5');
      const machine5 = new SlotMachine(element5, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
      });


      // setTimeout(function () {
      //   machine1.shuffle(1, onComplete);
      //   machine2.shuffle(2, onComplete);
      //   machine3.shuffle(3, onComplete);
      //   machine4.shuffle(4, onComplete);
      //   machine5.shuffle(5, onComplete);
      // }, 0);

      function onComplete(active) {
        console.log("Initial spin finish")
      }


      btnShuffle.addEventListener('click', () => {
        setTimeout(function () {
          machine1.shuffle(10);
          machine2.shuffle(15);
          machine3.shuffle(20);
          machine4.shuffle(25);
          machine5.shuffle(30);
        }, 10);
      });
    });


  }
}