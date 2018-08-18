import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import { SlotsdrawPage } from '../slotsdraw/slotsdraw';
import { DataProvider } from '../../providers/data/data';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

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
  currBTCGameID: string;
  currETHGameID: string;
  currBTCtix;
  totalBTCtix;
  currETHtix;
  totalETHtix;
  loadBTCProgress;
  loadETHProgress;
  currBTCprice;
  currETHprice;
  amountBTCtix: any;
  amountETHtix: any;
  currOwnBTCtix: number;
  currOwnETHtix: number;
  receivedData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private dataProvider: DataProvider, public auth: GlobalAuthProvider) {
    // this.currBTCprice = this.randomIntRange(8000, 10000);
    // this.currETHprice = this.randomIntRange(600, 800);
    this.totalBTCtix = 8800;
    this.totalETHtix = 660;
    this.currBTCGameID = 'BTC027';
    this.currETHGameID = 'ETH005';
    this.currBTCtix = this.randomIntRange(1, this.totalBTCtix - 1);
    this.currETHtix = this.randomIntRange(1, this.totalETHtix - 1);
    this.currOwnBTCtix = this.randomIntRange(0, this.currBTCtix-1);
    this.currOwnETHtix = this.randomIntRange(0, this.currETHtix-1);
    // this.currBTCtix=8700;
    // this.currETHtix=650;

    //can retrieve accId from auth
    console.log("Trehunt successful in retrieving accID " + this.auth.getAccId());

    this.loadBTCProgress = ((this.currBTCtix / this.totalBTCtix) * 100).toFixed(2);
    this.loadETHProgress = ((this.currETHtix / this.totalETHtix) * 100).toFixed(2);
  }

  ionViewDidLoad() {
    //init gen same as update curr details
    this.updateCurrGameDetails();
  }

  ngOnInit() {

  }

  doRefresh(refresher) {
    console.log('Caling refresh successfully here', refresher);
    //to update curr BTC/ETH price & curr BTC/ETH tickets sold
    var rangeBTCTixIncrease = this.totalBTCtix - this.currBTCtix;
    var rangeETHTixIncrease = this.totalETHtix - this.currETHtix;

    // this.updateBTCETHPrice();
    // this.updateCurrBTCtix(rangeBTCTixIncrease,'random');
    // this.updateCurrETHtix(rangeETHTixIncrease,'random');
    this.updateCurrGameDetails();
    setTimeout(() => {
      console.log('Refresh operation has ended');
      refresher.complete();
    }, 2000);
  }

  updateCurrGameDetails(){
    //Making post request here
    this.dataProvider.postTrehuntStatus().subscribe(data => {
      this.receivedData = data;  // pass the response from HTTP Request into local variable receivedData
      console.log("Game 1 HTTP Request refresh status successful");
     
      // console.log("index 0 array: gameid= "  + this.receivedData.data[0].gameid + ', gameName= ' + this.receivedData.data[0].gameName 
      // + ', totalAmount= ' + this.receivedData.data[0].totalAmount + ', currAmount= ' + this.receivedData.data[0].currentAmount + 
      // ', currOrders and updated= ' + this.receivedData.data[0].orders[0].tickets[0] + ' ' +this.receivedData.data[0].orders[0].updated);
  
      //BTC updates
      this.currBTCGameID = this.receivedData.data[1].gameName;
      this.totalBTCtix= this.receivedData.data[1].totalAmount;
      this.currBTCtix = this.receivedData.data[1].currentAmount;
      this.currOwnBTCtix = this.receivedData.data[1].orders.length;
      //ETH updates
      this.currETHGameID = this.receivedData.data[0].gameName;
      this.totalETHtix= this.receivedData.data[0].totalAmount;
      this.currETHtix = this.receivedData.data[0].currentAmount;
      this.currOwnETHtix = this.receivedData.data[0].orders.length;
    },
    err => {
      console.log("Error occured while retrieving game 1 status");
      console.log(err);
    });
  }
  
  viewBTCResults() {
    console.log("Going to BTC lucky draw");
    this.navCtrl.push(SlotsdrawPage);
  }

  viewETHResults() {
    this.navCtrl.push(SlotsdrawPage);
    console.log("Going to ETH lucky draw");
  }
  // not implementing btc eth live price
  // updateBTCETHPrice() {
  //   this.currBTCprice = this.randomIntRange(8000, 10000);
  //   this.currETHprice = this.randomIntRange(600, 800);
  // }

  updateCurrBTCtix(rangeBTCTixIncrease: number, type: string) {

    if (this.currBTCtix >= this.totalBTCtix) {
      console.log("BTC terminating early");
      return;
    }

    else {
      var increment;
      if (type === 'bought') {
        increment = rangeBTCTixIncrease;
      }
      else {
        increment = this.randomIntRange(0, rangeBTCTixIncrease);
      }
      // console.log("increment value " + increment);
      var targetValue = this.currBTCtix + parseInt(increment);

      if (targetValue >= this.totalBTCtix) {
        targetValue = this.totalBTCtix;
      }

      let interval = setInterval(() => {
        this.currBTCtix++;
        this.loadBTCProgress = ((this.currBTCtix / this.totalBTCtix) * 100).toFixed(2);

        if (this.currBTCtix >= targetValue) clearInterval(interval);
      }, 50)
    }
  }

  updateCurrETHtix(rangeETHTixIncrease: number, type: string) {

    if (this.currETHtix >= this.totalETHtix) {
      console.log("ETH terminating early");
      return;
    }

    else {
      var increment;
      if (type === 'bought') {
        increment = rangeETHTixIncrease;
      }
      else {
        increment = this.randomIntRange(0, rangeETHTixIncrease);
      }
      var targetValue = this.currETHtix + parseInt(increment);
      console.log("ETH tix target value is " + targetValue);

      if (targetValue >= this.totalETHtix) {
        targetValue = this.totalETHtix;
      }

      let interval = setInterval(() => {
        this.currETHtix++;
        this.loadETHProgress = ((this.currETHtix / this.totalETHtix) * 100).toFixed(2);
        if (this.currETHtix == targetValue) clearInterval(interval);
      }, 100)
    }
  }
  buyBTCtix() {
    console.log("bought " + this.amountBTCtix + " BTC Tix");
    this.presentAlert(this.amountBTCtix, 'BTC');
    this.currOwnBTCtix += parseInt(this.amountBTCtix);
    this.updateCurrBTCtix(this.amountBTCtix, "bought");
  }

  buyETHtix() {
    console.log("bought " + this.amountETHtix + " ETH Tix");
    this.presentAlert(this.amountETHtix, 'ETH');
    this.currOwnETHtix += parseInt(this.amountETHtix);
    this.updateCurrETHtix(this.amountETHtix, "bought");
  }

  presentAlert(amountTix, type) {
    let alert = this.alertCtrl.create({
      title: 'SUCCESS',
      subTitle: 'You have bought ' + amountTix + ' ' + type + ' tickets',
      message: 'Your tickets: <br>' + this.getListOfTickets(amountTix, type),
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss(() => {
    })
  }
  getListOfTickets(amountTix, type) {

    var stringToReturn = '<ul>'

    for (var i = 0; i < amountTix; i++) {
      stringToReturn += '<li>' + type.toString() + i.toString() + '</li>';
    }

    stringToReturn += '</ul>'
    return stringToReturn;

  }
  randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
