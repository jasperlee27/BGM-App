webpackJsonp([14],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(29);
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
    function LoginPage(platform, navCtrl, smartAudio, auth, dataProvider, nativeAudio, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.nativeAudio = nativeAudio;
        this.alertCtrl = alertCtrl;
        this.biddingPage = __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__["a" /* BiddingPage */];
        this.roulettePage = __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__["a" /* RoulettePage */];
        this.twoFApage = __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */];
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        this.loginState = "in";
        this.usernameInput = 'Eric1';
        this.passwordInput = 'eric1';
        this.showInvalidLogin = false;
    }
    // uncomment for mobile load sound
    // ionViewDidLoad() {
    //   this.platform.ready().then(() => {
    //     this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(() => {
    //       this.nativeAudio.loop('bgmLoopHome');
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
            _this.auth.setAccId(_this.receivedData._id);
            console.log("Setting account id as " + _this.receivedData._id);
            _this.auth.set2FAStatus(parseInt(_this.receivedData.require2FA));
            // var twoFAstatus= this.auth.get2FAStatus();
            //set account info only if successful login i.e do not req 2FA [0,2]
            if (_this.auth.get2FAStatus() !== 1) {
                _this.auth.setGuestLogin(false);
                _this.auth.setAccValue(_this.receivedData.accountValue);
                console.log("Setting acc balance as  " + _this.receivedData.accountValue);
                _this.auth.setSessionToken(_this.receivedData.token);
                console.log("session Token set as " + _this.auth.getSessionToken());
                _this.auth.setRefID(_this.receivedData.referralId);
                console.log("Referral ID set as " + _this.auth.getRefID());
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.push(_this.twoFApage);
            }
        }, function (err) {
            if (err.status === 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_1.present();
                console.log("Hit Error 0");
            }
            else {
                console.log("Error occured while logging in or not authorized");
                _this.showInvalidLogin = true;
            }
            console.log(err);
        });
        // this.navCtrl.setRoot(TabsPage);
        console.log("login function activated");
    };
    LoginPage.prototype.viewAsGuest = function () {
        var _this = this;
        // this.navCtrl.setRoot(TabsPage);
        // this.navCtrl.push(this.twoFApage);
        this.dataProvider.getServerHealth().subscribe(function (data) {
            if (data.message !== '') {
                console.log("received " + data.message);
                _this.auth.setAccId("guest");
                _this.auth.setUsername("guest");
                _this.auth.setGuestLogin(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                console.log("view as guest only");
                _this.auth.setSessionToken("");
                _this.auth.setAccValue(0);
            }
        }, function (err) {
            console.log("Error logged " + err);
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_2.present();
                console.log("Server-side error occured.");
            }
        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__ = __webpack_require__(20);
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
        if (this.username !== "guest") {
            var objToSend = { username: this.username, msg: "connected#123" };
            var jsonToSend = JSON.stringify(objToSend);
            this.socket.emit('chat message', jsonToSend);
        }
        // this.socket.on('chat message', (data: any) => {
        //   // console.log("Parsing JSON sent: " + JSON.parse(data));
        //   var receivedData = JSON.parse(data);
        //   console.log("JSON Username " + receivedData.username);
        //   console.log("JSON message " + receivedData.msg);
        //   console.log("Received chat message here " + data);
        // });
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
            selector: 'page-dummy-chat',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\dummy-chat\dummy-chat.html"*/'<!--  \n  Generated template for the DummyChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chatroom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content padding>\n  <ion-grid>\n    <ion-row *ngFor="let msg of messages">\n      <ion-col *ngIf="msg.msg === \'connected#123\'" col-12>\n        <span [style.color]="\'#00B44E\'" class="displayMsg">{{msg.username}} has joined the chat</span>\n      </ion-col>\n      <ion-col *ngIf="msg.msg !== \'connected#123\'" col-12>\n        <span class="displayMsg">{{msg.username}}:</span>\n        <span [style.color]="username === msg.username ? \'#f3ba2e\' : \'white\'" style="font-size:16px;">\n        {{msg.msg}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- <ion-col offset-3 col-9 >\n      <span class="user_name"></span><br>\n      <span>{{ msg.msg }}</span> -->\n  <!-- <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div> -->\n  <!-- </ion-col> -->\n\n</ion-content>\n\n<ion-footer no-shadow no-border>\n  <ion-toolbar [color]="toolbarFooterColor">\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input no-lines type="text" placeholder="Message" [(ngModel)]="message" [disabled]="username===\'guest\'"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button color="primary" (click)="sendMessage()" [disabled]="message === \'\' || username===\'guest\'">\n          SEND\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\dummy-chat\dummy-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], DummyChatPage);
    return DummyChatPage;
}());

//# sourceMappingURL=dummy-chat.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(46);
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
    function HashingPage(navCtrl, smartAudio, navParams, auth, dataProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        this.navParams = navParams;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.isManualBetDisabled = true;
        this.isSliderDisabled = true;
        this.isManualCoutDisabled = true;
        this.hasActiveManualBet = false;
        this.isLocGameTimerStarted = false;
        this.count = 10.0;
        this.currentView = 'manual';
        this.hashBetType = 'manual';
        this.isCanvasShown = true;
        window.addEventListener("keyboardDidShow", function () {
            document.activeElement.scrollIntoView(false);
            _this.isCanvasShown = false;
            // const elem: HTMLCollectionOf<Element> = document.getElementsByClassName("scroll-content"); // The last content shown, so the current page
            // if (elem !== undefined && elem.length > 0) {
            //   elem[elem.length - 1].scrollTop += 40; // add 40px between the keyboard and the input
            // }
        });
        window.addEventListener("keyboardWillHide", function () {
            document.activeElement.scrollIntoView(false);
            _this.isCanvasShown = true;
            // const elem: HTMLCollectionOf<Element> = document.getElementsByClassName("scroll-content"); // The last content shown, so the current page
            // if (elem !== undefined && elem.length > 0) {
            //   elem[elem.length - 1].scrollTop += 40; // add 40px between the keyboard and the input
            // }
        });
        this.isGuestLogin = this.auth.getGuestLogin();
        this.isArrowHidden = true;
        this.hashManualBetAmount = 1;
        // this.walletAmount = this.dataProvider.postWalletAmount(this.auth.getAccId);
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]('http://178.128.50.224:3001');
        console.log("socket for hashing conencted");
        this.chartData = [
            { data: [], label: 'Hash Rate', pointRadius: 0, hidden: true, borderWidth: 5 },
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
            maintainAspectRatio: false,
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
                            // maxTicksLimit: 4,
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
                                    // return value + 's';
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
        this.chartLabels =
            [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.01,
                1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
                2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.01,
                3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0,
                4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.01,
                5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0,
                6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.01,
                7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0,
                8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.01,
                9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9
            ];
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
        this.socket.on('preGameLoad', function (data) {
            var receivedData = JSON.parse(data);
            // for (var i = 0; i < recei)
            if (receivedData.timeArr.length > 0) {
                if (receivedData.priceArr.length > _this.chartLabels.length) {
                    _this.chartLabels = receivedData.timeArr;
                    _this.filterInitChartLabels(parseInt(receivedData.timeArr[receivedData.timeArr.length - 1]));
                }
                // this.chartLabels.push(receivedData.timeArr[0]);
                // this.chartLabels.push(receivedData.timeArr[receivedData.timeArr.length - 1]);
                console.log("IN my chart labels " + _this.chartLabels + "size of arr " + _this.chartLabels.length);
                _this.chartData[0].data = receivedData.priceArr;
                // this.chartData[0].data.push(receivedData.priceArr[0]);
                // this.chartData[0].data.push(receivedData.priceArr[receivedData.priceArr.length - 1]);
                console.log("IN my chart data " + _this.chartData[0].data + "size of arr " + _this.chartData[0].data.length);
                _this.chart.refresh();
                _this.timer("start", parseInt(receivedData.timeArr[receivedData.timeArr.length - 1]));
                // console.log("price array " + receivedData.priceArr);
                // console.log("time array " + receivedData.timeArr);
            }
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
                if (_this.currGameState !== 'GameStart') {
                    _this.currGameState = 'GameStart';
                    //TODO: Sound 
                }
                //one instance
                _this.isManualBetDisabled = true;
                if (!_this.isLocGameTimerStarted) {
                    _this.isLocGameTimerStarted = true;
                    console.log("START TIMER HERE");
                    _this.timer("start", 0);
                }
                else {
                    //do nth
                }
            }
            else if (receivedData.type === 'game') {
                if (_this.currGameState !== 'game') {
                    _this.currGameState = 'game';
                    //TODO: Sound 
                }
                _this.isManualBetDisabled = true;
                if (_this.hasActiveManualBet) {
                    _this.isManualCoutDisabled = false;
                    _this.isSliderDisabled = true;
                }
                else {
                    _this.isSliderDisabled = false;
                }
                _this.isTimerHidden = true;
                _this.isBurstTextHidden = true;
                _this.chartData[0].hidden = false;
                _this.isChartHidden = false;
                _this.multiplierDisplay = receivedData.number;
                // this.dataToPush = receivedData.number;
                if (receivedData.number >= 2) {
                    //pseudo chart label
                    _this.chartLabels.push('');
                }
                _this.chartData[0].data.push(receivedData.number);
                _this.chart.refresh();
            }
            else if (receivedData.type === "busted") {
                if (_this.currGameState !== 'busted') {
                    if (_this.hasActiveManualBet) {
                        _this.hashManualBetAmount = 1;
                        _this.smartAudio.play('game2explode');
                    }
                    _this.currGameState = 'busted';
                    //TODO: Sound on bust
                }
                // console.log("Received data type  " + receivedData.type);
                _this.isManualCoutDisabled = true;
                _this.isManualBetDisabled = true;
                // this.isSliderDisabled= true;
                _this.hasActiveManualBet = false;
                _this.chartData[0].hidden = true;
                _this.isChartHidden = true;
                _this.isBurstTextHidden = false;
                _this.isTimerHidden = true;
                _this.finalValue = parseFloat(receivedData.value).toFixed(2);
                //reset chart and stop timer
                _this.timer("stop", 0);
                _this.isLocGameTimerStarted = false;
                _this.chartLabels = [];
                _this.chartLabels =
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.01,
                        1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
                        2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.01,
                        3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0,
                        4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.01,
                        5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0,
                        6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.01,
                        7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0,
                        8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.01,
                        9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9
                    ];
                _this.chartData[0].data = [];
            }
            else if (receivedData.type === "countdown") {
                if (_this.currGameState !== 'countdown') {
                    _this.currGameState = 'countdown';
                    _this.walletAmount = _this.auth.getAccValue();
                    //TODO: Sound on bust
                }
                //log currentGameID here
                _this.isManualCoutDisabled = true;
                if (!_this.hasActiveManualBet) {
                    _this.isManualBetDisabled = false;
                    _this.isSliderDisabled = false;
                }
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
                _this.currGameState = '';
            }
            // this.socket.emit('event3', {
            //   msg: 'Yes, its working for me!!'
            // });
        });
        this.socket.on('Game3', function (data) {
            console.log("Receiving game 3 event " + data.msg);
        });
    };
    HashingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HashingPage');
    };
    HashingPage.prototype.ionViewWillEnter = function () {
        this.walletAmount = this.auth.getAccValue();
    };
    HashingPage.prototype.timer = function (action, startTime) {
        var _this = this;
        var time = startTime;
        if (action === 'start') {
            this.timerInterval = setInterval(function () {
                time++;
                // console.log("Counting timer " + time + "s");
                if (time > 15) {
                    if (time % 10 === 0) {
                        _this.chartLabels.push(time);
                        if (time === 30) {
                            var index = _this.chartLabels.indexOf(5.0);
                            if (index !== -1)
                                _this.chartLabels[index] = 5.1;
                            // console.log("Found index here " + index);
                            var index2 = _this.chartLabels.indexOf(15.0);
                            if (index2 !== -1)
                                _this.chartLabels[index2] = 15.1;
                        }
                        else if (time === 20) {
                            var index = _this.chartLabels.indexOf(6.0);
                            if (index !== -1)
                                _this.chartLabels[index] = 5.0;
                            // console.log("Found index here " + index);
                            var index2 = _this.chartLabels.indexOf(8.0);
                            if (index2 !== -1)
                                _this.chartLabels[index2] = 8.1;
                        }
                        else {
                            ;
                        }
                    }
                }
                else if (time >= 8) {
                    if (time % 5 === 0) {
                        _this.chartLabels.push(time);
                        //push 10
                        if (time === 10) {
                            var index = _this.chartLabels.indexOf(2.0);
                            console.log("Found index here " + index);
                            if (index !== -1)
                                _this.chartLabels[index] = 2.1;
                        }
                        else {
                            var index = _this.chartLabels.indexOf(4.0);
                            console.log("Found index here " + index);
                            if (index !== -1)
                                _this.chartLabels[index] = 4.1;
                        }
                        // console.log("Successfully pushed " + time);
                    }
                }
                else if (time === 7) {
                    // this.chartLabels.push(time);
                    // console.log("Successfully pushed " + time);
                }
                else if (time === 6) {
                    //skip
                }
                else if (time > 2) {
                    if (time % 2 === 0) {
                        // this.chartLabels.push(time);
                        // console.log("Successfully pushed " + time);
                    }
                }
                else {
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
                _this.hasActiveManualBet = true;
                _this.isManualBetDisabled = true;
                _this.isSliderDisabled = true;
                _this.isManualCoutDisabled = false;
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
            // console.log(err);
            // console.log(err.error.message);
            // console.log(err.message);
            if (err.status === 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_2.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_3.present();
                alert_3.onDidDismiss(function () {
                });
            }
        });
    };
    HashingPage.prototype.hashManualCout = function () {
        var _this = this;
        //to do post to cashout
        //make manual cashout call
        console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.currentGameID);
        this.dataProvider.postCoutGame2(this.auth.getAccId(), this.currentGameID).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            console.log("Received returned message " + data.message);
            console.log("Received returned multiplier " + data.multiplier);
            console.log("Received returned winning " + data.winning);
            _this.auth.addAccValue(parseFloat(data.winning).toFixed(2));
            _this.isManualCoutDisabled = true;
            _this.hasActiveManualBet = false;
            _this.walletAmount = _this.auth.getAccValue();
            if (parseInt(data.status) === 200) {
                // console.log("Game 1 buying btc okay");
                // console.log("actual bought tix= " + data.amount);
                var alert_4 = _this.alertCtrl.create({
                    title: 'SUCCESS',
                    subTitle: 'You have cashed out ' + parseFloat(data.winning).toFixed(2) + ' for this game',
                    buttons: ['OK']
                });
                alert_4.present();
                alert_4.onDidDismiss(function () {
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
    HashingPage.prototype.cValue = function (event, slider) {
        // console.log(" test here " +event.value);
        // slider.destroy();
    };
    HashingPage.prototype.filterInitChartLabels = function (currTime) {
        //20, 30,
        //base function
        if (currTime >= 20) {
            // var acceptedList = [10.0, 20.0, 20.0];
            for (var i = 1.0; i <= currTime; i++) {
                if ((i % 10) === 0) {
                    continue;
                }
                var index = this.chartLabels.indexOf(i);
                // console.log("Found index here " + index);
                console.log("Altering index before :  " + this.chartLabels[index]);
                if (index !== -1)
                    this.chartLabels[index] = i + 0.1;
                console.log("Altering index after :  " + this.chartLabels[index]);
            }
        }
        else if ((currTime >= 15) && (currTime <= 20)) {
            var acceptedList = [10.0, 15.0, 20.0];
            for (var i = 1.0; i <= currTime; i++) {
                if (acceptedList.indexOf(i) !== -1) {
                    continue;
                }
                var index = this.chartLabels.indexOf(i);
                // console.log("Found index here " + index);
                console.log("Altering index before :  " + this.chartLabels[index]);
                if (index !== -1)
                    this.chartLabels[index] = i + 0.1;
                console.log("Altering index after :  " + this.chartLabels[index]);
            }
        }
        else {
            for (var i = 1.0; i <= currTime; i++) {
                if (i === 10.0) {
                    continue;
                }
                var index = this.chartLabels.indexOf(i);
                // console.log("Found index here " + index);
                console.log("Altering index before :  " + this.chartLabels[index]);
                if (index !== -1)
                    this.chartLabels[index] = i + 0.1;
                console.log("Altering index after :  " + this.chartLabels[index]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], HashingPage.prototype, "chart", void 0);
    HashingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hashing',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\hashing\hashing.html"*/'<!--\n\n  Generated template for the HashingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 2: Hashing</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet *ngIf="!isGuestLogin" [walletAmount]="walletAmount"></inner-wallet>\n\n    </div>\n\n    <!-- <button item-icon-right class="button button-clear button-positive">Edit</button> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="hashingContent" padding>\n\n  <!-- Graph -->\n\n  <div class="graphCntr" style="display: block; width: 100%; height: 50%;">\n\n    <!-- <ion-col col-12 col-md-12> -->\n\n    <canvas [style.visibility]="isCanvasShown ? \'visible\' : \'hidden\'" id="ctx" baseChart [chartType]="\'line\'" [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors"\n\n      width="400" height="300" [legend]="false">\n\n      <!-- (chartClick)="onChartClick($event) -->\n\n    </canvas>\n\n    <!-- </ion-col> -->\n\n    <div class="arrow-head" [style.visibility]="isArrowHidden ? \'hidden\' : \'visible\'">\n\n      <ion-img width="70" height="70" src="../assets/imgs/test3.png" style=background:transparent></ion-img>\n\n    </div>\n\n\n\n    <div class="circle-cntr">\n\n      <div class="outer-circle" [style.visibility]="isChartHidden ? \'hidden\' : \'visible\'">\n\n        <svg xmlns="http://www.w3.org/2000/svg">\n\n          <circle cx="50" cy="50" r="50" fill="grey" fill-opacity="0.3" stroke="white" stroke-width="1" />\n\n          <text x="18%" y="35%" text-anchor="middle" fill="white" alignment-baseline="central">{{multiplierDisplay}} x</text>\n\n        </svg>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="burst-text" [style.visibility]="isBurstTextHidden ? \'hidden\' : \'visible\'">\n\n      Busted @ {{finalValue}}x\n\n    </div>\n\n\n\n    <div class="timer-text" [style.visibility]="isTimerHidden ? \'hidden\' : \'visible\'">\n\n      Next game in {{timerValue}} s\n\n    </div>\n\n  </div>\n\n  <!-- Commented to remvoe auto bet for now -->\n\n  <!-- <br> -->\n\n  <!-- <ion-segment [(ngModel)]="hashBetType" color="primary" (ionChange)="toggleSegment($event)">\n\n    <ion-segment-button outline value="manual">\n\n      Manual\n\n    </ion-segment-button>\n\n    <ion-segment-button disabled outline value="auto">\n\n      Auto\n\n    </ion-segment-button>\n\n  </ion-segment> -->\n\n\n\n  <div [ngSwitch]="hashBetType">\n\n    <ion-list *ngSwitchCase="\'manual\'" ngSelected="selected">\n\n      <!-- for manual -->\n\n      <!-- <ion-row style="font-size:16px;">\n\n        <ion-col col-12 text-center>\n\n          STAKE:&nbsp;&nbsp;\n\n          <span style="color:whitesmoke">{{hashManualBetAmount}}</span>&nbsp;&nbsp;BGM\n\n        </ion-col>\n\n      </ion-row>\n\n      <br> -->\n\n  \n\n      <!-- for input to scroll -->\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <ion-label color="primary">STAKE: </ion-label>\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          <ion-input type="number" [(ngModel)]="hashManualBetAmount" placeholder="0" attr.text-center [disabled]="isManualBetDisabled"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-label item-end color="primary">BGM</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item no-lines class="rangeSlider">\n\n        <ion-range min="1" [max]="walletAmount" [disabled]="isSliderDisabled" step="1" [(ngModel)]="hashManualBetAmount" color="secondary" (ionChange)="cValue($event, \'slider1\')">\n\n          <ion-label range-left>1</ion-label>\n\n          <ion-label range-right>{{walletAmount}}</ion-label>\n\n        </ion-range>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n        <button ion-button full color="secondary" [color]="isManualBetDisabled ? \'dark\' : \'secondary\'" [disabled]="isManualBetDisabled"\n\n          (click)="hashManualBet()">BET</button>\n\n      </ion-row>\n\n      <ion-row>\n\n        <button ion-button full color="secondary" [color]="isManualCoutDisabled ? \'dark\' : \'secondary\'" [disabled]="isManualCoutDisabled"\n\n          (click)="hashManualCout()">CASH OUT</button>\n\n      </ion-row>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'auto\'">\n\n      <!-- for auto -->\n\n      <ion-card style="height:auto">\n\n        <ion-card-content>\n\n          <!-- base bet-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Base Bet: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashAutoBasebet" placeholder="0" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <!-- Auto cashout at-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Cashout: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashAutoCashout" placeholder="2x" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <!-- Stop if-->\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-label color="primary">Stop if: </ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-input id="rounded" type="number" outline [(ngModel)]="hashLimitWin" placeholder="10000" attr.text-center [disabled]="isInputDisabled"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <!--2 buttons start stop-->\n\n      <ion-row>\n\n        <ion-col col-6 text-center>\n\n          <button ion-button color="secondary" full (click)="deposit()">RUN</button>\n\n        </ion-col>\n\n        <ion-col col-6 text-center>\n\n          <button ion-button color="secondary" full (click)="withdraw()">STOP</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\hashing\hashing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], HashingPage);
    return HashingPage;
}());

//# sourceMappingURL=hashing.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toggle_two_fa_toggle_two_fa__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__two_fac_auth_two_fac_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__qr_code_qr_code__ = __webpack_require__(170);
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
    function HomePage(platform, http, navCtrl, navParams, appCtrl, auth, nativeAudio, alertCtrl, modalCtrl) {
        this.platform = platform;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.auth = auth;
        this.nativeAudio = nativeAudio;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.twoFApage = __WEBPACK_IMPORTED_MODULE_10__two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */];
        this.toggleTwoFApage = __WEBPACK_IMPORTED_MODULE_9__toggle_two_fa_toggle_two_fa__["a" /* ToggleTwoFaPage */];
        this.qrPage = __WEBPACK_IMPORTED_MODULE_11__qr_code_qr_code__["a" /* QrCodePage */];
        this.createdCode = "https://" + "www.google.com";
        // this.socket = io.connect('http://178.128.50.224:3001');
        // console.log("socket conencted");
        this.isGuest = auth.getGuestLogin();
    }
    HomePage.prototype.ngOnInit = function () {
        this.getNews();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        //if 0 then no 2FA needed
        if (this.auth.get2FAStatus() === 0) {
            // this.initTwoFAstatus = false;
            this.twoFAstatus = false;
        }
        else {
            // this.initTwoFAstatus = true;
            this.twoFAstatus = true;
        }
    };
    //bgm loop works in home view, uncomment for mobile sound
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadComplex('bgmLoopHome', 'assets/audio/backgroundMusic.mp3', 1, 1, 0).then(function () {
                _this.nativeAudio.setVolumeForComplexAsset('bgmLoopHome', 0.5);
                _this.nativeAudio.loop('bgmLoopHome');
            });
        });
    };
    //NEWS API
    HomePage.prototype.getNews_Old = function () {
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
    HomePage.prototype.getNews = function () {
        var _this = this;
        console.log("button is working fine");
        // let imgPath = 'http://178.128.50.224:3000/getNews';
        // let encodedImgPath = encodeURI(imgPath);
        var timeoutMS = 100000;
        this.storyImage = 'http://178.128.50.224:3000/getNews';
        // this.http.get(encodedImgPath)
        //   .timeout(timeoutMS)
        //   .map(res => res.json()).subscribe(data => {
        //     let responseData = data;
        //     console.log(responseData);
        //     this.storyImage = responseData;
        //   },
        //     err => {
        //       console.log('error in getting news');
        //     });
        var textPath = 'http://178.128.50.224:3000/getNewsText';
        var encodedTextPath = encodeURI(textPath);
        this.http.get(encodedTextPath)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData.message);
            _this.displayStory = responseData.message;
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
    HomePage.prototype.showQRcode = function () {
        //to do alert
        this.navCtrl.push(this.qrPage);
        // let profileModal = this.modalCtrl.create(QrCodePage, { createdCode: this.createdCode });
        // profileModal.onDidDismiss(data => {
        //   console.log(data);
        // });
        // profileModal.present();
    };
    HomePage.prototype.showCommission = function () {
        console.log("Triggered comms page");
        //check if master or agent
    };
    HomePage.prototype.logout = function () {
        console.log("logout is working fine");
        this.auth.setSessionToken("");
        console.log("Destroy session token " + this.auth.getSessionToken());
        // console.log("rootnav = " +this.appCtrl.getRootNav());
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.toggle2FA = function () {
        // console.log("init 2fa status " + this.initTwoFAstatus);
        console.log("toggled 2fa " + this.twoFAstatus);
        //both turn on and off also need verify 2FA
        // if (this.twoFAstatus===true){
        // this.navCtrl.push(this.twoFApage);
        this.navCtrl.push(this.toggleTwoFApage);
        // }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <!-- <ion-icon name="home"></ion-icon> -->\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid style="height: 100%">\n\n\n\n    <ion-row>\n\n      <ion-col col-12 text-center>\n\n        <img width=100% height=100% src={{this.storyImage}} style="background:transparent">\n\n      </ion-col>\n\n    </ion-row>\n\n    <br>\n\n    <ion-row>\n\n      {{this.displayStory}}\n\n    </ion-row>\n\n    <br>\n\n    <!-- About button -->\n\n    <!--contact button-->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" (click)="showAbout()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n\n            </span>\n\n            About\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!--contact button-->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" (click)="showContact()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="call"></ion-icon>\n\n            </span>\n\n            Contact Support\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!--update 2 FA -->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item no-lines class="twoFA" *ngIf="!isGuest">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="lock"></ion-icon>\n\n            </span>\n\n            Toggle 2FA\n\n          </span>\n\n          <ion-toggle [(ngModel)]="twoFAstatus" (ionChange)="toggle2FA()"></ion-toggle>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!--get ref QR code -->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines class="referQR" *ngIf="!isGuest" color="dark" style="color:secondary;" (click)="showQRcode()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="qr-scanner"></ion-icon>\n\n            </span>\n\n            Get Referral QR\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!--get comission page -->\n\n    <!-- <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines class="viewCommission" *ngIf="!isGuest" color="dark" style="color:secondary;" (click)="showCommission()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n                <ion-icon ios="ios-cash-outline" md="md-cash"></ion-icon>\n\n            </span>\n\n            Comission Earned\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <!--logout button-->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" [style.visibility]="isGuest ? \'hidden\' : \'visible\'" (click)="logout()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px">\n\n              <ion-icon name="log-out"></ion-icon>\n\n            </span>\n\n            Logout\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(29);
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
    function WalletPage(navCtrl, navParams, alertCtrl, auth, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.walletType = 'investment';
        this.refreshIcon = 'refresh';
        this.currentView = 'game';
        // balances: any = {
        //   'investment': 12340,
        //   'game': 750,
        // };
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
        this.currentView = 'game';
        this.walletBalance = this.auth.getAccValue();
        this.historicalGames = new Array();
    }
    WalletPage.prototype.ngOnInit = function () {
        this.updateStatementHistory();
        // this.dataProvider.postPastTransactions(this.auth.getAccId()).subscribe(data => {
        //   //receive successfully
        //   console.log("Received data here  " + data);
        //   console.log("Login reponse");
        //   for (var i = 0; i < data.orders.length; i++) {
        //     //FOR loop iterate all and form objects//
        //     //--STORE TIME--
        //     // console.log("timestamp of first order " + data.orders[i].updated);
        //     //convert time stamp
        //     var myDate = new Date(data.orders[i].updated);
        //     var localeDate = myDate.toLocaleString('en-GB');
        //     console.log("locale date = " + localeDate);
        //     var formattedDate = localeDate.substring(0,5) + ' '+ localeDate.substring(12, 17);
        //     console.log("Formatted date: " + formattedDate);
        //     //--STORE GAME NAME--
        //     // console.log("" + data.orders[i].gameName);
        //     //--STORE PROFIT--
        //     // console.log("profit of first order " + data.orders[i].profit)
        //     var singleGame = {
        //       "time": formattedDate,
        //       "gameID": data.orders[i].gameName,
        //       "gameNo": data.orders[i].gameNo,
        //       "profit": parseInt(data.orders[i].profit)
        //     }
        //     //push array
        //     this.historicalGames.push(singleGame);
        //     // console.log("Display historical game" + this.historicalGames[i].time + " gameID = " + this.historicalGames[i].gameID + " profit = " + this.historicalGames[i].profit);
        //     // console.log("historical game name size "  + this.historicalGames.length);
        //   }
        // },
        //   err => {
        //     console.log("Error occured while getting past transactions");
        //     console.log(err);
        //   });
    };
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
    };
    WalletPage.prototype.ionViewWillEnter = function () {
        this.walletBalance = this.auth.getAccValue();
        this.updateStatementHistory();
    };
    // toggleSegment($event) {
    //   console.log("Chosen segment " + $event.value);
    //   //update current view & wallet balance
    //   this.currentView = $event.value;
    //   this.walletBalance = this.balances[this.currentView];
    // }
    WalletPage.prototype.getStatements = function (type) {
        // console.log("Call get statements");
        return this.statements[type];
    };
    //driver functions, deposit withdraw
    WalletPage.prototype.deposit = function () {
        //check current view & present alert
        // if (this.currentView === 'investment') {
        //   this.investmentDeposit();
        // }
        if (this.currentView === 'game') {
            this.gameDeposit();
        }
        else {
            //do nothing
            console.log("Entered exception for currentView on deposit");
        }
    };
    WalletPage.prototype.withdraw = function () {
        //check current view & present alert
        // if (this.currentView === 'investment') {
        //   this.investmentWithdraw();
        // }
        if (this.currentView === 'game') {
            this.gameWithdraw();
        }
        else {
            //do nothing
            console.log("Entered exception for currentView on deposit");
        }
    };
    // investmentDeposit() {
    //   let alert = this.alertCtrl.create({
    //     title: 'Proceed to deposit?',
    //     message: 'You will be redirected to the page for deposit',
    //     buttons: [
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           console.log('Yes click to redirect');
    //         }
    //       },
    //       {
    //         text: 'No',
    //         handler: () => {
    //           console.log('Not opening page');
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    // investmentWithdraw() {
    //   let alert = this.alertCtrl.create({
    //     title: 'Withdraw to bank',
    //     message: 'Enter amount to withdraw',
    //     inputs: [
    //       {
    //         name: 'Amount',
    //         placeholder: 'e.g 10000 (1BGM = 0.01 USD)'
    //       },
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         handler: (data) => {
    //           console.log('Cancelled withdraw intended ' + data.Amount + ' to bank');
    //         }
    //       },
    //       {
    //         text: 'Withdraw',
    //         handler: (data) => {
    //           console.log('Processing withdraw ' + data.Amount + ' to bank');
    //           console.log(JSON.stringify(data)); //to see the object
    //           console.log("Amount input was " + data.Amount);
    //           this.processInvWithdrawal(data.Amount);
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    // processInvWithdrawal(amount: any) {
    //   //to insert post call for withdrwal return then
    //   let alert = this.alertCtrl.create({
    //     title: 'SUCCESS',
    //     subTitle: 'Your withdrawal of ' + amount + ' BGM was successful and will be reflected in your bank in 2 days',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    WalletPage.prototype.updateStatementHistory = function () {
        var _this = this;
        this.historicalGames = new Array();
        this.dataProvider.postPastTransactions(this.auth.getAccId()).subscribe(function (data) {
            //receive successfully
            // console.log("Received data here  " + data);
            // console.log("Login reponse");
            for (var i = 0; i < data.orders.length; i++) {
                //FOR loop iterate all and form objects//
                //--STORE TIME--
                // console.log("timestamp of first order " + data.orders[i].updated);
                //convert time stamp
                var myDate = new Date(data.orders[i].updated);
                var localeDate = myDate.toLocaleString('en-GB');
                // console.log("locale date = " + localeDate);
                var formattedDate = localeDate.substring(0, 5) + ' ' + localeDate.substring(12, 17);
                // console.log("Formatted date: " + formattedDate);
                //--STORE GAME NAME--
                // console.log("" + data.orders[i].gameName);
                //--STORE PROFIT--
                // console.log("profit of first order " + data.orders[i].profit)
                var singleGame = {
                    "time": formattedDate,
                    "gameID": data.orders[i].gameName,
                    "gameNo": data.orders[i].gameNo,
                    "profit": parseInt(data.orders[i].profit)
                };
                //push array
                _this.historicalGames.push(singleGame);
                // console.log("Display historical game" + this.historicalGames[i].time + " gameID = " + this.historicalGames[i].gameID + " profit = " + this.historicalGames[i].profit);
                // console.log("historical game name size "  + this.historicalGames.length);
            }
        }, function (err) {
            console.log("Error occured while getting past transactions");
            console.log(err);
        });
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
                        _this.dataProvider.postDepositWallet(_this.auth.getAccId(), data.Amount).subscribe(function (resReceived) {
                            //receive successfully
                            console.log("account info " + resReceived.accountValue);
                            _this.auth.setAccValue(resReceived.accountValue);
                            _this.walletBalance = _this.auth.getAccValue();
                            _this.updateStatementHistory();
                            _this.processGameDeposit(resReceived.order.profit);
                        }, function (err) {
                            console.log("Error occured while depositing");
                            console.log(err);
                        });
                        console.log(JSON.stringify(data)); //to see the object
                        console.log("Amount input was " + data.Amount);
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
                        console.log('Processing withdraw ' + data.Amount + ' to investment wallet');
                        _this.dataProvider.postWithdrawWallet(_this.auth.getAccId(), data.Amount).subscribe(function (resReceived) {
                            //receive successfully
                            console.log("account info " + resReceived.accountValue);
                            _this.auth.setAccValue(resReceived.accountValue);
                            _this.walletBalance = _this.auth.getAccValue();
                            _this.updateStatementHistory();
                            _this.processGameWithdrawal(Math.abs(resReceived.order.profit));
                        }, function (err) {
                            console.log("Error occured while withdrawing");
                            console.log(err);
                        });
                        console.log(JSON.stringify(data)); //to see the object
                        console.log("Amount input was " + data.Amount);
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
        var _this = this;
        console.log("refreshing wallets");
        this.dataProvider.postWalletAmount(this.auth.getAccId()).subscribe(function (data) {
            //parse response from server
            console.log("Update wallet reponse");
            console.log("Received acc balance as  " + data.accountValue);
            _this.auth.setAccValue(parseInt(data.accountValue));
            console.log("Global provider value of acc " + _this.auth.getAccValue());
            _this.walletBalance = _this.auth.getAccValue();
            //to present alert to refresh wallet
            var alert = _this.alertCtrl.create({
                title: 'SUCCESS',
                subTitle: 'Wallet Refreshed',
                buttons: ['OK']
            });
            alert.present();
        }, function (err) {
            console.log("Error occured while getting account balance");
            var alert = _this.alertCtrl.create({
                title: 'ERROR',
                subTitle: 'Wallet cannot be refreshed at this time. Please try again.',
                buttons: ['OK']
            });
            alert.present();
            console.log(err);
        });
        // this.navCtrl.setRoot(TabsPage);
        console.log("End getting amount");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], WalletPage.prototype, "Game2Chart", void 0);
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Wallet</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--toolbar for navigating wallet-->\n\n  <!-- <ion-toolbar color="app-bg">\n\n    <ion-segment [(ngModel)]="walletType" color="primary" (ionChange)="toggleSegment($event)">\n\n      <ion-segment-button outline value="investment">\n\n        Investment\n\n      </ion-segment-button>\n\n      <ion-segment-button outline value="game">\n\n        Game\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar> -->\n\n\n\n  <ion-card style="height:20%">\n\n    <ion-card-header color="primary" style="font-size:20px">\n\n      You have:\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-img width="30" height="30" src="../assets/imgs/BGM_Logo.png" style="background:transparent; padding-top:-5%;"></ion-img>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <span class="align-right">{{walletBalance}}\n\n            <span style="color:#f3ba2e">BGM</span>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <span class="refresh-button">\n\n            <button ion-button default clear icon-only (click)=refreshWallet()>\n\n              <ion-icon name="refresh"></ion-icon>\n\n            </button>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- top up and withdraw buttons-->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6 text-center>\n\n      <button ion-button color="secondary" full (click)="deposit()">DEPOSIT</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-center>\n\n      <button ion-button color="secondary" full (click)="withdraw()">WITHDRAW</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <!-- <ion-card style="height:50%">\n\n    <ion-card-content> -->\n\n  <ion-row style="height:80%">\n\n    <ion-scroll scrollY="true">\n\n      <ion-list col-12 no-lines>\n\n        <ion-list-header no-lines text-color="light">\n\n          <span col-2 item-start>Time</span>\n\n          <span col-6>[Game] Trans</span>\n\n          <span col-4 item-end style="text-align:right; padding-right:5%">W/L</span>\n\n        </ion-list-header>\n\n        <ion-item *ngFor="let games of historicalGames">\n\n          <span col-2 item-start style="font-size:12px">{{games.time}}</span>\n\n          <span col-6>[{{games.gameNo}}] {{games.gameID}}</span>\n\n          <span col-4 item-end [style.color]="games.profit > 0 ? \'green\' : \'red\'" style="font-weight:700; text-align:right">{{ games.profit }}</span>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-scroll>\n\n  </ion-row>\n\n  <!-- </ion-card-content>\n\n  </ion-card> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { getQueryValue } from '@angular/core/src/view/query';





/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StreamPage = /** @class */ (function () {
    function StreamPage(navCtrl, navParams, auth, dataProvider, alertCtrl, smartAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.smartAudio = smartAudio;
        this.isBetDisabled = true;
        this.hasActiveBet = false;
        this.count = 30.0;
        this.boughtIntoGame3 = false;
        this.yDataReceived = Math.random() * 20;
        this.testGlobalVar = 6000;
        this.buffer = [[], []];
        this.chartLabels = [];
        // private datamap: any;
        this.chartColors = [
            {
                backgroundColor: 'rgba(255, 206, 86, 0)',
                borderColor: '#f3ba2e',
                pointBackgroundColor: '#f3ba2e',
                // pointBorderColor: '#fafafa',
                pointRadius: 0,
                pointHoverBackgroundColor: '#f3ba2e',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)' //changing hover point color
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#FF0000',
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointHoverBackgroundColor: '#FF0000',
                pointHoverBorderColor: '#FF0000'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#2D8632',
                pointBackgroundColor: '#2D8632',
                pointBorderColor: '#2D8632',
                pointHoverBackgroundColor: '#2D8632',
                pointHoverBorderColor: '#2D8632'
            }
        ];
        this.datasets = [
            { data: [], showLine: true, fill: true, label: 'BitCoin', },
            { data: [], showLine: false, pointRadius: 5, label: 'Short' },
            { data: [], showLine: false, pointRadius: 5, label: 'Long' }
        ];
        //do socket connection
        this.isSliderDisabled = true;
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__["connect"]('http://178.128.50.224:3002');
        console.log("socket for BinaryOptions conencted");
        this.isGuestLogin = this.auth.getGuestLogin();
        // this.isGameTime = true;
        this.historicalGame3 = new Array();
        this.updatePastGame();
        this.musicPlayed = false;
    }
    StreamPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ionViewDidLoad StreamPage');
        //variable currentPrice,
        //on game, countdown, gamestart. NO game end yet
        var gameValuesToPush;
        var localActiveBet;
        var localEntryPrice;
        var lastCountDown;
        var updatePriceFlag;
        var currCountDown;
        this.socket.on('Game3', function (data) {
            // console.log(JSON.parse(data));
            var receivedData = JSON.parse(data);
            // console.log("Received data type  " + receivedData.type);
            localActiveBet = _this.hasActiveBet;
            localEntryPrice = _this.entryPrice;
            // console.log("update this entry price " + this.entryPrice +" Local: "+ localEntryPrice);
            if (receivedData.type === 'gameStart') {
                // console.log("received gameStart");
                _this.isBetDisabled = true;
                if (_this.currGameState !== 'gameStart') {
                    if (_this.hasActiveBet) {
                        _this.isSliderDisabled = true;
                    }
                    else {
                        _this.isSliderDisabled = false;
                    }
                    _this.showGameTime = true;
                    _this.showCountdown = false;
                    _this.showGameEnded = false;
                    _this.currGameState = 'gameStart';
                    console.log("Toggled state " + _this.currGameState);
                    //TODO: Sound 
                }
                //one instance
            }
            else if (receivedData.type === 'countdown') {
                _this.timerValue = parseFloat(receivedData.number).toFixed(1);
                gameValuesToPush = receivedData.currentPrice;
                // console.log("Updating current price in countdown " + gameValuesToPush);
                // console.log("Counting down: " + receivedData.number);
                if (_this.currGameState !== 'countdown') {
                    _this.isBetDisabled = false;
                    _this.isSliderDisabled = false;
                    _this.showGameTime = false;
                    _this.showCountdown = true;
                    _this.showGameEnded = false;
                    _this.currGameState = 'countdown';
                    _this.currGame3ID = receivedData.GameId;
                    console.log("Toggled state " + _this.currGameState + " changed curr game id " + _this.currGame3ID);
                }
            }
            else if (receivedData.type === 'game') {
                _this.isBetDisabled = true;
                // var updatePriceFlag; 
                // var currCountDown;
                // currCountDown = parseInt(receivedData.number);
                // console.log("Current countdown = " + currCountDown);
                // if (currCountDown < lastCountDown) {
                //   gameValuesToPush = receivedData.currentPrice;
                //   lastCountDown = currCountDown;
                //   console.log("pushed value " + gameValuesToPush);
                // }
                gameValuesToPush = receivedData.currentPrice;
                _this.gameTimer = parseFloat(receivedData.number).toFixed(1);
                // console.log("Updating current price in game " + gameValuesToPush);
                // console.log("Game timer : " + receivedData.number + " price " + receivedData.currentPrice);
                if ((_this.gameTimer < 4.2) && (_this.hasActiveBet)) {
                    if (!_this.musicPlayed) {
                        _this.smartAudio.play('game3countdown');
                        _this.musicPlayed = true;
                    }
                }
                if (_this.currGameState !== 'game') {
                    _this.currGame3ID = receivedData.GameId;
                    _this.showGameTime = true;
                    _this.showCountdown = false;
                    _this.showGameEnded = false;
                    _this.currGameState = 'game';
                    console.log("Toggled state " + _this.currGameState);
                    console.log("Toggled state " + _this.currGameState + " changed curr game id " + _this.currGame3ID);
                }
            }
            else if (receivedData.type === 'gameEnd') {
                //game ended;
                _this.showGameTime = false;
                gameValuesToPush = receivedData.endValue;
                if (_this.currGameState !== 'gameEnd') {
                    //TOGGLE STATE TO GAME END
                    if (_this.hasActiveBet) {
                        _this.destroyBetInstance();
                        _this.isSliderDisabled = false;
                        _this.game3BetAmount = '';
                    }
                    _this.musicPlayed = false;
                    _this.hasActiveBet = false;
                    _this.showCountdown = false;
                    _this.showGameEnded = true;
                    _this.currGameState = 'gameEnd';
                    _this.finalRoundValue = parseFloat(receivedData.endValue).toFixed(2);
                    //Update past game
                    _this.updatePastGame();
                    //restart gameTimer
                    _this.gameTimer = 15.0;
                    console.log("Toggled state " + _this.currGameState);
                }
            }
            else {
                //do nth, error state.
                _this.currGameState = '';
            }
        });
        //INSERTION HERE
        this.socket.on('Game3orders', function (data) {
            // console.log(JSON.parse(data));
            var receivedData = JSON.parse(data);
            // console.log(receivedData[0].longOrders);
            // console.log(receivedData[0].shortOrders);
            // console.log(receivedData[0].price);
            // console.log("Received data type  " + receivedData.type);
            // console.log("update this entry price " + this.entryPrice +" Local: "+ localEntryPrice);
            if (parseInt(receivedData[0].shortOrders) === 0) {
                //this is to insert in long chart
                // console.log("received gameStart");
                _this.chart.datasets[2].data.push({
                    x: Date.now(),
                    y: receivedData[0].price,
                });
                console.log("Long Orders here " + receivedData[0].longOrders);
                // this.chart.refresh();
                //one instance
            }
            else {
                //this is to insert in short chart
                console.log("Short Orders here " + receivedData[0].shortOrders);
                _this.chart.datasets[1].data.push({
                    x: Date.now(),
                    y: gameValuesToPush,
                });
                // this.chart.refresh();
            }
        });
        // buffer=[[7000],[Date.now()]];
        // this.startGame(10);
        var test = this.testGlobalVar;
        this.options = {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            plugins: {
                streaming: {
                    refresh: 500,
                    duration: 30000,
                    //can create function to copy here from received data above?
                    //or create socket here and update value here;
                    getClassValue: function () {
                        // console.log("is calling get class value but returning " + this.testGlobalVar);
                        return this.testGlobalVar;
                    },
                    updateVar: function () {
                        test = this.randomIntRange(5000, 8000);
                    },
                    randomIntRange: function (min, max) {
                        // console.log("managed to call function");
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    },
                    onRefresh: function (chart) {
                        this.updateVar();
                        var count = 0;
                        // var value = this.randomIntRange(3000,8000);
                        console.log("how many datasets i have " + chart.data.datasets.length);
                        // console.log("pushing " + gameValuesToPush);
                        chart.data.datasets[0].data.push({
                            x: Date.now(),
                            y: gameValuesToPush,
                        });
                        // console.log('check active bet here ' + localActiveBet);
                        if (localActiveBet) {
                            // console.log("Entered if condition");
                            // console.log("buychart value is " + chart.data.datasets[1].data[0]);
                            chart.data.datasets[3].data.push({
                                x: Date.now(),
                                y: localEntryPrice,
                            });
                            // console.log("After push entry value" + localEntryPrice);
                        }
                        ;
                    },
                    delay: 2000,
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
                            fontSize: 11,
                            padding: 5,
                            display: true,
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
    StreamPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    StreamPage.prototype.destroyBetInstance = function () {
        console.log("pop buyline chart");
        this.datasets.pop();
        this.chart.refresh();
    };
    StreamPage.prototype.buyDataset = function (orderType, entryPrice) {
        console.log("Try to add new dataset");
        var color;
        if (orderType === "long") {
            color = 'green';
        }
        else {
            color = 'red';
        }
        var newDataset = {
            label: 'Buy Price',
            backgroundColor: color,
            borderColor: color,
            borderWidth: 2,
            fill: false,
            lineTension: 0,
            data: [],
            pointRadius: 0,
        };
        this.datasets.push(newDataset);
        this.chart.refresh();
    };
    StreamPage.prototype.betHigher = function () {
        var _this = this;
        //to pass in currGame3ID
        this.dataProvider.postBetGame3(this.game3BetAmount, "long", this.auth.getAccId(), this.currGame3ID).subscribe(function (data) {
            // pass the response from HTTP Request into local variable1 receivedData
            // var receivedData= JSON.parse(data);
            console.log("bought " + _this.game3BetAmount);
            console.log("Received entry price " + data.entryPrice);
            if (parseInt(data.status) === 200) {
                _this.isBetDisabled = true;
                _this.isSliderDisabled = true;
                _this.boughtIntoGame3 = true;
                _this.roundBetType = 'long';
                _this.buyDataset(_this.roundBetType, parseFloat(data.entryPrice).toFixed(3));
                _this.auth.setAccValue(data.accountValue);
                _this.walletAmount = _this.auth.getAccValue();
                _this.entryPrice = parseFloat(data.entryPrice).toFixed(3);
                // this.isManualBetDisabled = true;
                // this.isManualCoutDisabled = false;
                _this.hasActiveBet = true;
                // this.game3BetAmount = '';
                var alert_1 = _this.alertCtrl.create({
                    title: 'SUCCESS',
                    subTitle: 'You have staked ' + data.amount + ' on HIGHER end value at entry price of ' + data.entryPrice,
                    buttons: ['OK']
                });
                alert_1.present();
                alert_1.onDidDismiss(function () {
                });
            }
        }, function (err) {
            console.log("Error occured while placing long bet");
            // console.log(err);
            // console.log(err.error.message);
            // console.log(err.message);
            if (err.status === 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_2.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_3.present();
                alert_3.onDidDismiss(function () {
                });
            }
        });
    };
    StreamPage.prototype.betLower = function () {
        var _this = this;
        //to pass in currGame3ID
        this.dataProvider.postBetGame3(this.game3BetAmount, "short", this.auth.getAccId(), this.currGame3ID).subscribe(function (data) {
            // pass the response from HTTP Request into local variable1 receivedData
            // var receivedData= JSON.parse(data);
            console.log("bought " + _this.game3BetAmount);
            console.log("Received entry price " + data.entryPrice);
            // this.auth.setAccValue(data.accountValue);
            // this.walletAmount = this.auth.getAccValue();
            if (parseInt(data.status) === 200) {
                _this.isBetDisabled = true;
                _this.isSliderDisabled = true;
                _this.boughtIntoGame3 = true;
                _this.roundBetType = 'short';
                _this.entryPrice = data.entryPrice;
                _this.buyDataset(_this.roundBetType, data.entryPrice);
                _this.auth.setAccValue(data.accountValue);
                _this.walletAmount = _this.auth.getAccValue();
                // this.hasActiveManualBet = true;
                // this.isManualBetDisabled = true;
                // this.isManualCoutDisabled = false
                _this.hasActiveBet = true;
                // this.game3BetAmount = '';
                var alert_4 = _this.alertCtrl.create({
                    title: 'SUCCESS',
                    subTitle: 'You have staked ' + data.amount + ' on LOWER end value at entry price of ' + data.entryPrice,
                    buttons: ['OK']
                });
                alert_4.present();
                alert_4.onDidDismiss(function () {
                });
            }
        }, function (err) {
            console.log("Error occured while placing short bet");
            // console.log(err);
            // console.log(err.error.message);
            // console.log(err.message);
            if (err.status === 0) {
                var alert_5 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_5.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_6 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_6.present();
                alert_6.onDidDismiss(function () {
                });
            }
        });
    };
    StreamPage.prototype.updatePastGame = function () {
        var _this = this;
        this.dataProvider.postPastGame3(this.auth.getAccId()).subscribe(function (data) {
            // pass the response from HTTP Request into local variable1 receivedData
            // var receivedData= JSON.parse(data);
            _this.historicalGame3 = new Array();
            // console.log("Updating past game entry price " + data.entryPrice);
            // console.log("Updating past game end price " + data.endPrice);
            // console.log("Updating past game profit  " + data.profit);
            // console.log("Updating past game gameName " + data.gameName);
            if (parseInt(data.status) === 200) {
                //set up for 1 bet per game first
                console.log("Updating past game entry price " + data.data.entryPrice);
                console.log("Updating past game end price " + data.data.endPrice);
                console.log("Updating past game profit  " + data.data.profit);
                console.log("Updating past game gameName " + data.data.gameName);
                _this.auth.setAccValue(data.accountValue);
                _this.walletAmount = _this.auth.getAccValue();
                var transaction = {
                    "entryPrice": parseFloat(data.data.entryPrice).toFixed(2),
                    "betType": data.data.orderTypeDisplay,
                    "endPrice": parseFloat(data.data.endPrice).toFixed(2),
                    "profit": parseInt(data.data.profit)
                };
                _this.historicalGame3.push(transaction);
            }
        }, function (err) {
            console.log("Error occured while getting past transactions");
        });
    };
    StreamPage.prototype.calcRoundResult = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], StreamPage.prototype, "chart", void 0);
    StreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stream',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\stream\stream.html"*/'<!--\n\n  Generated template for the StreamPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 3: Binary Options</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet *ngIf="!isGuestLogin" [walletAmount]="walletAmount"></inner-wallet>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding overflow-scroll="true">\n\n  <ion-grid style="height:100%; width:100%">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div class="bet-timer" *ngIf="showCountdown">\n\n          Next game in {{timerValue}} s\n\n        </div>\n\n        <div class="game-timer" *ngIf="showGameTime">\n\n          Game ending in {{gameTimer}} s\n\n        </div>\n\n        <div class="end-text" *ngIf="showGameEnded">\n\n          Round ended @ {{finalRoundValue}}\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row style="height:50%; width:100%">\n\n      <canvas baseChart [chartType]="\'line\'" [datasets]="datasets" [colors]="chartColors" [labels]="chartLabels" [options]="options"\n\n        width=100% height=80%></canvas>\n\n    </ion-row>\n\n    <br><br>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-input type="number" [(ngModel)]="game3BetAmount" placeholder="Amount" attr.text-center [disabled]="true"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button [color]="isBetDisabled ? \'dark\' : \'higher-green\'" full [disabled]="isBetDisabled" (click)="betHigher()">\n\n          <span style="font-weight:700; color:whitesmoke">Higher</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button [color]="isBetDisabled ? \'dark\' : \'lower-red\'" full [disabled]="isBetDisabled" (click)="betLower()">\n\n          <span style="font-weight:700; color:whitesmoke">Lower</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item no-lines class="rangeSlider"> \n\n      <ion-range min="1" [max]="walletAmount" step="1" [disabled]="isSliderDisabled" [(ngModel)]="game3BetAmount" color="secondary">\n\n        <ion-label range-left>1</ion-label>\n\n        <ion-label range-right>{{walletAmount}}</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n    <ion-row style="height:25%; width:100%">\n\n      <ion-scroll scrollY="true">\n\n        <ion-list col-12 no-lines>\n\n          <ion-list-header no-lines style="color:#f3ba2e">\n\n            <ion-col col-4>Price</ion-col>\n\n            <ion-col col-2>Bet Type</ion-col>\n\n            <ion-col col-3>Close</ion-col>\n\n            <ion-col item-end col-3>Profit</ion-col>\n\n          </ion-list-header>\n\n          <ion-item style="font-size:14px" *ngFor="let transaction of historicalGame3">\n\n            <ion-col col-4>{{transaction.entryPrice}}</ion-col>\n\n            <!-- <span col-3>Lo</span> -->\n\n            <ion-col col-2>{{transaction.betType}}</ion-col>\n\n            <ion-col col-3>\n\n              <span style="padding-left:10%">{{transaction.endPrice}}</span>\n\n            </ion-col>\n\n            <ion-col item-end col-3>\n\n              <span [style.color]="transaction.profit > 0 ? \'green\' : \'red\'" style="font-weight:700; text-align:right">{{transaction.profit}}</span>\n\n            </ion-col>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-scroll>\n\n    </ion-row>\n\n    <!-- <ion-card style="height:25%; font-size:4px;">\n\n      <ion-card-header color="primary">\n\n        Last Bet\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row style="color:#f3ba2e">\n\n          <ion-col col-3>\n\n            Price\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Bet Type\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Close\n\n          </ion-col>\n\n          <ion-col text-align-right col-3>\n\n            Profit\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row style="color:grey">\n\n          <ion-col col-3>\n\n            5800\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            Hi\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            6000\n\n          </ion-col>\n\n          <ion-col text-align-right col-3>\n\n            <span style="color:green">+300</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\stream\stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrehuntPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slotsdraw_slotsdraw__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slots_draw_btc_slots_draw_btc__ = __webpack_require__(168);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.auth = auth;
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
        this.isGuestLogin = this.auth.getGuestLogin();
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
            if (data.status === 200) {
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
                if (parseInt(_this.receivedData.data[1].status) === 1) {
                    _this.isBTCDrawAvail = true;
                }
                else {
                    _this.isBTCDrawAvail = false;
                }
                console.log("btc draw available " + _this.isBTCDrawAvail);
                //ETH updates
                _this.currETHGameID = _this.receivedData.data[0].gameName;
                _this.purchaseETHGameID = _this.receivedData.data[0]._id;
                _this.totalETHtix = _this.receivedData.data[0].totalAmount;
                _this.currETHtix = _this.receivedData.data[0].currentAmount;
                _this.currOwnETHtix = _this.receivedData.data[0].orders.length;
                if (parseInt(_this.receivedData.data[0].status) === 1) {
                    _this.isETHDrawAvail = true;
                }
                else {
                    _this.isETHDrawAvail = false;
                }
                console.log("eth draw available " + _this.isETHDrawAvail);
                _this.loadBTCProgress = ((_this.currBTCtix / _this.totalBTCtix) * 100).toFixed(2);
                if (parseInt(_this.loadBTCProgress) === 100) {
                    _this.BTCTixDisabled = true;
                }
                else {
                    _this.BTCTixDisabled = false;
                }
                _this.loadETHProgress = ((_this.currETHtix / _this.totalETHtix) * 100).toFixed(2);
                if (parseInt(_this.loadETHProgress) === 100) {
                    _this.ETHTixDisabled = true;
                }
                else {
                    _this.ETHTixDisabled = false;
                }
            }
        }, function (err) {
            console.log("Error occured while retrieving game 1 status");
            console.log(err);
        });
    };
    TrehuntPage.prototype.viewBTCResults = function () {
        console.log("Going to BTC lucky draw");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__slots_draw_btc_slots_draw_btc__["a" /* SlotsDrawBtcPage */]);
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
        console.log("buying " + this.amountBTCtix + " BTC Tix");
        //passing in params & buying tickets
        this.dataProvider.postBuyGame1(this.auth.getAccId(), this.purchaseBTCGameID, this.amountBTCtix).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            if (parseInt(data.status) === 200) {
                console.log("params accId= " + _this.auth.getAccId() + " currBTC gameID " + _this.currBTCGameID + " amount to buy= " + _this.amountBTCtix);
                console.log("Game 1 buying btc okay");
                console.log("actual bought tix= " + data.amount);
                console.log("accountValue after posting " + data.accountValue);
                _this.auth.setAccValue(data.accountValue);
                _this.walletAmount = _this.auth.getAccValue();
                _this.presentAlert(data.tickets.length, 'BTC', data.tickets);
                _this.updateCurrGameDetails();
            }
        }, function (err) {
            console.log("Error occured while buying BTC tickets");
            console.log(err);
            _this.presentErrorAlert();
        });
        // this.currOwnBTCtix += parseInt(this.amountBTCtix);
        // this.updateCurrBTCtix(this.amountBTCtix, "bought");
    };
    TrehuntPage.prototype.buyETHtix = function () {
        var _this = this;
        console.log("buying " + this.amountETHtix + " ETH Tix");
        //passing in params & buying tickets
        console.log("params accId= " + this.auth.getAccId() + " currBTC gameID " + this.purchaseETHGameID + " amount to buy= " + this.amountETHtix);
        this.dataProvider.postBuyGame1(this.auth.getAccId(), this.purchaseETHGameID, this.amountETHtix).subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            if (parseInt(data.status) === 200) {
                console.log("Game 1 buying eth okay");
                console.log("actual bought tix= " + data.amount);
                console.log("accountValue after posting " + data.accountValue);
                _this.auth.setAccValue(data.accountValue);
                _this.walletAmount = _this.auth.getAccValue();
                _this.presentAlert(data.tickets.length, 'ETH', data.tickets);
                _this.updateCurrGameDetails();
            }
        }, function (err) {
            console.log("Error occured while buying ETH tickets");
            console.log(err);
            _this.presentErrorAlert();
        });
        // console.log("bought " + this.amountETHtix + " ETH Tix");
        // // this.presentAlert(this.amountETHtix, 'ETH');
        // this.currOwnETHtix += parseInt(this.amountETHtix);
        // this.updateCurrETHtix(this.amountETHtix, "bought");
    };
    TrehuntPage.prototype.presentErrorAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Something went wrong',
            message: 'Please try again',
            buttons: ['OK']
        });
        alert.present();
        alert.onDidDismiss(function () {
        });
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
            selector: 'page-trehunt',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\trehunt\trehunt.html"*/'<!--\n\n  Generated template for the TrehuntPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Game 1: Treasure!</ion-title>\n\n    <div class="walletDisplay">\n\n      <inner-wallet *ngIf = "!isGuestLogin" [walletAmount]="walletAmount"></inner-wallet>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <!--for curr game id-->\n\n    <!-- <h2 style="text-align: center">Current Est. Price</h2> -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="style-game-id">\n\n          GameID:\n\n          <span style="color:#f3ba2e">{{currBTCGameID}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="style-game-id">\n\n          GameID:\n\n          <span style="color:#f3ba2e">{{currETHGameID}}</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for view game results -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button small color="secondary" style="text-transform: none;" small [color]="isBTCDrawAvail ? \'primary\' : \'dark\'" [disabled]="!isBTCDrawAvail" (click)="viewBTCResults()">View BTC Results</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="secondary" style="text-transform: none;" small [color]="isETHDrawAvail ? \'primary\' : \'dark\'" [disabled]="!isETHDrawAvail" (click)="viewETHResults()">View ETH Results</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for current tix own -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="style-current-tix">\n\n          You own:\n\n          <span style="color:#f3ba2e">{{currOwnBTCtix | number}}</span> tix\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="style-current-tix">\n\n          You own:\n\n          <span style="color:#f3ba2e">{{currOwnETHtix | number}}</span> tix\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- for coin images row-->\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-img width="100" height="100" src="../assets/imgs/Bitcoin.png" style=background:transparent></ion-img>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-img width="100" height="100" src="../assets/imgs/ethereum.png" style=background:transparent></ion-img>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!--for current tickets sold-->\n\n    <h6 style="text-align: center">Total Tickets Sold</h6>\n\n    <ion-row>\n\n      <ion-col>\n\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currBTCtix}}</span>\n\n        <span style="color:whitesmoke; font-size:12px;">/ {{totalBTCtix}}</span>\n\n      </ion-col>\n\n      <ion-col>\n\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currETHtix}}</span>\n\n        <span style="color:whitesmoke; font-size:12px;">/ {{totalETHtix}}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <!--for current progress bar-->\n\n    <ion-row>\n\n      <ion-col>\n\n        <progress-bar [progress]="loadBTCProgress"></progress-bar>\n\n      </ion-col>\n\n      <ion-col>\n\n        <progress-bar [progress]="loadETHProgress"></progress-bar>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <!--for buying tix header-->\n\n    <h6 style="text-align: center">Buy\n\n      <span style="color:#f3ba2e; font-size:12px;">(1 Ticket = $1 USD)</span>\n\n    </h6>\n\n    <ion-row>\n\n      <ion-col>\n\n        No. BTC Ticket:\n\n        <ion-input type="number" [(ngModel)]="amountBTCtix" placeholder="Tickets" attr.text-center [disabled]="BTCTixDisabled"></ion-input>\n\n        <button ion-button small color="secondary" [disabled]="BTCTixDisabled" (click)="buyBTCtix()">Buy</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        No. ETH Ticket:\n\n        <ion-input type="number" [(ngModel)]="amountETHtix" placeholder="Tickets" [disabled]="ETHTixDisabled"></ion-input>\n\n        <button ion-button color="secondary" small [disabled]="ETHTixDisabled" (click)="buyETHtix()">Buy</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\trehunt\trehunt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], TrehuntPage);
    return TrehuntPage;
}());

