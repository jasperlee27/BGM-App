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

import { ScreenOrientation } from '@ionic-native/screen-orientation';
// import { CommTreePage } from '../pages/comm-tree/comm-tree';


declare var testVar;
declare function init(): any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  isCordova;
  isAndroid;
  // rootPage:any = TabsPage;
  // platform: Platform;

  constructor(private screenOrientation: ScreenOrientation, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, modalCtrl: ModalController, smartAudio: SmartAudioProvider, private nativeAudio: NativeAudio) {
    

    platform.ready().then(() => {
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#000000');
      splashScreen.hide();
      // this.isCordova = platform.is("cordova");
      // this.isAndroid = platform.is("android");
      // console.log("value of cordova " + this.isCordova +" value  of android is " + this.isAndroid);
      // console.log("screen orientation " + this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      // console.log("screen orientation " + this.screenOrientation.ORIENTATIONS.PORTRAIT);
      // if (this.isAndroid) {
      //   console.log("screen should be locked to prtrait");
      //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      // }
      
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      smartAudio.preload('tabSwitch', 'assets/audio/clickSound.mp3', 'simple');
      smartAudio.preload('slotcomplete', 'assets/audio/SlotComplete.wav', 'simple');
      smartAudio.preload('startslot', 'assets/audio/StartSlot.mp3', 'simple');
      smartAudio.preload('tabSwitch2', 'assets/audio/clickSound.mp3', 'complex');
      smartAudio.preload('game2explode', 'assets/audio/game2xploded.mp3', 'simple');
      smartAudio.preload('game3countdown', 'assets/audio/game3Countdown.wav', 'simple');
    })
  }
}
