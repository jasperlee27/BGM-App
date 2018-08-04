webpackJsonp([8],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__ = __webpack_require__(71);
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
    function LoginPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.biddingPage = __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__["a" /* BiddingPage */];
        this.roulettePage = __WEBPACK_IMPORTED_MODULE_3__roulette_roulette__["a" /* RoulettePage */];
        this.twoFApage = __WEBPACK_IMPORTED_MODULE_4__two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */];
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        this.loginState = "in";
    }
    LoginPage.prototype.login = function () {
        // this.navCtrl.setRoot(TabsPage);
        this.auth.setGuestLogin(false);
        this.navCtrl.push(this.twoFApage);
        // this.navCtrl.setRoot(TabsPage);
        console.log("login function activated");
    };
    LoginPage.prototype.viewAsGuest = function () {
        // this.navCtrl.setRoot(TabsPage);
        // this.navCtrl.push(this.twoFApage);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\login\login.html"*/'<!-- <ion-header> -->\n\n  <!-- <ion-navbar> -->\n\n    <ion-title>User Log In</ion-title>\n\n  <!-- </ion-navbar> -->\n\n<!-- </ion-header> -->\n\n\n\n<ion-content class="loginContent" padding>\n\n  <div class= "image-center">\n\n    <ion-img width="200" height="200" src="../assets/imgs/BGM_Logo.png" [@fadeIn]="fadeState" style= background:transparent></ion-img>\n\n  </div>\n\n  <div class="login-form">\n\n    <ion-grid>\n\n      <!-- username -->\n\n        <ion-row>\n\n        <ion-col col-12 col-md-8 offset-md-2>\n\n          <ion-item no-lines id="rounded" >\n\n            <ion-label floating primary color="secondary">\n\n              <ion-icon name="person"></ion-icon>   Username\n\n            </ion-label>\n\n            <ion-input type="text"></ion-input>\n\n                \n\n            </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- password-->\n\n      <ion-row>\n\n        <ion-col col-12 col-md-8 offset-md-2>\n\n            <ion-item no-lines id="rounded">\n\n                <ion-label floating primary color="secondary">\n\n                <ion-icon name="lock"></ion-icon> Password\n\n                </ion-label>\n\n                <ion-input [type]="passwordType" clearOnEdit="false"></ion-input>\n\n                <ion-icon item-end [name]="passwordIcon" class="passwordIcon" color="secondary" (click)=\'showHide()\'></ion-icon>\n\n            </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n  <br>\n\n  <button ion-button small color="secondary" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800" (click)="login()">LOGIN</button>\n\n  <ion-row>\n\n      <ion-col col-12 text-center>\n\n        <button ion-button small clear color="secondary" style="color:secondary; font-size:14px; font-weight: 600" (click)="viewAsGuest()">View As Guest</button>\n\n      </ion-col>\n\n  </ion-row> \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\login\login.html"*/,
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
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_wallet__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream_stream__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hashing_hashing__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trehunt_trehunt__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(139);
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
    function TabsPage() {
        // tab1Root = HomePage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__trehunt_trehunt__["a" /* TrehuntPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__hashing_hashing__["a" /* HashingPage */];
        // tab4Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__stream_stream__["a" /* StreamPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Roulette" tabIcon="flower"></ion-tab> -->\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Bidding" tabIcon="pricetag"></ion-tab> -->\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Treasure" tabIcon="key"></ion-tab>\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="Hashing" tabIcon="lock"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="logo-usd"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Stream" tabIcon="pulse"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
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
            selector: 'page-bidding',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\bidding\bidding.html"*/'<!--\n  Generated template for the BiddingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Game 1: Live Bidding</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mycontent" padding>\n  \n    <div class="row">\n        <h6>Game ID:{{gameNo}} </h6> \n    </div>\n    <br>\n    \n\n    <ion-row justify-content-center align-items-center>\n        <h3>Current Pool:</h3>\n    </ion-row>\n    <div class="amountContainer">\n      <ion-row justify-content-center align-items-center class="totalPoolAmount">\n          <h1>$ {{currentPoolNumber | number }}</h1>\n      </ion-row>\n    </div>\n\n    <ion-segment>\n        <div id="playersHeader">\n            <h5>No. of Players:</h5>\n        </div>\n    </ion-segment>\n    <ion-row justify-content-center align-items-center>\n        <h5>{{noPlayers}}</h5>\n    </ion-row>\n\n    <ion-list>\n    <ion-list-header>\n     Current Leaderboard\n    </ion-list-header>\n\n    <ion-item>\n        <ion-label>\n          1. {{bidName1}}\n        </ion-label>\n        <div item-content>\n          ${{bidValue1 | number}}\n        </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>\n          2. {{bidName2}}\n        </ion-label>\n        <div item-content>\n          ${{bidValue2 | number}}\n        </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>\n          3. {{bidName3}}\n        </ion-label>\n        <div item-content>\n          ${{bidValue3 | number}}\n        </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>\n          4. {{bidName4}}\n        </ion-label>\n        <div item-content>\n          ${{bidValue4 | number}}\n        </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>\n          5. {{bidName5}}\n        </ion-label>\n        <div item-content>\n          ${{bidValue5 | number}}\n        </div>\n    </ion-item>\n  \n  </ion-list>\n\n  <div class="row">\n      Balance: {{walletBallance | number}} USD\n  </div>\n  <div class="row"> \n    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="liveBidInputAmount">\n              <ion-input type="number" [(ngModel)]="betAmount" placeholder="Amount" [disabled]="disabled"></ion-input>\n    </div>\n    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" id="spinButton">\n            <button ion-button [disabled]="disabled" (click)="bidGame()">BID</button>\n    </div>\n  </div>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content  \n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="circles"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\bidding\bidding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavParams */]])
    ], BiddingPage);
    return BiddingPage;
}());

