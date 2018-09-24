import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IEmployee } from '../../../node_modules/ng-org-chart';

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
  relationship;
  graph=true;
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
  input = [
    {
      "data": {
        "name": "Jasper",
        "stake": 500,
        "profit": 1000,
        "totalComm": 5000
      },
      "children": [
        {
          "data": {
            "name": "WeiYang",
            "stake": 200,
            "profit": 592,
            "totalComm": 2300
          },
          "children": [
            {
              "data": {
                "name": "Eric",
                "stake": 3241,
                "profit": -92,
                "totalComm": 10
              },
              "children": [
                {
                  "data": {
                    "name": "Thief",
                    "stake": 573,
                    "profit": 1337,
                    "totalComm": 0
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
            "totalComm": 350
          },
          "children": [
            {
              "data": {
                "name": "Police",
                "stake": 255,
                "profit": -3552,
                "totalComm": 0
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

  changeEvent(number){
    console.log("event " + number);
  }

  toggleEvent(value){
    console.log(value);
    if (value==="chart")
    {
      this.graph=true;
    }

    else{
      this.graph=false;
    }
  }
}