//# sourceMappingURL=trehunt.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotsdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__ = __webpack_require__(46);
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
    function SlotsdrawPage(navCtrl, navParams, dataProvider, auth, alertController, smartAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.auth = auth;
        this.alertController = alertController;
        this.smartAudio = smartAudio;
        // this.isMachineShown = false;
        this.isWinnerButtonDisabled = false;
        this.winnerID = '';
    }
    SlotsdrawPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.postTrehuntGameWinner(this.auth.getAccId(), "ETH").subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            if (parseInt(data.status) === 200) {
                _this.receivedData = data;
                _this.winner = data.winnerNo;
                console.log("number received " + _this.winner + " " + _this.winner.charAt(0) + " two " + _this.winner.charAt(1));
                _this.winnerNo1 = _this.winner.charAt(0);
                _this.winnerNo2 = _this.winner.charAt(1);
                _this.winnerNo3 = _this.winner.charAt(2);
                _this.winnerNo4 = _this.winner.charAt(3);
                _this.winnerNo5 = _this.winner.charAt(4);
                // this.getWinner();
            }
        }, function (err) {
            console.log("Error occured while getting ETH winner");
            console.log(err);
        });
    };
    SlotsdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlotsdrawPage');
    };
    SlotsdrawPage.prototype.ionViewWillLeave = function () {
        this.smartAudio.stop('startslot');
        this.smartAudio.stop('slotcomplete');
    };
    SlotsdrawPage.prototype.ngAfterViewInit = function () {
    };
    SlotsdrawPage.prototype.getWinner = function () {
        this.isWinnerButtonDisabled = true;
        this.isMachineShown = true;
        this.smartAudio.play('startslot');
        // console.log("GETWINNER number received " +  this.winner + " " + this.winner.charAt(0) + " two " +  this.winner.charAt(1));
        var btnShuffle = document.querySelector("#luckyDrawShuffle");
        //first machine
        var winner = this.winner;
        var element1 = document.querySelector('#machine1');
        var machine1 = new SlotMachine(element1, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                console.log("winner No 1 " + winner);
                return winner.charAt(0);
            }
            // randomize:5
        });
        var element2 = document.querySelector('#machine2');
        var machine2 = new SlotMachine(element2, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(1);
            }
        });
        var element3 = document.querySelector('#machine3');
        var machine3 = new SlotMachine(element3, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(2);
            }
        });
        var element4 = document.querySelector('#machine4');
        var machine4 = new SlotMachine(element4, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(3);
            }
        });
        var element5 = document.querySelector('#machine5');
        var machine5 = new SlotMachine(element5, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(4);
            }
        });
        machine1.shuffle(8, onComplete);
        machine2.shuffle(14, onComplete);
        machine3.shuffle(19, onComplete);
        machine4.shuffle(23, onComplete);
        machine5.shuffle(26, onComplete5);
        var self = this;
        function onComplete() {
            self.playComplete();
        }
        function onComplete5() {
            // var toAlertUserAlert= this.toAlertUserAlert;
            // toAlertUserAlert.present();
            self.playComplete();
            self.toDo();
        }
    };
    SlotsdrawPage.prototype.playComplete = function () {
        this.smartAudio.play('slotcomplete');
    };
    SlotsdrawPage.prototype.toDo = function () {
        var _this = this;
        console.log("Entered here");
        this.winnerID = this.receivedData.winnerUser;
        var toAlertUserAlert = this.alertController.create({
            title: 'Congratulations',
            subTitle: 'To User ID: ' + this.receivedData.winnerUser + ' <br>Winner of 1 ETH',
            buttons: ['OK']
        });
        toAlertUserAlert.present();
        toAlertUserAlert.onDidDismiss(function () {
            _this.isWinnerButtonDisabled = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn'),
        __metadata("design:type", Object)
    ], SlotsdrawPage.prototype, "myBtn", void 0);
    SlotsdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slotsdraw',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\slotsdraw\slotsdraw.html"*/'<!--\n\n  Generated template for the SlotsdrawPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>ETH Lucky Draw</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <div style="position:relative;" class="image-center">\n\n      <!-- <img width="120" height="120" src="../assets/imgs/Bitcoin.png" style="position: absolute; top: 0; left: 0;" style=background:transparent>\n\n      <img width="100%" height="130" src="../assets/imgs/banner.png" style="position: absolute; top: 0; left: 0;" style=background:transparent> -->\n\n      <img width="130" height="130" src="../assets/imgs/ethereum.png" style="position: absolute; top: 0; left: 31%;" >\n\n      <img  width="100%" height="130" src="../assets/imgs/BlueBanner.png" style="position: relative; top: 86px; left: 0;">\n\n      <span style="position: relative; top: 8px; left: 0; font-size:18px; font-weight:700; z-index: 200; color: #222222;">{{winnerID}}</span>\n\n    </div>\n\n    <ion-grid>\n\n      <ion-row justify-content-center align-items-center>\n\n        <ion-col class="square">\n\n          <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine1" class="machine">\n\n            <div>0</div>\n\n            <div>1</div>\n\n            <div>2</div>\n\n            <div>3</div>\n\n            <div>4</div>\n\n            <div>5</div>\n\n            <div>6</div>\n\n            <div>7</div>\n\n            <div>8</div>\n\n            <div>9</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col class="square">\n\n          <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine2" class="machine">\n\n            <div>0</div>\n\n            <div>1</div>\n\n            <div>2</div>\n\n            <div>3</div>\n\n            <div>4</div>\n\n            <div>5</div>\n\n            <div>6</div>\n\n            <div>7</div>\n\n            <div>8</div>\n\n            <div>9</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col class="square">\n\n          <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine3" class="machine">\n\n            <div>0</div>\n\n            <div>1</div>\n\n            <div>2</div>\n\n            <div>3</div>\n\n            <div>4</div>\n\n            <div>5</div>\n\n            <div>6</div>\n\n            <div>7</div>\n\n            <div>8</div>\n\n            <div>9</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col class="square">\n\n          <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine4" class="machine">\n\n            <div>0</div>\n\n            <div>1</div>\n\n            <div>2</div>\n\n            <div>3</div>\n\n            <div>4</div>\n\n            <div>5</div>\n\n            <div>6</div>\n\n            <div>7</div>\n\n            <div>8</div>\n\n            <div>9</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col class="square">\n\n          <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine5" class="machine">\n\n            <div>0</div>\n\n            <div>1</div>\n\n            <div>2</div>\n\n            <div>3</div>\n\n            <div>4</div>\n\n            <div>5</div>\n\n            <div>6</div>\n\n            <div>7</div>\n\n            <div>8</div>\n\n            <div>9</div>\n\n          </div>\n\n        </ion-col>\n\n        <!-- <ion-col class="winner-button" col-12 text-center>\n\n          <button ion-button id="luckyDrawShuffle" type="button" class="ShuffleBtn">Get Winner!</button>\n\n        </ion-col> -->\n\n      </ion-row>\n\n      <!-- <div class="banner-center">\n\n        <ion-img width="100%" height="130" src="../assets/imgs/banner.png" style=background:transparent></ion-img>\n\n      </div> -->\n\n      <ion-row>\n\n        <ion-col class="winner-button" col-12 text-center>\n\n          <button ion-button id="luckyDrawShuffle" [disabled]="isWinnerButtonDisabled" (click)="getWinner()" class="ShuffleBtn">Get Winner!</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\slotsdraw\slotsdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], SlotsdrawPage);
    return SlotsdrawPage;
}());

