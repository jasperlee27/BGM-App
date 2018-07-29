import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseChartDirective } from '../../../node_modules/ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
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
  
  chartColors;
  chartData;
  chartLabels;
  chartOptions;
  multiplier;
  finalValue;
  isChartHidden: boolean;
  isBurstTextHidden: boolean;
  isTimerHidden: boolean;
  countDown;
  count = 10.0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chartData=[
      { data: [], label: 'Hash Rate', pointRadius: 0,  hidden: this.isChartHidden,},
    ];

    this.chartColors=[{ // Actual Volume ETB
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgb(255, 113, 0)',
      pointBackgroundColor: 'rgb(255, 113, 0)',
      // pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: 'rgb(255, 113, 0)', //changing inside hover box legend
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'  //changing hover point color
    }
    ];
    this.chartLabels=[];
    
    this.chartOptions={
      animation: {
        duration: 0
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            lineWidth: 0.5,
            color: "white"
          },
          ticks: {
            fontColor: "white",
            fontSize: 14,
            // stepSize: 1,
            beginAtZero: true
          },
        }],
        yAxes: [{
          ticks: {
            fontColor: "white",
            fontSize: 14,
        
            // stepSize: 1,
            min: 1,
          },
          gridLines: {
            display: true,
            lineWidth:0.5,
            color: "white",
          },
          scaleLabel: {
            display: true,
            labelString: 'Multiplier',
            fontColor: "white",
            fontSize: 14,
            fontStyle: 'bold',
            fontFamily: 'Open Sans'
          }
        }],
      }
    };
  }

  ngOnInit(){
    this.isChartHidden = false;
    this.chartData[0].data=[1];
    this.chartLabels= [0];
    this.multiplier = 1;
    var startValue = 1;
    var increment = 0.01;
    var currValue = startValue + increment;
    var startTime = Date.now();
    this.finalValue = 0; //init as 0 first, to update later.
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;

    let interval = setInterval(()=>{
      var targetNumber = 1.5;
      this.chartData[0].data.push(currValue);
      var currentTime= Date.now();
      //divide by milliseconds
      var secondsToPush = (currentTime - startTime) / 1000;
      this.chartLabels.push(secondsToPush);
      this.chart.refresh();
      currValue += increment;
      this.multiplier=currValue;
      console.log("Current value " +currValue);
      console.log("target value " +targetNumber);

      increment= this.updateIncrement(currValue);

      if(currValue + increment >= targetNumber){
        clearInterval(interval);
        this.displayBurst(targetNumber);
        this.isChartHidden = true;
        this.chartData[0].hidden = this.isChartHidden;
        this.chart.refresh();
      }
    },100)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HashingPage');
  }

  async displayBurst(targetNumber: number){
    this.finalValue = targetNumber;
    this.isBurstTextHidden = false;
    await this.delay(3000);
    this.startCountdownTimer();
  }
  startCountdownTimer(){
    this.isBurstTextHidden = true;
    this.isTimerHidden = false;
    this.countDown = timer(0,1000).pipe(
      take(this.count),
      map(()=> --this.count)
   );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  updateIncrement(currValue: number){
    if (currValue >= 10.0){
      return 0.50;
    }
    else if (currValue >= 9.5){
      return 0.45;
    }
    else if (currValue >= 9.0){
      return 0.40;
    }
    else if (currValue >= 8.5){
      return 0.35;
    }
    else if (currValue >= 8.0){
      return 0.30;
    }
    else if (currValue >= 7.5){
      return 0.25;
    }
    else if (currValue >= 7.0){
      return 0.210;
    }
    else if (currValue >= 6.5){
      return 0.195;
    }
    else if (currValue >= 6.0){
      return 0.180;
    }
    else if (currValue >= 5.5){
      return 0.165;
    }
    else if (currValue >= 5.0){
      return 0.14;
    }
    else if (currValue >= 4.5){
      return 0.125;
    }
    else if (currValue >=4.0){
      return 0.10;
    }
    else if (currValue >= 3.5){
      return 0.085;
    }
    else if (currValue >= 3.0){
      return 0.075;
    }
    else if (currValue >= 2.5){
      return 0.06;
    }
    else if (currValue >= 2.0){
      return 0.04;
    }
    else if (currValue >= 1.8){
      return 0.03;
    }
    else if (currValue >= 1.5){
      return 0.02;
    }
    else if (currValue >= 1.2){
      return 0.015;
    }

    else return 0.01;
  }

}
