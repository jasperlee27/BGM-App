import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";
import * as jquerySlot from '../../assets/js/jquery.slotmachine.js';
import * as jsSlot from '../../assets/js/jquery.slotmachine.js';
import { DataProvider } from '../../providers/data/data';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

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
  isMachineShown;
  winnerNo1;
  winnerNo2;
  winnerNo3;
  winnerNo4;
  winnerNo5;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private auth: GlobalAuthProvider) {
    // this.isMachineShown = false;
  }
  ionViewWillEnter(){
    this.dataProvider.postTrehuntGameWinner(this.auth.getAccId(), "ETH").subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData

      if (parseInt(data.status) === 200) {
        var winner= data.winnerNo;
        console.log("number one" + winner.charAt(0) + " two " + winner.charAt(1));
        this.winnerNo1= winner.charAt(0);
        this.winnerNo2= winner.charAt(1);
        this.winnerNo3= winner.charAt(2);
        this.winnerNo4= winner.charAt(3);
        this.winnerNo5= winner.charAt(4);
        $(function () {});

      }
    },
      err => {
        console.log("Error occured while getting ETH winner");
        console.log(err);
      });
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
          return this.winnerNo1;
          console.log("winner No 1 " + this.winnerNo1)
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
          return this.winnerNo2;
        }
      });


      const element3 = document.querySelector('#machine3');
      const machine3 = new SlotMachine(element3, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return this.winnerNo3;
        }
      });


      const element4 = document.querySelector('#machine4');
      const machine4 = new SlotMachine(element4, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return this.winnerNo4;
        }
      });

      const element5 = document.querySelector('#machine5');
      const machine5 = new SlotMachine(element5, {
        active: 0,
        auto: false,
        direction: 'up',
        delay: 500,
        randomize() {
          return this.winnerNo5;
        }
      });


      // setTimeout(function () {
      machine1.shuffle(0, onComplete1);
      machine2.shuffle(0, onComplete2);
      machine3.shuffle(0, onComplete3);
      machine4.shuffle(0, onComplete4);
      machine5.shuffle(0, onComplete5);
      // }, 0);

      function onComplete1(active) {
        // this.isMachineShown = false;
        machine1.shuffle(10);
        console.log("Active = " + active);
        console.log("Initial spin finish");
      }
      function onComplete2(active) {
        // this.isMachineShown = false;
        machine2.shuffle(20);
        console.log("Active = " + active);
        console.log("Initial spin finish");
      }
      function onComplete3(active) {
        // this.isMachineShown = false;
        machine3.shuffle(30);
        console.log("Active = " + active);
        console.log("Initial spin finish");
      }
      function onComplete4(active) {
        // this.isMachineShown = false;
        machine4.shuffle(40);
        console.log("Active = " + active);
        console.log("Initial spin finish");
      }
      function onComplete5(active) {
        // this.isMachineShown = false;
        machine5.shuffle(50);
        console.log("Active = " + active);
        console.log("Initial spin finish");
      }

      // btnShuffle.addEventListener('click', () => {
      //   setTimeout(function () {
      //     machine1.shuffle(10);
      //     machine2.shuffle(15);
      //     machine3.shuffle(20);
      //     machine4.shuffle(25);
      //     machine5.shuffle(30);
      //   }, 10);
      // });
    });
  }

  getWinner() {
    this.isMachineShown = true;
  }

}