//# sourceMappingURL=bidding.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
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
 * Generated class for the HashingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HashingPage = /** @class */ (function () {
    function HashingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.count = 10.0;
        this.chartData = [
            { data: [], label: 'Hash Rate', pointRadius: 0, hidden: this.isChartHidden, },
        ];
        this.chartColors = [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(255, 113, 0)',
                pointBackgroundColor: 'rgb(255, 113, 0)',
                // pointBorderColor: '#fafafa',
                pointHoverBackgroundColor: 'rgb(255, 113, 0)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)' //changing hover point color
            }
        ];
        this.chartLabels = [];
        this.chartOptions = {
            animation: {
                duration: 0
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            lineWidth: 0.5,
                            color: "white"
                        },
                        ticks: {
                            fontColor: "white",
                            fontSize: 14,
                            // stepSize: 1,
                            beginAtZero: true
                        },
                    }],
                yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 14,
                            // stepSize: 1,
                            min: 1,
                        },
                        gridLines: {
                            display: true,
                            lineWidth: 0.5,
                            color: "white",
                        },
                        scaleLabel: {
                            display: true,
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
        this.isChartHidden = false;
        this.chartData[0].data = [1];
        this.chartLabels = [0];
        this.multiplierDisplay = 1;
        this.finalValue = 0; //init as 0 first, to update later.
        this.isBurstTextHidden = true;
        this.isTimerHidden = true;
        this.chartData[0].data = [1];
        this.chartLabels = [0];
        this.generateChart(1.3);
    };
    HashingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HashingPage');
    };
    HashingPage.prototype.generateChart = function (targetValue) {
        var _this = this;
        //init necess. control variables
        this.chartLabels = []; //clear chartlabels
        this.isBurstTextHidden = true;
        this.isTimerHidden = true;
        this.isChartHidden = false;
        this.chartData[0].hidden = this.isChartHidden;
        this.chartData[0].data = [1];
        this.chartLabels = [0];
        this.multiplierDisplay = 1;
        this.finalValue = 0; //init as 0 first, to update later.
        var startTime = Date.now();
        var startValue = 1;
        var increment = 0.012;
        var currValue = startValue + increment;
        var interval = setInterval(function () {
            var targetNumber = targetValue; //store received target in local var
            _this.chartData[0].data.push(currValue);
            var currentTime = Date.now();
            //divide by milliseconds
            var secondsToPush = (currentTime - startTime) / 1000;
            _this.chartLabels.push(secondsToPush.toFixed(2));
            _this.chart.refresh();
            currValue += increment;
            _this.multiplierDisplay = currValue;
            console.log("Current value " + currValue);
            console.log("target value " + targetNumber);
            increment = _this.updateIncrement(currValue);
            if (currValue + increment >= targetNumber) {
                currentTime = Date.now();
                _this.chartData[0].data.push(targetNumber);
                secondsToPush = (currentTime - startTime) / 1000;
                _this.chartLabels.push(secondsToPush.toFixed(2));
                clearInterval(interval);
                _this.displayBurst(targetNumber);
                _this.isChartHidden = true;
                _this.chartData[0].hidden = _this.isChartHidden;
                _this.chart.refresh();
            }
        }, 126);
    };
    HashingPage.prototype.displayBurst = function (targetNumber) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.finalValue = targetNumber;
                        this.isBurstTextHidden = false;
                        return [4 /*yield*/, this.delay(3000)];
                    case 1:
                        _a.sent();
                        //where to start countdown timer
                        this.startCountdownTimer(10);
                        return [2 /*return*/];
                }
            });
        });
    };
    HashingPage.prototype.startCountdownTimer = function (secondsToCount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var noOfCounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isBurstTextHidden = true;
                        this.isTimerHidden = false;
                        this.count = secondsToCount;
                        noOfCounts = (this.count * 10);
                        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 100).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(noOfCounts), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return (_this.count -= 0.1).toFixed(1); }));
                        return [4 /*yield*/, this.delay((this.count * 1000) + 700)];
                    case 1:
                        _a.sent();
                        this.generateChart(Math.max(1.01, Math.random() * 10));
                        return [2 /*return*/];
                }
            });
        });
    };
    // countDown;
    // count = 10.0;
    HashingPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    HashingPage.prototype.updateIncrement = function (currValue) {
        if (currValue >= 10.0) {
            return 0.300;
        }
        else if (currValue >= 9.5) {
            return 0.275;
        }
        else if (currValue >= 9.0) {
            return 0.250;
        }
        else if (currValue >= 8.5) {
            return 0.225;
        }
        else if (currValue >= 8.0) {
            return 0.200;
        }
        else if (currValue >= 7.5) {
            return 0.170;
        }
        else if (currValue >= 7.0) {
            return 0.150;
        }
        else if (currValue >= 6.5) {
            return 0.135;
        }
        else if (currValue >= 6.0) {
            return 0.120;
        }
        else if (currValue >= 5.5) {
            return 0.105;
        }
        else if (currValue >= 5.0) {
            return 0.085;
        }
        else if (currValue >= 4.5) {
            return 0.070;
        }
        else if (currValue >= 4.0) {
            return 0.060;
        }
        else if (currValue >= 3.5) {
            return 0.050;
        }
        else if (currValue >= 3.0) {
            return 0.040;
        }
        else if (currValue >= 2.5) {
            return 0.035;
        }
        else if (currValue >= 2.0) {
            return 0.030;
        }
        else if (currValue >= 1.8) {
            return 0.025;
        }
        else if (currValue >= 1.5) {
            return 0.02;
        }
        else if (currValue >= 1.3) {
            return 0.015;
        }
        else
            return 0.012;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], HashingPage.prototype, "chart", void 0);
    HashingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hashing',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\hashing\hashing.html"*/'<!--\n  Generated template for the HashingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Game 2: Hashing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="hashingContent" padding> \n \n <br>\n   <!-- Graph -->\n   <div class="graphCntr" style="display: block; width: 100%; height: 420px;">\n\n     <canvas id="ctx" baseChart [chartType]="\'line\'" [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors" width="400" height="400"\n     [legend]="false">\n     <!-- (chartClick)="onChartClick($event) -->\n    </canvas>\n\n    <div class= "circle-cntr">\n      <div class="outer-circle" [style.visibility]="isChartHidden ? \'hidden\' : \'visible\'">\n        <svg xmlns="http://www.w3.org/2000/svg">\n          <circle cx="50" cy="50" r="50" fill="grey" fill-opacity="0.3" stroke="white" stroke-width="1"/>\n          <text x="18%" y="35%" text-anchor="middle" fill="white" alignment-baseline="central">{{multiplierDisplay.toFixed(2)}} x</text>\n        </svg>\n      </div>\n    </div>\n\n    <div class="burst-text" [style.visibility]="isBurstTextHidden ? \'hidden\' : \'visible\'">\n     Busted @ {{finalValue.toFixed(2)}}x\n    </div>\n    \n    <div class="timer-text" [style.visibility]="isTimerHidden ? \'hidden\' : \'visible\'">\n        Next game in {{countDown | async}} s\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\hashing\hashing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavParams */]])
    ], HashingPage);
    return HashingPage;
}());

