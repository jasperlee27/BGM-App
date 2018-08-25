import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare function reset(): any;

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  historicalGames: Array<any>;


  walletType = 'investment';
  refreshIcon = 'refresh';
  walletBalance;
  currentView = 'game';

  @ViewChild(BaseChartDirective) Game2Chart: any;

  // balances: any = {
  //   'investment': 12340,
  //   'game': 750,
  // };

  statements: any = {
    'investment': [
      {
        time: '11/8 1200',
        name: 'Deposit',
        price: '11340'
      },
      {
        time: '10/8 1200',
        name: 'Withdraw',
        price: '-1000'
      },
      {
        time: '9/8 1200',
        name: 'Deposit',
        price: '2000'
      },
    ],
    'game': [
      {
        time: '11/8 1330',
        name: '1. Treasure',
        price: '1000'
      },
      {
        time: '10/8 0900',
        name: '2. Hashing',
        price: '-250'
      }
    ],
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private auth: GlobalAuthProvider, private dataProvider: DataProvider) {
    this.currentView = 'game';
    this.walletBalance = this.auth.getAccValue();
    this.historicalGames = new Array();
  }

  ngOnInit() {

    this.dataProvider.postPastTransactions(this.auth.getAccId()).subscribe(data => {
      //receive successfully

      console.log("Received data here  " + data);
      console.log("Login reponse");


      for (var i = 0; i < data.orders.length; i++) {
        //FOR loop iterate all and form objects//
        //--STORE TIME--
        // console.log("timestamp of first order " + data.orders[i].updated);
        //convert time stamp
        var myDate = new Date(data.orders[i].updated);
        var localeDate = myDate.toLocaleString()
        console.log("locale date = " + localeDate);
        var formattedDate = myDate.getDate() + '/' + (myDate.getMonth() + 1) + localeDate.substring(11, 16);
        console.log("Formatted date: " + formattedDate);

        //--STORE GAME NAME--
        // console.log("" + data.orders[i].gameName);
        //--STORE PROFIT--
        // console.log("profit of first order " + data.orders[i].profit)
        var singleGame = {
          "time": formattedDate,
          "gameID": data.orders[i].gameName,
          "gameNo": data.orders[i].gameNo,
          "profit": parseInt(data.orders[i].profit)
        }
        //push array
        this.historicalGames.push(singleGame);
        // console.log("Display historical game" + this.historicalGames[i].time + " gameID = " + this.historicalGames[i].gameID + " profit = " + this.historicalGames[i].profit);
        // console.log("historical game name size "  + this.historicalGames.length);
      }
      //display array
      // this.auth.setAccId(this.receivedData._id);
      // this.auth.setAccValue(this.receivedData.accountValue);
      // this.auth.setGuestLogin(false);

      // this.auth.setSessionToken(this.receivedData.token);
      // console.log("session Token set as " + this.auth.getSessionToken());

    },
      err => {
        console.log("Error occured while getting past transactions");
        console.log(err);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  ionViewWillEnter() {
  }

  // toggleSegment($event) {
  //   console.log("Chosen segment " + $event.value);
  //   //update current view & wallet balance
  //   this.currentView = $event.value;
  //   this.walletBalance = this.balances[this.currentView];
  // }

  getStatements(type: any) {
    // console.log("Call get statements");
    return this.statements[type];
  }


  //driver functions, deposit withdraw
  deposit() {
    //check current view & present alert
    // if (this.currentView === 'investment') {
    //   this.investmentDeposit();
    // }
    if (this.currentView === 'game') {
      this.gameDeposit();
    }
    else {
      //do nothing
      console.log("Entered exception for currentView on deposit");
    }
  }

  withdraw() {
    //check current view & present alert
    // if (this.currentView === 'investment') {
    //   this.investmentWithdraw();
    // }
    if (this.currentView === 'game') {
      this.gameWithdraw();
    }
    else {
      //do nothing
      console.log("Entered exception for currentView on deposit");
    }
  }

  investmentDeposit() {
    let alert = this.alertCtrl.create({
      title: 'Proceed to deposit?',
      message: 'You will be redirected to the page for deposit',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes click to redirect');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Not opening page');
          }
        }
      ]
    });
    alert.present();
  }

  investmentWithdraw() {
    let alert = this.alertCtrl.create({
      title: 'Withdraw to bank',
      message: 'Enter amount to withdraw',
      inputs: [
        {
          name: 'Amount',
          placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Cancelled withdraw intended ' + data.Amount + ' to bank');
          }
        },
        {
          text: 'Withdraw',
          handler: (data) => {
            console.log('Processing withdraw ' + data.Amount + ' to bank');
            console.log(JSON.stringify(data)); //to see the object
            console.log("Amount input was " + data.Amount);
            this.processInvWithdrawal(data.Amount);
          }
        }
      ]
    });

    alert.present();
  }

  processInvWithdrawal(amount: any) {
    //to insert post call for withdrwal return then
    let alert = this.alertCtrl.create({
      title: 'SUCCESS',
      subTitle: 'Your withdrawal of ' + amount + ' BGM was successful and will be reflected in your bank in 2 days',
      buttons: ['OK']
    });

    alert.present();
  }

  gameDeposit() {
    let alert = this.alertCtrl.create({
      title: 'Deposit Game Wallet',
      message: 'Enter amount to transfer from investment wallet',
      inputs: [
        {
          name: 'Amount',
          placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Cancelled transfer intended ' + data.Amount + ' to game wallet');
          }
        },
        {
          text: 'Transfer',
          handler: (data) => {
            console.log('Processing transfer ' + data.Amount + ' to game wallet');
            console.log(JSON.stringify(data)); //to see the object
            console.log("Amount input was " + data.Amount);
            this.processGameDeposit(data.Amount);
          }
        }
      ]
    });

    alert.present();
  }

  processGameDeposit(amount: any) {
    //to insert post call for withdrwal return then
    let alert = this.alertCtrl.create({
      title: 'SUCCESS',
      subTitle: 'Your game wallet has successfully recharged ' + amount + ' BGM',
      buttons: ['OK']
    });

    alert.present();
  }


  gameWithdraw() {
    let alert = this.alertCtrl.create({
      title: 'Withdraw From Game Wallet',
      message: 'Enter amount to transfer to investment wallet',
      inputs: [
        {
          name: 'Amount',
          placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Cancelled transfer intended ' + data.Amount + ' to investment wallet');
          }
        },
        {
          text: 'Transfer',
          handler: (data) => {
            console.log('Processing transfer ' + data.Amount + ' to investment wallet');
            console.log(JSON.stringify(data)); //to see the object
            console.log("Amount input was " + data.Amount);
            this.processGameWithdrawal(data.Amount);
          }
        }
      ]
    });

    alert.present();
  }

  processGameWithdrawal(amount: any) {
    //to insert post call for withdrwal return then
    let alert = this.alertCtrl.create({
      title: 'SUCCESS',
      subTitle: 'Your transfer of ' + amount + ' BGM to investment wallet was successful',
      buttons: ['OK']
    });

    alert.present();
  }

  refreshWallet() {
    console.log("refreshing wallets");
    //to present alert to refresh wallet
  }
}
