import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/';
import { MyApp } from './app.component';

import { RoulettePage } from '../pages/roulette/roulette';
import { BiddingPage } from '../pages/bidding/bidding';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { WalletPage } from '../pages/wallet/wallet';
import { StreamPage } from '../pages/stream/stream';
import { TabsPage } from '../pages/tabs/tabs';


import { ChartsModule } from 'ng2-charts/ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HashingPage } from '../pages/hashing/hashing';
import { TrehuntPage } from '../pages/trehunt/trehunt';

@NgModule({
  declarations: [
    MyApp,
    // RoulettePage,
    TrehuntPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    HomePage,
    TabsPage,
    WalletPage,
    StreamPage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // RoulettePage,
    TrehuntPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    HomePage,
    WalletPage,
    TabsPage,
    StreamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