//# sourceMappingURL=hashing.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__ = __webpack_require__(71);
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
    function HomePage(http, navCtrl, navParams, appCtrl, auth) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        // this.socket = io.connect('http://178.128.50.224:3001');
        // console.log("socket conencted");
        this.isGuest = auth.getGuestLogin();
    }
    HomePage.prototype.ngOnInit = function () {
        this.getNews();
        //   this.messages = new Array();
        //   console.log("INITIATED");
        //   this.socket.on('message-received', (msg: any) => {
        //     this.messages.push(msg);
        //     console.log(msg);
        //     console.log(this.messages);
        //   });
        //   this.socket.emit('chat message', {
        //     msg: 'Client to server, can you hear me server?'
        //   });
        //   this.socket.on('Game2', (data: any) => {
        //     console.log(JSON.parse(data));
        //     this.socket.emit('event3', {
        //       msg: 'Yes, its working for me!!'
        //     });
        //   });
        //   this.socket.on('event4', (data: any) => {
        //     console.log(data.msg);
        //   });
        // }
        // sendMessage() {
        //   const message = {
        //     text: this.messageText
        //   };
        //   this.socket.emit('send-message', message);
        //   // console.log(message.text);
        //   this.messageText = '';
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.getNews = function () {
        var _this = this;
        console.log("button is working fine");
        var path = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=bc62663fa4ac4c369f426682110037c2';
        var encodedPath = encodeURI(path);
        var timeoutMS = 10000;
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
    HomePage.prototype.doNothing = function () {
        console.log("do nothing for now");
    };
    HomePage.prototype.logout = function () {
        console.log("logout is working fine");
        // console.log("rootnav = " +this.appCtrl.getRootNav());
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n        <ion-icon name="home"></ion-icon> \n\n        Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n      <ion-col col-12 text-center>\n\n    <ion-img width="100%" height="200" src={{this.storyImage}} style=background:transparent></ion-img>\n\n    </ion-col>\n\n  </ion-row>\n\n  <br>\n\n  <ion-row>\n\n    {{this.displayStory}}\n\n  </ion-row>\n\n  <!-- <ion-row>\n\n    <ion-col col-12 text-center>\n\n      <button ion-button large color="secondary" style="color:secondary; font-size:30px; font-weight: 600" (click)="getNews()">Get News</button>\n\n    </ion-col>\n\n  </ion-row> -->\n\n  <br>\n\n  <br>\n\n  <!--contact button-->\n\n  <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-item no-lines color="dark" style="color:secondary;" (click)="doNothing()">\n\n          <span item-left style="color:#f3ba2e; font-size:16px;">\n\n            <span style="padding-right:8px"><ion-icon name="call"></ion-icon></span>\n\n            Contact Support\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  <!--logout button-->\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <button ion-item no-lines color="dark" style="color:secondary;" [style.visibility]="isGuest ? \'hidden\' : \'visible\'" (click)="logout()">\n\n        <span item-left style="color:#f3ba2e; font-size:16px;">\n\n          <span style="padding-right:8px"><ion-icon name="exit"></ion-icon></span>\n\n          Logout\n\n        </span>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
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
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-- <button ion-button (click)="back()">Back</button> -->\n\n    <ion-title>\n\n      Game 1: Roulette\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <!-- <input type="button" ng-click"=randomSpin()" style="float:left;" id=\'spin\' /> -->\n\n  \n\n  <!-- <canvas id="canvas" width="500" height="500"></canvas> -->\n\n  <!-- <div id="holder" style="width:400px; height:400px;">\n\n  </div>\n\n  <button id="genBtn">Rotate</button>\n\n  <br />\n\n  <button id="rmBtn">Remove the winner and rotate</button>\n\n  <br>\n\n  <p>Click <b>Rotate</b> to update.</p>\n\n  <p>Bookmark <a id="bookmarklink" href=\'./roulette.html\'>this link</a> to save your list.</p> \n\n  <textarea id="items" name="items" rows="8" cols="15"> </textarea>\n\n  \n\n  <button id="genBtn">Rotate</button>\n\n  <br />\n\n  <button id="rmBtn">Remove the winner and rotate</button>\n\n  <br> -->\n\n  <div class="col-xs-12 col-sm-12 col-lg-12" id="holder" style="visibility:visible">\n\n  <!-- <div id="holder" style="width:100px; height:400px;"> -->\n\n  </div>\n\n  <div class="row">\n\n  Balance: {{walletBallance}} USD\n\n  </div>\n\n  <div class="row"> \n\n      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="spinInputAmount">\n\n          <ion-input type="number" [(ngModel)]="betAmount" placeholder="Amount" [disabled]="disabled"></ion-input>\n\n      </div>\n\n    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" id="spinButton">\n\n        <button ion-button [disabled]="disabled" (click)="onSpin()">Spin To Win!</button>\n\n    </div>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["a" /* AlertController */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoFacAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__ = __webpack_require__(71);
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
            selector: 'page-two-fac-auth',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\two-fac-auth\two-fac-auth.html"*/'<!--\n  Generated template for the TwoFacAuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span text-color="dark">2 FA</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <!-- request SMS-->\n      <ion-row>\n        <ion-col col-12 text-center>\n          <div class="center" [style.visibility]="isRequestHidden ? \'hidden\' : \'visible\'">\n            <button ion-button [color]="isRequestEnabled ? \'secondary\' : \'secondary\'" [outline]="isRequestEnabled ? \'false\' : \'true\'" \n            [disabled]="isRequestEnabled? null : \'disabled\'" class="request-sms-button" ion-button color="secondary" round (click)="requestedSMS()">\n            REQUEST<br>SMS</button>\n          </div>\n            <div class="timer" [style.visibility]="isTimerHidden ? \'hidden\' : \'visible\'">Request again in {{countDown | async}} s</div>\n        </ion-col>\n      </ion-row> \n      \n      <!-- input SMS box -->\n      <ion-row>\n          <ion-col col-12 text-center>\n              <ion-item text-center no-lines id="rounded" style="width:70%; margin:auto" >\n                  <ion-label floating primary color="secondary">\n                     SMS Verification Code\n                  </ion-label>\n                  <ion-input type="text"></ion-input>\n                  </ion-item>\n          </ion-col>\n        </ion-row> \n    <br>\n     <!--verify button-->\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button small color="secondary" style="color:rgb(0, 0, 0); font-size:20px; font-weight: 800" (click)="verify2FA()">VERIFY</button>\n        </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\two-fac-auth\two-fac-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]])
    ], TwoFacAuthPage);
    return TwoFacAuthPage;
}());

