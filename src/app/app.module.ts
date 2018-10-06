import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TreeDiagram } from 'angular2-tree-diagram';
import { OrgChartModule } from 'ng-org-chart';
import { TreeTableModule } from "ng-treetable";
import { RoulettePage } from '../pages/roulette/roulette';
import { BiddingPage } from '../pages/bidding/bidding';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { WalletPage } from '../pages/wallet/wallet';
import { StreamPage } from '../pages/stream/stream';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashLogoPage } from '../pages/splash-logo/splash-logo';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HashingPage } from '../pages/hashing/hashing';
import { TrehuntPage } from '../pages/trehunt/trehunt';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { InnerWalletComponent } from '../components/inner-wallet/inner-wallet';
import { TwoFacAuthPage } from '../pages/two-fac-auth/two-fac-auth';
import { HomePage } from '../pages/home/home';
import { GlobalAuthProvider } from '../providers/global-auth/global-auth';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { SlotsdrawPage } from '../pages/slotsdraw/slotsdraw';
import { DataProvider } from '../providers/data/data';
import { DummyChatPage } from '../pages/dummy-chat/dummy-chat';
import { SlotsDrawBtcPage } from '../pages/slots-draw-btc/slots-draw-btc';
import { ToggleTwoFaPage } from '../pages/toggle-two-fa/toggle-two-fa';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NewModalPage } from '../pages/new-modal/new-modal';
import { CommTreePage } from '../pages/comm-tree/comm-tree';


@NgModule({
  declarations: [
    MyApp,
    ProgressBarComponent,
    InnerWalletComponent,
    RoulettePage,
    TrehuntPage,
    SlotsdrawPage,
    SlotsDrawBtcPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    SplashLogoPage,
    LoginPage,
    HomePage,
    TwoFacAuthPage,
    ToggleTwoFaPage,
    QrCodePage,
    TabsPage,
    WalletPage,
    StreamPage,
    DummyChatPage,
    NewModalPage,
    CommTreePage,
  ],
  imports: [
    BrowserModule,
    // TreeDiagram,
    OrgChartModule,
    TreeTableModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RoulettePage,
    TrehuntPage,
    SlotsdrawPage,
    SlotsDrawBtcPage,
    BiddingPage,
    HashingPage,
    ContactPage,
    QrCodePage,
    SplashLogoPage,
    LoginPage,
    HomePage,
    TwoFacAuthPage,
    ToggleTwoFaPage,
    WalletPage,
    TabsPage,
    StreamPage,
    DummyChatPage,
    NewModalPage,
    CommTreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    NativeAudio,
    SmartAudioProvider,
    GlobalAuthProvider,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule { }
