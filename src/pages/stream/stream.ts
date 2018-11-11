import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import * as Chart from "chart.js";
import 'chartjs-plugin-streaming';

import { BaseChartDirective } from '../../../node_modules/ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import * as io from 'socket.io-client';
import { DataProvider } from '../../providers/data/data';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';


@IonicPage()
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {
  @ViewChild(BaseChartDirective) chart: any;
  historicalGame3: Array<any>;
  showGameTime: boolean;
  showGameEnded: boolean;
  showCountdown: boolean;
  isBetDisabled: boolean = true;
  hasActiveBet: boolean = false;
  countDownGame3;
  countDownBet3;
  count = 30.0;
  boughtIntoGame3: boolean = false;
  roundBetType;
  roundFinalPrice;
  game3BetAmount;
  yDataReceived = Math.random() * 20;
  testGlobalVar = 6000;
  buffer = [[], []];
  chartLabels = [];
  walletAmount;
  isGuestLogin;
  socket: SocketIOClient.Socket;
  currGameState;
  currGame3ID;
  timerValue;
  gameTimer;
  finalRoundValue;
  priceFromGame;
  entryPrice;
  musicPlayed;
  isSliderDisabled;
  // private datamap: any;
  chartColors: any[] =
    [
      { // Actual BTC graph
        backgroundColor: 'rgba(255, 206, 86, 0)',
        borderColor: '#f3ba2e',
        pointBackgroundColor: '#f3ba2e',
        // pointBorderColor: '#fafafa',
        pointRadius: 0,
        pointHoverBackgroundColor: '#f3ba2e', //changing inside hover box legend
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'  //changing hover point color
      },
      { // Short
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#FF0000',
        pointBackgroundColor: '#FF0000',
        pointBorderColor: '#FF0000',
        pointHoverBackgroundColor: '#FF0000',
        pointHoverBorderColor: '#FF0000'
      },
      { // Long
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#2D8632',
        pointBackgroundColor: '#2D8632',
        pointBorderColor: '#2D8632',
        pointHoverBackgroundColor: '#2D8632',
        pointHoverBorderColor: '#2D8632'
      }
    ];

  datasets: any[] =
    [
      { data: [], showLine: true, fill: true, label: 'BitCoin', },
      { data: [], showLine: false, pointRadius: 5, label: 'Short' },
      { data: [], showLine: false, pointRadius: 5, label: 'Long' }

    ];

  options: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: GlobalAuthProvider, private dataProvider: DataProvider, private alertCtrl: AlertController, public smartAudio: SmartAudioProvider) {
    //do socket connection
    this.isSliderDisabled = true;
    this.socket = io.connect('http://178.128.50.224:3002');
    this.isGuestLogin = this.auth.getGuestLogin();
    // this.isGameTime = true;
    this.historicalGame3 = new Array();
    this.updatePastGame();
    this.musicPlayed = false;
  }

  ngOnInit() {
    //variable currentPrice,
    //on game, countdown, gamestart. NO game end yet
    var gameValuesToPush;
    var localActiveBet;
    var localEntryPrice;
    var lastCountDown;
    var updatePriceFlag;
    var currCountDown;
    this.socket.on('Game3', (data: any) => {
      // console.log(JSON.parse(data));
      var receivedData = JSON.parse(data);
      // console.log("Received data type  " + receivedData.type);

      localActiveBet = this.hasActiveBet;
      localEntryPrice = this.entryPrice;
      // console.log("update this entry price " + this.entryPrice +" Local: "+ localEntryPrice);

      if (receivedData.type === 'gameStart') {

        // console.log("received gameStart");
        this.isBetDisabled = true;
        if (this.currGameState !== 'gameStart') {
          if (this.hasActiveBet) {
            this.isSliderDisabled = true;
          }

          else {
            this.isSliderDisabled = false;
          }
          this.showGameTime = true;
          this.showCountdown = false;
          this.showGameEnded = false;
          this.currGameState = 'gameStart';
          // console.log("Toggled state " + this.currGameState);
          //TODO: Sound 
        }
        //one instance
      }
      else if (receivedData.type === 'countdown') {
        this.timerValue = Math.abs(parseFloat(receivedData.number)).toFixed(0);
        gameValuesToPush = receivedData.currentPrice;

        if (this.currGameState !== 'countdown') {
          this.isBetDisabled = false;
          this.isSliderDisabled = false;
          this.showGameTime = false;
          this.showCountdown = true;
          this.showGameEnded = false;
          this.currGameState = 'countdown';
          this.currGame3ID = receivedData.GameId;
          // console.log("Toggled state " + this.currGameState + " changed curr game id " + this.currGame3ID);
        }
      }

      else if (receivedData.type === 'game') {
        this.isBetDisabled = true;


        gameValuesToPush = receivedData.currentPrice;
        this.gameTimer = Math.abs(parseFloat(receivedData.number)).toFixed(0);
        // console.log("Updating current price in game " + gameValuesToPush);
        // console.log("Game timer : " + receivedData.number + " price " + receivedData.currentPrice);
        if ((this.gameTimer < 4.2) && (this.hasActiveBet)) {
          if (!this.musicPlayed) {
            this.smartAudio.play('game3countdown');
            this.musicPlayed = true;
          }
        }

        if (this.currGameState !== 'game') {
          this.currGame3ID = receivedData.GameId;
          this.showGameTime = true;
          this.showCountdown = false;
          this.showGameEnded = false;
          this.currGameState = 'game';
          // console.log("Toggled state " + this.currGameState);
          // console.log("Toggled state " + this.currGameState + " changed curr game id " + this.currGame3ID);
        }
      }

      else if (receivedData.type === 'gameEnd') {
        //game ended;
        this.showGameTime = false;
        gameValuesToPush = receivedData.endValue;

        if (this.currGameState !== 'gameEnd') {
          //TOGGLE STATE TO GAME END
          if (this.hasActiveBet) {
            this.displayRoundResult();
            this.destroyBetInstance();
            this.isSliderDisabled = false;
            this.game3BetAmount = '';
          }
          this.musicPlayed = false;
          this.hasActiveBet = false;
          this.showCountdown = false;
          this.showGameEnded = true;
          this.currGameState = 'gameEnd';
          this.finalRoundValue = parseFloat(receivedData.endValue).toFixed(3);
          //Update past game
          this.updatePastGame();
          //restart gameTimer
          this.gameTimer = 15.0;
          // console.log("Toggled state " + this.currGameState);
        }
      }
      else {
        //do nth, error state.
        this.currGameState = '';
      }
    });

    this.socket.on('Game3orders', (data: any) => {

      var receivedData = JSON.parse(data);


      if (parseInt(receivedData[0].shortOrders) === 0) {
        //this is to insert in long chart
        // console.log("received gameStart");
        this.chart.datasets[2].data.push({
          x: Date.now(),
          y: receivedData[0].price,
        });
        // this.chart.refresh();
        //one instance
      }
      else {
        //this is to insert in short chart
        this.chart.datasets[1].data.push({
          x: Date.now(),
          y: gameValuesToPush,
        });
        // this.chart.refresh();
      }
    });
    // buffer=[[7000],[Date.now()]];
    // this.startGame(10);
    var test = this.testGlobalVar;

    this.options = {
      legend: {
        display: false
      },
      animation: {
        duration: 0
      },
      plugins: {
        streaming: {
          refresh: 1000,
          duration: 30000,
          //can create function to copy here from received data above?
          //or create socket here and update value here;
          getClassValue: function () {
            // console.log("is calling get class value but returning " + this.testGlobalVar);
            return this.testGlobalVar;
          },

          updateVar: function () {
            test = this.randomIntRange(5000, 8000);
          },
          randomIntRange: function (min, max) {
            // console.log("managed to call function");
            return Math.floor(Math.random() * (max - min + 1) + min);
          },

          onRefresh: function (chart: any) {
            this.updateVar();
            var count = 0;

            chart.data.datasets[0].data.push({
              x: Date.now(),
              y: gameValuesToPush,
            });

            if (localActiveBet) {

              chart.data.datasets[3].data.push({
                x: Date.now(),
                y: localEntryPrice,
              })

            };

          },
          delay: 2000,
          frameRate: 30,
        }
      },
      scales: {
        xAxes: [{
          type: 'realtime',
          offset: true,
          ticks: {
            fontColor: "#f4f4f4",
            fontSize: 12,
            padding: 5,
            display: true,
            stepSize: 1000,
            min: 0,
            // suggestedMax: 8000,
            // mirror: true,
            // drawTicks: true,
          },
          gridLines: {
            lineWidth: 0.5,
            display: false,
            drawTicks: true,
            color: "white",
          },

        }],

        yAxes: [{
          offset: true,
          ticks: {
            fontColor: "#f4f4f4",
            fontSize: 11,
            padding: 5,
            display: true,

          },
          gridLines: {
            lineWidth: 0.5,
            display: false,
            drawTicks: true,
            color: "white",
          },
        }],

      }

    };


  }

  ionViewWillEnter() {
    this.walletAmount = this.auth.getAccValue();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  destroyBetInstance() {
    // console.log("pop buyline chart")
    this.datasets.pop();
    this.chart.refresh();
  }

  buyDataset(orderType, entryPrice) {
    // console.log("Try to add new dataset");
    var color;

    if (orderType === "long") {
      color = 'green';
    }

    else {
      color = 'red';
    }
    var newDataset = {
      label: 'Buy Price',
      backgroundColor: color,
      borderColor: color,
      borderWidth: 2,
      fill: false,
      lineTension: 0,
      data: [],
      pointRadius: 0,
    };
    this.datasets.push(newDataset);
    this.chart.refresh();
  }

  betHigher() {
    //to pass in currGame3ID
    this.dataProvider.postBetGame3(this.game3BetAmount, "long", this.auth.getAccId(), this.currGame3ID).subscribe(data => {
      // pass the response from HTTP Request into local variable1 receivedData
      // var receivedData= JSON.parse(data);
      // console.log("bought " + this.game3BetAmount);
      // console.log("Received entry price " + data.entryPrice);
      if (parseInt(data.status) === 200) {
        this.isBetDisabled = true;
        this.isSliderDisabled = true;
        this.boughtIntoGame3 = true;
        this.roundBetType = 'long';
        this.buyDataset(this.roundBetType, parseFloat(data.entryPrice).toFixed(3));
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        this.entryPrice = parseFloat(data.entryPrice).toFixed(3)

        this.hasActiveBet = true;
        // this.game3BetAmount = '';
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have staked ' + data.amount + ' on HIGHER end value at entry price of ' + data.entryPrice,
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
          this.historicalGame3 = new Array();
          var transaction = {
            "entryPrice": parseFloat(data.entryPrice).toFixed(3),
            "betType": data.orderTypeDisplay,
            "endPrice": "-",
            "profit": "-"
          }
          this.historicalGame3.push(transaction);
        })
      }
    },
      err => {
        console.log("Error occured while placing long bet");

        if (err.status === 0) {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Server cannot be reached at this time. <br> Please try again later',
            buttons: ['OK']
          });

          alert.present();
          console.log("Hit Error 0");
        }
        else {

          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.error.message,
            buttons: ['OK']
          });
          alert.present();
          alert.onDidDismiss(() => {

          })
        }
      }
    );


  }

  betLower() {
    //to pass in currGame3ID
    this.dataProvider.postBetGame3(this.game3BetAmount, "short", this.auth.getAccId(), this.currGame3ID).subscribe(data => {
      // pass the response from HTTP Request into local variable1 receivedData
      // var receivedData= JSON.parse(data);
      // console.log("bought " + this.game3BetAmount);
      // console.log("Received entry price " + data.entryPrice);

      if (parseInt(data.status) === 200) {
        this.isBetDisabled = true;
        this.isSliderDisabled = true;
        this.boughtIntoGame3 = true;
        this.roundBetType = 'short';
        this.entryPrice = data.entryPrice;
        this.buyDataset(this.roundBetType, data.entryPrice);
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        // this.hasActiveManualBet = true;
        // this.isManualBetDisabled = true;
        // this.isManualCoutDisabled = false
        this.hasActiveBet = true;
        // this.game3BetAmount = '';
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have staked ' + data.amount + ' on LOWER end value at entry price of ' + data.entryPrice,
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
          this.historicalGame3 = new Array();
          var transaction = {
            "entryPrice": parseFloat(data.entryPrice).toFixed(3),
            "betType": data.orderTypeDisplay,
            "endPrice": "-",
            "profit": "-"
          }
          this.historicalGame3.push(transaction);

        })
      }
    },
      err => {
        console.log("Error occured while placing short bet");

        if (err.status === 0) {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Server cannot be reached at this time. <br> Please try again later',
            buttons: ['OK']
          });

          alert.present();
          console.log("Hit Error 0");
        }
        else {

          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.error.message,
            buttons: ['OK']
          });
          alert.present();
          alert.onDidDismiss(() => {
          })
        }
      }
    );
  }

  updatePastGame() {
    this.dataProvider.postPastGame3(this.auth.getAccId()).subscribe(data => {

      this.historicalGame3 = new Array();


      if (parseInt(data.status) === 200) {
        //set up for 1 bet per game first
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        var transaction = {
          "entryPrice": parseFloat(data.data.entryPrice).toFixed(3),
          "betType": data.data.orderTypeDisplay,
          "endPrice": parseFloat(data.data.endPrice).toFixed(3),
          "profit": parseInt(data.data.profit)
        }
        this.historicalGame3.push(transaction);
      }
    },
      err => {
        console.log("Error occured while getting past transactions");
      }
    );
  }

  displayRoundResult() {
    this.dataProvider.postPastGame3(this.auth.getAccId()).subscribe(data => {
      if (parseInt(data.status) === 200) {
        //alert if has active bet

        var profit = parseInt(data.data.profit);
        var betType = data.data.orderTypeDisplay;
        var titleToDisplay = "";
        var msgToDisplay = "";

        //positive -> win
        if (profit >= 0) {
          titleToDisplay = "Congratulations!"
          msgToDisplay = "You won " + profit + " for the last round! <br> Well done!"
        }

        else {
          titleToDisplay = "Unlucky!"
          msgToDisplay = "You lost " + Math.abs(profit) + " in the last round. <br> Better luck next time!"

        }

        let alert = this.alertCtrl.create({
          title: titleToDisplay,
          subTitle: msgToDisplay,
          cssClass: 'custom-alert-danger',
          buttons: ['OK']
        });
        alert.present();
      }
    },
      err => {
        console.log("Error occured while getting past transactions");
      }
    );

  }

}
