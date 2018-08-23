webpackJsonp([11],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { TabsPage } from '../tabs/tabs';
var LoginPage = /** @class */ (function () {
    function LoginPage(platform, navCtrl, smartAudio, auth, dataProvider, nativeAudio, renderer) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.nativeAudio = nativeAudio;
        this.renderer = renderer;
        this.biddingPage = __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__["a" /* BiddingPage */];
        this.roulettePage = __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__["a" /* RoulettePage */];
        this.twoFApage = __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */];
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        this.loginState = "in";
        this.usernameInput = 'test1';
        this.passwordInput = 'test1';
        this.showInvalidLogin = false;
    }
    // ionViewDidLoad() {
    //   this.platform.ready().then(() => {
    //     this.nativeAudio.preloadComplex('bgmLoopLogin', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {
    //       this.nativeAudio.play('bgmLoopLogin');
    //     });
    //   });
    // }
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.smartAudio.play('startGame3');
        this.smartAudio.play('tabSwitch'); // this.navCtrl.setRoot(TabsPage);
        var usernameToPost = this.usernameInput;
        this.showInvalidLogin = false;
        if (usernameToPost != null) {
            this.auth.setUsername(usernameToPost.toLowerCase());
            console.log("before lower  case " + usernameToPost);
            usernameToPost = usernameToPost.toLowerCase();
            console.log("after lower case " + usernameToPost);
        }
        this.dataProvider.postLogin(usernameToPost, this.passwordInput).subscribe(function (data) {
            //receive successfully
            _this.showInvalidLogin = false;
            _this.receivedData = data; // pass the response from HTTP Request into local variable receivedData
            //parse response from server
            console.log("Login reponse");
            console.log("account info " + _this.receivedData.accountValue);
            console.log("Setting account id as " + _this.receivedData._id);
            console.log("Setting acc balance as  " + _this.receivedData.accountValue);
            _this.auth.setAccId(_this.receivedData._id);
            _this.auth.setAccValue(_this.receivedData.accountValue);
            _this.auth.setGuestLogin(false);
            if (parseInt(_this.receivedData.require2FA) === 0) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.push(_this.twoFApage);
            }
        }, function (err) {
            console.log("Error occured while logging in or not authorized");
            _this.showInvalidLogin = true;
            console.log(err);
        });
        // this.navCtrl.setRoot(TabsPage);
        console.log("login function activated");
    };
    LoginPage.prototype.viewAsGuest = function () {
        // this.navCtrl.setRoot(TabsPage);
        // this.navCtrl.push(this.twoFApage);
        this.auth.setAccId("guest");
        this.auth.setGuestLogin(true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        console.log("view as guest only");
    };
    LoginPage.prototype.showHide = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\login\login.html"*/'<!-- <ion-header> -->\n\n<!-- <ion-navbar> -->\n\n<ion-title>User Log In</ion-title>\n\n<!-- </ion-navbar> -->\n\n<!-- </ion-header> -->\n\n\n\n<ion-content class="loginContent" padding>\n\n  <div class="image-center">\n\n    <ion-img width="200" height="200" src="../assets/imgs/BGM_Logo.png" [@fadeIn]="fadeState" style=background:transparent></ion-img>\n\n  </div>\n\n\n\n  <div [class.invalid-login]="showInvalidLogin">\n\n    <ion-grid>\n\n      <!-- username -->\n\n      <ion-row>\n\n        <ion-col col-12 col-md-8 offset-md-2>\n\n          <ion-item no-lines id="rounded" [@flyInBottomSlow]="fadeState">\n\n            <ion-label floating primary color="secondary">\n\n              <ion-icon name="person"></ion-icon> Username\n\n            </ion-label>\n\n            <ion-input [(ngModel)]="usernameInput" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- password-->\n\n      <ion-row>\n\n        <ion-col col-12 col-md-8 offset-md-2>\n\n          <ion-item no-lines id="rounded" [@flyInBottomSlow]="fadeState">\n\n            <ion-label floating primary color="secondary">\n\n              <ion-icon name="lock"></ion-icon> Password\n\n            </ion-label>\n\n            <ion-input [(ngModel)]="passwordInput" [type]="passwordType" clearOnEdit="false"></ion-input>\n\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" color="secondary" (click)=\'showHide()\'></ion-icon>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <button ion-button (click)="login()" small color="secondary" [@loginFadeIn]="fadeState" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800">LOGIN</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <div class="invalid-login" *ngIf="showInvalidLogin">\n\n        INVALID LOGIN/PASSWORD!\n\n      </div>\n\n\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 text-center>\n\n      <button ion-button small clear color="secondary" [@loginFadeIn]="fadeState" style="color:secondary; font-size:14px; font-weight: 600"\n\n        (click)="viewAsGuest()">View As Guest</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\login\login.html"*/,
            animations: [
                //For login button
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1000ms 2000ms ease-in')
                    ])
                ]),
                //for log in form
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInBottomSlow', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translate3d(0,2000px,0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('3500ms ease-in-out')
                    ])
                ]),
                //For the [password] form
                // trigger('bounceInBottom', [
                //   state('in', style({
                //     transform: 'translate3d(0,0,0)'
                //     })),
                //     transition('void => *', [
                //       animate('3000ms 1000ms ease-in', keyframes([
                //       style({transform: 'translate3d(0,2000px,0)', offset: 0}),
                //       style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
                //       style({transform: 'translate3d(0,0,0)', offset: 1})
                //       ]))
                //     ])
                //   ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('loginFadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1000ms 4500ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream_stream__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hashing_hashing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trehunt_trehunt__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dummy_chat_dummy_chat__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(smartAudio) {
        this.smartAudio = smartAudio;
        // tab1Root = HomePage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__trehunt_trehunt__["a" /* TrehuntPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__hashing_hashing__["a" /* HashingPage */];
        // tab4Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__stream_stream__["a" /* StreamPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__dummy_chat_dummy_chat__["a" /* DummyChatPage */];
    }
    TabsPage.prototype.playTabSwitchound = function () {
        this.smartAudio.play('tabSwitch');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Roulette" tabIcon="flower"></ion-tab> -->\n\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Bidding" tabIcon="pricetag"></ion-tab> -->\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab2Root" tabTitle="Treasure" tabIcon="key"></ion-tab>\n\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab> -->\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab3Root" tabTitle="Hashing" tabIcon="lock"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab4Root" tabTitle="Stream" tabIcon="pulse"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab5Root" tabTitle="Wallet" tabIcon="logo-usd"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BiddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BiddingPage = /** @class */ (function () {
    function BiddingPage(navCtrl, navParams) {
        //can init with call post service leader board
        // this.navCtrl.setRoot(TabsPage);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameNo = '   12337';
        this.walletBallance = 1000;
        this.currentPoolNumber = 2500000;
        this.bidName1 = 'Jasper';
        this.bidValue1 = 4510;
        this.bidName2 = 'KerkWY';
        this.bidValue2 = 4459;
        this.bidName3 = 'Eric';
        this.bidValue3 = 4427;
        this.bidName4 = 'John';
        this.bidValue4 = 4322;
        this.bidName5 = 'Tom';
        this.bidValue5 = 4239;
        this.noPlayers = 100;
    }
    BiddingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BiddingPage');
    };
    BiddingPage.prototype.bidGame = function () {
        this.updateWalletBallance(-this.betAmount);
        this.updatePoolAmount(+this.betAmount);
        this.updateNoPlayers(+1);
    };
    BiddingPage.prototype.updateNoPlayers = function (amount) {
        var _this = this;
        var targetNumber = this.noPlayers + amount;
        var interval = setInterval(function () {
            _this.noPlayers++;
            if (_this.noPlayers == targetNumber)
                clearInterval(interval);
        }, 500);
    };
    BiddingPage.prototype.updateWalletBallance = function (amount) {
        this.walletBallance += amount;
    };
    BiddingPage.prototype.updatePoolAmount = function (amount) {
        var _this = this;
        var targetNumber = this.currentPoolNumber + amount;
        var interval = setInterval(function () {
            _this.currentPoolNumber++;
            if (_this.currentPoolNumber == targetNumber)
                clearInterval(interval);
        }, 0.1);
        // this.currentPoolNumber += amount;
    };
    BiddingPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        console.log("This is math.random " + Math.round(Math.random() * 1000));
        this.updatePoolAmount(Math.round(Math.random() * 1000));
        this.updateNoPlayers(Math.round(Math.random() * 10));
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    BiddingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bidding',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\bidding\bidding.html"*/'<!--\n\n  Generated template for the BiddingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 1: Live Bidding</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="mycontent" padding>\n\n  \n\n    <div class="row">\n\n        <h6>Game ID:{{gameNo}} </h6> \n\n    </div>\n\n    <br>\n\n    \n\n\n\n    <ion-row justify-content-center align-items-center>\n\n        <h3>Current Pool:</h3>\n\n    </ion-row>\n\n    <div class="amountContainer">\n\n      <ion-row justify-content-center align-items-center class="totalPoolAmount">\n\n          <h1>$ {{currentPoolNumber | number }}</h1>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <ion-segment>\n\n        <div id="playersHeader">\n\n            <h5>No. of Players:</h5>\n\n        </div>\n\n    </ion-segment>\n\n    <ion-row justify-content-center align-items-center>\n\n        <h5>{{noPlayers}}</h5>\n\n    </ion-row>\n\n\n\n    <ion-list>\n\n    <ion-list-header>\n\n     Current Leaderboard\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          1. {{bidName1}}\n\n        </ion-label>\n\n        <div item-content>\n\n          ${{bidValue1 | number}}\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          2. {{bidName2}}\n\n        </ion-label>\n\n        <div item-content>\n\n          ${{bidValue2 | number}}\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          3. {{bidName3}}\n\n        </ion-label>\n\n        <div item-content>\n\n          ${{bidValue3 | number}}\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          4. {{bidName4}}\n\n        </ion-label>\n\n        <div item-content>\n\n          ${{bidValue4 | number}}\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          5. {{bidName5}}\n\n        </ion-label>\n\n        <div item-content>\n\n          ${{bidValue5 | number}}\n\n        </div>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n  <div class="row">\n\n      Balance: {{walletBallance | number}} USD\n\n  </div>\n\n  <div class="row"> \n\n    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="liveBidInputAmount">\n\n              <ion-input type="number" [(ngModel)]="betAmount" placeholder="Amount" [disabled]="disabled"></ion-input>\n\n    </div>\n\n    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" id="spinButton">\n\n            <button ion-button [disabled]="disabled" (click)="bidGame()">BID</button>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content  \n\n        pullingIcon="arrow-dropdown"\n\n        pullingText="Pull to refresh"\n\n        refreshingSpinner="circles"\n\n        refreshingText="Refreshing...">\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\bidding\bidding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */]])
    ], BiddingPage);
    return BiddingPage;
}());

