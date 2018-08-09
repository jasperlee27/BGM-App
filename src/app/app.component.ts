import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular/';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { App } from 'ionic-angular/components/app/app';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashLogoPage } from '../pages/splash-logo/splash-logo';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '../../node_modules/@ionic-native/native-audio';


declare var testVar;
declare function init(): any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  // rootPage:any = TabsPage;
  // platform: Platform;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, modalCtrl: ModalController, smartAudio: SmartAudioProvider, private nativeAudio: NativeAudio) {
    // statusBar.overlaysWebView(true);
    // statusBar.backgroundColorByHexString('#000000');
    // alert(testVar);
    // splashScreen.hide();

    platform.ready().then(() => {
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#000000');
      splashScreen.hide();
      // let splash = modalCtrl.create(SplashLogoPage);
      // splash.present();
      this.nativeAudio.preloadComplex('bgmLoop', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {     
          this.nativeAudio.play('bgmLoop');
      });
      // smartAudio.preload('bgmLoop', 'assets/audio/backgroundMusic.mp3', 'complex');
      // smartAudio.loop('bgmLoop');

      // smartAudio.preload('startGame3', 'assets/audio/game3initsound.mp3');
      smartAudio.preload('tabSwitch', 'assets/audio/clickSound.mp3', 'simple');
      // smartAudio.play('tabSwitch');
      smartAudio.preload('tabSwitch2', 'assets/audio/clickSound.mp3', 'complex');
      // smartAudio.loop('tabSwitch2');
      //   platform.registerBackButtonAction(() => {
      //     this.navCtrl.pop();
      // });
    })
  }
}
