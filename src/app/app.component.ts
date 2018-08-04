import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular/';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { App } from 'ionic-angular/components/app/app';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashLogoPage } from '../pages/splash-logo/splash-logo';


declare var testVar;
declare function init():any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  // rootPage:any = TabsPage;
  // platform: Platform;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, modalCtrl: ModalController) {
    statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString('#000000');
    // alert(testVar);
    splashScreen.hide();

    platform.ready().then(() => {
      // let splash = modalCtrl.create(SplashLogoPage);
      // splash.present();

      platform.registerBackButtonAction(() => {
        // this.navCtrl.pop();
    });
  })
 }
}