//# sourceMappingURL=bidding.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Content } from ‘@ionic-angular’;
/**
 * Generated class for the DummyChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DummyChatPage = /** @class */ (function () {
    function DummyChatPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.username = this.auth.getUsername();
        this.toolbarFooterColor = 'dark';
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"]('http://178.128.50.224:3006');
        console.log("socket for hashing conencted");
        // this.getMessages().subscribe(message => {
        //   // var msgToPush= JSON.parse(message);
        //   // this.messages.push(message);
        //   console.log("subscribed and after pushing into msgs  " + this.messages);
        // });
        this.messages = new Array();
    }
    DummyChatPage.prototype.ionViewWillEnter = function () {
        this.scrollToBottom();
    };
    DummyChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    DummyChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DummyChatPage');
    };
    DummyChatPage.prototype.ngOnInit = function () {
        // var username = this.auth.getUsername();
        //CODE FOR SOCKET//
        var _this = this;
        this.socket.on('chat message', function (msg) {
            var msgToPush = JSON.parse(msg);
            _this.messages.push(msgToPush);
            _this.scrollToBottom();
            console.log("Original msg: " + msg);
            console.log("parsed msg username: " + msgToPush.username);
            console.log("parsed msg msg: " + msgToPush.msg);
            console.log(_this.messages);
        });
        //emit to server
        var objToSend = { username: this.username, msg: "test json msg message Input" };
        var jsonToSend = JSON.stringify(objToSend);
        this.socket.emit('chat message', jsonToSend);
        this.socket.on('chat message', function (data) {
            // console.log("Parsing JSON sent: " + JSON.parse(data));
            var receivedData = JSON.parse(data);
            console.log("JSON Username " + receivedData.username);
            console.log("JSON message " + receivedData.msg);
            console.log("Received chat message here " + data);
        });
        setTimeout(function () {
            _this.content.scrollToBottom(300); //300ms animation speed
        });
    };
    DummyChatPage.prototype.sendMessage = function () {
        var objToSend = { username: this.username, msg: this.message };
        var jsonToSend = JSON.stringify(objToSend);
        this.socket.emit('chat message', jsonToSend);
        this.message = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], DummyChatPage.prototype, "content", void 0);
    DummyChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dummy-chat',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\dummy-chat\dummy-chat.html"*/'<!--\n  Generated template for the DummyChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chatroom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content padding>\n  <ion-grid>\n    <ion-row *ngFor="let msg of messages">\n      <ion-col col-12>\n        <span class="displayMsg">{{msg.username}}:</span><span [style.color]="username === msg.username ? \'#f3ba2e\' : \'white\'" style="font-size:16px;"> {{msg.msg}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- <ion-col offset-3 col-9 >\n      <span class="user_name"></span><br>\n      <span>{{ msg.msg }}</span> -->\n  <!-- <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div> -->\n  <!-- </ion-col> -->\n\n</ion-content>\n\n<ion-footer no-shadow no-border>\n  <ion-toolbar [color]="toolbarFooterColor">\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input no-lines type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n          SEND\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\dummy-chat\dummy-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], DummyChatPage);
    return DummyChatPage;
}());

