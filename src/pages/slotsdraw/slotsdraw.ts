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
        randomize() {
          return 5;
        }
        // randomize:5
      });

      const element2 = document.querySelector('#machine2');
      const machine2 = new SlotMachine(element2, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return 5;
        }
      });


      const element3 = document.querySelector('#machine3');
      const machine3 = new SlotMachine(element3, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return 5;
        }
      });


      const element4 = document.querySelector('#machine4');
      const machine4 = new SlotMachine(element4, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return 5;
        }
      });

      const element5 = document.querySelector('#machine5');
      const machine5 = new SlotMachine(element5, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return 5;
        }
      });


      // setTimeout(function () {
      machine1.shuffle(10, onComplete1);
      machine2.shuffle(15);
      machine3.shuffle(20);
      machine4.shuffle(25);
      machine5.shuffle(30);
      // }, 0);

      function onComplete1(active) {

        // machine1.setRandomize(5);
        // if (machine1.next() != 5){
        // console.log(active);
        // if (active!=5){
        //   console.log(machine1.next());
        //   onComplete1(active);
        // }
        console.log("Active = " + active);
        // var chosen = 5;
        // var spinDifference = Math.abs(active-chosen);
        // console.log("spinDiff = "  + spinDifference);
        // for (var i = 0; i < spinDifference; i++){
        // console.log("Loop = "  + i);
        // machine1.setRandomize(5);
        // }

        // }
        // onComplete1();
        console.log("Initial spin finish");
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