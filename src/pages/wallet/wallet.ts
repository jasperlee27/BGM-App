import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';
import { WithdrawModalPage } from '../withdraw-modal/withdraw-modal';

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
  outstandingTopups: Array<any>;

  walletType = 'investment';
  refreshIcon = 'refresh';
  walletBalance;
  currentView;

  @ViewChild(BaseChartDirective) Game2Chart: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private modalCtrl: ModalController, private auth: GlobalAuthProvider, private dataProvider: DataProvider) {
    this.currentView = 'current';
    this.walletBalance = this.auth.getAccValue();
    this.historicalGames = new Array();
    this.outstandingTopups = new Array();
  }

  ngOnInit() {
    this.updateStatementHistory();
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.walletBalance = this.auth.getAccValue();
    this.updateStatementHistory();
    // this.updateOutstandingTopups();
  }

  toggleEvent($event) {
    console.log($event.value);
    //update current view & wallet balance
    this.currentView = $event.value;
    if (this.currentView === 'topups') {

      this.updateOutstandingTopups();
    }

    else {

    }
  }

  getStatements(type: any) {
    // console.log("Call get statements");
    return this.statements[type];
  }


  //driver functions, deposit withdraw
  deposit() {

    if (this.currentView === 'topups') {
      this.gameDeposit();
    }
    else {
      //do nothing
      console.log("Entered exception for currentView on deposit");
    }
  }

  withdraw() {

    let modal = this.modalCtrl.create(WithdrawModalPage);
    modal.present();
    modal.onDidDismiss(data => {
      this.dataProvider.postWalletAmount(this.auth.getAccId()).subscribe(data => {
        this.auth.setAccValue(parseInt(data.accountValue));
        this.walletBalance = this.auth.getAccValue();
      },
        err => {
          console.log(err);
        });

      this.updateOutstandingTopups();
      this.updateStatementHistory();
      console.log("Able to dismiss with data: " + data.foo);
    });

    if (this.currentView === 'topups') {
      // this.gameWithdraw();

    }
    else {
      //do nothing
    
    }
  }


  gameDeposit() {
    let alert = this.alertCtrl.create({
      title: 'Request Deposit',
      message: 'Enter requested amount to deposit',
      inputs: [
        {
          name: 'Amount',
          placeholder: 'e.g 10000 (1 OT = 1 USD)'
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
          text: 'Submit',
          handler: (data) => {
            console.log('Processing transfer ' + data.Amount + ' to game wallet');
            this.dataProvider.postReqDeposit(this.auth.getAccId(), data.Amount).subscribe(resReceived => {
              //receive successfully
              console.log("deposit status " + resReceived.status + " with token: " + resReceived.transaction.token);
              this.updateOutstandingTopups();
              console.log("status " + data.status)
              let alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Your deposit request of ' + data.Amount + ' OT is successful. <br><br>Token ID: <span style="font-size:30px; font-weight:bolder"> ' + resReceived.transaction.token + '</span>'
                +'<br><br>Please include your token ID in "Comments" when transferring to <br>[Bank Acc Details]',
                buttons: ['OK']
              });
              alert.present();
              // alert.onDidDismiss(() => {
              // })

            },
              err => {
                console.log("Error occured while requesting deposit");
                console.log(err);
                let alert = this.alertCtrl.create({
                  title: 'Error',
                  subTitle: 'Error occurred while requesting deposit.<br>Please try again later.',
                  buttons: ['OK']
                });
                alert.present();
              });

            console.log(JSON.stringify(data)); //to see the object
            console.log("Amount input was " + data.Amount);
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

            console.log("Amount input was " + data.Amount);

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

    this.dataProvider.postWalletAmount(this.auth.getAccId()).subscribe(data => {

      //parse response from server

      this.auth.setAccValue(parseInt(data.accountValue));

      this.walletBalance = this.auth.getAccValue();
      //to present alert to refresh wallet

      let alert = this.alertCtrl.create({
        title: 'SUCCESS',
        subTitle: 'Wallet Refreshed',
        buttons: ['OK']
      });

      alert.present();


    },
      err => {
        console.log("Error occured while getting account balance");
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Wallet cannot be refreshed at this time. Please try again.',
          buttons: ['OK']
        });

        alert.present();

        console.log(err);
      });
    // this.navCtrl.setRoot(TabsPage);
    console.log("End getting amount");

  }


  updateStatementHistory() {
    this.historicalGames = new Array();
    this.dataProvider.postPastTransactions(this.auth.getAccId()).subscribe(data => {


      for (var i = 0; i < data.orders.length; i++) {
        //FOR loop iterate all and form objects//
        //--STORE TIME--
        // console.log("timestamp of first order " + data.orders[i].updated);
        //convert time stamp
        var myDate = new Date(data.orders[i].updated);
        var localeDate = myDate.toLocaleString('en-GB');
        // console.log("locale date = " + localeDate);
        var formattedDate = localeDate.substring(0, 5) + ' ' + localeDate.substring(12, 17);
        // console.log("Formatted date: " + formattedDate);

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

      }
    },
      err => {
        console.log("Error occured while getting past transactions");
        console.log(err);
      });
  }


  updateOutstandingTopups() {
    this.outstandingTopups = new Array();
    this.dataProvider.postOutstandingTopups(this.auth.getAccId()).subscribe(data => {
      // receive successfully


      for (var i = 0; i < data.data.length; i++) {
        //FOR loop iterate all and form objects//
        //--STORE TOKEN--
    
        //convert time stamp
        var indToken = data.data[i].token;
        // console.log("this is token " + indToken);
        //--STORE T/Amt--
        var indAmt = "[" + data.data[i].transType.substring(0, 1) + "] " + data.data[i].amount;
        // console.log("this is token " + indAmt);
        //--STORE Status--
        var indStatus = data.data[i].status;

        var singleTrans = {
          "token": indToken.toUpperCase(),
          "amount": indAmt,
          "status": indStatus
        }
        //push array
        this.outstandingTopups.push(singleTrans);
  
      }
    },
      err => {
        console.log("Error occured while getting past top ups");
        console.log(err);
      });
  }
}