//# sourceMappingURL=dummy-chat.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HashingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HashingPage = /** @class */ (function () {
    function HashingPage(navCtrl, navParams, auth, dataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.isLocGameTimerStarted = false;
        this.count = 10.0;
        this.currentView = 'manual';
        this.hashBetType = 'manual';
        this.isArrowHidden = true;
        // this.walletAmount = this.dataProvider.postWalletAmount(this.auth.getAccId);
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]('http://178.128.50.224:3001');
        console.log("socket for hashing conencted");
        this.chartData = [
            { data: [], label: 'Hash Rate', pointRadius: 0, hidden: true, borderWidth: 3 },
        ];
        this.chartColors = [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: "#f3ba2e",
                pointBackgroundColor: "#f3ba2e",
                // pointBorderColor: '#fafafa',
                pointHoverBackgroundColor: 'rgb(255, 113, 0)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)' //changing hover point color
            }
        ];
        this.chartLabels = [];
        this.chartOptions = {
            tooltips: {
                display: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                xAxes: [{
                        // type: 'realtime', 
                        //   time: {
                        //     unit: 'seconds',
                        //     format: 'timeFormat'
                        // },
                        offset: true,
                        display: true,
                        gridLines: {
                            display: false,
                            // lineWidth: 0.5,
                            color: "white"
                        },
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            maxTicksLimit: 3,
                            suggestedMax: 2,
                            fontColor: "white",
                            display: true,
                            fontSize: 10,
                            stepSize: 0.01,
                            maxRotation: 0,
                            minRotation: 0,
                            autoSkip: false,
                            callback: function (value) {
                                if (Number.isInteger(value)) {
                                    return value + 's';
                                }
                                else {
                                    return undefined;
                                }
                            },
                        },
                    }],
                yAxes: [{
                        offset: true,
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            padding: -5,
                            // mirror: true,
                            display: true,
                            // drawTicks: true,
                            stepSize: 0.01,
                            min: 1,
                            maxTicksLimit: 5,
                            suggestedMax: 2,
                            callback: function (value) {
                                if (value >= 40) {
                                    if (value % 20 === 0) {
                                        return value.toFixed(0) + 'x --  ';
                                    }
                                    else {
                                        return undefined;
                                    }
                                }
                                else if (value >= 20) {
                                    if (value % 10 === 0) {
                                        return value.toFixed(0) + 'x --  ';
                                    }
                                    else {
                                        return undefined;
                                    }
                                }
                                else if (value >= 8) {
                                    if (value % 5 === 0) {
                                        return value.toFixed(0) + 'x --  ';
                                    }
                                    else {
                                        return undefined;
                                    }
                                }
                                else if (value % 2 === 0) {
                                    return value.toFixed(0) + 'x --  ';
                                }
                                else if (value === 1) {
                                    return value + 'x --  ';
                                }
                                else {
                                    return undefined;
                                }
                            },
                        },
                        gridLines: {
                            lineWidth: 0.5,
                            display: true,
                            drawTicks: true,
                            color: "white",
                            offsetGridLines: true,
                            tickMarkLength: -6,
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Multiplier',
                            fontColor: "#f3ba2e",
                            fontSize: 14,
                            fontStyle: 'bold',
                            fontFamily: 'roboto'
                        }
                    }],
            }
        };
    }
    HashingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isChartHidden = false;
        // this.chartData[0].data = [1];
        this.chartLabels = [];
        this.multiplierDisplay = 1;
        this.finalValue = 0; //init as 0 first, to update later.
        this.isBurstTextHidden = true;
        this.isTimerHidden = true;
        //CODE FOR SOCKET//
        this.messages = new Array();
        this.socket.on('message-received', function (msg) {
            _this.messages.push(msg);
            // console.log(msg);
            // console.log(this.messages);
        });
        //emit to server
        this.socket.emit('chat message', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socket.on('Game2', function (data) {
            // console.log(JSON.parse(data));
            var receivedData = JSON.parse(data);
            // console.log("Received data type  " + receivedData.type);
            if (receivedData.type === 'GameStart') {
                //one instance
                if (!_this.isLocGameTimerStarted) {
                    _this.isLocGameTimerStarted = true;
                    console.log("START TIMER HERE");
                    _this.timer("start");
                }
                else {
                    //do nth
                }
            }
            else if (receivedData.type === 'game') {
                _this.isTimerHidden = true;
                _this.isBurstTextHidden = true;
                _this.chartData[0].hidden = false;
                _this.isChartHidden = false;
                _this.multiplierDisplay = receivedData.number;
                // this.dataToPush = receivedData.number;
                _this.chartLabels.push(1.01);
                _this.chartData[0].data.push(receivedData.number);
                _this.chart.refresh();
            }
            else if (receivedData.type === "busted") {
                // console.log("Received data type  " + receivedData.type);
                _this.chartData[0].hidden = true;
                _this.isChartHidden = true;
                _this.isBurstTextHidden = false;
                _this.isTimerHidden = true;
                _this.finalValue = parseFloat(receivedData.value).toFixed(2);
                //reset chart and stop timer
                _this.timer("stop");
                _this.isLocGameTimerStarted = false;
                _this.chartLabels = [];
                _this.chartData[0].data = [];
            }
            else if (receivedData.type === "countdown") {
                //log currentGameID here
                _this.currentGameID = receivedData.gameId;
                // console.log("Received type " + receivedData.type + " and stored current game id as " + this.currentGameID);
                _this.chartData[0].hidden = true;
                _this.isChartHidden = true;
                _this.isBurstTextHidden = true;
                _this.isTimerHidden = false;
                _this.timerValue = parseFloat(receivedData.number).toFixed(1);
            }
            else {
                //do nth
            }
            // this.socket.emit('event3', {
            //   msg: 'Yes, its working for me!!'
            // });
        });
        this.socket.on('Game3', function (data) {
            console.log("Receiving game 3 event " + data.msg);
        });
        // let interval = setInterval(() => {
        //   this.chartLabels.push(Date.now());
        //   this.chartData[0].data.push(this.dataToPush);
        //   this.chart.refresh();
        // }, 100)
        // this.generateChart(33.58);
    };
    HashingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HashingPage');
    };
    HashingPage.prototype.ionViewWillEnter = function () {
        this.walletAmount = this.auth.getAccValue();
    };
    HashingPage.prototype.timer = function (action) {
        var _this = this;
        var time = 0;
        if (action === 'start') {
            this.timerInterval = setInterval(function () {
                time++;
                // console.log("Counting timer " + time + "s");
                if (time > 20) {
                    if (time % 20 === 0) {
                        _this.chartLabels.push(time);
                        // console.log("Successfully pushed " + time);
                    }
                }
                if (time > 15) {
                    if (time % 10 === 0) {
                        _this.chartLabels.push(time);
                        // console.log("Successfully pushed " + time);
                    }
                }
                else if (time >= 8) {
                    if (time % 5 === 0) {
                        _this.chartLabels.push(time);
                        // console.log("Successfully pushed " + time);
                    }
                }
                else if (time === 7) {
                    _this.chartLabels.push(time);
                    // console.log("Successfully pushed " + time);
                }
                else if (time === 6) {
                    //skip
                }
                else if (time > 2) {
                    if (time % 2 === 0) {
                        _this.chartLabels.push(time);
                        // console.log("Successfully pushed " + time);
                    }
                }
                else {
                    _this.chartLabels.push(time);
                    // console.log("Successfully pushed " + time);
                }
            }, 1000);
        }
        else {
            console.log("Stopping real timer");
            clearInterval(this.timerInterval);
        }
    };
    HashingPage.prototype.hashManualBet = function () {
        var _this = this;
        console.log("manual betting");
        this.isManualBetDisabled = true;
        //make place bet call
        console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currentGameID + " amount to buy= " + this.hashManualBetAmount);
        this.dataProvider.postBetGame2(this.auth.getAccId(), this.currentGameID, this.hashManualBetAmount).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            // var receivedData= JSON.parse(data);
            console.log("DATA HERE " + data.message);
            console.log("Received return acc Value " + data.accountValue);
            _this.auth.setAccValue(data.accountValue);
            _this.walletAmount = _this.auth.getAccValue();
            if (parseInt(data.status) === 200) {
                // console.log("Game 1 buying btc okay");
                // console.log("actual bought tix= " + data.amount);
                var alert_1 = _this.alertCtrl.create({
                    title: 'SUCCESS',
                    subTitle: 'You have staked ' + _this.hashManualBetAmount + ' for this game',
                    buttons: ['OK']
                });
                alert_1.present();
                alert_1.onDidDismiss(function () {
                });
            }
        }, function (err) {
            console.log("Error occured while buying placing manual hash bet");
            console.log(err);
        });
    };
    HashingPage.prototype.hashManualCout = function () {
        var _this = this;
        this.isManualBetDisabled = false;
        //to do post to cashout
        //make manual cashout call
        console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currentGameID);
        this.dataProvider.postCoutGame2(this.auth.getAccId(), this.currentGameID).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            console.log("Received returned message " + data.message);
            console.log("Received returned multiplier " + data.multiplier);
            console.log("Received returned winning " + data.winning);
            if (parseInt(data.status) === 200) {
                // console.log("Game 1 buying btc okay");
                // console.log("actual bought tix= " + data.amount);
                var alert_2 = _this.alertCtrl.create({
                    title: 'SUCCESS',
                    subTitle: 'You have cashed out ' + parseFloat(data.winning).toFixed(2) + ' for this game',
                    buttons: ['OK']
                });
                alert_2.present();
                alert_2.onDidDismiss(function () {
                });
            }
        }, function (err) {
            console.log("Error occured while buying placing manual hash bet");
            console.log(err);
        });
    };
    HashingPage.prototype.toggleSegment = function ($event) {
        console.log("Chosen segment " + $event.value);
        //update current view & wallet balance
        this.currentView = $event.value;
    };
    // generateChart(targetValue: number) {
    //   //init necess. control variables
    //   // this.chartLabels= [0,1,2,3,4,5]; //initial array
    //   this.isBurstTextHidden = true;
    //   this.isTimerHidden = true;
    //   this.isChartHidden = false;
    //   this.chartData[0].hidden = false;
    //   this.chartData[0].data = [1];
    //   // this.chartLabels= [0,1];
    //   this.chartLabels = [0, 1];
    //   this.multiplierDisplay = 1;
    //   this.finalValue = 0; //init as 0 first, to update later.
    //   var startTime = Date.now();
    //   var startValue = 1;
    //   var increment = 0.012;
    //   var currValue = startValue + increment;
    //   let interval = setInterval(() => {
    //     var targetNumber = targetValue; //store received target in local var
    //     this.chartData[0].data.push(currValue);
    //     var currentTime = Date.now();
    //     //divide by milliseconds
    //     var secondsToPush = (currentTime - startTime) / 1000;
    //     this.chartLabels.push(secondsToPush.toFixed(2));
    //     this.chart.refresh();
    //     currValue += increment;
    //     this.multiplierDisplay = currValue;
    //     // console.log("Current value " +currValue);
    //     // console.log("target value " +targetNumber);
    //     increment = this.updateIncrement(currValue);
    //     if (currValue >= 1.99) {
    //       this.isArrowHidden = false;
    //     }
    //     if (currValue + increment >= targetNumber) {
    //       currentTime = Date.now();
    //       this.chartData[0].data.push(targetNumber);
    //       secondsToPush = (currentTime - startTime) / 1000;
    //       this.chartLabels.push(secondsToPush.toFixed(2));
    //       clearInterval(interval);
    //       this.displayBurst(targetNumber);
    //       this.isChartHidden = true;
    //       this.isArrowHidden = true;
    //       this.chartData[0].hidden = this.isChartHidden;
    //       this.chart.refresh();
    //     }
    //   }, 100)
    // }
    // async displayBurst(targetNumber: number) {
    //   this.finalValue = targetNumber;
    //   this.isBurstTextHidden = false;
    //   await this.delay(3000);
    //   //where to start countdown timer
    //   this.startCountdownTimer(10);
    // }
    // async startCountdownTimer(secondsToCount: number) {
    //   this.isBurstTextHidden = true;
    //   this.isTimerHidden = false;
    //   this.count = secondsToCount;
    //   var noOfCounts = (this.count * 10)
    //   this.countDown = timer(0, 100).pipe(
    //     take(noOfCounts),
    //     map(() => (this.count -= 0.1).toFixed(1))
    //   );
    //   await this.delay((this.count * 1000) + 700);
    //   // this.generateChart(Math.max(1.01, Math.random()*10));
    // }
    // countDown;
    // count = 10.0;
    HashingPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], HashingPage.prototype, "chart", void 0);
    HashingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hashing',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\hashing\hashing.html"*/'<!--\n\n  Generated template for the HashingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 2: Hashing</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet [walletAmount]="walletAmount"></inner-wallet>\n\n    </div>\n\n    <!-- <button item-icon-right class="button button-clear button-positive">Edit</button> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="hashingContent" padding>\n\n\n\n  <br>\n\n  <!-- Graph -->\n\n  <div class="graphCntr" style="display: block; width: 100%; height: 50%;">\n\n    <!-- <ion-col col-12 col-md-12> -->\n\n    <canvas id="ctx" baseChart [chartType]="\'line\'" [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors"\n\n      width="400" height="300" [legend]="false">\n\n      <!-- (chartClick)="onChartClick($event) -->\n\n    </canvas>\n\n    <!-- </ion-col> -->\n\n    <div class="arrow-head" [style.visibility]="isArrowHidden ? \'hidden\' : \'visible\'">\n\n      <ion-img width="70" height="70" src="../assets/imgs/test3.png" style=background:transparent></ion-img>\n\n    </div>\n\n\n\n    <div class="circle-cntr">\n\n      <div class="outer-circle" [style.visibility]="isChartHidden ? \'hidden\' : \'visible\'">\n\n        <svg xmlns="http://www.w3.org/2000/svg">\n\n          <circle cx="50" cy="50" r="50" fill="grey" fill-opacity="0.3" stroke="white" stroke-width="1" />\n\n          <text x="18%" y="35%" text-anchor="middle" fill="white" alignment-baseline="central">{{multiplierDisplay}} x</text>\n\n        </svg>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="burst-text" [style.visibility]="isBurstTextHidden ? \'hidden\' : \'visible\'">\n\n      Busted @ {{finalValue}}x\n\n    </div>\n\n\n\n    <div class="timer-text" [style.visibility]="isTimerHidden ? \'hidden\' : \'visible\'">\n\n      Next game in {{timerValue}} s\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <ion-segment [(ngModel)]="hashBetType" color="primary" (ionChange)="toggleSegment($event)">\n\n    <ion-segment-button outline value="manual">\n\n      Manual\n\n    </ion-segment-button>\n\n    <ion-segment-button outline value="auto">\n\n      Auto\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="hashBetType">\n\n    <ion-list *ngSwitchCase="\'manual\'" ngSelected="selected">\n\n      <br>\n\n      <!-- for manual -->\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <ion-label color="primary">AMOUNT: </ion-label>\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          <ion-input type="number" [(ngModel)]="hashManualBetAmount" placeholder="0" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-label item-end color="primary">BGM</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <button ion-button full color="secondary" [color]="isManualBetDisabled ? \'dark\' : \'secondary\'" [disabled]="isManualBetDisabled"\n\n          (click)="hashManualBet()">BET</button>\n\n      </ion-row>\n\n      <ion-row *ngIf="isManualBetDisabled">\n\n        <button ion-button full color="secondary" [color]="isManualBetDisabled ? \'secondary\' : \'dark\'" [disabled]="!isManualBetDisabled"\n\n          (click)="hashManualCout()">CASH OUT</button>\n\n      </ion-row>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'auto\'">\n\n      <!-- for auto -->\n\n      <ion-card style="height:auto">\n\n        <ion-card-content>\n\n          <!-- base bet-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Base Bet: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashAutoBasebet" placeholder="0" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <!-- Auto cashout at-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Cashout: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashAutoCashout" placeholder="2x" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <!-- Stop if-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Stop if: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashLimitWin" placeholder="10000" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <!--2 buttons start stop-->\n\n      <ion-row>\n\n        <ion-col col-6 text-center>\n\n          <button ion-button color="secondary" full (click)="deposit()">RUN</button>\n\n        </ion-col>\n\n        <ion-col col-6 text-center>\n\n          <button ion-button color="secondary" full (click)="withdraw()">STOP</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\hashing\hashing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], HashingPage);
    return HashingPage;
}());

//# sourceMappingURL=hashing.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_auth_global_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HTTP } from '@ionic-native/http';





