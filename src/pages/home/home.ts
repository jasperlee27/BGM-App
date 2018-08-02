import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
// import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  displayStory: any;
  storyImage: any;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getNews(){
    console.log("button is working fine");
    let path = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=bc62663fa4ac4c369f426682110037c2';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
            let responseData = data;
            console.log(responseData);
            this.displayStory=responseData.articles[0].description;
            this.storyImage=responseData.articles[0].urlToImage;
        },
        err => {
            console.log('error in getting news');
        });

  }
  logout(){
    console.log("logout is working fine");
    //to fix logout
    // this.navCtrl.pop();
    // this.navCtrl.popToRoot();
    // this.navCtrl.last()
    // this.navCtrl.setRoot(LoginPage).then(res => {
      // if success push the first page in line
      // this.navCtrl.push(LoginPage);
    // });
    // this.navCtrl.setRoot(LoginPage);
  }
}
