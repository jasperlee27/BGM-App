import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { App } from 'ionic-angular/components/app/app';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

declare var testVar;
declare function init():any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  // rootPage:any = TabsPage;
  // platform: Platform;

  constructor(platform: Platform,  app: App) {

    // alert(testVar);

    platform.ready().then(() => {
      // statusBar.styleDefault();
      // splashScreen.hide();

      platform.registerBackButtonAction(() => {
        // this.navCtrl.pop();
    });
  })
 }
}