//# sourceMappingURL=slotsdraw.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotsDrawBtcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__ = __webpack_require__(46);
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
var SlotsDrawBtcPage = /** @class */ (function () {
    function SlotsDrawBtcPage(navCtrl, navParams, dataProvider, auth, alertController, smartAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.auth = auth;
        this.alertController = alertController;
        this.smartAudio = smartAudio;
        // this.isMachineShown = false;
        this.winnerID = '';
        this.isWinnerButtonDisabled = false;
    }
    SlotsDrawBtcPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.postTrehuntGameWinner(this.auth.getAccId(), "BTC").subscribe(function (data) {
            // pass the response from HTTP Request into local variable receivedData
            if (parseInt(data.status) === 200) {
                _this.receivedData = data;
                _this.winner = data.winnerNo;
                console.log("number received " + _this.winner + " " + _this.winner.charAt(0) + " two " + _this.winner.charAt(1));
                _this.winnerNo1 = _this.winner.charAt(0);
                _this.winnerNo2 = _this.winner.charAt(1);
                _this.winnerNo3 = _this.winner.charAt(2);
                _this.winnerNo4 = _this.winner.charAt(3);
                _this.winnerNo5 = _this.winner.charAt(4);
                // this.getWinner();
            }
        }, function (err) {
            console.log("Error occured while getting ETH winner");
            console.log(err);
        });
    };
    SlotsDrawBtcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlotsdrawPage');
    };
    SlotsDrawBtcPage.prototype.ionViewWillLeave = function () {
        this.smartAudio.stop('startslot');
        this.smartAudio.stop('slotcomplete');
    };
    SlotsDrawBtcPage.prototype.ngAfterViewInit = function () {
    };
    SlotsDrawBtcPage.prototype.getWinner = function () {
        this.isWinnerButtonDisabled = true;
        this.smartAudio.play('startslot');
        this.isMachineShown = true;
        // console.log("GETWINNER number received " +  this.winner + " " + this.winner.charAt(0) + " two " +  this.winner.charAt(1));
        var btnShuffle = document.querySelector("#luckyDrawShuffle");
        //first machine
        var winner = this.winner;
        var element1 = document.querySelector('#machine1');
        var machine1 = new SlotMachine(element1, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                console.log("winner No 1 " + winner);
                return winner.charAt(0);
            }
            // randomize:5
        });
        var element2 = document.querySelector('#machine2');
        var machine2 = new SlotMachine(element2, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(1);
            }
        });
        var element3 = document.querySelector('#machine3');
        var machine3 = new SlotMachine(element3, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(2);
            }
        });
        var element4 = document.querySelector('#machine4');
        var machine4 = new SlotMachine(element4, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(3);
            }
        });
        var element5 = document.querySelector('#machine5');
        var machine5 = new SlotMachine(element5, {
            active: 0,
            auto: false,
            direction: 'up',
            delay: 500,
            randomize: function () {
                return winner.charAt(4);
            }
        });
        machine1.shuffle(8, onComplete);
        machine2.shuffle(14, onComplete);
        machine3.shuffle(19, onComplete);
        machine4.shuffle(23, onComplete);
        machine5.shuffle(26, onComplete5);
        var self = this;
        function onComplete() {
            self.playComplete();
        }
        function onComplete5() {
            // var toAlertUserAlert= this.toAlertUserAlert;
            // toAlertUserAlert.present();
            self.playComplete();
            self.toDo();
        }
    };
    SlotsDrawBtcPage.prototype.playComplete = function () {
        this.smartAudio.play('slotcomplete');
    };
    SlotsDrawBtcPage.prototype.toDo = function () {
        var _this = this;
        console.log("Entered here");
        this.winnerID = this.receivedData.winnerUser;
        var toAlertUserAlert = this.alertController.create({
            title: 'Congratulations',
            subTitle: 'To User ID: ' + this.receivedData.winnerUser + ' <br>Winner of 1 BTC',
            buttons: ['OK']
        });
        toAlertUserAlert.present();
        toAlertUserAlert.onDidDismiss(function () {
            _this.isWinnerButtonDisabled = false;
        });
    };
    SlotsDrawBtcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slots-draw-btc',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\slots-draw-btc\slots-draw-btc.html"*/'<!--\n  Generated template for the SlotsdrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BTC Lucky Draw</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="position:relative;" class="image-center">\n    <!-- <img width="120" height="120" src="../assets/imgs/Bitcoin.png" style="position: absolute; top: 0; left: 0;" style=background:transparent>\n    <img width="100%" height="130" src="../assets/imgs/banner.png" style="position: absolute; top: 0; left: 0;" style=background:transparent> -->\n    <img width="120" height="120" src="../assets/imgs/Bitcoin.png" style="position: absolute; top: 0; left: 32%;" >\n    <img  width="100%" height="130" src="../assets/imgs/banner.png" style="position: relative; top: 78px; left: 0;">\n    <span style="position: relative; top: 6px; left: 0; font-size:20px; font-weight:700; z-index: 200; color: #222222;">{{winnerID}}</span>\n  </div>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <ion-col class="square">\n        <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine1" class="machine">\n          <div>0</div>\n          <div>1</div>\n          <div>2</div>\n          <div>3</div>\n          <div>4</div>\n          <div>5</div>\n          <div>6</div>\n          <div>7</div>\n          <div>8</div>\n          <div>9</div>\n        </div>\n      </ion-col>\n      <ion-col class="square">\n        <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine2" class="machine">\n          <div>0</div>\n          <div>1</div>\n          <div>2</div>\n          <div>3</div>\n          <div>4</div>\n          <div>5</div>\n          <div>6</div>\n          <div>7</div>\n          <div>8</div>\n          <div>9</div>\n        </div>\n      </ion-col>\n      <ion-col class="square">\n        <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine3" class="machine">\n          <div>0</div>\n          <div>1</div>\n          <div>2</div>\n          <div>3</div>\n          <div>4</div>\n          <div>5</div>\n          <div>6</div>\n          <div>7</div>\n          <div>8</div>\n          <div>9</div>\n        </div>\n      </ion-col>\n      <ion-col class="square">\n        <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine4" class="machine">\n          <div>0</div>\n          <div>1</div>\n          <div>2</div>\n          <div>3</div>\n          <div>4</div>\n          <div>5</div>\n          <div>6</div>\n          <div>7</div>\n          <div>8</div>\n          <div>9</div>\n        </div>\n      </ion-col>\n      <ion-col class="square">\n        <div [style.visibility]="isMachineShown ? \'visible\' : \'hidden\'" id="machine5" class="machine">\n          <div>0</div>\n          <div>1</div>\n          <div>2</div>\n          <div>3</div>\n          <div>4</div>\n          <div>5</div>\n          <div>6</div>\n          <div>7</div>\n          <div>8</div>\n          <div>9</div>\n        </div>\n      </ion-col>\n      <!-- <ion-col class="winner-button" col-12 text-center>\n        <button ion-button id="luckyDrawShuffle" type="button" class="ShuffleBtn">Get Winner!</button>\n      </ion-col> -->\n    </ion-row>\n    <!-- <div class="banner-center">\n      <ion-img width="100%" height="130" src="../assets/imgs/banner.png" style=background:transparent></ion-img>\n    </div> -->\n    <ion-row>\n      <ion-col class="winner-button" col-12 text-center>\n        <button ion-button id="luckyDrawShuffle" [disabled]="isWinnerButtonDisabled" (click)="getWinner()" class="ShuffleBtn">Get Winner!</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\slots-draw-btc\slots-draw-btc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], SlotsDrawBtcPage);
    return SlotsDrawBtcPage;
}());