// import { MyApp } from '../../app/app.component';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    // socket: SocketIOClient.Socket;
    function HomePage(platform, http, navCtrl, navParams, appCtrl, auth, nativeAudio, alertCtrl) {
        this.platform = platform;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.nativeAudio = nativeAudio;
        this.alertCtrl = alertCtrl;
        // this.socket = io.connect('http://178.128.50.224:3001');
        // console.log("socket conencted");
        this.isGuest = auth.getGuestLogin();
    }
    HomePage.prototype.ngOnInit = function () {
        this.getNews();
        // this.messages = new Array();
        // console.log("INITIATED");
        // this.socket.on('message-received', (msg: any) => {
        //   this.messages.push(msg);
        //   console.log(msg);
        //   console.log(this.messages);
        // });
        //emit to server
        // this.socket.emit('chat message', {
        //   msg: 'Client to server, can you hear me server?'
        // });
        // this.socket.on('Game2', (data: any) => {
        // console.log(JSON.parse(data));
        // var receivedData= JSON.parse(data);
        // console.log("Received data type  "  + receivedData.type);
        // if (receivedData.type!="busted"){
        // console.log("Received data type  "  + receivedData.number);
    };
    // this.socket.emit('event3', {
    //   msg: 'Yes, its working for me!!'
    // });
    //   });
    //   this.socket.on('Game3', (data: any) => {
    //     console.log(data.msg);
    //   });
    // }
    // sendMessage() {
    //   const message = {
    //     text: this.messageText
    //   };
    //   this.socket.emit('send-message', message);
    // console.log(message.text);
    //   this.messageText = '';
    // }
    // uncomment for mobile load sound
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(function () {
                _this.nativeAudio.loop('bgmLoopHome');
            });
        });
    };
    HomePage.prototype.getNews = function () {
        var _this = this;
        console.log("button is working fine");
        var path = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=bc62663fa4ac4c369f426682110037c2';
        var encodedPath = encodeURI(path);
        var timeoutMS = 100000;
        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData);
            _this.displayStory = responseData.articles[0].description;
            _this.storyImage = responseData.articles[0].urlToImage;
        }, function (err) {
            console.log('error in getting news');
        });
    };
    HomePage.prototype.showAbout = function () {
        var alert = this.alertCtrl.create({
            title: 'About BGM',
            subTitle: 'Blockchain Gaming Master v1.0.0',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showContact = function () {
        var alert = this.alertCtrl.create({
            title: 'Contact us',
            subTitle: 'www.bgm.com/help',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.logout = function () {
        console.log("logout is working fine");
        // console.log("rootnav = " +this.appCtrl.getRootNav());
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="home"></ion-icon>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid style="height: 90%">\n\n\n\n    <ion-row>\n\n      <ion-col col-12 text-center>\n\n        <ion-img width="100%" height="200" src={{this.storyImage}} style=background:transparent></ion-img>\n\n      </ion-col>\n\n    </ion-row>\n\n    <br>\n\n    <ion-row>\n\n      {{this.displayStory}}\n\n    </ion-row>\n\n    <br>\n\n    <!-- About button -->\n\n    <!--contact button-->\n\n    <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-item no-lines color="dark" style="color:secondary;" (click)="showAbout()">\n\n            <span item-left style="color:#f3ba2e; font-size:16px;">\n\n              <span style="padding-right:8px">\n\n              <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n\n              </span>\n\n              About\n\n            </span>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    <!--contact button-->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" (click)="showContact()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="call"></ion-icon>\n\n            </span>\n\n            Contact Support\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!--logout button-->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" [style.visibility]="isGuest ? \'hidden\' : \'visible\'" (click)="logout()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="log-out"></ion-icon>\n\n            </span>\n\n            Logout\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// declare function init(): any; 
// declare function drawRouletteShadow();
// declare function drawArcs();
// declare function drawPointer();
var RoulettePage = /** @class */ (function () {
    function RoulettePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.disabled = false;
        this.walletBallance = 1000;
        // refreshUi();
        // init();
    }
    RoulettePage.prototype.onSpin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableSpinButton();
                        reset();
                        init();
                        randomSpin();
                        this.updateWalletBallance(-this.betAmount);
                        console.log("My winner ID is " + winnerId);
                        return [4 /*yield*/, this.delay(5010)];
                    case 1:
                        _a.sent();
                        this.presentAlert(winnerId);
                        return [2 /*return*/];
                }
            });
        });
    };
    RoulettePage.prototype.ngOnInit = function () {
        init();
    };
    RoulettePage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    RoulettePage.prototype.enableSpinButton = function () {
        this.disabled = false;
    };
    RoulettePage.prototype.disableSpinButton = function () {
        this.disabled = true;
    };
    RoulettePage.prototype.updateWalletBallance = function (amount) {
        this.walletBallance += amount;
    };
    RoulettePage.prototype.presentAlert = function (winnerId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Congratualations',
            subTitle: 'You have won ' + winnerId,
            buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(function () {
            _this.enableSpinButton();
        });
    };
    RoulettePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RoulettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\roulette\roulette.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-- <button ion-button (click)="back()">Back</button> -->\n\n    <ion-title>\n\n      Game 1: Roulette\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <!-- <input type="button" ng-click"=randomSpin()" style="float:left;" id=\'spin\' /> -->\n\n  \n\n  <!-- <canvas id="canvas" width="500" height="500"></canvas> -->\n\n  <!-- <div id="holder" style="width:400px; height:400px;">\n\n  </div>\n\n  <button id="genBtn">Rotate</button>\n\n  <br />\n\n  <button id="rmBtn">Remove the winner and rotate</button>\n\n  <br>\n\n  <p>Click <b>Rotate</b> to update.</p>\n\n  <p>Bookmark <a id="bookmarklink" href=\'./roulette.html\'>this link</a> to save your list.</p> \n\n  <textarea id="items" name="items" rows="8" cols="15"> </textarea>\n\n  \n\n  <button id="genBtn">Rotate</button>\n\n  <br />\n\n  <button id="rmBtn">Remove the winner and rotate</button>\n\n  <br> -->\n\n  <div class="col-xs-12 col-sm-12 col-lg-12" id="holder" style="visibility:visible">\n\n  <!-- <div id="holder" style="width:100px; height:400px;"> -->\n\n  </div>\n\n  <div class="row">\n\n  Balance: {{walletBallance}} USD\n\n  </div>\n\n  <div class="row"> \n\n      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="spinInputAmount">\n\n          <ion-input type="number" [(ngModel)]="betAmount" placeholder="Amount" [disabled]="disabled"></ion-input>\n\n      </div>\n\n    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" id="spinButton">\n\n        <button ion-button [disabled]="disabled" (click)="onSpin()">Spin To Win!</button>\n\n    </div>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\roulette\roulette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoFacAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the TwoFacAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TwoFacAuthPage = /** @class */ (function () {
    function TwoFacAuthPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.count = 30.0;
        this.isRequestHidden = false;
        this.isRequestEnabled = true;
        this.isTimerHidden = true;
    }
    TwoFacAuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TwoFacAuthPage');
    };
    TwoFacAuthPage.prototype.requestedSMS = function () {
        this.isRequestEnabled = false;
        this.startCountdownTimer(30);
    };
    TwoFacAuthPage.prototype.verify2FA = function () {
        this.auth.setGuestLogin(false);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    TwoFacAuthPage.prototype.startCountdownTimer = function (secondsToCount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var noOfCounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isTimerHidden = false;
                        this.count = secondsToCount;
                        noOfCounts = (this.count * 10);
                        //for 0.1s countdown
                        // this.countDown = timer(0,100).pipe(
                        //   take(noOfCounts),
                        //   map(()=> (this.count -= 0.1).toFixed(1))
                        // );
                        //for 1s countdown
                        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(noOfCounts), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return (_this.count -= 1); }));
                        return [4 /*yield*/, this.delay((secondsToCount - 1) * 1000)];
                    case 1:
                        _a.sent();
                        this.resetCountdown();
                        return [2 /*return*/];
                }
            });
        });
    };
    TwoFacAuthPage.prototype.resetCountdown = function () {
        this.isRequestEnabled = true;
        this.isTimerHidden = true;
    };
    TwoFacAuthPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    TwoFacAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-two-fac-auth',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\two-fac-auth\two-fac-auth.html"*/'<!--\n\n  Generated template for the TwoFacAuthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar align-title="center">\n\n    <ion-title><span text-color="dark">2 FA</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <!-- request SMS-->\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <div class="center" [style.visibility]="isRequestHidden ? \'hidden\' : \'visible\'">\n\n            <button ion-button [color]="isRequestEnabled ? \'secondary\' : \'secondary\'" [outline]="isRequestEnabled ? \'false\' : \'true\'" \n\n            [disabled]="isRequestEnabled? null : \'disabled\'" class="request-sms-button" ion-button color="secondary" round (click)="requestedSMS()">\n\n            REQUEST<br>SMS</button>\n\n          </div>\n\n            <div class="timer" [style.visibility]="isTimerHidden ? \'hidden\' : \'visible\'">Request again in {{countDown | async}} s</div>\n\n        </ion-col>\n\n      </ion-row> \n\n      \n\n      <!-- input SMS box -->\n\n      <ion-row>\n\n          <ion-col col-12 text-center>\n\n              <ion-item text-center no-lines id="rounded" style="width:70%; margin:auto" >\n\n                  <ion-label floating primary color="secondary">\n\n                     SMS Verification Code\n\n                  </ion-label>\n\n                  <ion-input type="text"></ion-input>\n\n                  </ion-item>\n\n          </ion-col>\n\n        </ion-row> \n\n    <br>\n\n     <!--verify button-->\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <button ion-button small color="secondary" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800" (click)="verify2FA()">VERIFY</button>\n\n        </ion-col>\n\n      </ion-row> \n\n      \n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\two-fac-auth\two-fac-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], TwoFacAuthPage);
    return TwoFacAuthPage;
}());

//# sourceMappingURL=two-fac-auth.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




 // (for rxjs < 6) use 'rxjs/observable/timer'


