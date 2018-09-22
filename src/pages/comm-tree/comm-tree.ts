import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  input=[
    {
      "data": {
        "name": "Jasper",
        "stake": 500,
        "profit": 1000,
        "totalComm":5000
      },
      "children": [
        {
          "data": {
            "name": "WeiYang",
            "stake": 200,
            "profit": 592,
            "totalComm":2300
          },
          "children": [
            {
              "data": {
                "name": "Eric",
                "stake": 3241,
                "profit": -92,
                "totalComm":10
              },
              "children": [
                {
                  "data": {
                    "name": "Thief",
                    "stake": 573,
                    "profit": 1337,
                    "totalComm":0
                  }
                }
              ]
            }
          ]
        },
        {
          "data": {
            "name": "KK's PA",
            "stake": 300,
            "profit": 192,
            "totalComm":350
          },
          "children": [
            {
              "data": {
                "name": "Police",
                "stake": 255,
                "profit": -3552,
                "totalComm":0
              }
            }
          ]
        }
      ]
    }
  ];

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    // this.input = JSON.parse(this.rawInput);
    console.log('ionViewDidLoad CommTreePage');
  }

}