//# sourceMappingURL=slots-draw-btc.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleTwoFaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(29);
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
 * Generated class for the ToggleTwoFaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToggleTwoFaPage = /** @class */ (function () {
    function ToggleTwoFaPage(navCtrl, navParams, auth, dataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.count = 30.0;
        this.isRequestHidden = false;
        this.isRequestEnabled = true;
        this.isTimerHidden = true;
    }
    ToggleTwoFaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("LAST VIEW " + this.navCtrl.last());
        this.navBar.backButtonClick = function (e) {
            console.log("Overriding navbar success");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        };
        console.log('ionViewDidLoad TwoFacAuthPage');
        for (var i = 0; i < this.navCtrl.length(); i++) {
            var v = this.navCtrl.getViews()[i];
            console.log(v.component.name);
        }
    };
    ToggleTwoFaPage.prototype.requestedSMS = function () {
        var _this = this;
        this.dataProvider.postSMSreq(this.auth.getAccId()).subscribe(function (data) {
            if (parseInt(data.status) === 200) {
                console.log("SMS sent " + data.message);
                _this.isRequestEnabled = false;
                _this.startCountdownTimer(30);
                // let alert = this.alertCtrl.create({
                //   title: 'SUCCESS',
                //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
                //   buttons: ['OK']
                // });
                // alert.present();
                // alert.onDidDismiss(() => {
                // })
            }
        }, function (err) {
            console.log("Error occured while triggering SMS request");
            console.log(err.message);
            if (err.status === 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_1.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_2.present();
                alert_2.onDidDismiss(function () {
                });
            }
        });
    };
    ToggleTwoFaPage.prototype.toggle2FA = function () {
        var _this = this;
        //do post here and on success present alert on dismiss navigate back to home page
        //toggle global var
        console.log("Posted with codeInput = " + this.codeInput);
        this.dataProvider.postToggle2FA(this.auth.getAccId(), this.codeInput).subscribe(function (data) {
            if (parseInt(data.status) === 200) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                _this.auth.set2FAStatus(parseInt(data.require2FA));
                console.log("Set 2FA status as " + _this.auth.get2FAStatus());
                // let alert = this.alertCtrl.create({
                //   title: 'SUCCESS',
                //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
                //   buttons: ['OK']
                // });
                // alert.present();
                // alert.onDidDismiss(() => {
                // })
            }
        }, function (err) {
            console.log("Error occured while toggling 2FA");
            console.log(err.message);
            if (err.status === 0) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_3.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_4.present();
                alert_4.onDidDismiss(function () {
                });
            }
        });
        // else {
        //   this.auth.set2FAStatus(1);
        // }
    };
    ToggleTwoFaPage.prototype.startCountdownTimer = function (secondsToCount) {
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
    ToggleTwoFaPage.prototype.resetCountdown = function () {
        this.isRequestEnabled = true;
        this.isTimerHidden = true;
    };
    ToggleTwoFaPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], ToggleTwoFaPage.prototype, "navBar", void 0);
    ToggleTwoFaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-toggle-two-fa',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\toggle-two-fa\toggle-two-fa.html"*/'<!--\n  Generated template for the TwoFacAuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar id="Navbar" align-title="center">\n      <ion-title><span text-color="dark">Toggle 2 FA</span></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-grid>\n        <!-- request SMS-->\n        <ion-row>\n          <ion-col col-12 text-center>\n            <div class="center" [style.visibility]="isRequestHidden ? \'hidden\' : \'visible\'">\n              <button ion-button [color]="isRequestEnabled ? \'secondary\' : \'secondary\'" [outline]="isRequestEnabled ? \'false\' : \'true\'" \n              [disabled]="isRequestEnabled? null : \'disabled\'" class="request-sms-button" ion-button color="secondary" round (click)="requestedSMS()">\n              REQUEST<br>SMS</button>\n            </div>\n              <div class="timer" *ngIf="!isTimerHidden">Request again in {{countDown | async}} s</div>\n          </ion-col>\n        </ion-row> \n        \n        <!-- input SMS box -->\n        <ion-row>\n            <ion-col col-12 text-center>\n                <ion-item text-center no-lines id="rounded" style="width:70%; margin:auto" >\n                    <ion-label floating primary color="secondary">\n                       SMS Verification Code\n                    </ion-label>\n                    <ion-input type="tel" maxlength="5" [(ngModel)]="codeInput"></ion-input>\n                    </ion-item>\n            </ion-col>\n          </ion-row> \n      <br>\n       <!--verify button-->\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button small color="secondary" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800" (click)="toggle2FA()">TOGGLE</button>\n          </ion-col>\n        </ion-row> \n        \n      </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\toggle-two-fa\toggle-two-fa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ToggleTwoFaPage);
    return ToggleTwoFaPage;
}());

