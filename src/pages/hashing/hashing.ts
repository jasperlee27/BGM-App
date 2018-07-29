import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseChartDirective } from '../../../node_modules/ng2-charts';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chartData=[
      { data: [], label: 'Actual Volume ETB', pointRadius: 0},
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
    this.chartData[0].data=[1];
    this.chartLabels= [0];
    this.multiplier = 1;
    var startValue = 1;
    var increment = 0.01;
    var currValue = startValue + increment;
    var startTime = Date.now();

    let interval = setInterval(()=>{
      var targetNumber = 5.0;
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
      if(currValue + increment >= targetNumber) clearInterval(interval);
    },100)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HashingPage');
  }

}
