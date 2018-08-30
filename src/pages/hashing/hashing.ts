import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
/**
 * Generated class for the HashingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hashing',
  templateUrl: 'hashing.html',
})
export class HashingPage {
  @ViewChild(BaseChartDirective) chart: any;
  currGameState: string;
  messageText: string;
  messages: Array<any>;
  chartColors;
  chartData;
  chartLabels;
  chartOptions;
  multiplierDisplay;
  finalValue;
  isChartHidden: boolean;
  isArrowHidden: boolean;
  isBurstTextHidden: boolean;
  isTimerHidden: boolean;
  isManualBetDisabled: boolean = true;
  isSliderDisabled: boolean = true;
  isManualCoutDisabled: boolean = true;
  hasActiveManualBet: boolean = false;
  hashManualBetAmount;
  isLocGameTimerStarted: boolean = false;
  countDown;
  count = 10.0;
  socket: SocketIOClient.Socket;
  dataToPush: number;
  timerValue: string;
  timerInterval;
  currentView: string = 'manual';
  hashBetType: string = 'manual';
  currentGameID: string;
  walletAmount: any;
  isGuestLogin;

  constructor(public navCtrl: NavController, private smartAudio: SmartAudioProvider, public navParams: NavParams, private auth: GlobalAuthProvider, public dataProvider: DataProvider, private alertCtrl: AlertController) {
    this.isGuestLogin = this.auth.getGuestLogin();
    this.isArrowHidden = true;
    this.hashManualBetAmount=0;
    // this.walletAmount = this.dataProvider.postWalletAmount(this.auth.getAccId);
    this.socket = io.connect('http://178.128.50.224:3001');
    console.log("socket for hashing conencted");
    this.chartData = [
      { data: [], label: 'Hash Rate', pointRadius: 0, hidden: true, borderWidth: 5 },
    ];

    this.chartColors = [{ // Actual Volume ETB
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: "#f3ba2e",
      pointBackgroundColor: "#f3ba2e",
      // pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: 'rgb(255, 113, 0)', //changing inside hover box legend
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'  //changing hover point color
    }
    ];
    this.chartLabels = [];

    this.chartOptions = {
      tooltips: {
        display: false,
      },
      maintainAspectRatio: true,
      animation: {
        duration: 0
      },
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        xAxes: [{
          // type: 'realtime', 
          //   time: {
          //     unit: 'seconds',
          //     format: 'timeFormat'
          // },
          offset: true,
          display: true,
          gridLines: {
            display: false,
            // lineWidth: 0.5,
            color: "white"
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 3,
            suggestedMax: 2,
            fontColor: "white",
            display: true,
            fontSize: 10,
            stepSize: 0.01,
            maxRotation: 0,
            minRotation: 0,
            autoSkip: false,
            callback: function (value) {
              if (Number.isInteger(value)) {
                return value + 's';
              }

              else {
                return undefined;
              }
            },
          },


        }],
        yAxes: [{
          offset: true,
          ticks: {
            fontColor: "white",
            fontSize: 12,
            padding: -5,
            // mirror: true,
            display: true,
            // drawTicks: true,
            stepSize: 0.01,
            min: 1,
            maxTicksLimit: 5,
            suggestedMax: 2,
            callback: function (value) {
              if (value >= 40) {
                if (value % 20 === 0) {
                  return value.toFixed(0) + 'x --  ';
                }
                else {
                  return undefined;
                }
              }

              else if (value >= 20) {
                if (value % 10 === 0) {
                  return value.toFixed(0) + 'x --  ';
                }

                else {
                  return undefined;
                }
              }

              else if (value >= 8) {
                if (value % 5 === 0) {
                  return value.toFixed(0) + 'x --  ';
                }
                else {
                  return undefined;
                }
              }
              //value less than 10
              else if (value % 2 === 0) {
                return value.toFixed(0) + 'x --  ';
              }

              else if (value === 1) {
                return value + 'x --  ';
              }

              else {
                return undefined;
              }
            },
          },
          gridLines: {
            lineWidth: 0.5,
            display: true,
            drawTicks: true,
            color: "white",
            offsetGridLines: true,
            tickMarkLength: -6,
          },
          scaleLabel: {
            display: false,
            labelString: 'Multiplier',
            fontColor: "#f3ba2e",
            fontSize: 14,
            fontStyle: 'bold',
            fontFamily: 'roboto'
          }
        }],
      }
    };
  }

  ngOnInit() {
    this.isChartHidden = false;
    // this.chartData[0].data = [1];
    this.chartLabels = []
    this.multiplierDisplay = 1;
    this.finalValue = 0; //init as 0 first, to update later.
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;

    //CODE FOR SOCKET//
    this.messages = new Array();
    this.socket.on('message-received', (msg: any) => {
      this.messages.push(msg);
      // console.log(msg);
      // console.log(this.messages);
    });
    //emit to server
    this.socket.emit('chat message', {
      msg: 'Client to server, can you hear me server?'
    });

    this.socket.on('Game2', (data: any) => {
      // console.log(JSON.parse(data));
      var receivedData = JSON.parse(data);
      // console.log("Received data type  " + receivedData.type);

      if (receivedData.type === 'GameStart') {
        if (this.currGameState!== 'GameStart'){
          this.currGameState='GameStart';
          //TODO: Sound 
        }
        //one instance

        this.isManualBetDisabled = true;

        if (!this.isLocGameTimerStarted) {
          this.isLocGameTimerStarted = true;
          console.log("START TIMER HERE");
          this.timer("start");
        }

        else {
          //do nth
        }


      }
      else if (receivedData.type === 'game') {

        if (this.currGameState!== 'game'){
          this.currGameState='game';
          //TODO: Sound 
        }

        this.isManualBetDisabled = true;

        if (this.hasActiveManualBet) {
          this.isManualCoutDisabled = false;
          this.isSliderDisabled = true;
        }
        
        else{
          this.isSliderDisabled = false;
        }

        this.isTimerHidden = true;
        this.isBurstTextHidden = true;
        this.chartData[0].hidden = false;
        this.isChartHidden = false;
        this.multiplierDisplay = receivedData.number;
        // this.dataToPush = receivedData.number;

        this.chartLabels.push(1.01);
        this.chartData[0].data.push(receivedData.number);

        this.chart.refresh();
      }

      else if (receivedData.type === "busted") {
        if (this.currGameState!== 'busted'){
          if (this.hasActiveManualBet){
            this.hashManualBetAmount = 0;
            this.smartAudio.play('game2explode');
          }
          this.currGameState='busted';
          //TODO: Sound on bust
        }
        // console.log("Received data type  " + receivedData.type);
        this.isManualCoutDisabled = true;
        this.isManualBetDisabled = true;
        // this.isSliderDisabled= true;
        this.hasActiveManualBet = false;
        this.chartData[0].hidden = true;
        this.isChartHidden = true;
        this.isBurstTextHidden = false;
        this.isTimerHidden = true;
        this.finalValue = parseFloat(receivedData.value).toFixed(2);
        //reset chart and stop timer
        this.timer("stop");
        this.isLocGameTimerStarted = false;
        this.chartLabels = [];
        this.chartData[0].data = [];

      }

      else if (receivedData.type === "countdown") {
        if (this.currGameState!== 'countdown'){
          this.currGameState='countdown';
          this.walletAmount=this.auth.getAccValue();
          //TODO: Sound on bust
        }
        //log currentGameID here
        this.isManualCoutDisabled = true;
        if (!this.hasActiveManualBet) {
          this.isManualBetDisabled = false;
          this.isSliderDisabled=false;
        }
        this.currentGameID = receivedData.gameId;
        // console.log("Received type " + receivedData.type + " and stored current game id as " + this.currentGameID);
        this.chartData[0].hidden = true;
        this.isChartHidden = true;
        this.isBurstTextHidden = true;
        this.isTimerHidden = false;
        this.timerValue = parseFloat(receivedData.number).toFixed(1);
      }

      else {
        //do nth
        this.currGameState='';
      }
      // this.socket.emit('event3', {
      //   msg: 'Yes, its working for me!!'
      // });
    });

    this.socket.on('Game3', (data: any) => {
      console.log("Receiving game 3 event " + data.msg);
    });

    // let interval = setInterval(() => {
    //   this.chartLabels.push(Date.now());
    //   this.chartData[0].data.push(this.dataToPush);
    //   this.chart.refresh();
    // }, 100)
    // this.generateChart(33.58);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HashingPage');
  }

  ionViewWillEnter() {
    this.walletAmount = this.auth.getAccValue();
  }

  timer(action: string) {
    var time: number = 0;


    if (action === 'start') {
      this.timerInterval = setInterval(() => {
        time++;
        // console.log("Counting timer " + time + "s");

        if (time > 20) {
          if (time % 20 === 0) {
            this.chartLabels.push(time);
            // console.log("Successfully pushed " + time);
          }
        }

        if (time > 15) {
          if (time % 10 === 0) {
            this.chartLabels.push(time);
            // console.log("Successfully pushed " + time);
          }
        }

        else if (time >= 8) {
          if (time % 5 === 0) {
            this.chartLabels.push(time);
            // console.log("Successfully pushed " + time);
          }
        }
        else if (time === 7) {
          this.chartLabels.push(time);
          // console.log("Successfully pushed " + time);
        }

        else if (time === 6) {
          //skip
        }

        else if (time > 2) {
          if (time % 2 === 0) {
            this.chartLabels.push(time);
            // console.log("Successfully pushed " + time);
          }
        }

        else {
          this.chartLabels.push(time);
          // console.log("Successfully pushed " + time);
        }


      }, 1000)
    }

    else {
      console.log("Stopping real timer")
      clearInterval(this.timerInterval);
    }

  }
  hashManualBet() {
    console.log("manual betting");
    //make place bet call
    console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currentGameID + " amount to buy= " + this.hashManualBetAmount);


    this.dataProvider.postBetGame2(this.auth.getAccId(), this.currentGameID, this.hashManualBetAmount).subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData
      // var receivedData= JSON.parse(data);
      console.log("DATA HERE " + data.message);
      console.log("Received return acc Value " + data.accountValue);
      this.auth.setAccValue(data.accountValue);
      this.walletAmount = this.auth.getAccValue();
      if (parseInt(data.status) === 200) {
        this.hasActiveManualBet = true;
        this.isManualBetDisabled = true;
        this.isSliderDisabled= true;
        this.isManualCoutDisabled = false;
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
        })
      }
    },
      err => {
        console.log("Error occured while buying placing manual hash bet");
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

  hashManualCout() {
    //to do post to cashout
    //make manual cashout call
    console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currentGameID);
    this.dataProvider.postCoutGame2(this.auth.getAccId(), this.currentGameID).subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData
      console.log("Received returned message " + data.message);
      console.log("Received returned multiplier " + data.multiplier);
      console.log("Received returned winning " + data.winning);
      this.auth.addAccValue(parseFloat(data.winning).toFixed(2));
      this.isManualCoutDisabled = true;
      this.hasActiveManualBet = false;
      this.walletAmount = this.auth.getAccValue();

      if (parseInt(data.status) === 200) {
        // console.log("Game 1 buying btc okay");
        // console.log("actual bought tix= " + data.amount);
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'You have cashed out ' + parseFloat(data.winning).toFixed(2) + ' for this game',
          buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(() => {
        })
      }
    },
      err => {
        console.log("Error occured while buying placing manual hash bet");
        console.log(err);
      });
  }

  toggleSegment($event) {
    console.log("Chosen segment " + $event.value);
    //update current view & wallet balance
    this.currentView = $event.value;
  }
  // generateChart(targetValue: number) {
  //   //init necess. control variables
  //   // this.chartLabels= [0,1,2,3,4,5]; //initial array
  //   this.isBurstTextHidden = true;
  //   this.isTimerHidden = true;
  //   this.isChartHidden = false;
  //   this.chartData[0].hidden = false;
  //   this.chartData[0].data = [1];
  //   // this.chartLabels= [0,1];
  //   this.chartLabels = [0, 1];

  //   this.multiplierDisplay = 1;
  //   this.finalValue = 0; //init as 0 first, to update later.

  //   var startTime = Date.now();
  //   var startValue = 1;
  //   var increment = 0.012;
  //   var currValue = startValue + increment;

  //   let interval = setInterval(() => {
  //     var targetNumber = targetValue; //store received target in local var
  //     this.chartData[0].data.push(currValue);
  //     var currentTime = Date.now();
  //     //divide by milliseconds
  //     var secondsToPush = (currentTime - startTime) / 1000;
  //     this.chartLabels.push(secondsToPush.toFixed(2));

  //     this.chart.refresh();
  //     currValue += increment;
  //     this.multiplierDisplay = currValue;
  //     // console.log("Current value " +currValue);
  //     // console.log("target value " +targetNumber);

  //     increment = this.updateIncrement(currValue);
  //     if (currValue >= 1.99) {
  //       this.isArrowHidden = false;
  //     }
  //     if (currValue + increment >= targetNumber) {
  //       currentTime = Date.now();
  //       this.chartData[0].data.push(targetNumber);
  //       secondsToPush = (currentTime - startTime) / 1000;
  //       this.chartLabels.push(secondsToPush.toFixed(2));
  //       clearInterval(interval);

  //       this.displayBurst(targetNumber);
  //       this.isChartHidden = true;
  //       this.isArrowHidden = true;
  //       this.chartData[0].hidden = this.isChartHidden;
  //       this.chart.refresh();
  //     }
  //   }, 100)

  // }

  // async displayBurst(targetNumber: number) {
  //   this.finalValue = targetNumber;
  //   this.isBurstTextHidden = false;
  //   await this.delay(3000);
  //   //where to start countdown timer
  //   this.startCountdownTimer(10);
  // }

  // async startCountdownTimer(secondsToCount: number) {
  //   this.isBurstTextHidden = true;
  //   this.isTimerHidden = false;
  //   this.count = secondsToCount;
  //   var noOfCounts = (this.count * 10)

  //   this.countDown = timer(0, 100).pipe(
  //     take(noOfCounts),
  //     map(() => (this.count -= 0.1).toFixed(1))
  //   );
  //   await this.delay((this.count * 1000) + 700);
  //   // this.generateChart(Math.max(1.01, Math.random()*10));

  // }
  // countDown;
  // count = 10.0;
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  cValue(event, slider){
    console.log(" test here " +event.value);
    // slider.destroy();

  }
  // updateIncrement(currValue: number) {
  //   if (currValue >= 10.0) {
  //     return 0.200;
  //   }
  //   else if (currValue >= 9.5) {
  //     return 0.185;
  //   }
  //   else if (currValue >= 9.0) {
  //     return 0.170;
  //   }
  //   else if (currValue >= 8.5) {
  //     return 0.155;
  //   }
  //   else if (currValue >= 8.0) {
  //     return 0.140;
  //   }
  //   else if (currValue >= 7.5) {
  //     return 0.130;
  //   }
  //   else if (currValue >= 7.0) {
  //     return 0.120;
  //   }
  //   else if (currValue >= 6.5) {
  //     return 0.110;
  //   }
  //   else if (currValue >= 6.0) {
  //     return 0.100;
  //   }
  //   else if (currValue >= 5.5) {
  //     return 0.095;
  //   }
  //   else if (currValue >= 5.0) {
  //     return 0.085;
  //   }
  //   else if (currValue >= 4.5) {
  //     return 0.070;
  //   }
  //   else if (currValue >= 4.0) {
  //     return 0.060;
  //   }
  //   else if (currValue >= 3.5) {
  //     return 0.054;
  //   }
  //   else if (currValue >= 3.0) {
  //     return 0.045;
  //   }
  //   else if (currValue >= 2.5) {
  //     return 0.0380;
  //   }
  //   else if (currValue >= 2) {
  //     return 0.0360;
  //   }
  //   else if (currValue >= 1.8) {
  //     return 0.0300;
  //   }
  //   else if (currValue >= 1.5) {
  //     return 0.027;
  //   }
  //   else if (currValue >= 1.3) {
  //     return 0.0235;
  //   }
  //   // else if (currValue >= 1.25){
  //   //   return 0.022;
  //   // }
  //   else if (currValue >= 1.2) {
  //     return 0.02;
  //   }
  //   // else if (currValue >= 1.2){
  //   //   return 0.018;
  //   //}
  //   else if (currValue >= 1.1) {
  //     return 0.015;
  //   }

  //   else return 0.012;
  // }

}