//# sourceMappingURL=toggle-two-fa.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_auth_global_auth__ = __webpack_require__(20);
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
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrCodePage = /** @class */ (function () {
    function QrCodePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.qrData = null;
    }
    QrCodePage.prototype.ngOnInit = function () {
        this.createCode();
    };
    QrCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrCodePage');
    };
    QrCodePage.prototype.createCode = function () {
        console.log("Creating Code");
        this.createdCode = "http://" + "178.128.50.224:3000/qr/" + this.auth.getRefID();
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qr-code',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\qr-code\qr-code.html"*/'<!--\n  Generated template for the QrCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Referral Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12 text-center>\n      QR Code here\n    </ion-col>\n  </ion-row>\n  <ion-col col-12 text-center>\n    <!-- QR Code here -->\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n  </ion-col>\n\n  <!-- <ion-item>\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n    </ion-input>\n  </ion-item> -->\n  <!-- <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button> -->\n\n  <!-- <ion-card *ngIf="createdCode"> -->\n\n\n  <!-- <p>Value: {{ createdCode }}</p> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\qr-code\qr-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qr-code.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 20:
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
    GlobalAuthProvider.prototype.get2FAStatus = function () {
        return this.twoFAstatus;
    };
    GlobalAuthProvider.prototype.set2FAStatus = function (twoFAstatus) {
        this.twoFAstatus = twoFAstatus;
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
    GlobalAuthProvider.prototype.setSessionToken = function (sessionToken) {
        this.sessionToken = sessionToken;
    };
    GlobalAuthProvider.prototype.getSessionToken = function () {
        return this.sessionToken;
    };
    GlobalAuthProvider.prototype.setAccValue = function (currValue) {
        this.accValue = currValue;
    };
    GlobalAuthProvider.prototype.getAccValue = function () {
        return parseInt(this.accValue.toFixed(2));
    };
    GlobalAuthProvider.prototype.addAccValue = function (amount) {
        this.accValue += parseFloat(amount);
    };
    GlobalAuthProvider.prototype.setRefID = function (refId) {
        this.refID = refId;
    };
    GlobalAuthProvider.prototype.getRefID = function () {
        return this.refID;
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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bidding/bidding.module": [
		687,
		13
	],
	"../pages/dummy-chat/dummy-chat.module": [
		686,
		12
	],
	"../pages/hashing/hashing.module": [
		688,
		11
	],
	"../pages/home/home.module": [
		689,
		10
	],
	"../pages/qr-code/qr-code.module": [
		690,
		9
	],
	"../pages/roulette/roulette.module": [
		692,
		8
	],
	"../pages/slots-draw-btc/slots-draw-btc.module": [
		691,
		7
	],
	"../pages/slotsdraw/slotsdraw.module": [
		693,
		6
	],
	"../pages/splash-logo/splash-logo.module": [
		694,
		5
	],
	"../pages/stream/stream.module": [
		695,
		4
	],
	"../pages/toggle-two-fa/toggle-two-fa.module": [
		697,
		3
	],
	"../pages/trehunt/trehunt.module": [
		696,
		2
	],
	"../pages/two-fac-auth/two-fac-auth.module": [
		698,
		1
	],
	"../pages/wallet/wallet.module": [
		699,
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_auth_global_auth__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var serverHealthURL = 'http://178.128.50.224:3000';
var loginUrl = 'http://178.128.50.224:3000/login/';
var login2FAUrl = 'http://178.128.50.224:3000/account/login2fa';
var toggle2FAUrl = 'http://178.128.50.224:3000/account/toggle2FA';
var pastTransactionsURL = 'http://178.128.50.224:3000/account/getPastTransactions';
var trehuntStatusURL = 'http://178.128.50.224:3000/game1/getCurrentGame';
var trehuntWinnerURL = 'http://178.128.50.224:3000/game1/getWinner';
var trehuntBuyURL = 'http://178.128.50.224:3000/game1/placeBets';
var hashManualBetURL = 'http://178.128.50.224:3000/game2/placeBets';
var hashManualCoutURL = 'http://178.128.50.224:3000/game2/cashOut';
var walletAmountURL = 'http://178.128.50.224:3000/account/updatewalletamount';
var depositWalletURL = 'http://178.128.50.224:3000/account/deposit';
var withdrawWalletURL = 'http://178.128.50.224:3000/account/withdraw';
var binaryOptionBetURL = 'http://178.128.50.224:3000/game3/placeBets';
var binaryOptionPastGameURL = 'http://178.128.50.224:3000/game3/getGame3PastGame';
var reqSMSURL = 'http://178.128.50.224:3000/requestSms';
var DataProvider = /** @class */ (function () {
    function DataProvider(http, auth) {
        this.http = http;
        this.auth = auth;
        console.log('Hello DataProvider Provider');
    }
    //get server health for guest view
    DataProvider.prototype.getServerHealth = function () {
        return this.http.get(serverHealthURL);
    };
    //login WITHOUT 2FA
    DataProvider.prototype.postLogin = function (username, password) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("username", username).set("password", password);
        return this.http.post(loginUrl, requestBody, httpHeader);
    };
    //login WITH 2FA
    DataProvider.prototype.postLogin2FA = function (accid, codeNo) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("codeNo", codeNo);
        return this.http.post(login2FAUrl, requestBody, httpHeader);
    };
    //request SMS
    DataProvider.prototype.postSMSreq = function (accid) {
        var httpHeader = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(reqSMSURL, requestBody, httpHeader);
    };
    //toggle 2FA
    DataProvider.prototype.postToggle2FA = function (accid, codeNo) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("codeNo", codeNo);
        return this.http.post(toggle2FAUrl, requestBody, httpHeader);
    };
    //current wallet amount
    DataProvider.prototype.postWalletAmount = function (accid) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(walletAmountURL, requestBody, httpHeader);
    };
    //deposit into game wallet
    DataProvider.prototype.postDepositWallet = function (accid, amount) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("amount", amount);
        return this.http.post(depositWalletURL, requestBody, httpHeader);
    };
    //withdraw from game wallet
    DataProvider.prototype.postWithdrawWallet = function (accid, amount) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("amount", amount);
        return this.http.post(withdrawWalletURL, requestBody, httpHeader);
    };
    //get past transactions
    DataProvider.prototype.postPastTransactions = function (accid) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(pastTransactionsURL, requestBody, httpHeader);
    };
    // get game1 curr status
    DataProvider.prototype.postTrehuntStatus = function (accid) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(trehuntStatusURL, requestBody, httpHeader);
    };
    DataProvider.prototype.postTrehuntGameWinner = function (accid, gameType) {
        var sessionToken = this.auth.getSessionToken();
        console.log("session token posted " + sessionToken);
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameType", gameType);
        return this.http.post(trehuntWinnerURL, requestBody, httpHeader);
    };
    //status 0 will be no draw, 1 will be draw
    //buy game 1 tickets
    DataProvider.prototype.postBuyGame1 = function (accid, gameId, amount) {
        var sessionToken = this.auth.getSessionToken();
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId).set("amount", amount);
        return this.http.post(trehuntBuyURL, requestBody, httpHeader);
    };
    //manual bet for game 2
    DataProvider.prototype.postBetGame2 = function (accid, gameId, amount) {
        var sessionToken = this.auth.getSessionToken();
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId).set("amount", amount);
        return this.http.post(hashManualBetURL, requestBody, httpHeader);
    };
    //manual cashout for game 2
    DataProvider.prototype.postCoutGame2 = function (accid, gameId) {
        var sessionToken = this.auth.getSessionToken();
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid).set("gameId", gameId);
        return this.http.post(hashManualCoutURL, requestBody, httpHeader);
    };
    //bet for game 3
    DataProvider.prototype.postBetGame3 = function (amount, orderType, accid, gameId) {
        var sessionToken = this.auth.getSessionToken();
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("amount", amount).set("orderType", orderType).set("accid", accid).set("gameId", gameId);
        return this.http.post(binaryOptionBetURL, requestBody, httpHeader);
    };
    //past game 3 bets
    DataProvider.prototype.postPastGame3 = function (accid) {
        var sessionToken = this.auth.getSessionToken();
        var httpHeader = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type'": "application/x-www-form-urlencoded" }).append('x-access-token', sessionToken) };
        var requestBody = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set("accid", accid);
        return this.http.post(binaryOptionPastGameURL, requestBody, httpHeader);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashLogoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(136);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashLogoPage);
    return SplashLogoPage;
}());

