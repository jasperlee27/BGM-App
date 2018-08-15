import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
import * as io from 'socket.io-client';
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
  countDown;
  count = 10.0;
  socket: SocketIOClient.Socket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isArrowHidden = true;
    this.socket = io.connect('http://178.128.50.224:3001');
    console.log("socket for hashing conencted");
    this.chartData = [
      { data: [], label: 'Hash Rate', pointRadius: 0, hidden: true, borderWidth: 6 },
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
          //   type: 'time',
          //   time: {
          //     unit: 'month',
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
            fontColor: "white",
            display: false,
            fontSize: 14,
            // stepSize:0.01,
            // callback: function(tick, index, array) {
            //   return (index % 20) ? "" : parseFloat(tick).toFixed(0);
            // },
            // autoSkip: true,
            // maxTicksLimit: 3,
            maxRotation: 0,
            minRotation: 0,
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
    this.chartData[0].data = [1];
    this.chartLabels = [0]
    this.multiplierDisplay = 1;
    this.finalValue = 0; //init as 0 first, to update later.
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;
    this.chartData[0].data = [1];
    this.chartLabels = [0, 1];
    //CODE FOR SOCKET//
    this.messages = new Array();
    this.socket.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });
    //emit to server
    this.socket.emit('chat message', {
      msg: 'Client to server, can you hear me server?'
    });

    this.socket.on('Game2', (data: any) => {
      // console.log(JSON.parse(data));
      var receivedData = JSON.parse(data);
      console.log("Received data type  " + receivedData.type);
      this.chart.refresh();
      if (receivedData.type === 'game') {
        this.multiplierDisplay= receivedData.number;
        this.chartData[0].data.push(receivedData.number);
        this.chartLabels.push(Date.now());
        // let interval = setInterval(() => {
          
        // }, 100)
      }

      if (receivedData.type != "busted") {
        console.log("Received data type  " + receivedData.number);
      }
      // this.socket.emit('event3', {
      //   msg: 'Yes, its working for me!!'
      // });
    });

    this.socket.on('Game3', (data: any) => {
      console.log(data.msg);
    });
    // this.generateChart(33.58);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HashingPage');
  }

  generateChart(targetValue: number) {
    //init necess. control variables
    // this.chartLabels= [0,1,2,3,4,5]; //initial array
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;
    this.isChartHidden = false;
    this.chartData[0].hidden = false;
    this.chartData[0].data = [1];
    // this.chartLabels= [0,1];
    this.chartLabels = [0, 1];

    this.multiplierDisplay = 1;
    this.finalValue = 0; //init as 0 first, to update later.

    var startTime = Date.now();
    var startValue = 1;
    var increment = 0.012;
    var currValue = startValue + increment;

    let interval = setInterval(() => {
      var targetNumber = targetValue; //store received target in local var
      this.chartData[0].data.push(currValue);
      var currentTime = Date.now();
      //divide by milliseconds
      var secondsToPush = (currentTime - startTime) / 1000;
      this.chartLabels.push(secondsToPush.toFixed(2));

      this.chart.refresh();
      currValue += increment;
      this.multiplierDisplay = currValue;
      // console.log("Current value " +currValue);
      // console.log("target value " +targetNumber);

      increment = this.updateIncrement(currValue);
      if (currValue >= 1.99) {
        this.isArrowHidden = false;
      }
      if (currValue + increment >= targetNumber) {
        currentTime = Date.now();
        this.chartData[0].data.push(targetNumber);
        secondsToPush = (currentTime - startTime) / 1000;
        this.chartLabels.push(secondsToPush.toFixed(2));
        clearInterval(interval);

        this.displayBurst(targetNumber);
        this.isChartHidden = true;
        this.isArrowHidden = true;
        this.chartData[0].hidden = this.isChartHidden;
        this.chart.refresh();
      }
    }, 100)

  }

  async displayBurst(targetNumber: number) {
    this.finalValue = targetNumber;
    this.isBurstTextHidden = false;
    await this.delay(3000);
    //where to start countdown timer
    this.startCountdownTimer(10);
  }

  async startCountdownTimer(secondsToCount: number) {
    this.isBurstTextHidden = true;
    this.isTimerHidden = false;
    this.count = secondsToCount;
    var noOfCounts = (this.count * 10)

    this.countDown = timer(0, 100).pipe(
      take(noOfCounts),
      map(() => (this.count -= 0.1).toFixed(1))
    );
    await this.delay((this.count * 1000) + 700);
    // this.generateChart(Math.max(1.01, Math.random()*10));

  }
  // countDown;
  // count = 10.0;
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  updateIncrement(currValue: number) {
    if (currValue >= 10.0) {
      return 0.200;
    }
    else if (currValue >= 9.5) {
      return 0.185;
    }
    else if (currValue >= 9.0) {
      return 0.170;
    }
    else if (currValue >= 8.5) {
      return 0.155;
    }
    else if (currValue >= 8.0) {
      return 0.140;
    }
    else if (currValue >= 7.5) {
      return 0.130;
    }
    else if (currValue >= 7.0) {
      return 0.120;
    }
    else if (currValue >= 6.5) {
      return 0.110;
    }
    else if (currValue >= 6.0) {
      return 0.100;
    }
    else if (currValue >= 5.5) {
      return 0.095;
    }
    else if (currValue >= 5.0) {
      return 0.085;
    }
    else if (currValue >= 4.5) {
      return 0.070;
    }
    else if (currValue >= 4.0) {
      return 0.060;
    }
    else if (currValue >= 3.5) {
      return 0.054;
    }
    else if (currValue >= 3.0) {
      return 0.045;
    }
    else if (currValue >= 2.5) {
      return 0.0380;
    }
    else if (currValue >= 2) {
      return 0.0360;
    }
    else if (currValue >= 1.8) {
      return 0.0300;
    }
    else if (currValue >= 1.5) {
      return 0.027;
    }
    else if (currValue >= 1.3) {
      return 0.0235;
    }
    // else if (currValue >= 1.25){
    //   return 0.022;
    // }
    else if (currValue >= 1.2) {
      return 0.02;
    }
    // else if (currValue >= 1.2){
    //   return 0.018;
    //}
    else if (currValue >= 1.1) {
      return 0.015;
    }

    else return 0.012;
  }

}
