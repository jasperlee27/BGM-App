import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import 'chartjs-plugin-streaming';
import { getQueryValue } from '@angular/core/src/view/query';
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
  
  private datamap: any;

  datasets: any[] = 
      [
      {data: [], fill:false, label:'BitCoin'},
      {data: [], showLine:false, pointRadius:5, label:'Short'}, 
      {data: [], showLine:false, pointRadius:5, label:'Long'}
     
    ];

  options: any = {
    plugins: {

      streaming: {
        onRefresh: function(chart: any) {
          this.datamap = new Map<Number,Number>();
          this.datamap.set(0,0);
          var count = 0;
          var iteration = 0; 
          var lineNo = 0;
          chart.data.datasets.forEach(function(dataset: any) {

            if  (count == 0){
              iteration=Math.random()*10
            }

            else{
              
            }

            var currDate = Date.now();
          //  var count = this.getYValue(lineNo, iteration, this.datamap);
            // var count = Math.random();
            dataset.data.push({
              x: currDate,
              y: iteration,
            });
            count++;
          });
        },
        delay: 2000,
        frameRate: 30,

      }},
    scales: {

      xAxes: [{

        type: 'realtime'

      }]

    }
    
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  private getYValue(lineNo, iteration, datamap){
    if (lineNo === 0){
      var value= Math.random()
      datamap.set(iteration, value)
      return value;
    }
    
    else {
      return datamap.get(iteration);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
  }

  
}