//# sourceMappingURL=splash-logo.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(440);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_roulette_roulette__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_stream_stream__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trehunt_trehunt__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_progress_bar_progress_bar__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_inner_wallet_inner_wallet__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_smart_audio_smart_audio__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_slotsdraw_slotsdraw__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dummy_chat_dummy_chat__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_slots_draw_btc_slots_draw_btc__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_toggle_two_fa_toggle_two_fa__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_qr_code_qr_code__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_qrcode2__ = __webpack_require__(666);
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
                __WEBPACK_IMPORTED_MODULE_31__pages_slots_draw_btc_slots_draw_btc__["a" /* SlotsDrawBtcPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__["a" /* SplashLogoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_toggle_two_fa_toggle_two_fa__["a" /* ToggleTwoFaPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_qr_code_qr_code__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_stream_stream__["a" /* StreamPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dummy_chat_dummy_chat__["a" /* DummyChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_34_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: false,
                    autoFocusAssist: false,
                }, {
                    links: [
                        { loadChildren: '../pages/dummy-chat/dummy-chat.module#DummyChatPageModule', name: 'DummyChatPage', segment: 'dummy-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bidding/bidding.module#BiddingPageModule', name: 'BiddingPage', segment: 'bidding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hashing/hashing.module#HashingPageModule', name: 'HashingPage', segment: 'hashing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-code/qr-code.module#QrCodePageModule', name: 'QrCodePage', segment: 'qr-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slots-draw-btc/slots-draw-btc.module#SlotsDrawBtcPageModule', name: 'SlotsDrawBtcPage', segment: 'slots-draw-btc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette/roulette.module#WalletPageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slotsdraw/slotsdraw.module#SlotsdrawPageModule', name: 'SlotsdrawPage', segment: 'slotsdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-logo/splash-logo.module#SplashLogoPageModule', name: 'SplashLogoPage', segment: 'splash-logo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stream/stream.module#StreamPageModule', name: 'StreamPage', segment: 'stream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trehunt/trehunt.module#TrehuntPageModule', name: 'TrehuntPage', segment: 'trehunt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toggle-two-fa/toggle-two-fa.module#ToggleTwoFaPageModule', name: 'ToggleTwoFaPage', segment: 'toggle-two-fa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/two-fac-auth/two-fac-auth.module#TwoFacAuthPageModule', name: 'TwoFacAuthPage', segment: 'two-fac-auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular___["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trehunt_trehunt__["a" /* TrehuntPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_slotsdraw_slotsdraw__["a" /* SlotsdrawPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_slots_draw_btc_slots_draw_btc__["a" /* SlotsDrawBtcPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_qr_code_qr_code__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_logo_splash_logo__["a" /* SplashLogoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_toggle_two_fa_toggle_two_fa__["a" /* ToggleTwoFaPage */],
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_native_native_audio__ = __webpack_require__(69);
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
    SmartAudioProvider.prototype.stop = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        // if (audio.type === 'html5') {
        //   let audioAsset = new Audio(audio.asset);
        //   audioAsset.stop();
        // }
        //else audio type native
        this.nativeAudio.stop(audio.asset).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
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

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 241,
	"./af.js": 241,
	"./ar": 242,
	"./ar-dz": 243,
	"./ar-dz.js": 243,
	"./ar-kw": 244,
	"./ar-kw.js": 244,
	"./ar-ly": 245,
	"./ar-ly.js": 245,
	"./ar-ma": 246,
	"./ar-ma.js": 246,
	"./ar-sa": 247,
	"./ar-sa.js": 247,
	"./ar-tn": 248,
	"./ar-tn.js": 248,
	"./ar.js": 242,
	"./az": 249,
	"./az.js": 249,
	"./be": 250,
	"./be.js": 250,
	"./bg": 251,
	"./bg.js": 251,
	"./bm": 252,
	"./bm.js": 252,
	"./bn": 253,
	"./bn.js": 253,
	"./bo": 254,
	"./bo.js": 254,
	"./br": 255,
	"./br.js": 255,
	"./bs": 256,
	"./bs.js": 256,
	"./ca": 257,
	"./ca.js": 257,
	"./cs": 258,
	"./cs.js": 258,
	"./cv": 259,
	"./cv.js": 259,
	"./cy": 260,
	"./cy.js": 260,
	"./da": 261,
	"./da.js": 261,
	"./de": 262,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 262,
	"./dv": 265,
	"./dv.js": 265,
	"./el": 266,
	"./el.js": 266,
	"./en-au": 267,
	"./en-au.js": 267,
	"./en-ca": 268,
	"./en-ca.js": 268,
	"./en-gb": 269,
	"./en-gb.js": 269,
	"./en-ie": 270,
	"./en-ie.js": 270,
	"./en-il": 271,
	"./en-il.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 274,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 274,
	"./et": 277,
	"./et.js": 277,
	"./eu": 278,
	"./eu.js": 278,
	"./fa": 279,
	"./fa.js": 279,
	"./fi": 280,
	"./fi.js": 280,
	"./fo": 281,
	"./fo.js": 281,
	"./fr": 282,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 282,
	"./fy": 285,
	"./fy.js": 285,
	"./gd": 286,
	"./gd.js": 286,
	"./gl": 287,
	"./gl.js": 287,
	"./gom-latn": 288,
	"./gom-latn.js": 288,
	"./gu": 289,
	"./gu.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./kn": 303,
	"./kn.js": 303,
	"./ko": 304,
	"./ko.js": 304,
	"./ky": 305,
	"./ky.js": 305,
	"./lb": 306,
	"./lb.js": 306,
	"./lo": 307,
	"./lo.js": 307,
	"./lt": 308,
	"./lt.js": 308,
	"./lv": 309,
	"./lv.js": 309,
	"./me": 310,
	"./me.js": 310,
	"./mi": 311,
	"./mi.js": 311,
	"./mk": 312,
	"./mk.js": 312,
	"./ml": 313,
	"./ml.js": 313,
	"./mn": 314,
	"./mn.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 316,
	"./ms-my": 317,
	"./ms-my.js": 317,
	"./ms.js": 316,
	"./mt": 318,
	"./mt.js": 318,
	"./my": 319,
	"./my.js": 319,
	"./nb": 320,
	"./nb.js": 320,
	"./ne": 321,
	"./ne.js": 321,
	"./nl": 322,
	"./nl-be": 323,
	"./nl-be.js": 323,
	"./nl.js": 322,
	"./nn": 324,
	"./nn.js": 324,
	"./pa-in": 325,
	"./pa-in.js": 325,
	"./pl": 326,
	"./pl.js": 326,
	"./pt": 327,
	"./pt-br": 328,
	"./pt-br.js": 328,
	"./pt.js": 327,
	"./ro": 329,
	"./ro.js": 329,
	"./ru": 330,
	"./ru.js": 330,
	"./sd": 331,
	"./sd.js": 331,
	"./se": 332,
	"./se.js": 332,
	"./si": 333,
	"./si.js": 333,
	"./sk": 334,
	"./sk.js": 334,
	"./sl": 335,
	"./sl.js": 335,
	"./sq": 336,
	"./sq.js": 336,
	"./sr": 337,
	"./sr-cyrl": 338,
	"./sr-cyrl.js": 338,
	"./sr.js": 337,
	"./ss": 339,
	"./ss.js": 339,
	"./sv": 340,
	"./sv.js": 340,
	"./sw": 341,
	"./sw.js": 341,
	"./ta": 342,
	"./ta.js": 342,
	"./te": 343,
	"./te.js": 343,
	"./tet": 344,
	"./tet.js": 344,
	"./tg": 345,
	"./tg.js": 345,
	"./th": 346,
	"./th.js": 346,
	"./tl-ph": 347,
	"./tl-ph.js": 347,
	"./tlh": 348,
	"./tlh.js": 348,
	"./tr": 349,
	"./tr.js": 349,
	"./tzl": 350,
	"./tzl.js": 350,
	"./tzm": 351,
	"./tzm-latn": 352,
	"./tzm-latn.js": 352,
	"./tzm.js": 351,
	"./ug-cn": 353,
	"./ug-cn.js": 353,
	"./uk": 354,
	"./uk.js": 354,
	"./ur": 355,
	"./ur.js": 355,
	"./uz": 356,
	"./uz-latn": 357,
	"./uz-latn.js": 357,
	"./uz.js": 356,
	"./vi": 358,
	"./vi.js": 358,
	"./x-pseudo": 359,
	"./x-pseudo.js": 359,
	"./yo": 360,
	"./yo.js": 360,
	"./zh-cn": 361,
	"./zh-cn.js": 361,
	"./zh-hk": 362,
	"./zh-hk.js": 362,
	"./zh-tw": 363,
	"./zh-tw.js": 363
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
webpackContext.id = 513;

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_native_native_audio__ = __webpack_require__(69);
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
        // window.addEventListener("keyboardDidShow", () => {
        //   document.activeElement.scrollIntoView(false);
        // const elem: HTMLCollectionOf<Element> = document.getElementsByClassName("scroll-content"); // The last content shown, so the current page
        // if (elem !== undefined && elem.length > 0) {
        //   elem[elem.length - 1].scrollTop += 40; // add 40px between the keyboard and the input
        // }
        // });
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#000000');
            splashScreen.hide();
            smartAudio.preload('tabSwitch', 'assets/audio/clickSound.mp3', 'simple');
            smartAudio.preload('slotcomplete', 'assets/audio/SlotComplete.wav', 'simple');
            smartAudio.preload('startslot', 'assets/audio/StartSlot.mp3', 'simple');
            smartAudio.preload('tabSwitch2', 'assets/audio/clickSound.mp3', 'complex');
            smartAudio.preload('game2explode', 'assets/audio/game2xploded.mp3', 'simple');
            smartAudio.preload('game3countdown', 'assets/audio/game3Countdown.wav', 'simple');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(14);
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

