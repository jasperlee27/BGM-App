import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { timer } from 'rxjs/observable/timer'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';
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
  private resetGraph: boolean = false;
  countDown;
  count = 10.0;
  walletType = 'investment';
  refreshIcon = 'refresh';
  @ViewChild(BaseChartDirective) Game2Chart: any;

  apps: any = {
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
        name: 'Snapchat',
        price: 'GET'
      },
      {
        time: '10/8 0900',
        name: 'Instagram',
        price: 'OPEN'
      }
    ],
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
  }

  getItems(type: any) {
    console.log("Call get items");
    return this.apps[type];
  }
}