//# sourceMappingURL=two-fac-auth.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // (for rxjs < 6) use 'rxjs/observable/timer'

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare function reset(): any;
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDataArray = [0, 1, 2, 3];
        this.variable_increase = 5;
        this.resetGraph = false;
        this.count = 10.0;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return --_this.count; }));
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#43A047',
                borderWidth: '2',
                pointBackgroundColor: '#43A047',
                pointBorderColor: '#43A047',
                pointHoverBackgroundColor: '#43A047',
                pointHoverBorderColor: '#43A047'
            },
        ];
        this.chartData = [
            { data: [], label: 'PSA' },
        ];
        this.chartLabels = [];
        this.chartOptions = {
            // animation: {
            //   onProgress: function(animation) {
            //       this.baseChart.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            //   }
            // },
            responsive: true,
            maintainAspectRatio: false,
            // legend: {
            //   position: 'bottom',
            //   onClick: (e) => e.stopPropagation(),
            //   labels: {
            //     fontFamily: 'Open Sans',
            //     usePointStyle: true,
            //     fontSize: 14,
            //     filter: (legendItem, chartData) => {
            //       return !this.chartData[legendItem.datasetIndex].hidden;
            //     }
            //   }
            // },
            scales: {
                xAxes: [{
                        type: 'realtime',
                        display: false,
                        gridLines: [{
                                // type: 'realtime',
                                display: false
                            }]
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Times',
                            fontSize: 14,
                            fontStyle: 'bold',
                            fontFamily: 'Open Sans'
                        }
                    }],
            },
            elements: {},
            tooltips: {},
            plugins: {
                streaming: {
                    // testFunction: function(){
                    //   var value = 1;
                    //   return value;
                    // },
                    onRefresh: function (chart) {
                        var yValueMultiplier = 1.0;
                        var maxValueSet = 2.0;
                        var count = 0;
                        // var iteration = 0; 
                        // var lineNo = 0;
                        chart.data.datasets.forEach(function (dataset) {
                            var currDate = Date.now();
                            // var index = 0;
                            //var count = this.getYValue(lineNo, iteration, this.datamap);
                            // var count = Math.random();
                            dataset.data.push({
                                x: currDate,
                                y: yValueMultiplier,
                            });
                            yValueMultiplier += 0.1;
                            console.log("my yvalueMultipler " + yValueMultiplier);
                            // console.log("after increasing count" + this.resetGraph);
                            // if (count === 20){
                            //     this.resetGraph=true;
                            // }
                            // console.log("until here okay" + this.resetGraph);
                            // if (this.resetGraph === true){
                            //   // chart.data.datasets=[];
                            // }
                            // this.checkResetGraph();
                        });
                        // this.resetGraph=true;
                        // if (this.resetGraph){
                        //   chart.data.datasets=[];
                        // }
                    },
                    delay: 2000,
                    frameRate: 30,
                }
            },
        },
            this.updateVariable();
    }
    WalletPage.prototype.updateVariable = function () {
        this.variable_increase += 0.1;
    };
    WalletPage.prototype.testFunction = function () {
        var value = 1;
        return value;
    };
    // private checkResetGraph(){
    //   if (lineNo === 0){
    //     var value= Math.random()
    //     datamap.set(iteration, value)
    //     return value;
    //   }
    //   else {
    //     return datamap.get(iteration);
    //   }
    // }
    WalletPage.prototype.ngOnInit = function () {
        // Let's navigate from TabsPage to Page1
        // reset();
    };
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
        // while(true){
        // this.thisChartUpdate();
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], WalletPage.prototype, "Game2Chart", void 0);
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Wallet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<canvas id="Game2Chart "#Game2Chart baseChart [chartType]="\'line\'" \n\n[datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors" [legend]="false">\n\n</canvas>\n\n{{variable_increase}}\n\n<br>\n\nNext game in <h2>{{countDown | async}}</h2>\n\n\n\n<button ion-button (click)="thisChartUpdate()">Default</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__);
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
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StreamPage = /** @class */ (function () {
    function StreamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // private datamap: any;
        this.datasets = [
            { data: [], fill: false, label: 'BitCoin' },
            { data: [], showLine: false, pointRadius: 5, label: 'Short' },
            { data: [], showLine: false, pointRadius: 5, label: 'Long' }
        ];
        this.options = {
            plugins: {
                streaming: {
                    onRefresh: function (chart) {
                        // this.datamap = new Map<Number,Number>();
                        // this.datamap.set(0,0);
                        var count = 0;
                        var iteration = 0;
                        var lineNo = 0;
                        chart.data.datasets.forEach(function (dataset) {
                            if (count == 0) {
                                iteration = Math.random() * 10;
                            }
                            else {
                            }
                            var currDate = Date.now();
                            //  var count = this.getYValue(lineNo, iteration, this.datamap);
                            // var count = Math.random();
                            dataset.data.push({
                                x: currDate,
                                y: iteration,
                            });
                            count++;
                        });
                    },
                    delay: 2000,
                    frameRate: 30,
                }
            },
            scales: {
                xAxes: [{
                        type: 'realtime'
                    }]
            }
        };
    }
    // private getYValue(lineNo, iteration, datamap){
    //   if (lineNo === 0){
    //     var value= Math.random()
    //     datamap.set(iteration, value)
    //     return value;
    //   }
    //   else {
    //     return datamap.get(iteration);
    //   }
    // }
    StreamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StreamPage');
    };
    StreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stream',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\stream\stream.html"*/'<!--\n  Generated template for the StreamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>stream</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n<canvas baseChart [chartType]="\'line\'" [datasets]="datasets" [options]="options" width=100% height=100%></canvas>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\stream\stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavParams */]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrehuntPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
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
    function TrehuntPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currBTCprice = this.randomIntRange(8000, 10000);
        this.currETHprice = this.randomIntRange(600, 800);
        this.totalBTCtix = 8800;
        this.currBTCtix = this.randomIntRange(1, this.totalBTCtix - 1);
        // this.currBTCtix=8700;
        this.totalETHtix = 660;
        this.currETHtix = this.randomIntRange(1, this.totalETHtix - 1);
        // this.currETHtix=650;
        this.loadBTCProgress = ((this.currBTCtix / this.totalBTCtix) * 100).toFixed(2);
        this.loadETHProgress = ((this.currETHtix / this.totalETHtix) * 100).toFixed(2);
    }
    TrehuntPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrehuntPage');
    };
    TrehuntPage.prototype.ngOnInit = function () {
    };
    TrehuntPage.prototype.doRefresh = function (refresher) {
        console.log('Refreshed successfully here', refresher);
        //to update curr BTC/ETH price & curr BTC/ETH tickets sold
        var rangeBTCTixIncrease = this.totalBTCtix - this.currBTCtix;
        var rangeETHTixIncrease = this.totalETHtix - this.currETHtix;
        this.updateBTCETHPrice();
        this.updateCurrBTCtix(rangeBTCTixIncrease);
        this.updateCurrETHtix(rangeETHTixIncrease);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    TrehuntPage.prototype.updateBTCETHPrice = function () {
        this.currBTCprice = this.randomIntRange(8000, 10000);
        this.currETHprice = this.randomIntRange(600, 800);
    };
    TrehuntPage.prototype.updateCurrBTCtix = function (rangeBTCTixIncrease) {
        var _this = this;
        if (this.currBTCtix >= this.totalBTCtix) {
            console.log("BTC terminating early");
            return;
        }
        else {
            var increment = this.randomIntRange(0, 500);
            // console.log("increment value " + increment);
            var targetValue = this.currBTCtix + increment;
            console.log("BTC tix target value is " + targetValue);
            if (targetValue >= this.totalBTCtix) {
                targetValue = this.totalBTCtix;
            }
            var interval_1 = setInterval(function () {
                _this.currBTCtix++;
                _this.loadBTCProgress = ((_this.currBTCtix / _this.totalBTCtix) * 100).toFixed(2);
                if (_this.currBTCtix == targetValue)
                    clearInterval(interval_1);
            }, 50);
        }
    };
    TrehuntPage.prototype.updateCurrETHtix = function (rangeETHTixIncrease) {
        var _this = this;
        if (this.currETHtix >= this.totalETHtix) {
            console.log("ETH terminating early");
            return;
        }
        else {
            console.log("Entered else loop");
            var increment = this.randomIntRange(0, 30);
            // console.log("increment value " + increment);
            var targetValue = this.currETHtix + increment;
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
    TrehuntPage.prototype.randomIntRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    TrehuntPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trehunt',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\trehunt\trehunt.html"*/'<!--\n  Generated template for the TrehuntPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Game 1: Treasure!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n  <!--for curr exchange rate-->\n  <h2 style="text-align: center">Current Est. Price</h2>\n  <ion-row>\n      <ion-col>\n        <div class="style-ex-rate">\n          1 BTC = <span style="color:#f3ba2e">{{currBTCprice}}</span> USD\n        </div>\n      </ion-col>\n      <ion-col>\n          <div class="style-ex-rate">\n              1 ETH = <span style="color:#f3ba2e">{{currETHprice}}</span> USD\n            </div>\n      </ion-col>\n  </ion-row>\n  <br>\n  <!-- for coin images row-->\n  <ion-row>\n    <ion-col>\n      <ion-img width="100" height="100" src="../assets/imgs/Bitcoin.png" style= background:transparent></ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-img width="100" height="100" src="../assets/imgs/ethereum.png" style= background:transparent></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <!--for current tickets sold-->\n  <h6 style="text-align: center">Tickets Sold</h6>\n  <ion-row>\n      <ion-col>\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currBTCtix}}</span><span style="color:whitesmoke; font-size:12px;">/ {{totalBTCtix}}</span>\n      </ion-col>\n      <ion-col>\n        <span style="color:rgb(17, 204, 17); font-size:28px;">{{currETHtix}}</span><span style="color:whitesmoke; font-size:12px;">/ {{totalETHtix}}</span>\n      </ion-col>\n  </ion-row>\n\n\n  <!--for current progress bar-->\n  <ion-row>\n      <ion-col>\n          <progress-bar [progress]="loadBTCProgress"></progress-bar>\n      </ion-col>\n      <ion-col>\n          <progress-bar [progress]="loadETHProgress"></progress-bar>\n      </ion-col>\n  </ion-row>\n  \n  \n  <!--for buying tix header-->\n  <h6 style="text-align: center">Buy <span style="color:#f3ba2e; font-size:12px;">(1 Ticket = $1 USD)</span></h6>\n  <ion-row>\n      <ion-col>\n          No. BTC Ticket:\n          <ion-input type="number" [(ngModel)]="amountBTCtix" placeholder="Tickets" attr.text-center [disabled]="BTCTixDisabled"></ion-input>\n          <button ion-button small color="secondary" [disabled]="BTCTixDisabled" (click)="buyBTCtix()">Buy</button>\n      </ion-col>\n      <ion-col>\n          No. ETH Ticket:\n          <ion-input type="number" [(ngModel)]="amountETHtix" placeholder="Tickets" [disabled]="ETHTixDisabled"></ion-input>\n          <button ion-button color="secondary" small [disabled]="ETHTixDisabled" (click)="buyETHtix()">Buy</button>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content  \n    pullingIcon="arrow-dropdown"\n    pullingText="Pull to refresh"\n    refreshingSpinner="circles"\n    refreshingText="Refreshing...">\n  </ion-refresher-content>\n</ion-refresher>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\trehunt\trehunt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["h" /* NavParams */]])
    ], TrehuntPage);
    return TrehuntPage;
}());