/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StreamPage = /** @class */ (function () {
    function StreamPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.count = 30.0;
        this.boughtIntoGame3 = false;
        this.yDataReceived = Math.random() * 20;
        this.testGlobalVar = 6000;
        this.buffer = [[], []];
        this.chartLabels = [];
        // private datamap: any;
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#f3ba2e',
                pointBackgroundColor: '#3AA57D',
                // pointBorderColor: '#fafafa',
                pointRadius: 0,
                pointHoverBackgroundColor: '#3AA57D',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)' //changing hover point color
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#3F719E',
                pointBackgroundColor: '#3F719E',
                pointBorderColor: '#3F719E',
                pointRadius: 0,
                pointHoverBackgroundColor: '#3F719E',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'red',
                pointBackgroundColor: '#9575CD',
                pointBorderColor: '#9575CD',
                pointRadius: 0,
                pointHoverBackgroundColor: '#9575CD',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.datasets = [
            { data: [], fill: false, label: 'BitCoin', },
            { data: [], showLine: false, pointRadius: 5, label: 'Short' },
            { data: [], pointRadius: 0, label: 'Long' }
        ];
        this.isGameTime = true;
        this.testGlobalVar = 7000;
    }
    StreamPage.prototype.ngOnInit = function () {
        console.log('ionViewDidLoad StreamPage');
        console.log("variable initalized here is " + this.testGlobalVar);
        // buffer=[[7000],[Date.now()]];
        this.startGame(10);
        this.options = {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            plugins: {
                streaming: {
                    refresh: 1000,
                    duration: 30000,
                    //can create function to copy here from received data above?
                    //or create socket here and update value here;
                    getClassValue: function () {
                        console.log("is calling get class value but returning " + this.testGlobalVar);
                        return this.testGlobalVar;
                    },
                    randomIntRange: function (min, max) {
                        console.log("managed to call function");
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    },
                    onRefresh: function (chart) {
                        var count = 0;
                        // var value = this.randomIntRange(3000,8000);
                        console.log("pushing " + this.testGlobalVar);
                        chart.data.datasets[0].data.push({
                            x: Date.now(),
                            y: this.testGlobalVar,
                        });
                        // chart.data.datasets.forEach(function (dataset: any) {
                        //   if (count == 0) {
                        //     // var value = Math.random() * 3000 + 4500;
                        //     var value = 100;
                        //     value = this.randomIntRange();
                        //   }
                        //   else if (count === 3) {
                        //     var value = 5000;
                        //   }
                        //   else {
                        //   }
                        //   var currDate = Date.now();
                        //   dataset.data.push({
                        //     x: currDate,
                        //     y: value,
                        //   });
                        //   count++;
                        // });
                    },
                    delay: 1500,
                    frameRate: 30,
                }
            },
            scales: {
                xAxes: [{
                        type: 'realtime',
                        offset: true,
                        ticks: {
                            fontColor: "#f4f4f4",
                            fontSize: 12,
                            padding: 5,
                            display: true,
                            stepSize: 1000,
                            min: 0,
                            suggestedMax: 8000,
                        },
                        gridLines: {
                            lineWidth: 0.5,
                            display: false,
                            drawTicks: true,
                            color: "white",
                        },
                    }],
                yAxes: [{
                        offset: true,
                        ticks: {
                            fontColor: "#f4f4f4",
                            fontSize: 12,
                            padding: 5,
                            display: true,
                            stepSize: 1000,
                            min: 0,
                            suggestedMax: 8000,
                        },
                        gridLines: {
                            lineWidth: 0.5,
                            display: false,
                            drawTicks: true,
                            color: "white",
                        },
                    }],
            }
        };
    };
    StreamPage.prototype.ionViewWillEnter = function () {
        this.walletAmount = this.auth.getAccValue();
    };
    // startStreaming() {
    //   let interval = setInterval(() => {
    //     var btcPrice = this.randomIntRange(4000, 8000);
    //     this.datasets[0].data.push(btcPrice);
    //     var currentTime = Date.now();
    //     this.chartLabels.push(currentTime);
    //     this.chart.labels.shift();
    //     this.chart.refresh();
    //   }, 300)
    // }
    StreamPage.prototype.startGame = function (countdown) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var noOfCounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isGameTime = true;
                        console.log("Game 3 Started");
                        this.count = countdown;
                        noOfCounts = (this.count * 10);
                        this.countDownGame3 = Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(0, 100).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(noOfCounts), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function () { return (_this.count -= 0.1).toFixed(1); }));
                        return [4 /*yield*/, this.delay((this.count * 1000))];
                    case 1:
                        _a.sent();
                        this.endGame();
                        return [2 /*return*/];
                }
            });
        });
    };
    StreamPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    StreamPage.prototype.endGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var noOfCounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //to check if should pop w control variable else will pop all.
                        this.isGameTime = false;
                        this.roundFinalPrice = Math.random() * 3000 + 4500;
                        this.calcRoundResult();
                        if (this.boughtIntoGame3) {
                            this.datasets.pop();
                        }
                        //update after game end
                        this.boughtIntoGame3 = false;
                        this.chart.refresh();
                        console.log("Game 2 Ended");
                        this.count = 30;
                        noOfCounts = (this.count * 10);
                        this.countDownBet3 = Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(0, 100).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(noOfCounts), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function () { return (_this.count -= 0.1).toFixed(1); }));
                        return [4 /*yield*/, this.delay((this.count * 1000))];
                    case 1:
                        _a.sent();
                        this.startGame(30);
                        return [2 /*return*/];
                }
            });
        });
    };
    StreamPage.prototype.buyDataset = function () {
        console.log("Try to add new dataset");
        var newDataset = {
            label: 'Buy Price',
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
            lineTension: 0,
            data: [],
            pointRadius: 0
        };
        this.datasets.push(newDataset);
        this.chart.refresh();
    };
    StreamPage.prototype.betHigher = function () {
        this.boughtIntoGame3 = true;
        console.log("bought " + this.game3BetAmount);
        this.buyDataset();
        this.roundBetType = 'higher';
    };
    StreamPage.prototype.betLower = function () {
        this.boughtIntoGame3 = true;
        console.log("bought " + this.game3BetAmount);
        this.buyDataset();
        this.roundBetType = 'lower';
    };
    // randomIntRange() {
    //   console.log("managed to call function defined outside");
    //   return Math.floor(Math.random() * (4500 - 3000 + 1) + 3000);
    // }
    StreamPage.prototype.calcRoundResult = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], StreamPage.prototype, "chart", void 0);
    StreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stream',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\stream\stream.html"*/'<!--\n\n  Generated template for the StreamPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 3: Binary Options</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet [walletAmount] = "walletAmount"></inner-wallet>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding overflow-scroll="true">\n\n  <ion-grid style="height:100%; width:100%">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div class="bet-timer" [style.visibility]="isGameTime ? \'hidden\' : \'visible\'">\n\n          Next game in {{countDownBet3 | async}} s\n\n        </div>\n\n        <div class="game-timer" [style.visibility]="isGameTime ? \'visible\' : \'hidden\'">\n\n          Game ending in {{countDownGame3 | async}} s\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row style="height:50%; width:100%">\n\n      <canvas baseChart [chartType]="\'line\'" [datasets]="datasets" [colors]="chartColors" [labels]="chartLabels" [options]="options"\n\n        width=100% height=80%></canvas>\n\n    </ion-row>\n\n    <br>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-input type="number" [(ngModel)]="game3BetAmount" placeholder="Amount" attr.text-center [disabled]="isGameTime"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button full [disabled]="isGameTime" (click)="betHigher()">Higher</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button full [disabled]="isGameTime" (click)="betLower()">Lower</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card style="height:25%; font-size:4px;">\n\n      <ion-card-header color="primary">\n\n        Last Bet\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row style="color:#f3ba2e">\n\n          <ion-col col-3>\n\n            Price\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Bet Type\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Close\n\n          </ion-col>\n\n          <ion-col text-align-right col-3>\n\n            Profit\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row style="color:grey">\n\n          <ion-col col-3>\n\n            5800\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Hi\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            6000\n\n          </ion-col>\n\n          <ion-col text-align-right col-3>\n\n            <span style="color:green">+300</span>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- top up and withdraw buttons-->\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\stream\stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrehuntPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slotsdraw_slotsdraw__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TrehuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrehuntPage = /** @class */ (function () {
    function TrehuntPage(navCtrl, navParams, alertCtrl, dataProvider, auth) {
        // this.currBTCprice = this.randomIntRange(8000, 10000);
        // this.currETHprice = this.randomIntRange(600, 800);
        // this.totalBTCtix = 8800;
        // this.totalETHtix = 660;
        // this.currBTCGameID = 'BTC027';
        // this.currETHGameID = 'ETH005';
        // this.currBTCtix = this.randomIntRange(1, this.totalBTCtix - 1);
        // this.currETHtix = this.randomIntRange(1, this.totalETHtix - 1);
        // this.currOwnBTCtix = this.randomIntRange(0, this.currBTCtix - 1);
        // this.currOwnETHtix = this.randomIntRange(0, this.currETHtix - 1);
        // // this.currBTCtix=8700;
        // this.currETHtix=650;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.auth = auth;
        //can retrieve accId from auth
        console.log("Trehunt successful in retrieving accID " + this.auth.getAccId());
    }
    TrehuntPage.prototype.ionViewDidLoad = function () {
        //init gen same as update curr details
        this.updateCurrGameDetails();
    };
    TrehuntPage.prototype.ionViewWillEnter = function () {
        console.log("Fired event ionViewWillEnter");
        this.walletAmount = this.auth.getAccValue();
    };
    TrehuntPage.prototype.ngOnInit = function () {
    };
    TrehuntPage.prototype.doRefresh = function (refresher) {
        console.log('Caling refresh successfully here', refresher);
        this.updateCurrGameDetails();
        setTimeout(function () {
            console.log('Refresh operation has ended');
            refresher.complete();
        }, 2000);
    };
    TrehuntPage.prototype.updateCurrGameDetails = function () {
        var _this = this;
        //Making post request here
        console.log("Updating game status with accId= " + this.auth.getAccId());
        this.dataProvider.postTrehuntStatus(this.auth.getAccId()).subscribe(function (data) {
            _this.receivedData = data; // pass the response from HTTP Request into local variable receivedData
            console.log("Game 1 HTTP Request refresh status successful");
            // console.log("index 0 array: gameid= "  + this.receivedData.data[0].gameid + ', gameName= ' + this.receivedData.data[0].gameName 
            // + ', totalAmount= ' + this.receivedData.data[0].totalAmount + ', currAmount= ' + this.receivedData.data[0].currentAmount + 
            // ', currOrders and updated= ' + this.receivedData.data[0].orders[0].tickets[0] + ' ' +this.receivedData.data[0].orders[0].updated);
            //BTC updates
            _this.currBTCGameID = _this.receivedData.data[1].gameName;
            _this.purchaseBTCGameID = _this.receivedData.data[1]._id;
            _this.totalBTCtix = _this.receivedData.data[1].totalAmount;
            _this.currBTCtix = _this.receivedData.data[1].currentAmount;
            _this.currOwnBTCtix = _this.receivedData.data[1].orders.length;
            //ETH updates
            _this.currETHGameID = _this.receivedData.data[0].gameName;
            _this.purchaseETHGameID = _this.receivedData.data[0]._id;
            _this.totalETHtix = _this.receivedData.data[0].totalAmount;
            _this.currETHtix = _this.receivedData.data[0].currentAmount;
            _this.currOwnETHtix = _this.receivedData.data[0].orders.length;
            _this.loadBTCProgress = ((_this.currBTCtix / _this.totalBTCtix) * 100).toFixed(2);
            _this.loadETHProgress = ((_this.currETHtix / _this.totalETHtix) * 100).toFixed(2);
        }, function (err) {
            console.log("Error occured while retrieving game 1 status");
            console.log(err);
        });
    };
    TrehuntPage.prototype.viewBTCResults = function () {
        console.log("Going to BTC lucky draw");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__slotsdraw_slotsdraw__["a" /* SlotsdrawPage */]);
    };
    TrehuntPage.prototype.viewETHResults = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__slotsdraw_slotsdraw__["a" /* SlotsdrawPage */]);
        console.log("Going to ETH lucky draw");
    };
    // not implementing btc eth live price
    // updateBTCETHPrice() {
    //   this.currBTCprice = this.randomIntRange(8000, 10000);
    //   this.currETHprice = this.randomIntRange(600, 800);
    // }
    TrehuntPage.prototype.buyBTCtix = function () {
        var _this = this;
        console.log("bought " + this.amountBTCtix + " BTC Tix");
        //passing in params & buying tickets
        console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currBTCGameID + " amount to buy= " + this.amountBTCtix);
        this.dataProvider.postBuyGame1(this.auth.getAccId(), this.purchaseBTCGameID, this.amountBTCtix).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            if (parseInt(data.status) === 200) {
                console.log("Game 1 buying btc okay");
                console.log("actual bought tix= " + data.amount);
                _this.presentAlert(_this.amountBTCtix, 'BTC', data.tickets);
            }
        }, function (err) {
            console.log("Error occured while buying BTC tickets");
            console.log(err);
        });
        // this.currOwnBTCtix += parseInt(this.amountBTCtix);
        this.updateCurrGameDetails();
        // this.updateCurrBTCtix(this.amountBTCtix, "bought");
    };
    TrehuntPage.prototype.buyETHtix = function () {
        console.log("bought " + this.amountETHtix + " ETH Tix");
        // this.presentAlert(this.amountETHtix, 'ETH');
        this.currOwnETHtix += parseInt(this.amountETHtix);
        this.updateCurrETHtix(this.amountETHtix, "bought");
    };
    TrehuntPage.prototype.presentAlert = function (amountTix, type, ticketList) {
        var alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'You have bought ' + amountTix + ' ' + type + ' tickets',
            message: 'Your tickets: <br>' + this.getListOfTickets(ticketList, type),
            buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(function () {
        });
    };
    TrehuntPage.prototype.getListOfTickets = function (ticketList, type) {
        var stringToReturn = '<ul>';
        for (var i = 0; i < ticketList.length; i++) {
            stringToReturn += '<li>' + type.toString() + ticketList[i].toString() + '</li>';
        }
        stringToReturn += '</ul>';
        return stringToReturn;
    };
    TrehuntPage.prototype.randomIntRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    //to be deprecated methods
    TrehuntPage.prototype.updateCurrBTCtix = function (rangeBTCTixIncrease, type) {
        var _this = this;
        if (this.currBTCtix >= this.totalBTCtix) {
            console.log("BTC terminating early");
            return;
        }
        else {
            var increment;
            if (type === 'bought') {
                increment = rangeBTCTixIncrease;
            }
            else {
                increment = this.randomIntRange(0, rangeBTCTixIncrease);
            }
            // console.log("increment value " + increment);
            var targetValue = this.currBTCtix + parseInt(increment);
            if (targetValue >= this.totalBTCtix) {
                targetValue = this.totalBTCtix;
            }
            var interval_1 = setInterval(function () {
                _this.currBTCtix++;
                _this.loadBTCProgress = ((_this.currBTCtix / _this.totalBTCtix) * 100).toFixed(2);
                if (_this.currBTCtix >= targetValue)
                    clearInterval(interval_1);
            }, 50);
        }
    };
    TrehuntPage.prototype.updateCurrETHtix = function (rangeETHTixIncrease, type) {
        var _this = this;
        if (this.currETHtix >= this.totalETHtix) {
            console.log("ETH terminating early");
            return;
        }
        else {
            var increment;
            if (type === 'bought') {
                increment = rangeETHTixIncrease;
            }
            else {
                increment = this.randomIntRange(0, rangeETHTixIncrease);
            }
            var targetValue = this.currETHtix + parseInt(increment);
            console.log("ETH tix target value is " + targetValue);
            if (targetValue >= this.totalETHtix) {
                targetValue = this.totalETHtix;
            }
            var interval_2 = setInterval(function () {
                _this.currETHtix++;
                _this.loadETHProgress = ((_this.currETHtix / _this.totalETHtix) * 100).toFixed(2);
                if (_this.currETHtix == targetValue)
                    clearInterval(interval_2);
            }, 100);
        }
    };
    TrehuntPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trehunt',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\trehunt\trehunt.html"*/'<!--\n\n  Generated template for the TrehuntPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 1: Treasure!</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet [walletAmount]="walletAmount"></inner-wallet>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <!--for curr game id-->\n\n    <!-- <h2 style="text-align: center">Current Est. Price</h2> -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="style-game-id">\n\n          GameID:\n\n          <span style="color:#f3ba2e">{{currBTCGameID}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="style-game-id">\n\n          GameID:\n\n          <span style="color:#f3ba2e">{{currETHGameID}}</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for view game results -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button small color="secondary" style="text-transform: none;" [disabled]="BTCTixDisabled" (click)="viewBTCResults()">View BTC Results</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="secondary" style="text-transform: none;" small [disabled]="ETHTixDisabled" (click)="viewETHResults()">View ETH Results</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for current tix own -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="style-current-tix">\n\n          You own:\n\n          <span style="color:#f3ba2e">{{currOwnBTCtix | number}}</span> tix\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="style-current-tix">\n\n          You own:\n\n          <span style="color:#f3ba2e">{{currOwnETHtix | number}}</span> tix\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for coin images row-->\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-img width="100" height="100" src="../assets/imgs/Bitcoin.png" style=background:transparent></ion-img>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-img width="100" height="100" src="../assets/imgs/ethereum.png" style=background:transparent></ion-img>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!--for current tickets sold-->\n\n    <h6 style="text-align: center">Total Tickets Sold</h6>\n\n    <ion-row>\n\n      <ion-col>\n\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currBTCtix}}</span>\n\n        <span style="color:whitesmoke; font-size:12px;">/ {{totalBTCtix}}</span>\n\n      </ion-col>\n\n      <ion-col>\n\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currETHtix}}</span>\n\n        <span style="color:whitesmoke; font-size:12px;">/ {{totalETHtix}}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <!--for current progress bar-->\n\n    <ion-row>\n\n      <ion-col>\n\n        <progress-bar [progress]="loadBTCProgress"></progress-bar>\n\n      </ion-col>\n\n      <ion-col>\n\n        <progress-bar [progress]="loadETHProgress"></progress-bar>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <!--for buying tix header-->\n\n    <h6 style="text-align: center">Buy\n\n      <span style="color:#f3ba2e; font-size:12px;">(1 Ticket = $1 USD)</span>\n\n    </h6>\n\n    <ion-row>\n\n      <ion-col>\n\n        No. BTC Ticket:\n\n        <ion-input type="number" [(ngModel)]="amountBTCtix" placeholder="Tickets" attr.text-center [disabled]="BTCTixDisabled"></ion-input>\n\n        <button ion-button small color="secondary" [disabled]="BTCTixDisabled" (click)="buyBTCtix()">Buy</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        No. ETH Ticket:\n\n        <ion-input type="number" [(ngModel)]="amountETHtix" placeholder="Tickets" [disabled]="ETHTixDisabled"></ion-input>\n\n        <button ion-button color="secondary" small [disabled]="ETHTixDisabled" (click)="buyETHtix()">Buy</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\trehunt\trehunt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], TrehuntPage);
    return TrehuntPage;
}());

