import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';

/**
 * Generated class for the TrehuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trehunt',
  templateUrl: 'trehunt.html',
})
export class TrehuntPage {
  currBTCtix;
  totalBTCtix;
  currETHtix;
  totalETHtix;
  loadBTCProgress;
  loadETHProgress;
  currBTCprice;
  currETHprice;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currBTCprice= this.randomIntRange(8000,10000);
    this.currETHprice= this.randomIntRange(600,800);
    this.totalBTCtix=8800;
    this.currBTCtix=this.randomIntRange(1,this.totalBTCtix-1);
    // this.currBTCtix=8700;
    this.totalETHtix=660;
    this.currETHtix=this.randomIntRange(1,this.totalETHtix-1);
    // this.currETHtix=650;

    this.loadBTCProgress= ((this.currBTCtix/this.totalBTCtix)*100).toFixed(2);
    this.loadETHProgress= ((this.currETHtix/this.totalETHtix)*100).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrehuntPage');
  }

  ngOnInit(){

  }

  doRefresh(refresher) {
    console.log('Refreshed successfully here', refresher);
    //to update curr BTC/ETH price & curr BTC/ETH tickets sold
    var rangeBTCTixIncrease = this.totalBTCtix - this.currBTCtix;
    var rangeETHTixIncrease = this.totalETHtix - this.currETHtix;

    this.updateBTCETHPrice();
    this.updateCurrBTCtix(rangeBTCTixIncrease);
    this.updateCurrETHtix(rangeETHTixIncrease);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  updateBTCETHPrice(){
    this.currBTCprice= this.randomIntRange(8000,10000);
    this.currETHprice= this.randomIntRange(600,800);
  }

  updateCurrBTCtix(rangeBTCTixIncrease: number){

    if (this.currBTCtix>=this.totalBTCtix){
      console.log("BTC terminating early");
      return;
    }
    
    else{
      var increment = this.randomIntRange(0,500);
      // console.log("increment value " + increment);
      var targetValue = this.currBTCtix + increment;
      console.log("BTC tix target value is " + targetValue);
      
      if (targetValue >= this.totalBTCtix){
        targetValue=this.totalBTCtix;
      }
      
      let interval = setInterval(()=>{
        this.currBTCtix ++;
      this.loadBTCProgress= ((this.currBTCtix/this.totalBTCtix)*100).toFixed(2);
      
      if(this.currBTCtix == targetValue ) clearInterval(interval);
      },50)
    }
  }

  updateCurrETHtix(rangeETHTixIncrease: number){

    if (this.currETHtix>=this.totalETHtix){
      console.log("ETH terminating early");
      return;
    }
    
    else{
      console.log("Entered else loop");
      var increment = this.randomIntRange(0,30);
      // console.log("increment value " + increment);
      var targetValue = this.currETHtix + increment;
      console.log("ETH tix target value is " + targetValue);

      if (targetValue >= this.totalETHtix){
        targetValue=this.totalETHtix;
      }

      let interval = setInterval(()=>{
        this.currETHtix ++;
        this.loadETHProgress= ((this.currETHtix/this.totalETHtix)*100).toFixed(2);
        if(this.currETHtix == targetValue ) clearInterval(interval);
      },100)
    }
  }

  randomIntRange(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
