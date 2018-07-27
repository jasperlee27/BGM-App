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
  @ViewChild(BaseChartDirective) baseChart: any;

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
      { // KT
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#B094FD',
        borderWidth: '2',
        pointBackgroundColor: '#B094FD',
        pointBorderColor: '#B094FD',
        pointHoverBackgroundColor: '#B094FD',
        pointHoverBorderColor: '#B094FD'
      },
      { // PPT1
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#FFEB3B',
        borderWidth: '2',
        pointBackgroundColor: '#FFEB3B',
        pointBorderColor: '#FFEB3B',
        pointHoverBackgroundColor: '#FFEB3B',
        pointHoverBorderColor: '#FFEB3B'
      },
      { // PPT2
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#F4C100',
        borderWidth: '2',
        pointBackgroundColor: '#F4C100',
        pointBorderColor: '#F4C100',
        pointHoverBackgroundColor: '#F4C100',
        pointHoverBorderColor: '#F4C100'
      },
      { // PPT3
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#AE9C00',
        borderWidth: '2',
        pointBackgroundColor: '#AE9C00',
        pointBorderColor: '#AE9C00',
        pointHoverBackgroundColor: '#AE9C00',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // PPT4
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#F48FB1',
        borderWidth: '2',
        pointBackgroundColor: '#F48FB1',
        pointBorderColor: '#F48FB1',
        pointHoverBackgroundColor: '#F48FB1',
        pointHoverBorderColor: '#F48FB1'
      },
      { // PPT5
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#CA7B80',
        borderWidth: '2',
        pointBackgroundColor: '#CA7B80',
        pointBorderColor: '#CA7B80',
        pointHoverBackgroundColor: '#CA7B80',
        pointHoverBorderColor: '#CA7B80'
      },
      { // PPT6
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#C80043',
        borderWidth: '2',
        pointBackgroundColor: '#C80043',
        pointBorderColor: '#C80043',
        pointHoverBackgroundColor: '#C80043',
        pointHoverBorderColor: '#C80043'
      },
      { // PPT123
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#F47300',
        borderWidth: '2',
        pointBackgroundColor: '#F47300',
        pointBorderColor: '#F47300',
        pointHoverBackgroundColor: '#F47300',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // PPT456
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#F2028F',
        borderWidth: '2',
        pointBackgroundColor: '#F2028F',
        pointBorderColor: '#F2028F',
        pointHoverBackgroundColor: '#F2028F',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // ST1
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#0288D1',
        borderWidth: '2',
        pointBackgroundColor: '#0288D1',
        pointBorderColor: '#0288D1',
        pointHoverBackgroundColor: '#0288D1',
        pointHoverBorderColor: '#0288D1'
      },
      { // ST2
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#7B0090',
        borderWidth: '2',
        pointBackgroundColor: '#7B0090',
        pointBorderColor: '#7B0090',
        pointHoverBackgroundColor: '#7B0090',
        pointHoverBorderColor: '#7B0090'
      },
      { // PSASG
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#154774',
        borderWidth: '2',
        pointBackgroundColor: '#154774',
        pointBorderColor: '#154774',
        pointHoverBackgroundColor: '#154774',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
  
    this.chartData = [
      { data: this.myDataArray, label:'PSA' },
      // { data: [17200,2100,20123,32123], label:'PSA' },
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
      legend: {
        position: 'bottom',
        onClick: (e) => e.stopPropagation(),
        labels: {
          fontFamily: 'Open Sans',
          usePointStyle: true,
          fontSize: 14,
          filter: (legendItem, chartData) => {
            return !this.chartData[legendItem.datasetIndex].hidden;
          }
        }
      },
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

  thisChartUpdate(){
    console.log("click button lets go");
    //this.chartData = [];
    this.myDataArray = [Math.random(),Math.random(),Math.random(), Math.random()];
    this.chartData = [
      { data: this.myDataArray, label:'PSA' },
      // { data: [17200,2100,20123,32123], label:'PSA' },
    ];
    
   // this.chartData.push(this.myDataArray);
    // console.log(this.myDataArray);
    // setTimeout(() => {
    //   if (this.baseChart) {
    //     // this.baseChart.update();
    //     console.log("refreshed");
    //   }
    // }, 50);
      console.log("LABEL HERE " + this.chartData[0].label);
      this.chartLabels.push('new label: ' + Math.random()); // add new label at end
      this.chartLabels.splice(0, 1); // remove first label
      console.log(this.chartData.data);
      this.chartData[0].data.push(Math.random()); // add new data at end
      this.chartData[0].data.splice(0, 1); // remove first data point
      
      // this.baseChart.update();
  }
}
