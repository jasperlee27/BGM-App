import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import { SlotsdrawPage } from '../slotsdraw/slotsdraw';
import { DataProvider } from '../../providers/data/data';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { InnerWalletComponent } from '../../components/inner-wallet/inner-wallet';

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
  purchaseBTCGameID: string;
  purchaseETHGameID: string
  walletAmount;
  isGuestLogin;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private dataProvider: DataProvider, public auth: GlobalAuthProvider) {
    // this.currBTCprice = this.randomIntRange(8000, 10000);
    // this.currETHprice = this.randomIntRange(600, 800);
    // this.totalBTCtix = 8800;
    // this.totalETHtix = 660;
    // this.currBTCGameID = 'BTC027';
    // this.currETHGameID = 'ETH005';
    // this.currBTCtix = this.randomIntRange(1, this.totalBTCtix - 1);
    // this.currETHtix = this.randomIntRange(1, this.totalETHtix - 1);
    // this.currOwnBTCtix = this.randomIntRange(0, this.currBTCtix - 1);
    // this.currOwnETHtix = this.randomIntRange(0, this.currETHtix - 1);
    // // this.currBTCtix=8700;
    // this.currETHtix=650;
    this.isGuestLogin = this.auth.getGuestLogin();
    //can retrieve accId from auth
    console.log("Trehunt successful in retrieving accID " + this.auth.getAccId());

  }

  ionViewDidLoad() {
    //init gen same as update curr details
    this.updateCurrGameDetails();
  }

  ionViewWillEnter() {
    console.log("Fired event ionViewWillEnter");
    this.walletAmount = this.auth.getAccValue();
  }

  ngOnInit() {

  }

  doRefresh(refresher) {
    console.log('Caling refresh successfully here', refresher);
    this.updateCurrGameDetails();

    setTimeout(() => {
      console.log('Refresh operation has ended');
      refresher.complete();
    }, 2000);
  }

  updateCurrGameDetails() {
    //Making post request here
    console.log("Updating game status with accId= " + this.auth.getAccId());
    this.dataProvider.postTrehuntStatus(this.auth.getAccId()).subscribe(data => {
      this.receivedData = data;  // pass the response from HTTP Request into local variable receivedData
      console.log("Game 1 HTTP Request refresh status successful");

      // console.log("index 0 array: gameid= "  + this.receivedData.data[0].gameid + ', gameName= ' + this.receivedData.data[0].gameName 
      // + ', totalAmount= ' + this.receivedData.data[0].totalAmount + ', currAmount= ' + this.receivedData.data[0].currentAmount + 
      // ', currOrders and updated= ' + this.receivedData.data[0].orders[0].tickets[0] + ' ' +this.receivedData.data[0].orders[0].updated);

      //BTC updates
      this.currBTCGameID = this.receivedData.data[1].gameName;
      this.purchaseBTCGameID = this.receivedData.data[1]._id;
      this.totalBTCtix = this.receivedData.data[1].totalAmount;
      this.currBTCtix = this.receivedData.data[1].currentAmount;
      this.currOwnBTCtix = this.receivedData.data[1].orders.length;
      //ETH updates
      this.currETHGameID = this.receivedData.data[0].gameName;
      this.purchaseETHGameID = this.receivedData.data[0]._id;
      this.totalETHtix = this.receivedData.data[0].totalAmount;
      this.currETHtix = this.receivedData.data[0].currentAmount;
      this.currOwnETHtix = this.receivedData.data[0].orders.length;


      this.loadBTCProgress = ((this.currBTCtix / this.totalBTCtix) * 100).toFixed(2);
      this.loadETHProgress = ((this.currETHtix / this.totalETHtix) * 100).toFixed(2);
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

  buyBTCtix() {
    console.log("buying " + this.amountBTCtix + " BTC Tix");


    //passing in params & buying tickets
    console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currBTCGameID + " amount to buy= " + this.amountBTCtix);
    this.dataProvider.postBuyGame1(this.auth.getAccId(), this.purchaseBTCGameID, this.amountBTCtix).subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData

      if (parseInt(data.status) === 200) {
        console.log("Game 1 buying btc okay");
        console.log("actual bought tix= " + data.amount);
        console.log("accountValue after posting " + data.accountValue);
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        this.presentAlert(data.tickets.length, 'BTC', data.tickets);
        this.updateCurrGameDetails();
      }
    },
      err => {
        console.log("Error occured while buying BTC tickets");
        console.log(err);
        this.presentErrorAlert();
      });
    // this.currOwnBTCtix += parseInt(this.amountBTCtix);

    // this.updateCurrBTCtix(this.amountBTCtix, "bought");
  }

  buyETHtix() {
    console.log("buying " + this.amountETHtix + " ETH Tix");


    //passing in params & buying tickets
    console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.purchaseETHGameID + " amount to buy= " + this.amountETHtix);
    this.dataProvider.postBuyGame1(this.auth.getAccId(), this.purchaseETHGameID, this.amountETHtix).subscribe(data => {
      // pass the response from HTTP Request into local variable receivedData

      if (parseInt(data.status) === 200) {
        console.log("Game 1 buying eth okay");
        console.log("actual bought tix= " + data.amount);
        console.log("accountValue after posting " + data.accountValue);
        this.auth.setAccValue(data.accountValue);
        this.walletAmount = this.auth.getAccValue();
        this.presentAlert(data.tickets.length, 'ETH', data.tickets);
        this.updateCurrGameDetails();
      }
    },
      err => {
        console.log("Error occured while buying ETH tickets");
        console.log(err);
        this.presentErrorAlert();
      });
    // console.log("bought " + this.amountETHtix + " ETH Tix");
    // // this.presentAlert(this.amountETHtix, 'ETH');
    // this.currOwnETHtix += parseInt(this.amountETHtix);
    // this.updateCurrETHtix(this.amountETHtix, "bought");
  }


  presentErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'ERROR',
      subTitle: 'Something went wrong',
      message: 'Please try again',
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss(() => {
    })
  }

  presentAlert(amountTix, type, ticketList: String[]) {
    let alert = this.alertCtrl.create({
      title: 'SUCCESS',
      subTitle: 'You have bought ' + amountTix + ' ' + type + ' tickets',
      message: 'Your tickets: <br>' + this.getListOfTickets(ticketList, type),
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss(() => {
    })
  }



  getListOfTickets(ticketList, type) {

    var stringToReturn = '<ul>'

    for (var i = 0; i < ticketList.length; i++) {
      stringToReturn += '<li>' + type.toString() + ticketList[i].toString() + '</li>';
    }

    stringToReturn += '</ul>'
    return stringToReturn;
  }

  randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  //to be deprecated methods
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
}