//# sourceMappingURL=trehunt.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bidding/bidding.module": [
		601,
		7
	],
	"../pages/hashing/hashing.module": [
		602,
		6
	],
	"../pages/home/home.module": [
		603,
		5
	],
	"../pages/roulette/roulette.module": [
		604,
		4
	],
	"../pages/stream/stream.module": [
		605,
		3
	],
	"../pages/trehunt/trehunt.module": [
		606,
		2
	],
	"../pages/two-fac-auth/two-fac-auth.module": [
		607,
		1
	],
	"../pages/wallet/wallet.module": [
		608,
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_roulette_roulette__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wallet_wallet__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_stream_stream__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_hashing_hashing__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_trehunt_trehunt__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_progress_bar_progress_bar__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_two_fac_auth_two_fac_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_global_auth_global_auth__ = __webpack_require__(71);
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
                __WEBPACK_IMPORTED_MODULE_19__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trehunt_trehunt__["a" /* TrehuntPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_stream_stream__["a" /* StreamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bidding/bidding.module#BiddingPageModule', name: 'BiddingPage', segment: 'bidding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hashing/hashing.module#HashingPageModule', name: 'HashingPage', segment: 'hashing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette/roulette.module#WalletPageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_7__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trehunt_trehunt__["a" /* TrehuntPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_hashing_hashing__["a" /* HashingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_two_fac_auth_two_fac_auth__["a" /* TwoFacAuthPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_stream_stream__["a" /* StreamPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_global_auth_global_auth__["a" /* GlobalAuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 206,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-kw": 208,
	"./ar-kw.js": 208,
	"./ar-ly": 209,
	"./ar-ly.js": 209,
	"./ar-ma": 210,
	"./ar-ma.js": 210,
	"./ar-sa": 211,
	"./ar-sa.js": 211,
	"./ar-tn": 212,
	"./ar-tn.js": 212,
	"./ar.js": 206,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bm": 216,
	"./bm.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-il": 235,
	"./en-il.js": 235,
	"./en-nz": 236,
	"./en-nz.js": 236,
	"./eo": 237,
	"./eo.js": 237,
	"./es": 238,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es-us": 240,
	"./es-us.js": 240,
	"./es.js": 238,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-latn": 252,
	"./gom-latn.js": 252,
	"./gu": 253,
	"./gu.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mn": 278,
	"./mn.js": 278,
	"./mr": 279,
	"./mr.js": 279,
	"./ms": 280,
	"./ms-my": 281,
	"./ms-my.js": 281,
	"./ms.js": 280,
	"./mt": 282,
	"./mt.js": 282,
	"./my": 283,
	"./my.js": 283,
	"./nb": 284,
	"./nb.js": 284,
	"./ne": 285,
	"./ne.js": 285,
	"./nl": 286,
	"./nl-be": 287,
	"./nl-be.js": 287,
	"./nl.js": 286,
	"./nn": 288,
	"./nn.js": 288,
	"./pa-in": 289,
	"./pa-in.js": 289,
	"./pl": 290,
	"./pl.js": 290,
	"./pt": 291,
	"./pt-br": 292,
	"./pt-br.js": 292,
	"./pt.js": 291,
	"./ro": 293,
	"./ro.js": 293,
	"./ru": 294,
	"./ru.js": 294,
	"./sd": 295,
	"./sd.js": 295,
	"./se": 296,
	"./se.js": 296,
	"./si": 297,
	"./si.js": 297,
	"./sk": 298,
	"./sk.js": 298,
	"./sl": 299,
	"./sl.js": 299,
	"./sq": 300,
	"./sq.js": 300,
	"./sr": 301,
	"./sr-cyrl": 302,
	"./sr-cyrl.js": 302,
	"./sr.js": 301,
	"./ss": 303,
	"./ss.js": 303,
	"./sv": 304,
	"./sv.js": 304,
	"./sw": 305,
	"./sw.js": 305,
	"./ta": 306,
	"./ta.js": 306,
	"./te": 307,
	"./te.js": 307,
	"./tet": 308,
	"./tet.js": 308,
	"./tg": 309,
	"./tg.js": 309,
	"./th": 310,
	"./th.js": 310,
	"./tl-ph": 311,
	"./tl-ph.js": 311,
	"./tlh": 312,
	"./tlh.js": 312,
	"./tr": 313,
	"./tr.js": 313,
	"./tzl": 314,
	"./tzl.js": 314,
	"./tzm": 315,
	"./tzm-latn": 316,
	"./tzm-latn.js": 316,
	"./tzm.js": 315,
	"./ug-cn": 317,
	"./ug-cn.js": 317,
	"./uk": 318,
	"./uk.js": 318,
	"./ur": 319,
	"./ur.js": 319,
	"./uz": 320,
	"./uz-latn": 321,
	"./uz-latn.js": 321,
	"./uz.js": 320,
	"./vi": 322,
	"./vi.js": 322,
	"./x-pseudo": 323,
	"./x-pseudo.js": 323,
	"./yo": 324,
	"./yo.js": 324,
	"./zh-cn": 325,
	"./zh-cn.js": 325,
	"./zh-hk": 326,
	"./zh-hk.js": 326,
	"./zh-tw": 327,
	"./zh-tw.js": 327
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
webpackContext.id = 449;

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(387);
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
// import { SplashScreen } from '@ionic-native/splash-screen';



var MyApp = /** @class */ (function () {
    // rootPage:any = TabsPage;
    // platform: Platform;
    function MyApp(platform, statusBar, app) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        statusBar.overlaysWebView(true);
        statusBar.backgroundColorByHexString('#000000');
        // alert(testVar);
        platform.ready().then(function () {
            // statusBar.styleDefault();
            // splashScreen.hide();
            platform.registerBackButtonAction(function () {
                // this.navCtrl.pop();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(20);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n  Does live reload work\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 600:
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
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\components\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 71:
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

/***/ })

},[390]);
//# sourceMappingURL=main.js.map