/***/ 664:
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

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerWalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_auth_global_auth__ = __webpack_require__(20);
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_wallet__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream_stream__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hashing_hashing__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trehunt_trehunt__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dummy_chat_dummy_chat__ = __webpack_require__(159);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__trehunt_trehunt__["a" /* TrehuntPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__hashing_hashing__["a" /* HashingPage */];
        // tab4Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__stream_stream__["a" /* StreamPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__dummy_chat_dummy_chat__["a" /* DummyChatPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_1__wallet_wallet__["a" /* WalletPage */];
    }
    TabsPage.prototype.playTabSwitchound = function () {
        this.smartAudio.play('tabSwitch');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Roulette" tabIcon="flower"></ion-tab> -->\n\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Bidding" tabIcon="pricetag"></ion-tab> -->\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab2Root" tabTitle="Jackpot" tabIcon="key"></ion-tab>\n\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab> -->\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab3Root" tabTitle="Hashing" tabIcon="trending-up"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab4Root" tabTitle="Options" tabIcon="pulse"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab5Root" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n\n  <ion-tab (ionSelect) = "playTabSwitchound()" [root]="tab6Root" tabTitle="Wallet" tabIcon="logo-usd"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoFacAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(29);
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
    function TwoFacAuthPage(navCtrl, navParams, auth, dataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.count = 30.0;
        this.isRequestHidden = false;
        this.isRequestEnabled = true;
        this.isTimerHidden = true;
    }
    TwoFacAuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TwoFacAuthPage');
    };
    TwoFacAuthPage.prototype.requestedSMS = function () {
        var _this = this;
        this.dataProvider.postSMSreq(this.auth.getAccId()).subscribe(function (data) {
            if (parseInt(data.status) === 200) {
                console.log("SMS sent " + data.message);
                _this.isRequestEnabled = false;
                _this.startCountdownTimer(30);
                // let alert = this.alertCtrl.create({
                //   title: 'SUCCESS',
                //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
                //   buttons: ['OK']
                // });
                // alert.present();
                // alert.onDidDismiss(() => {
                // })
            }
        }, function (err) {
            console.log("Error occured while triggering SMS request");
            console.log(err.message);
            if (err.status === 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_1.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_2.present();
                alert_2.onDidDismiss(function () {
                });
            }
        });
    };
    TwoFacAuthPage.prototype.verify2FA = function () {
        var _this = this;
        console.log("Posted with codeInput = " + this.codeInput);
        this.dataProvider.postLogin2FA(this.auth.getAccId(), this.codeInput).subscribe(function (data) {
            if (parseInt(data.status) === 200) {
                _this.auth.setGuestLogin(false);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                _this.auth.setAccValue(data.accountValue);
                _this.auth.set2FAStatus(parseInt(data.require2FA));
                _this.auth.setRefID(data.referralId);
                console.log("Set 2FA status as " + _this.auth.get2FAStatus());
                console.log("Set acc balance as  " + _this.auth.getAccValue());
                _this.auth.setSessionToken(data.token);
                console.log("session Token set as " + _this.auth.getSessionToken());
                // let alert = this.alertCtrl.create({
                //   title: 'SUCCESS',
                //   subTitle: 'You have staked ' + this.hashManualBetAmount + ' for this game',
                //   buttons: ['OK']
                // });
                // alert.present();
                // alert.onDidDismiss(() => {
                // })
            }
        }, function (err) {
            console.log("Error occured while logging in w 2FA");
            console.log(err.message);
            if (err.status === 0) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Server cannot be reached at this time. <br> Please try again later',
                    buttons: ['OK']
                });
                alert_3.present();
                console.log("Hit Error 0");
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.error.message,
                    buttons: ['OK']
                });
                alert_4.present();
                alert_4.onDidDismiss(function () {
                });
            }
        });
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
            selector: 'page-two-fac-auth',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM-App\src\pages\two-fac-auth\two-fac-auth.html"*/'<!--\n\n  Generated template for the TwoFacAuthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar align-title="center">\n\n    <ion-title><span text-color="dark">2 FA</span></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <!-- request SMS-->\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <div class="center" [style.visibility]="isRequestHidden ? \'hidden\' : \'visible\'">\n\n            <button ion-button [color]="isRequestEnabled ? \'secondary\' : \'secondary\'" [outline]="isRequestEnabled ? \'false\' : \'true\'" \n\n            [disabled]="isRequestEnabled? null : \'disabled\'" class="request-sms-button" ion-button color="secondary" round (click)="requestedSMS()">\n\n            REQUEST<br>SMS</button>\n\n          </div>\n\n            <div class="timer" *ngIf="!isTimerHidden">Request again in {{countDown | async}} s</div>\n\n        </ion-col>\n\n      </ion-row> \n\n      \n\n      <!-- input SMS box -->\n\n      <ion-row>\n\n          <ion-col col-12 text-center>\n\n              <ion-item text-center no-lines id="rounded" style="width:70%; margin:auto" >\n\n                  <ion-label floating primary color="secondary">\n\n                     SMS Verification Code\n\n                  </ion-label>\n\n                  <ion-input type="tel" maxlength="5" [(ngModel)]="codeInput"></ion-input>\n\n                  </ion-item>\n\n          </ion-col>\n\n        </ion-row> \n\n    <br>\n\n     <!--verify button-->\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <button ion-button small color="secondary" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800" (click)="verify2FA()">VERIFY</button>\n\n        </ion-col>\n\n      </ion-row> \n\n      \n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM-App\src\pages\two-fac-auth\two-fac-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TwoFacAuthPage);
    return TwoFacAuthPage;
}());

//# sourceMappingURL=two-fac-auth.js.map

/***/ })

},[432]);
//# sourceMappingURL=main.js.map