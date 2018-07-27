webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoulettePage = /** @class */ (function () {
    function RoulettePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoulettePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RoulettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <button ion-button (click)="back()">Back</button> -->\n    <ion-title>\n      Game 1: Roulette\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <input type="button" value="spin" style="float:left;" id=\'spin\' />\n  <!-- <canvas id="canvas" width="500" height="500"></canvas> -->\n  <div id="holder" style="width:400px; height:400px;">\n  </div>\n  <script type="text/javascript" src="./js/raphael-min.js"></script>\n  <script type="text/javascript" src="./js/mersenne-twister.js"></script>\n  <script type="text/javascript" src="./js/roulette.js"></script>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["e" /* NavController */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__ = __webpack_require__(385);
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
        this.datasets = [
            { data: [], fill: false, label: 'BitCoin' },
            { data: [], showLine: false, pointRadius: 5, label: 'Short' },
            { data: [], showLine: false, pointRadius: 5, label: 'Long' }
        ];
        this.options = {
            plugins: {
                streaming: {
                    onRefresh: function (chart) {
                        this.datamap = new Map();
                        this.datamap.set(0, 0);
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
    StreamPage.prototype.getYValue = function (lineNo, iteration, datamap) {
        if (lineNo === 0) {
            var value = Math.random();
            datamap.set(iteration, value);
            return value;
        }
        else {
            return datamap.get(iteration);
        }
    };
    StreamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StreamPage');
    };
    StreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stream',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\stream\stream.html"*/'<!--\n  Generated template for the StreamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>stream</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n<canvas baseChart [chartType]="\'line\'" [datasets]="datasets" [options]="options" width=100% height=100%></canvas>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\stream\stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["f" /* NavParams */]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(291);
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
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDataArray = [0, 1, 2, 3];
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
            { data: this.myDataArray, label: 'PSA' },
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
                        display: true,
                        gridLines: [{
                                type: 'realtime',
                                display: false
                            }]
                    }],
                yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1,
                            stepSize: 0.1
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage (%)',
                            fontSize: 14,
                            fontStyle: 'bold',
                            fontFamily: 'Open Sans'
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            tooltips: {
                mode: 'x-axis',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.yLabel.toFixed(2) + " %";
                        return label;
                    }
                }
            }
        };
    }
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
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<canvas id="Game2Chart "#Game2Chart baseChart [chartType]="\'line\'" \n[datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors" [legend]="false">\n</canvas>\n\n\n<button ion-button (click)="thisChartUpdate()">Default</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular___["f" /* NavParams */]) === "function" && _b || Object])
    ], WalletPage);
    return WalletPage;
    var _a, _b;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/roulette/roulette.module": [
		462,
		2
	],
	"../pages/stream/stream.module": [
		463,
		1
	],
	"../pages/wallet/wallet.module": [
		464,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roulette_roulette__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stream_stream__ = __webpack_require__(108);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__roulette_roulette__["a" /* RoulettePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__stream_stream__["a" /* StreamPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Roulette" tabIcon="flower"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="logo-usd"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Stream" tabIcon="happy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(29);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n  Does live reload work\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to BGG!</h2>\n  <p>\n    Testing VSCode IDE\n  </p>\n  <ol>\n    <li>Open a new terminal by pressing (+) icon.</li>\n    <li>Run <code><b>npx</b> ionic serve -c</code></li>\n  </ol>\n  <p>\n    This new project is for BGG\n    that are going to primarily use a Tabbed UI<br>\n    let me add something at 11.46pm so that it works\n  </p>\n\n  <p>\n    \n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n  <ul>\n      <li>This is now to text live reload </li>\n      <li>reload pt2</li>\n      <li>test live reload</li>\n      <li>live reload works</li>\n  </ul>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_roulette_roulette__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_stream_stream__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(461);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_stream_stream__["a" /* StreamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/roulette/roulette.module#WalletPageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stream/stream.module#StreamPageModule', name: 'StreamPage', segment: 'stream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular___["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_stream_stream__["a" /* StreamPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular___["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bm": 179,
	"./bm.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-au": 194,
	"./en-au.js": 194,
	"./en-ca": 195,
	"./en-ca.js": 195,
	"./en-gb": 196,
	"./en-gb.js": 196,
	"./en-ie": 197,
	"./en-ie.js": 197,
	"./en-il": 198,
	"./en-il.js": 198,
	"./en-nz": 199,
	"./en-nz.js": 199,
	"./eo": 200,
	"./eo.js": 200,
	"./es": 201,
	"./es-do": 202,
	"./es-do.js": 202,
	"./es-us": 203,
	"./es-us.js": 203,
	"./es.js": 201,
	"./et": 204,
	"./et.js": 204,
	"./eu": 205,
	"./eu.js": 205,
	"./fa": 206,
	"./fa.js": 206,
	"./fi": 207,
	"./fi.js": 207,
	"./fo": 208,
	"./fo.js": 208,
	"./fr": 209,
	"./fr-ca": 210,
	"./fr-ca.js": 210,
	"./fr-ch": 211,
	"./fr-ch.js": 211,
	"./fr.js": 209,
	"./fy": 212,
	"./fy.js": 212,
	"./gd": 213,
	"./gd.js": 213,
	"./gl": 214,
	"./gl.js": 214,
	"./gom-latn": 215,
	"./gom-latn.js": 215,
	"./gu": 216,
	"./gu.js": 216,
	"./he": 217,
	"./he.js": 217,
	"./hi": 218,
	"./hi.js": 218,
	"./hr": 219,
	"./hr.js": 219,
	"./hu": 220,
	"./hu.js": 220,
	"./hy-am": 221,
	"./hy-am.js": 221,
	"./id": 222,
	"./id.js": 222,
	"./is": 223,
	"./is.js": 223,
	"./it": 224,
	"./it.js": 224,
	"./ja": 225,
	"./ja.js": 225,
	"./jv": 226,
	"./jv.js": 226,
	"./ka": 227,
	"./ka.js": 227,
	"./kk": 228,
	"./kk.js": 228,
	"./km": 229,
	"./km.js": 229,
	"./kn": 230,
	"./kn.js": 230,
	"./ko": 231,
	"./ko.js": 231,
	"./ky": 232,
	"./ky.js": 232,
	"./lb": 233,
	"./lb.js": 233,
	"./lo": 234,
	"./lo.js": 234,
	"./lt": 235,
	"./lt.js": 235,
	"./lv": 236,
	"./lv.js": 236,
	"./me": 237,
	"./me.js": 237,
	"./mi": 238,
	"./mi.js": 238,
	"./mk": 239,
	"./mk.js": 239,
	"./ml": 240,
	"./ml.js": 240,
	"./mn": 241,
	"./mn.js": 241,
	"./mr": 242,
	"./mr.js": 242,
	"./ms": 243,
	"./ms-my": 244,
	"./ms-my.js": 244,
	"./ms.js": 243,
	"./mt": 245,
	"./mt.js": 245,
	"./my": 246,
	"./my.js": 246,
	"./nb": 247,
	"./nb.js": 247,
	"./ne": 248,
	"./ne.js": 248,
	"./nl": 249,
	"./nl-be": 250,
	"./nl-be.js": 250,
	"./nl.js": 249,
	"./nn": 251,
	"./nn.js": 251,
	"./pa-in": 252,
	"./pa-in.js": 252,
	"./pl": 253,
	"./pl.js": 253,
	"./pt": 254,
	"./pt-br": 255,
	"./pt-br.js": 255,
	"./pt.js": 254,
	"./ro": 256,
	"./ro.js": 256,
	"./ru": 257,
	"./ru.js": 257,
	"./sd": 258,
	"./sd.js": 258,
	"./se": 259,
	"./se.js": 259,
	"./si": 260,
	"./si.js": 260,
	"./sk": 261,
	"./sk.js": 261,
	"./sl": 262,
	"./sl.js": 262,
	"./sq": 263,
	"./sq.js": 263,
	"./sr": 264,
	"./sr-cyrl": 265,
	"./sr-cyrl.js": 265,
	"./sr.js": 264,
	"./ss": 266,
	"./ss.js": 266,
	"./sv": 267,
	"./sv.js": 267,
	"./sw": 268,
	"./sw.js": 268,
	"./ta": 269,
	"./ta.js": 269,
	"./te": 270,
	"./te.js": 270,
	"./tet": 271,
	"./tet.js": 271,
	"./tg": 272,
	"./tg.js": 272,
	"./th": 273,
	"./th.js": 273,
	"./tl-ph": 274,
	"./tl-ph.js": 274,
	"./tlh": 275,
	"./tlh.js": 275,
	"./tr": 276,
	"./tr.js": 276,
	"./tzl": 277,
	"./tzl.js": 277,
	"./tzm": 278,
	"./tzm-latn": 279,
	"./tzm-latn.js": 279,
	"./tzm.js": 278,
	"./ug-cn": 280,
	"./ug-cn.js": 280,
	"./uk": 281,
	"./uk.js": 281,
	"./ur": 282,
	"./ur.js": 282,
	"./uz": 283,
	"./uz-latn": 284,
	"./uz-latn.js": 284,
	"./uz.js": 283,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./yo": 287,
	"./yo.js": 287,
	"./zh-cn": 288,
	"./zh-cn.js": 288,
	"./zh-hk": 289,
	"./zh-hk.js": 289,
	"./zh-tw": 290,
	"./zh-tw.js": 290
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
webpackContext.id = 413;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(331);
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
    // platform: Platform;
    function MyApp(platform, app) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular___["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map