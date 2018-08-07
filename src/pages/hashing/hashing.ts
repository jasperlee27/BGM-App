import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';
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
  multiplierDisplay;
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
            display: false,
            lineWidth: 0.5,
            color: "white"
          },
          ticks: {
            fontColor: "white",
            fontSize: 14,
            // stepSize: 1,
            display: false,
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
            display: false,
            lineWidth:0.5,
            color: "white",
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

  ngOnInit(){
    this.isChartHidden = false;
    this.chartData[0].data=[1];
    this.chartLabels= [0];
    this.multiplierDisplay = 1;
    this.finalValue = 0; //init as 0 first, to update later.
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;
    this.chartData[0].data=[1];
    this.chartLabels= [0];
    this.generateChart(1.3);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HashingPage');
  }
  
  generateChart(targetValue: number){
    //init necess. control variables
    this.chartLabels= []; //clear chartlabels
    this.isBurstTextHidden = true;
    this.isTimerHidden = true;
    this.isChartHidden = false;
    this.chartData[0].hidden = this.isChartHidden;
    this.chartData[0].data=[1];
    this.chartLabels= [0];
    this.multiplierDisplay = 1;
    this.finalValue = 0; //init as 0 first, to update later.

    var startTime = Date.now();
    var startValue = 1;
    var increment = 0.012;
    var currValue = startValue + increment;

    let interval = setInterval(()=>{
      var targetNumber = targetValue; //store received target in local var
      this.chartData[0].data.push(currValue);
      var currentTime= Date.now();
      //divide by milliseconds
      var secondsToPush = (currentTime - startTime) / 1000;
      this.chartLabels.push(secondsToPush.toFixed(2));
      this.chart.refresh();
      currValue += increment;
      this.multiplierDisplay=currValue;
      console.log("Current value " +currValue);
      console.log("target value " +targetNumber);

      increment= this.updateIncrement(currValue);

      if(currValue + increment >= targetNumber){
        currentTime= Date.now();
        this.chartData[0].data.push(targetNumber);
        secondsToPush = (currentTime - startTime) / 1000;
        this.chartLabels.push(secondsToPush.toFixed(2));
        clearInterval(interval);
        
        this.displayBurst(targetNumber);
        this.isChartHidden = true;
        this.chartData[0].hidden = this.isChartHidden;
        this.chart.refresh();
      }
    },126)

  }

  async displayBurst(targetNumber: number){
    this.finalValue = targetNumber;
    this.isBurstTextHidden = false;
    await this.delay(3000);
    //where to start countdown timer
    this.startCountdownTimer(10);
  }

  async startCountdownTimer(secondsToCount: number){
    this.isBurstTextHidden = true;
    this.isTimerHidden = false;
    this.count = secondsToCount;
    var noOfCounts = (this.count*10)
    
    this.countDown = timer(0,100).pipe(
      take(noOfCounts),
      map(()=> (this.count -= 0.1).toFixed(1))
    );
    await this.delay((this.count*1000)+700);
    this.generateChart(Math.max(1.01, Math.random()*10));

  }
  // countDown;
  // count = 10.0;
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  updateIncrement(currValue: number){
    if (currValue >= 10.0){
      return 0.300;
    }
    else if (currValue >= 9.5){
      return 0.275;
    }
    else if (currValue >= 9.0){
      return 0.250;
    }
    else if (currValue >= 8.5){
      return 0.225;
    }
    else if (currValue >= 8.0){
      return 0.200;
    }
    else if (currValue >= 7.5){
      return 0.170;
    }
    else if (currValue >= 7.0){
      return 0.150;
    }
    else if (currValue >= 6.5){
      return 0.135;
    }
    else if (currValue >= 6.0){
      return 0.120;
    }
    else if (currValue >= 5.5){
      return 0.105;
    }
    else if (currValue >= 5.0){
      return 0.085;
    }
    else if (currValue >= 4.5){
      return 0.070;
    }
    else if (currValue >=4.0){
      return 0.060;
    }
    else if (currValue >= 3.5){
      return 0.050;
    }
    else if (currValue >= 3.0){
      return 0.040;
    }
    else if (currValue >= 2.5){
      return 0.035;
    }
    else if (currValue >= 2.0){
      return 0.030;
    }
    else if (currValue >= 1.8){
      return 0.025;
    }
    else if (currValue >= 1.5){
      return 0.02;
    }
    else if (currValue >= 1.3){
      return 0.015;
    }

    else return 0.012;
  }

}
