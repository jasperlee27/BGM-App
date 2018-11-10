import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IEmployee } from '../../../node_modules/ng-org-chart';
import { DataProvider } from '../../providers/data/data';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

/**
 * Generated class for the CommTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comm-tree',
  templateUrl: 'comm-tree.html',
})
export class CommTreePage {
  viewOptions = "table";
  weekStakeComms;
  weekProfitComms;
  aComm = false;
  mComm = false;
  displayMTable = false;
  displayATable = false;
  graph = false;

  input;
  topEmployee: IEmployee = {
    name: 'Admin',
    designation: 'Master',
    subordinates: [
      {
        name: 'Jasper',
        designation: 'Agent',
        subordinates: [
          {
            name: '123',
            designation: 'Agent',
            subordinates: []
          }

        ]
      },
      {
        name: 'Wei Yang',
        designation: 'Agent',
        subordinates: [
          {
            name: 'ABC',
            designation: 'Agent',
            subordinates: []
          }

        ]
      },
      {
        name: 'KK',
        designation: 'Agent',
        subordinates: [
          {
            name: 'Thief',
            designation: 'Agent',
            subordinates: []
          },
          {
            name: 'Police',
            designation: 'Agent',
            subordinates: []
          }
        ]
      },
      {
        name: 'Eric',
        designation: 'Agent',
        subordinates: []
      }
    ]
  };
  // input = [
  //   {
  //     "data": {
  //       "username": "Jasper",
  //       "weekStake": 500,
  //       "stakeComm": 5.0,
  //       "weekProfit": 1000,
  //       "profComm": 0
  //     },
  //     "children": [
  //       {
  //         "data": {
  //           "username": "WeiYang",
  //           "weekStake": 200,
  //           "stakeComm": 1,
  //           "weekProfit": 592,
  //           "profComm": 0
  //         },
  //         "children": [
  //           {
  //             "data": {
  //               "username": "Eric12345678910",
  //               "weekStake": 3241,
  //               "stakeComm": 16.20,
  //               "weekProfit": -92,
  //               "profComm": 9.20
  //             },
  //             "children": [
  //               {
  //                 "data": {
  //                   "username": "Thief1234",
  //                   "weekStake": 573,
  //                   "stakeComm": 2.87,
  //                   "weekProfit": 1337,
  //                   "profComm": 0
  //                 }
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "data": {
  //           "username": "KK's PA",
  //           "weekStake": 300,
  //           "stakeComm": 1.50,
  //           "weekProfit": 192,
  //           "profComm": 0
  //         },
  //         "children": [
  //           {
  //             "data": {
  //               "username": "Police",
  //               "weekStake": 255,
  //               "stakeComm": 1.28,
  //               "weekProfit": -3552,
  //               "profComm": 355.20
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // rawInput: any = JSON.stringify({
  //   "data":
  //     [
  //       {
  //         "data": {
  //           "name": "Andrew",
  //           "gender": "Male"
  //         },
  //         "children": [
  //           {
  //             "data": {
  //               "name": "Andrewson",
  //               "gender": "Male"
  //             },
  //             "children": [
  //               {
  //                 "data": {
  //                   "name": "Eric",
  //                   "gender": "Male"
  //                 }
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  // });

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private auth: GlobalAuthProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommTreePage');
  }

  ionViewWillEnter() {
    this.updateDisplayType();

    this.dataProvider.getIncentive().subscribe(receivedData => {
      // if (data.message !== '') {
      console.log("received " + JSON.stringify(receivedData));
      this.input = receivedData[0].children;
      this.topEmployee = receivedData[1];
      this.weekProfitComms = receivedData[0].totalProfitGain;
      this.weekStakeComms = receivedData[0].totalTranComm;
      // this.auth.setAccId("guest");
      // this.auth.setUsername("guest");
      // this.auth.setGuestLogin(true);
      // this.navCtrl.setRoot(TabsPage);
      // console.log("view as guest only");
      // this.auth.setSessionToken("");
      // this.auth.setAccValue(0);
      // }
    }, (err: HttpErrorResponse) => {
      console.log("Error logged " + err);

      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        // let alert = this.alertCtrl.create({
        //   title: 'ERROR',
        //   subTitle: 'Server cannot be reached at this time. <br> Please try again later',
        //   buttons: ['OK']
        // });

        // alert.present();
        console.log("Server-side error occured.");
      }
    });
  }

  changeEvent(number) {
    console.log("event " + number);
  }

  toggleEvent($event) {
    console.log($event.value);
    if ($event.value === "chart") {
      this.graph = true;
      this.displayATable=false;
      this.displayMTable=false;
    }
    else {
      this.graph = false;
      this.updateDisplayType();
    }
  }

  updateDisplayType() {
    var viewType = this.auth.getAccType();
    if (viewType === 0) {
      this.aComm = true;
      this.displayATable = true;
      this.mComm = false;
      this.displayMTable = false;
    }

    else if (viewType === 1) {
      this.aComm = false;
      this.displayATable = false;
      this.mComm = true;
      this.displayMTable = true;
    }

    else {
      console.log("Admin view is null");
    }
  }
}
