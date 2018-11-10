import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as $ from "jquery";
import * as jquerySlot from '../../assets/js/jquery.slotmachine.js';
import * as jsSlot from '../../assets/js/jquery.slotmachine.js';
import { DataProvider } from '../../providers/data/data';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

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
  selector: 'page-slots-draw-btc',
  templateUrl: 'slots-draw-btc.html',
})
export class SlotsDrawBtcPage {
  isMachineShown;
  winner;
  winnerNo1;
  winnerNo2;
  winnerNo3;
  winnerNo4;
  winnerNo5;
  toAlertUserAlert;
  receivedData;
  winnerID;
  isWinnerButtonDisabled:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private auth: GlobalAuthProvider, private alertController: AlertController, public smartAudio: SmartAudioProvider) {
    // this.isMachineShown = false;
    this.winnerID='';
    this.isWinnerButtonDisabled=false;
  }
  ionViewWillEnter() {
    this.dataProvider.postTrehuntGameWinner(this.auth.getAccId(), "BTC").subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData

      if (parseInt(data.status) === 200) {
        this.receivedData= data;
        this.winner = data.winnerNo;
        console.log("number received " +  this.winner + " " + this.winner.charAt(0) + " two " +  this.winner.charAt(1));
        this.winnerNo1 =  this.winner.charAt(0);
        this.winnerNo2 =  this.winner.charAt(1);
        this.winnerNo3 =  this.winner.charAt(2);
        this.winnerNo4 =  this.winner.charAt(3);
        this.winnerNo5 =  this.winner.charAt(4);
        // this.getWinner();
      }
    },
      err => {
        // console.log("Error occured while getting ETH winner");
        console.log(err);
      });
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave(){
    this.smartAudio.stop('startslot');
    this.smartAudio.stop('slotcomplete');
  }

  ngAfterViewInit() {
    
  }

  getWinner() {
    this.isWinnerButtonDisabled=true;
    this.smartAudio.play('startslot');
    this.isMachineShown = true;
    // console.log("GETWINNER number received " +  this.winner + " " + this.winner.charAt(0) + " two " +  this.winner.charAt(1));
    const btnShuffle = document.querySelector("#luckyDrawShuffle");
    //first machine
    var winner= this.winner;
    const element1 = document.querySelector('#machine1');
    const machine1 = new SlotMachine(element1, {
      active: 0,
      auto: false,
      direction: 'up',
      delay: 500,
      randomize() {
        return winner.charAt(0);
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
        return winner.charAt(1);
      }
    });


    const element3 = document.querySelector('#machine3');
    const machine3 = new SlotMachine(element3, {
      active: 0,
      auto: false,
      direction: 'up',
      delay: 500,
      randomize() {
        return winner.charAt(2);
      }
    });


    const element4 = document.querySelector('#machine4');
    const machine4 = new SlotMachine(element4, {
      active: 0,
      auto: false,
      direction: 'up',
      delay: 500,
      randomize() {
        return winner.charAt(3);
      }
    });

    const element5 = document.querySelector('#machine5');
    const machine5 = new SlotMachine(element5, {
      active: 0,
      auto: false,
      direction: 'up',
      delay: 500,
      randomize() {
        return winner.charAt(4);
      }
    });
    machine1.shuffle(8,onComplete);
    machine2.shuffle(14,onComplete);
    machine3.shuffle(19,onComplete);
    machine4.shuffle(23,onComplete);
    machine5.shuffle(26, onComplete5);
    var self = this;

    function onComplete(){
      self.playComplete();
    }
    function onComplete5(){
      // var toAlertUserAlert= this.toAlertUserAlert;
      // toAlertUserAlert.present();
      self.playComplete();
      self.toDo();
    }
  }

  playComplete(){
    this.smartAudio.play('slotcomplete');
  }

  toDo(){
    this.winnerID=this.receivedData.winnerUser;
    let toAlertUserAlert = this.alertController.create({
      title: 'Congratulations',
      subTitle: 'To User ID: ' + this.receivedData.winnerUser + ' <br>Winner of 1 BTC',
      buttons: ['OK']
    });
    toAlertUserAlert.present();
    toAlertUserAlert.onDidDismiss(() => {
      this.isWinnerButtonDisabled=false;
    })
  }

}