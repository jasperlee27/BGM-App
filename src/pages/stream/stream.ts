import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import 'chartjs-plugin-streaming';
import { getQueryValue } from '@angular/core/src/view/query';
import { BaseChartDirective } from '../../../node_modules/ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
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
  
  isGameTime: boolean;
  countDownGame3;
  countDownBet3;
  count = 30.0;
  boughtIntoGame3: boolean = false;
  roundBetType;
  roundFinalPrice;
  game3BetAmount;
  yDataReceived = Math.random() * 20;
  chartLabels = [];
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
      { // Short
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#3F719E',
        pointBackgroundColor: '#3F719E',
        pointBorderColor: '#3F719E',
        pointRadius: 0,
        pointHoverBackgroundColor: '#3F719E',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // Long
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'red',
        pointBackgroundColor: '#9575CD',
        pointBorderColor: '#9575CD',
        pointRadius: 0,
        pointHoverBackgroundColor: '#9575CD',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

  datasets: any[] =
    [
      { data: [], fill: false, label: 'BitCoin', },
      { data: [], showLine: false, pointRadius: 5, label: 'Short' },
      { data: [], pointRadius: 0, label: 'Long' }

    ];

  options: any = {
    legend: {
      display: false
    },
    animation: {
      duration: 0
    },
    plugins: {
      streaming: {
        refresh: 1000, 
        onRefresh: function (chart: any) {
          var count = 0;

          //     for (var i = 0; i < 2; i++) {
          //       var value = Math.random() * 3000 + 5000;
          //       var currDate = Date.now();
          //       chart.datasets[i].data.push({
          //         x: currDate,
          //         y: value,
          //       });

          //     }
          //   },
          //   delay: 2000,
          //   frameRate: 30,
          // }

          chart.data.datasets.forEach(function (dataset: any) {
            if (count == 0) {
              var value = Math.random() * 3000 + 4500;
            }

            else if (count===3){
              var value = 5000;
            }

            else {
            }
            var currDate = Date.now();
            dataset.data.push({
              x: currDate,
              y: value,
            });
            count++;
          });
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
          suggestedMax: 8000,
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
          min: 0,
          suggestedMax: 8000,
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isGameTime=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
    this.startGame(10);
  }

  startStreaming() {
    let interval = setInterval(() => {
      var btcPrice = this.randomIntRange(4000, 8000);
      this.datasets[0].data.push(btcPrice);
      var currentTime = Date.now();
      this.chartLabels.push(currentTime);
      this.chart.labels.shift();
      this.chart.refresh();
    }, 300)
  }

  randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async startGame(countdown: number){
    this.isGameTime=true;
    console.log("Game 3 Started");
    this.count = countdown;
    var noOfCounts = (this.count*10)

    this.countDownGame3 = timer(0, 100).pipe(
      take(noOfCounts),
      map(()=> (this.count -= 0.1).toFixed(1))
    );

    await this.delay((this.count*1000));
    this.endGame();
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async endGame(){
    //to check if should pop w control variable else will pop all.
    this.isGameTime=false;
    this.roundFinalPrice=Math.random() * 3000 + 4500;
    this.calcRoundResult();

    if (this.boughtIntoGame3){
      this.datasets.pop();
    }
    //update after game end
    this.boughtIntoGame3=false;

    this.chart.refresh();
    console.log("Game 2 Ended");
    this.count = 30;
    var noOfCounts = (this.count*10)

    this.countDownBet3 = timer(0, 100).pipe(
      take(noOfCounts),
      map(()=> (this.count -= 0.1).toFixed(1))
    );


    await this.delay((this.count*1000));
  

    this.startGame(30);
  }

  buyDataset(){
    console.log("Try to add new dataset");
    var newDataset = {
      label: 'Buy Price',
      backgroundColor: 'red',
      borderColor: 'red',
      fill: false,
      lineTension: 0,
      data: [],
      pointRadius: 0
    };
    this.datasets.push(newDataset);
    this.chart.refresh();
  }

  betHigher(){
    this.boughtIntoGame3 = true;
    console.log("bought " + this.game3BetAmount);
    this.buyDataset();
    this.roundBetType='higher';
  }

  betLower(){
    this.boughtIntoGame3 = true;
    console.log("bought " + this.game3BetAmount);
    this.buyDataset();
    this.roundBetType='lower';
  }

  calcRoundResult(){

  }

}
