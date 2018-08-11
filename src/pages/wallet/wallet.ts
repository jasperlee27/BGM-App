import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { BaseChartDirective } from 'ng2-charts';

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
  countDown;
  count = 10.0;
  walletType = 'investment';
  refreshIcon = 'refresh';
  walletBalance;
  currentView;

  @ViewChild(BaseChartDirective) Game2Chart: any;

  balances: any = {
    'investment': 12340,
    'game': 750,
  };

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentView = 'investment';
    this.walletBalance = this.balances[this.currentView];
  }

  ngOnInit() {
    // Let's navigate from TabsPage to Page1
    // reset();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  toggleSegment($event) {
    console.log("Chosen segment " + $event.value);
    //update current view & wallet balance
    this.currentView = $event.value;
    this.walletBalance = this.balances[this.currentView];
  }

  getStatements(type: any) {
    console.log("Call get statements");
    return this.statements[type];
  }

  deposit() {
    //check current view & present alert
    if (this.currentView === 'investment') {

    }
    else if (this.currentView === 'game') {

    }
    else {
      //do nothing
      console.log("Entered exception for currentView on deposit");
    }
  }

  withdraw() {
    //check current view & present alert
    if (this.currentView === 'investment') {

    }
    else if (this.currentView === 'game') {

    }
    else {
      //do nothing
      console.log("Entered exception for currentView on deposit");
    }
  }
  refreshWallet() {
    console.log("refreshing wallets");
    //to present alert to refresh wallet
  }
}