//# sourceMappingURL=trehunt.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotsdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// <script type="text/javascript" src="assets/js/slotmachine.js"></script>
// declare function shuffle();
/**
 * Generated class for the SlotsdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlotsdrawPage = /** @class */ (function () {
    function SlotsdrawPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SlotsdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlotsdrawPage');
    };
    SlotsdrawPage.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            var btnShuffle = document.querySelector("#luckyDrawShuffle");
            //first machine
            var element1 = document.querySelector('#machine1');
            var machine1 = new SlotMachine(element1, {
                active: 0,
                auto: false,
                direction: 'up',
                delay: 500,
            });
            var element2 = document.querySelector('#machine2');
            var machine2 = new SlotMachine(element2, {
                active: 0,
                auto: false,
                direction: 'up',
                delay: 500,
            });
            var element3 = document.querySelector('#machine3');
            var machine3 = new SlotMachine(element3, {
                active: 0,
                auto: false,
                direction: 'up',
                delay: 500,
            });
            var element4 = document.querySelector('#machine4');
            var machine4 = new SlotMachine(element4, {
                active: 0,
                auto: false,
                direction: 'up',
                delay: 500,
            });
            var element5 = document.querySelector('#machine5');
            var machine5 = new SlotMachine(element5, {
                active: 0,
                auto: false,
                direction: 'up',
                delay: 500,
            });
            setTimeout(function () {
                machine1.shuffle(10, onComplete1);
                machine2.shuffle(15);
                machine3.shuffle(20);
                machine4.shuffle(25);
                machine5.shuffle(30);
            }, 0);
            function onComplete1(active) {
                // if (machine1.next() != 5){
                // console.log(active);
                // if (active!=5){
                //   console.log(machine1.next());
                //   onComplete1(active);
                // }
                console.log("Active = " + active);
                // var chosen = 5;
                // var spinDifference = Math.abs(active-chosen);
                // console.log("spinDiff = "  + spinDifference);
                // for (var i = 0; i < spinDifference; i++){
                // console.log("Loop = "  + i);
                machine1.setRandomize(5);
                // }
                // }
                // onComplete1();
                console.log("Initial spin finish");
            }
            btnShuffle.addEventListener('click', function () {
                setTimeout(function () {
                    machine1.shuffle(10);
                    machine2.shuffle(15);
                    machine3.shuffle(20);
                    machine4.shuffle(25);
                    machine5.shuffle(30);
                }, 10);
            });
        });
    };
    SlotsdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slotsdraw',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\slotsdraw\slotsdraw.html"*/'<!--\n\n  Generated template for the SlotsdrawPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Lucky Draw</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n      <ion-col>\n\n        <div id="machine1" class="machine">\n\n          <div>0</div>\n\n          <div>1</div>\n\n          <div>2</div>\n\n          <div>3</div>\n\n          <div>4</div>\n\n          <div>5</div>\n\n          <div>6</div>\n\n          <div>7</div>\n\n          <div>8</div>\n\n          <div>9</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div id="machine2" class="machine">\n\n          <div>0</div>\n\n          <div>1</div>\n\n          <div>2</div>\n\n          <div>3</div>\n\n          <div>4</div>\n\n          <div>5</div>\n\n          <div>6</div>\n\n          <div>7</div>\n\n          <div>8</div>\n\n          <div>9</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div id="machine3" class="machine">\n\n          <div>0</div>\n\n          <div>1</div>\n\n          <div>2</div>\n\n          <div>3</div>\n\n          <div>4</div>\n\n          <div>5</div>\n\n          <div>6</div>\n\n          <div>7</div>\n\n          <div>8</div>\n\n          <div>9</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div id="machine4" class="machine">\n\n          <div>0</div>\n\n          <div>1</div>\n\n          <div>2</div>\n\n          <div>3</div>\n\n          <div>4</div>\n\n          <div>5</div>\n\n          <div>6</div>\n\n          <div>7</div>\n\n          <div>8</div>\n\n          <div>9</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div id="machine5" class="machine">\n\n          <div>0</div>\n\n          <div>1</div>\n\n          <div>2</div>\n\n          <div>3</div>\n\n          <div>4</div>\n\n          <div>5</div>\n\n          <div>6</div>\n\n          <div>7</div>\n\n          <div>8</div>\n\n          <div>9</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="winner-button" col-12 text-center>\n\n        <button ion-button id="luckyDrawShuffle" type="button" class="ShuffleBtn">Get Winner!</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\slotsdraw\slotsdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SlotsdrawPage);
    return SlotsdrawPage;
}());

//# sourceMappingURL=slotsdraw.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bidding/bidding.module": [
		656,
		10
	],
	"../pages/dummy-chat/dummy-chat.module": [
		657,
		9
	],
	"../pages/hashing/hashing.module": [
		658,
		8
	],
	"../pages/home/home.module": [
		659,
		7
	],
	"../pages/roulette/roulette.module": [
		660,
		6
	],
	"../pages/slotsdraw/slotsdraw.module": [
		661,
		5
	],
	"../pages/splash-logo/splash-logo.module": [
		662,
		4
	],
	"../pages/stream/stream.module": [
		663,
		3
	],
	"../pages/trehunt/trehunt.module": [
		664,
		2
	],
	"../pages/two-fac-auth/two-fac-auth.module": [
		665,
		1
	],
	"../pages/wallet/wallet.module": [
		666,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GlobalAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalAuthProvider = /** @class */ (function () {
    function GlobalAuthProvider() {
        this.isGuest = true;
        this.isAuthenticated = false;
        console.log('Hello GlobalAuthProvider Provider');
    }
    GlobalAuthProvider.prototype.setUsername = function (username) {
        this.username = username;
    };
    GlobalAuthProvider.prototype.getUsername = function () {
        return this.username;
    };
    GlobalAuthProvider.prototype.setAccId = function (accId) {
        this.accId = accId;
    };
    GlobalAuthProvider.prototype.getAccId = function () {
        return this.accId;
    };
    GlobalAuthProvider.prototype.setAccValue = function (currValue) {
        this.accValue = parseInt(currValue);
    };
    GlobalAuthProvider.prototype.getAccValue = function () {
        return this.accValue;
    };
    GlobalAuthProvider.prototype.setGuestLogin = function (control) {
        this.isGuest = control;
    };
    GlobalAuthProvider.prototype.getGuestLogin = function () {
        return this.isGuest;
    };
    GlobalAuthProvider.prototype.setIsAuth = function (control) {
        this.isAuthenticated = control;
    };
    GlobalAuthProvider.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    GlobalAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalAuthProvider);
    return GlobalAuthProvider;
}());

