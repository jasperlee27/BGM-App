import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  chartColors: any;
  chartOptions: any;
  chartData: any;
  chartLabels: any;
  myDataArray = [0,1,2,3];
  @ViewChild(BaseChartDirective) Game2Chart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chartColors = [
      { // BT
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#43A047',
        borderWidth: '2',
        pointBackgroundColor: '#43A047',
        pointBorderColor: '#43A047',
        pointHoverBackgroundColor: '#43A047',
        pointHoverBorderColor: '#43A047'
      },
    ];
  
    this.chartData = [
      { data: this.myDataArray, label:'PSA' },
    ];
  
    this.chartLabels = [];
    this.chartOptions = {
      // animation: {
      //   onProgress: function(animation) {
      //       this.baseChart.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
      //   }
      // },
      responsive: true,
      maintainAspectRatio: false,
      // legend: {
      //   position: 'bottom',
      //   onClick: (e) => e.stopPropagation(),
      //   labels: {
      //     fontFamily: 'Open Sans',
      //     usePointStyle: true,
      //     fontSize: 14,
      //     filter: (legendItem, chartData) => {
      //       return !this.chartData[legendItem.datasetIndex].hidden;
      //     }
      //   }
      // },
      scales: {
        xAxes: [{
          type: 'realtime',
          display: true,
          gridLines: [{
            type: 'realtime',
            display: false
          }]
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 1,
            stepSize: 0.1
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage (%)',
            fontSize: 14,
            fontStyle: 'bold',
            fontFamily: 'Open Sans'
          }
        }],
      },
      elements: {
        line: {
          tension: 0
        }
      },
      tooltips: {
        mode: 'x-axis',
        intersect: false,
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
  
            if (label) {
                label += ': ';
            }
            label += tooltipItem.yLabel.toFixed(2) + " %";
            return label;
          }
        }
      }
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');

    // while(true){
      // this.thisChartUpdate();
    // }
  }

  // thisChartUpdate(){
  //   console.log("click button lets go");
  //   //this.chartData = [];
  //   this.myDataArray = [Math.random(),Math.random(),Math.random(), Math.random()];
  //   this.chartData = [
  //     { data: this.myDataArray, label:'PSA' },
  //     // { data: [17200,2100,20123,32123], label:'PSA' },
  //   ];
  //     console.log("LABEL HERE " + this.chartData[0].label);
  //     this.chartLabels.push('new label: ' + Math.random()); // add new label at end
  //     this.chartLabels.splice(0, 1); // remove first label
  //     console.log(this.chartData.data);
  //     this.chartData[0].data.push(Math.random()); // add new data at end
  //     this.chartData[0].data.splice(0, 1); // remove first data point
      
  //     // this.baseChart.update();
  // }
}
