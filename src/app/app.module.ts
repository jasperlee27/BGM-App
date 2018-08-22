import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { RoulettePage } from '../pages/roulette/roulette';
import { BiddingPage } from '../pages/bidding/bidding';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { WalletPage } from '../pages/wallet/wallet';
import { StreamPage } from '../pages/stream/stream';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashLogoPage } from '../pages/splash-logo/splash-logo';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HashingPage } from '../pages/hashing/hashing';
import { TrehuntPage } from '../pages/trehunt/trehunt';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { TwoFacAuthPage } from '../pages/two-fac-auth/two-fac-auth';
import { HomePage } from '../pages/home/home';
import { GlobalAuthProvider } from '../providers/global-auth/global-auth';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { SlotsdrawPage } from '../pages/slotsdraw/slotsdraw';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    ProgressBarComponent,
    RoulettePage,
    TrehuntPage,
    SlotsdrawPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    SplashLogoPage,
    LoginPage,
    HomePage,
    TwoFacAuthPage,
    TabsPage,
    WalletPage,
    StreamPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
			platforms: {
				ios: {
					scrollPadding: false,
					scrollAssist: false
        },
        android:{
          scrollPadding: false,
					scrollAssist: false
        }
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RoulettePage,
    TrehuntPage,
    SlotsdrawPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    SplashLogoPage,
    LoginPage,
    HomePage,
    TwoFacAuthPage,
    WalletPage,
    TabsPage,
    StreamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    NativeAudio,
    SmartAudioProvider,
    GlobalAuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