//# sourceMappingURL=global-auth.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashLogoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SplashLogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashLogoPage = /** @class */ (function () {
    function SplashLogoPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashLogoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashLogoPage');
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashLogoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash-logo',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\splash-logo\splash-logo.html"*/'<!--\n\n  Generated template for the SplashLogoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>splashLogo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n    <div class= "image-center">\n\n        <ion-img width="200" height="200" src="../assets/imgs/BGM_Logo.png" style= background:transparent></ion-img>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\splash-logo\splash-logo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashLogoPage);
    return SplashLogoPage;
}());

//# sourceMappingURL=splash-logo.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare function reset(): any;
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.count = 10.0;
        this.walletType = 'investment';
        this.refreshIcon = 'refresh';
        this.balances = {
            'investment': 12340,
            'game': 750,
        };
        this.statements = {
            'investment': [
                {
                    time: '11/8 1200',
                    name: 'Deposit',
                    price: '11340'
                },
                {
                    time: '10/8 1200',
                    name: 'Withdraw',
                    price: '-1000'
                },
                {
                    time: '9/8 1200',
                    name: 'Deposit',
                    price: '2000'
                },
            ],
            'game': [
                {
                    time: '11/8 1330',
                    name: '1. Treasure',
                    price: '1000'
                },
                {
                    time: '10/8 0900',
                    name: '2. Hashing',
                    price: '-250'
                }
            ],
        };
        this.currentView = 'investment';
        this.walletBalance = this.balances[this.currentView];
    }
    WalletPage.prototype.ngOnInit = function () {
        // Let's navigate from TabsPage to Page1
        // reset();
    };
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
    };
    WalletPage.prototype.toggleSegment = function ($event) {
        console.log("Chosen segment " + $event.value);
        //update current view & wallet balance
        this.currentView = $event.value;
        this.walletBalance = this.balances[this.currentView];
    };
    WalletPage.prototype.getStatements = function (type) {
        // console.log("Call get statements");
        return this.statements[type];
    };
    //driver functions, deposit withdraw
    WalletPage.prototype.deposit = function () {
        //check current view & present alert
        if (this.currentView === 'investment') {
            this.investmentDeposit();
        }
        else if (this.currentView === 'game') {
            this.gameDeposit();
        }
        else {
            //do nothing
            console.log("Entered exception for currentView on deposit");
        }
    };
    WalletPage.prototype.withdraw = function () {
        //check current view & present alert
        if (this.currentView === 'investment') {
            this.investmentWithdraw();
        }
        else if (this.currentView === 'game') {
            this.gameWithdraw();
        }
        else {
            //do nothing
            console.log("Entered exception for currentView on deposit");
        }
    };
    WalletPage.prototype.investmentDeposit = function () {
        var alert = this.alertCtrl.create({
            title: 'Proceed to deposit?',
            message: 'You will be redirected to the page for deposit',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes click to redirect');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('Not opening page');
                    }
                }
            ]
        });
        alert.present();
    };
    WalletPage.prototype.investmentWithdraw = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Withdraw to bank',
            message: 'Enter amount to withdraw',
            inputs: [
                {
                    name: 'Amount',
                    placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancelled withdraw intended ' + data.Amount + ' to bank');
                    }
                },
                {
                    text: 'Withdraw',
                    handler: function (data) {
                        console.log('Processing withdraw ' + data.Amount + ' to bank');
                        console.log(JSON.stringify(data)); //to see the object
                        console.log("Amount input was " + data.Amount);
                        _this.processInvWithdrawal(data.Amount);
                    }
                }
            ]
        });
        alert.present();
    };
    WalletPage.prototype.processInvWithdrawal = function (amount) {
        //to insert post call for withdrwal return then
        var alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'Your withdrawal of ' + amount + ' BGM was successful and will be reflected in your bank in 2 days',
            buttons: ['OK']
        });
        alert.present();
    };
    WalletPage.prototype.gameDeposit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deposit Game Wallet',
            message: 'Enter amount to transfer from investment wallet',
            inputs: [
                {
                    name: 'Amount',
                    placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancelled transfer intended ' + data.Amount + ' to game wallet');
                    }
                },
                {
                    text: 'Transfer',
                    handler: function (data) {
                        console.log('Processing transfer ' + data.Amount + ' to game wallet');
                        console.log(JSON.stringify(data)); //to see the object
                        console.log("Amount input was " + data.Amount);
                        _this.processGameDeposit(data.Amount);
                    }
                }
            ]
        });
        alert.present();
    };
    WalletPage.prototype.processGameDeposit = function (amount) {
        //to insert post call for withdrwal return then
        var alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'Your game wallet has successfully recharged ' + amount + ' BGM',
            buttons: ['OK']
        });
        alert.present();
    };
    WalletPage.prototype.gameWithdraw = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Withdraw From Game Wallet',
            message: 'Enter amount to transfer to investment wallet',
            inputs: [
                {
                    name: 'Amount',
                    placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancelled transfer intended ' + data.Amount + ' to investment wallet');
                    }
                },
                {
                    text: 'Transfer',
                    handler: function (data) {
                        console.log('Processing transfer ' + data.Amount + ' to investment wallet');
                        console.log(JSON.stringify(data)); //to see the object
                        console.log("Amount input was " + data.Amount);
                        _this.processGameWithdrawal(data.Amount);
                    }
                }
            ]
        });
        alert.present();
    };
    WalletPage.prototype.processGameWithdrawal = function (amount) {
        //to insert post call for withdrwal return then
        var alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'Your transfer of ' + amount + ' BGM to investment wallet was successful',
            buttons: ['OK']
        });
        alert.present();
    };
    WalletPage.prototype.refreshWallet = function () {
        console.log("refreshing wallets");
        //to present alert to refresh wallet
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], WalletPage.prototype, "Game2Chart", void 0);
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Wallet</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--toolbar for navigating wallet-->\n\n  <ion-toolbar color="app-bg">\n\n    <ion-segment [(ngModel)]="walletType" color="primary" (ionChange)="toggleSegment($event)">\n\n      <ion-segment-button outline value="investment">\n\n        Investment\n\n      </ion-segment-button>\n\n      <ion-segment-button outline value="game">\n\n        Game\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n\n\n  <ion-card style="height:20%">\n\n    <ion-card-header color="primary">\n\n      You have:\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-img width="30" height="30" src="../assets/imgs/BGM_Logo.png" style="background:transparent; padding-top:-5%;"></ion-img>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <span class="align-right">{{walletBalance}} <span style="color:#f3ba2e">BGM</span></span>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <span class="refresh-button">\n\n            <button ion-button default clear icon-only (click)=refreshWallet()>\n\n              <ion-icon name="refresh"></ion-icon>\n\n            </button>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- top up and withdraw buttons-->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6 text-center>\n\n      <button ion-button color="secondary" full (click)="deposit()">DEPOSIT</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-center>\n\n      <button ion-button color="secondary" full (click)="withdraw()">WITHDRAW</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card style="height:50%">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-list col-12 no-lines>\n\n          <ion-list-header no-lines text-color="light">\n\n              <span col-2 item-start>Time</span>\n\n              <span col-5>Item</span>\n\n              <span col-5 item-end>Amount</span>\n\n          </ion-list-header>\n\n          <ion-item *ngFor="let item of getStatements(walletType)">\n\n            <span col-2 item-start style="font-size:12px">{{item.time}}</span>\n\n            <span col-5>{{item.name}}</span>\n\n            <span col-5 item-end [style.color]="item.price > 0 ? \'green\' : \'red\'"  style="font-weight:700">{{ item.price }}</span>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_roulette_roulette__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_stream_stream__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trehunt_trehunt__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_progress_bar_progress_bar__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_inner_wallet_inner_wallet__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_global_auth_global_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_audio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_smart_audio_smart_audio__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_slotsdraw_slotsdraw__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_data_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dummy_chat_dummy_chat__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_inner_wallet_inner_wallet__["a" /* InnerWalletComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trehunt_trehunt__["a" /* TrehuntPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_slotsdraw_slotsdraw__["a" /* SlotsdrawPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__["a" /* SplashLogoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_stream_stream__["a" /* StreamPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dummy_chat_dummy_chat__["a" /* DummyChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bidding/bidding.module#BiddingPageModule', name: 'BiddingPage', segment: 'bidding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dummy-chat/dummy-chat.module#DummyChatPageModule', name: 'DummyChatPage', segment: 'dummy-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hashing/hashing.module#HashingPageModule', name: 'HashingPage', segment: 'hashing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette/roulette.module#WalletPageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slotsdraw/slotsdraw.module#SlotsdrawPageModule', name: 'SlotsdrawPage', segment: 'slotsdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-logo/splash-logo.module#SplashLogoPageModule', name: 'SplashLogoPage', segment: 'splash-logo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stream/stream.module#StreamPageModule', name: 'StreamPage', segment: 'stream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trehunt/trehunt.module#TrehuntPageModule', name: 'TrehuntPage', segment: 'trehunt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/two-fac-auth/two-fac-auth.module#TwoFacAuthPageModule', name: 'TwoFacAuthPage', segment: 'two-fac-auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular___["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trehunt_trehunt__["a" /* TrehuntPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_slotsdraw_slotsdraw__["a" /* SlotsdrawPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__["a" /* SplashLogoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_stream_stream__["a" /* StreamPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dummy_chat_dummy_chat__["a" /* DummyChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_27__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 233,
	"./af.js": 233,
	"./ar": 234,
	"./ar-dz": 235,
	"./ar-dz.js": 235,
	"./ar-kw": 236,
	"./ar-kw.js": 236,
	"./ar-ly": 237,
	"./ar-ly.js": 237,
	"./ar-ma": 238,
	"./ar-ma.js": 238,
	"./ar-sa": 239,
	"./ar-sa.js": 239,
	"./ar-tn": 240,
	"./ar-tn.js": 240,
	"./ar.js": 234,
	"./az": 241,
	"./az.js": 241,
	"./be": 242,
	"./be.js": 242,
	"./bg": 243,
	"./bg.js": 243,
	"./bm": 244,
	"./bm.js": 244,
	"./bn": 245,
	"./bn.js": 245,
	"./bo": 246,
	"./bo.js": 246,
	"./br": 247,
	"./br.js": 247,
	"./bs": 248,
	"./bs.js": 248,
	"./ca": 249,
	"./ca.js": 249,
	"./cs": 250,
	"./cs.js": 250,
	"./cv": 251,
	"./cv.js": 251,
	"./cy": 252,
	"./cy.js": 252,
	"./da": 253,
	"./da.js": 253,
	"./de": 254,
	"./de-at": 255,
	"./de-at.js": 255,
	"./de-ch": 256,
	"./de-ch.js": 256,
	"./de.js": 254,
	"./dv": 257,
	"./dv.js": 257,
	"./el": 258,
	"./el.js": 258,
	"./en-au": 259,
	"./en-au.js": 259,
	"./en-ca": 260,
	"./en-ca.js": 260,
	"./en-gb": 261,
	"./en-gb.js": 261,
	"./en-ie": 262,
	"./en-ie.js": 262,
	"./en-il": 263,
	"./en-il.js": 263,
	"./en-nz": 264,
	"./en-nz.js": 264,
	"./eo": 265,
	"./eo.js": 265,
	"./es": 266,
	"./es-do": 267,
	"./es-do.js": 267,
	"./es-us": 268,
	"./es-us.js": 268,
	"./es.js": 266,
	"./et": 269,
	"./et.js": 269,
	"./eu": 270,
	"./eu.js": 270,
	"./fa": 271,
	"./fa.js": 271,
	"./fi": 272,
	"./fi.js": 272,
	"./fo": 273,
	"./fo.js": 273,
	"./fr": 274,
	"./fr-ca": 275,
	"./fr-ca.js": 275,
	"./fr-ch": 276,
	"./fr-ch.js": 276,
	"./fr.js": 274,
	"./fy": 277,
	"./fy.js": 277,
	"./gd": 278,
	"./gd.js": 278,
	"./gl": 279,
	"./gl.js": 279,
	"./gom-latn": 280,
	"./gom-latn.js": 280,
	"./gu": 281,
	"./gu.js": 281,
	"./he": 282,
	"./he.js": 282,
	"./hi": 283,
	"./hi.js": 283,
	"./hr": 284,
	"./hr.js": 284,
	"./hu": 285,
	"./hu.js": 285,
	"./hy-am": 286,
	"./hy-am.js": 286,
	"./id": 287,
	"./id.js": 287,
	"./is": 288,
	"./is.js": 288,
	"./it": 289,
	"./it.js": 289,
	"./ja": 290,
	"./ja.js": 290,
	"./jv": 291,
	"./jv.js": 291,
	"./ka": 292,
	"./ka.js": 292,
	"./kk": 293,
	"./kk.js": 293,
	"./km": 294,
	"./km.js": 294,
	"./kn": 295,
	"./kn.js": 295,
	"./ko": 296,
	"./ko.js": 296,
	"./ky": 297,
	"./ky.js": 297,
	"./lb": 298,
	"./lb.js": 298,
	"./lo": 299,
	"./lo.js": 299,
	"./lt": 300,
	"./lt.js": 300,
	"./lv": 301,
	"./lv.js": 301,
	"./me": 302,
	"./me.js": 302,
	"./mi": 303,
	"./mi.js": 303,
	"./mk": 304,
	"./mk.js": 304,
	"./ml": 305,
	"./ml.js": 305,
	"./mn": 306,
	"./mn.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./mt": 310,
	"./mt.js": 310,
	"./my": 311,
	"./my.js": 311,
	"./nb": 312,
	"./nb.js": 312,
	"./ne": 313,
	"./ne.js": 313,
	"./nl": 314,
	"./nl-be": 315,
	"./nl-be.js": 315,
	"./nl.js": 314,
	"./nn": 316,
	"./nn.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./tg": 337,
	"./tg.js": 337,
	"./th": 338,
	"./th.js": 338,
	"./tl-ph": 339,
	"./tl-ph.js": 339,
	"./tlh": 340,
	"./tlh.js": 340,
	"./tr": 341,
	"./tr.js": 341,
	"./tzl": 342,
	"./tzl.js": 342,
	"./tzm": 343,
	"./tzm-latn": 344,
	"./tzm-latn.js": 344,
	"./tzm.js": 343,
	"./ug-cn": 345,
	"./ug-cn.js": 345,
	"./uk": 346,
	"./uk.js": 346,
	"./ur": 347,
	"./ur.js": 347,
	"./uz": 348,
	"./uz-latn": 349,
	"./uz-latn.js": 349,
	"./uz.js": 348,
	"./vi": 350,
	"./vi.js": 350,
	"./x-pseudo": 351,
	"./x-pseudo.js": 351,
	"./yo": 352,
	"./yo.js": 352,
	"./zh-cn": 353,
	"./zh-cn.js": 353,
	"./zh-hk": 354,
	"./zh-hk.js": 354,
	"./zh-tw": 355,
	"./zh-tw.js": 355
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 502;

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var loginUrl = 'http://178.128.50.224:3000/login/';
var trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
var trehuntBuyURL = 'http://178.128.50.224:3000/game1/placeBets';
var hashManualBetURL = 'http://178.128.50.224:3000/game2/placeBets';
var hashManualCoutURL = 'http://178.128.50.224:3000/game2/cashOut';
var walletAmountURL = 'http://178.128.50.224:3000/account/updatewalletamount';
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    //login
    DataProvider.prototype.postLogin = function (username, password) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("username", username).set("password", password);
        return this.http.post(loginUrl, requestBody, httpHeader);
    };
    DataProvider.prototype.postWalletAmount = function (accid) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(walletAmountURL, requestBody, httpHeader);
    };
    // get game1 curr status
    DataProvider.prototype.postTrehuntStatus = function (accid) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(trehuntStatusURL, requestBody, httpHeader);
    };
    //buy game 1 tickets
    DataProvider.prototype.postBuyGame1 = function (accid, gameId, amount) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId).set("amount", amount);
        return this.http.post(trehuntBuyURL, requestBody, httpHeader);
    };
    DataProvider.prototype.postBetGame2 = function (accid, gameId, amount) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId).set("amount", amount);
        return this.http.post(hashManualBetURL, requestBody, httpHeader);
    };
    DataProvider.prototype.postCoutGame2 = function (accid, gameId) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId);
        return this.http.post(hashManualCoutURL, requestBody, httpHeader);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_native_native_audio__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { StatusBar } from '@ionic-native/status-bar';





var MyApp = /** @class */ (function () {
    // rootPage:any = TabsPage;
    // platform: Platform;
    function MyApp(platform, statusBar, splashScreen, app, modalCtrl, smartAudio, nativeAudio) {
        // statusBar.overlaysWebView(true);
        // statusBar.backgroundColorByHexString('#000000');
        // alert(testVar);
        // splashScreen.hide();
        this.nativeAudio = nativeAudio;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#000000');
            splashScreen.hide();
            // let splash = modalCtrl.create(SplashLogoPage);
            // splash.present();
            // this.nativeAudio.preloadComplex('bgmLoop', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {     
            //     this.nativeAudio.play('bgmLoop');
            // });
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
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n  Does live reload work\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\components\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n<div class="progress-outer">\n\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n\n        {{progress}}%\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerWalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_auth_global_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InnerWalletComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InnerWalletComponent = /** @class */ (function () {
    // text: string;
    // walletAmount;
    function InnerWalletComponent(dataProvider, auth) {
        this.dataProvider = dataProvider;
        this.auth = auth;
        // console.log('Hello InnerWalletComponent Component');
        // this.text = 'Hello World';
    }
    InnerWalletComponent.prototype.ngOnInit = function () {
        this.walletAmount = this.auth.getAccValue();
    };
    InnerWalletComponent.prototype.getLatestAmount = function () {
        var _this = this;
        this.dataProvider.postWalletAmount(this.auth.getAccId()).subscribe(function (data) {
            //parse response from server
            console.log("Update wallet reponse");
            console.log("Received acc balance as  " + data.accountValue);
            _this.auth.setAccValue(parseInt(data.accountValue));
            console.log("Global provider value of acc " + _this.auth.getAccValue());
            _this.walletAmount = _this.auth.getAccValue();
        }, function (err) {
            console.log("Error occured while getting account balance");
            console.log(err);
        });
        // this.navCtrl.setRoot(TabsPage);
        console.log("End getting amount");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('walletAmount'),
        __metadata("design:type", Object)
    ], InnerWalletComponent.prototype, "walletAmount", void 0);
    InnerWalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inner-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\components\inner-wallet\inner-wallet.html"*/'<!-- Generated template for the InnerWalletComponent component -->\n\n<button ion-button end class="walletDisplay" (click)="getLatestAmount()">\n\n    <img class="bgmlogo" alt="logo" height="60%" src="../assets/imgs/BGM_Logo.png">\n\n     {{walletAmount}}\n\n</button>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\components\inner-wallet\inner-wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], InnerWalletComponent);
    return InnerWalletComponent;
}());

//# sourceMappingURL=inner-wallet.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_native_native_audio__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_platform_platform__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmartAudioProvider = /** @class */ (function () {
    function SmartAudioProvider(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        //html5 init
        //use html5 when using ionic serve
        this.audioType = 'html5';
        // audioType: string = 'native';
        //sounds array keep track of sounds to use in application
        this.sounds = [];
        this.onSuccessPlaying = function (data) {
            console.log("did call loop", data);
        };
        this.onError = function (data) {
            console.log("loop hit error", data);
        };
        //switch to native
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }
    //key is sound string id, asset is path
    SmartAudioProvider.prototype.preload = function (key, asset, complexity) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            if (complexity === 'simple') {
                this.nativeAudio.preloadSimple(key, asset);
            }
            else {
                this.nativeAudio.preloadComplex(key, asset, 1, 1, 0);
            }
            var audio = {
                key: key,
                asset: asset,
                type: 'native'
            };
            this.sounds.push(audio);
        }
        //todo: implement preload complex for bgm can fade
    };
    SmartAudioProvider.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmartAudioProvider.prototype.loop = function (key) {
        console.log("Calling generic loop...");
        var audio = this.sounds.find(function (sound) {
            console.log("finding sound key");
            console.log("Found sound key " + sound.key + " " + key);
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            console.log("Calling html 5 type...");
            audioAsset.play();
        }
        else {
            console.log("Did it come to loop?");
            console.log("What is audio key " + audio.key);
            console.log("What is audio asset " + audio.asset);
            this.nativeAudio.loop(audio.key).then(this.onSuccessPlaying, this.onError);
        }
    };
    SmartAudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_platform_platform__["a" /* Platform */]])
    ], SmartAudioProvider);
    return SmartAudioProvider;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map