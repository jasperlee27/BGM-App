import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import * as Chart from "chart.js";
import 'chartjs-plugin-streaming';
// import { getQueryValue } from '@angular/core/src/view/query';
import { BaseChartDirective } from '../../../node_modules/ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import * as io from 'socket.io-client';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  // private datamap: any;
  chartColors: any[] =
    [
      { // Actual BTC graph
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#f3ba2e',
        pointBackgroundColor: '#3AA57D',
        // pointBorderColor: '#fafafa',
        pointRadius: 0,
        pointHoverBackgroundColor: '#3AA57D', //changing inside hover box legend
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'  //changing hover point color
      },
      // { // Short
      //   backgroundColor: 'rgba(0,0,0,0)',
      //   borderColor: '#3F719E',
      //   pointBackgroundColor: '#3F719E',
      //   pointBorderColor: '#3F719E',
      //   pointRadius: 0,
      //   pointHoverBackgroundColor: '#3F719E',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      // },
      // { // Long
      //   backgroundColor: 'rgba(0,0,0,0)',
      //   borderColor: 'red',
      //   pointBackgroundColor: '#9575CD',
      //   pointBorderColor: '#9575CD',
      //   pointRadius: 0,
      //   pointHoverBackgroundColor: '#9575CD',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      // }
    ];

  datasets: any[] =
    [
      { data: [], fill: false, label: 'BitCoin', },
      // { data: [], showLine: false, pointRadius: 5, label: 'Short' },
      // { data: [], pointRadius: 0, label: 'Long' }

    ];

  options: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: GlobalAuthProvider, private dataProvider: DataProvider, private alertCtrl: AlertController) {
    //do socket connection
    this.socket = io.connect('http://178.128.50.224:3002');
    console.log("socket for BinaryOptions conencted");
    this.isGuestLogin = this.auth.getGuestLogin();
    // this.isGameTime = true;
    this.historicalGame3 = new Array();
    this.updatePastGame();
  }

  ngOnInit() {
    console.log('ionViewDidLoad StreamPage');
    //variable currentPrice,
    //on game, countdown, gamestart. NO game end yet
    var gameValuesToPush;
    var localActiveBet;
    var localEntryPrice;

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
          this.showGameTime = true;
          this.showCountdown = false;
          this.showGameEnded = false;
          this.currGameState = 'gameStart';
          console.log("Toggled state " + this.currGameState);
          //TODO: Sound 
        }
        //one instance
      }
      else if (receivedData.type === 'countdown') {
        this.timerValue = parseFloat(receivedData.number).toFixed(1);
        gameValuesToPush = receivedData.currentPrice;
        // console.log("Updating current price in countdown " + gameValuesToPush);
        // console.log("Counting down: " + receivedData.number);
        if (this.currGameState !== 'countdown') {
          this.isBetDisabled = false;
          this.showGameTime = false;
          this.showCountdown = true;
          this.showGameEnded = false;
          this.currGameState = 'countdown';
          this.currGame3ID = receivedData.GameId;
          console.log("Toggled state " + this.currGameState + " changed curr game id " + this.currGame3ID);
        }
      }

      else if (receivedData.type === 'game') {
        this.isBetDisabled = true;
        gameValuesToPush = receivedData.currentPrice;
        this.gameTimer = parseInt(receivedData.number);
        // console.log("Updating current price in game " + gameValuesToPush);
        // console.log("Game timer : " + receivedData.number + " price " + receivedData.currentPrice);
        if (this.currGameState !== 'game') {
          this.currGame3ID = receivedData.GameId;
          this.showGameTime = true;
          this.showCountdown = false;
          this.showGameEnded = false;
          this.currGameState = 'game';
          console.log("Toggled state " + this.currGameState);
          console.log("Toggled state " + this.currGameState + " changed curr game id " + this.currGame3ID);
        }
      }

      else if (receivedData.type === 'gameEnd') {
        //game ended;
        this.showGameTime = false;
        gameValuesToPush = receivedData.currentPrice;

        if (this.currGameState !== 'gameEnd') {
          //TOGGLE STATE TO GAME END
          if (this.hasActiveBet) {
            this.destroyBetInstance();
          }
          this.hasActiveBet = false;
          this.showCountdown = false;
          this.showGameEnded = true;
          this.currGameState = 'gameEnd';
          this.finalRoundValue = parseFloat(receivedData.endValue).toFixed(2);
          //Update past game
          this.updatePastGame();
          //restart gameTimer
          this.gameTimer = 15;
          console.log("Toggled state " + this.currGameState);
        }
      }
      else {
        //do nth, error state.
        this.currGameState = '';
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
            // var value = this.randomIntRange(3000,8000);
            console.log("how many datasets i have " + chart.data.datasets.length);
            // console.log("pushing " + gameValuesToPush);
            chart.data.datasets[0].data.push({
              x: Date.now(),
              y: gameValuesToPush,
            });

            // console.log('check active bet here ' + localActiveBet);
            if (localActiveBet) {
              // console.log("Entered if condition");
              // console.log("buychart value is " + chart.data.datasets[1].data[0]);
              chart.data.datasets[1].data.push({
                x: Date.now(),
                y: localEntryPrice,
              })
              // console.log("After push entry value" + localEntryPrice);
            };
            // chart.data.datasets.forEach(function (dataset: any) {
            //   if (count == 0) {
            //     // var value = Math.random() * 3000 + 4500;
            //     var value = 100;
            //     value = this.randomIntRange();
            //   }

            //   else if (count === 3) {
            //     var value = 5000;
            //   }

            //   else {
            //   }
            //   var currDate = Date.now();

            //   dataset.data.push({
            //     x: currDate,
            //     y: value,
            //   });
            //   count++;
            // });
          },
          delay: 1500,
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
            fontSize: 12,
            padding: 5,
            display: true,
            stepSize: 1000,
            suggestedMin: 6600,
            suggestedMax: 6800,
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

      }

    };


  }

  ionViewWillEnter() {
    this.walletAmount = this.auth.getAccValue();
  }

  // startStreaming() {
  //   let interval = setInterval(() => {
  //     var btcPrice = this.randomIntRange(4000, 8000);
  //     this.datasets[0].data.push(btcPrice);
  //     var currentTime = Date.now();
  //     this.chartLabels.push(currentTime);
  //     this.chart.labels.shift();
  //     this.chart.refresh();
  //   }, 300)
  // }

  // async startGame(countdown: number) {
  //   this.isGameTime = true;
  //   console.log("Game 3 Started");
  //   this.count = countdown;
  //   var noOfCounts = (this.count * 10)

  //   this.countDownGame3 = timer(0, 100).pipe(
  //     take(noOfCounts),
  //     map(() => (this.count -= 0.1).toFixed(1))
  //   );

  //   await this.delay((this.count * 1000));
  //   this.endGame();
  // }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  destroyBetInstance() {
    console.log("pop buyline chart")
    this.datasets.pop();
    this.chart.refresh();
  }

  buyDataset(orderType, entryPrice) {
    console.log("Try to add new dataset");
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
      borderWidth: 10,
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
      console.log("bought " + this.game3BetAmount);
      console.log("Received entry price " + data.entryPrice);
      if (parseInt(data.status) === 200) {
        this.isBetDisabled = true;
        this.boughtIntoGame3 = true;
        this.roundBetType = 'long';
        this.buyDataset(this.roundBetType, data.entryPrice);
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        this.entryPrice = data.entryPrice;
        // this.isManualBetDisabled = true;
        // this.isManualCoutDisabled = false;
        this.hasActiveBet = true;
        this.game3BetAmount = '';
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have staked ' + data.amount + ' on HIGHER end value at entry price of ' + data.entryPrice,
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
        })
      }
    },
      err => {
        console.log("Error occured while placing long bet");
        // console.log(err);
        // console.log(err.error.message);
        // console.log(err.message);
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
    this.dataProvider.postBetGame3(this.game3BetAmount, "short", this.auth.getAccId(),this.currGame3ID).subscribe(data => {
      // pass the response from HTTP Request into local variable1 receivedData
      // var receivedData= JSON.parse(data);
      console.log("bought " + this.game3BetAmount);
      console.log("Received entry price " + data.entryPrice);
      // this.auth.setAccValue(data.accountValue);
      // this.walletAmount = this.auth.getAccValue();
      if (parseInt(data.status) === 200) {
        this.isBetDisabled = true;
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
        this.game3BetAmount = '';
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have staked ' + data.amount + ' on LOWER end value at entry price of ' + data.entryPrice,
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
        })
      }
    },
      err => {
        console.log("Error occured while placing short bet");
        // console.log(err);
        // console.log(err.error.message);
        // console.log(err.message);
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
      // pass the response from HTTP Request into local variable1 receivedData
      // var receivedData= JSON.parse(data);
      this.historicalGame3 = new Array();
      // console.log("Updating past game entry price " + data.entryPrice);
      // console.log("Updating past game end price " + data.endPrice);
      // console.log("Updating past game profit  " + data.profit);
      // console.log("Updating past game gameName " + data.gameName);

      // if (parseInt(data.status) === 200) {
      //set up for 1 bet per game first
      console.log("Updating past game entry price " + data.entryPrice);
      console.log("Updating past game end price " + data.endPrice);
      console.log("Updating past game profit  " + data.profit);
      console.log("Updating past game gameName " + data.gameName);
      var transaction = {
        "entryPrice": data.entryPrice.toFixed(2),
        "betType": data.gameName,
        "endPrice": data.endPrice.toFixed(2),
        "profit": parseInt(data.profit)
      }
      this.historicalGame3.push(transaction);
      // }
    },
      err => {
        console.log("Error occured while getting past transactions");
      }
    );
  }

  calcRoundResult() {

  }

}
