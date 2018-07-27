webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 103;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 107;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 138;

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_streaming__ = __webpack_require__(640);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavParams"]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(491);
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
        var _this = this;
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
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#B094FD',
                borderWidth: '2',
                pointBackgroundColor: '#B094FD',
                pointBorderColor: '#B094FD',
                pointHoverBackgroundColor: '#B094FD',
                pointHoverBorderColor: '#B094FD'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#FFEB3B',
                borderWidth: '2',
                pointBackgroundColor: '#FFEB3B',
                pointBorderColor: '#FFEB3B',
                pointHoverBackgroundColor: '#FFEB3B',
                pointHoverBorderColor: '#FFEB3B'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#F4C100',
                borderWidth: '2',
                pointBackgroundColor: '#F4C100',
                pointBorderColor: '#F4C100',
                pointHoverBackgroundColor: '#F4C100',
                pointHoverBorderColor: '#F4C100'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#AE9C00',
                borderWidth: '2',
                pointBackgroundColor: '#AE9C00',
                pointBorderColor: '#AE9C00',
                pointHoverBackgroundColor: '#AE9C00',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#F48FB1',
                borderWidth: '2',
                pointBackgroundColor: '#F48FB1',
                pointBorderColor: '#F48FB1',
                pointHoverBackgroundColor: '#F48FB1',
                pointHoverBorderColor: '#F48FB1'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#CA7B80',
                borderWidth: '2',
                pointBackgroundColor: '#CA7B80',
                pointBorderColor: '#CA7B80',
                pointHoverBackgroundColor: '#CA7B80',
                pointHoverBorderColor: '#CA7B80'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#C80043',
                borderWidth: '2',
                pointBackgroundColor: '#C80043',
                pointBorderColor: '#C80043',
                pointHoverBackgroundColor: '#C80043',
                pointHoverBorderColor: '#C80043'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#F47300',
                borderWidth: '2',
                pointBackgroundColor: '#F47300',
                pointBorderColor: '#F47300',
                pointHoverBackgroundColor: '#F47300',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#F2028F',
                borderWidth: '2',
                pointBackgroundColor: '#F2028F',
                pointBorderColor: '#F2028F',
                pointHoverBackgroundColor: '#F2028F',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#0288D1',
                borderWidth: '2',
                pointBackgroundColor: '#0288D1',
                pointBorderColor: '#0288D1',
                pointHoverBackgroundColor: '#0288D1',
                pointHoverBorderColor: '#0288D1'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#7B0090',
                borderWidth: '2',
                pointBackgroundColor: '#7B0090',
                pointBorderColor: '#7B0090',
                pointHoverBackgroundColor: '#7B0090',
                pointHoverBorderColor: '#7B0090'
            },
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#154774',
                borderWidth: '2',
                pointBackgroundColor: '#154774',
                pointBorderColor: '#154774',
                pointHoverBackgroundColor: '#154774',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
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
            legend: {
                position: 'bottom',
                onClick: function (e) { return e.stopPropagation(); },
                labels: {
                    fontFamily: 'Open Sans',
                    usePointStyle: true,
                    fontSize: 14,
                    filter: function (legendItem, chartData) {
                        return !_this.chartData[legendItem.datasetIndex].hidden;
                    }
                }
            },
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
    WalletPage.prototype.thisChartUpdate = function () {
        console.log("click button lets go");
        //this.chartData = [];
        this.myDataArray = [Math.random(), Math.random(), Math.random(), Math.random()];
        this.chartData = [
            { data: this.myDataArray, label: 'PSA' },
        ];
        // this.chartData.push(this.myDataArray);
        // console.log(this.myDataArray);
        // setTimeout(() => {
        //   if (this.baseChart) {
        //     // this.baseChart.update();
        //     console.log("refreshed");
        //   }
        // }, 50);
        console.log("LABEL HERE " + this.chartData[0].label);
        this.chartLabels.push('new label: ' + Math.random()); // add new label at end
        this.chartLabels.splice(0, 1); // remove first label
        console.log(this.chartData.data);
        this.chartData[0].data.push(Math.random()); // add new data at end
        this.chartData[0].data.splice(0, 1); // remove first data point
        // this.baseChart.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], WalletPage.prototype, "baseChart", void 0);
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<canvas baseChart [chartType]="\'line\'" [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [colors]="chartColors"\n  [legend]="true">\n</canvas>\n<button ion-button (click)="thisChartUpdate()">Default</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavParams"]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 226:
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
webpackEmptyAsyncContext.id = 226;

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 228;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 25;

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 252;

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 259;

/***/ }),

/***/ 270:
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
webpackEmptyAsyncContext.id = 270;

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 276;

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 278;

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 280;

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 285;

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 287;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 29;

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 291;

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 301;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roulette_roulette__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stream_stream__ = __webpack_require__(215);
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
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
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <button ion-button (click)="back()">Back</button> -->\n    <ion-title>\n      Game 1: Roulette\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n print screen\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\roulette\roulette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jasper\Documents\BGM App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 32;

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(626);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 35;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 36;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/stream/stream.module": [
		716,
		1
	],
	"../pages/wallet/wallet.module": [
		717,
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
webpackAsyncContext.id = 360;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(556);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_roulette_roulette__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_stream_stream__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(715);
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
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/stream/stream.module#StreamPageModule', name: 'StreamPage', segment: 'stream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["IonicApp"]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 559;

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 562;

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 567;

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 568;

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 569;

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 570;

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 571;

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 578;

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 579;

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 581;

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 582;

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 583;

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 587;

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 588;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 59;

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 594;

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 598;

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 599;

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 602;

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 603;

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 608;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 61;

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 611;

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 612;

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(317);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["Platform"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 368,
	"./af.js": 368,
	"./ar": 369,
	"./ar-dz": 370,
	"./ar-dz.js": 370,
	"./ar-kw": 371,
	"./ar-kw.js": 371,
	"./ar-ly": 372,
	"./ar-ly.js": 372,
	"./ar-ma": 373,
	"./ar-ma.js": 373,
	"./ar-sa": 374,
	"./ar-sa.js": 374,
	"./ar-tn": 375,
	"./ar-tn.js": 375,
	"./ar.js": 369,
	"./az": 376,
	"./az.js": 376,
	"./be": 377,
	"./be.js": 377,
	"./bg": 378,
	"./bg.js": 378,
	"./bm": 379,
	"./bm.js": 379,
	"./bn": 380,
	"./bn.js": 380,
	"./bo": 381,
	"./bo.js": 381,
	"./br": 382,
	"./br.js": 382,
	"./bs": 383,
	"./bs.js": 383,
	"./ca": 384,
	"./ca.js": 384,
	"./cs": 385,
	"./cs.js": 385,
	"./cv": 386,
	"./cv.js": 386,
	"./cy": 387,
	"./cy.js": 387,
	"./da": 388,
	"./da.js": 388,
	"./de": 389,
	"./de-at": 390,
	"./de-at.js": 390,
	"./de-ch": 391,
	"./de-ch.js": 391,
	"./de.js": 389,
	"./dv": 392,
	"./dv.js": 392,
	"./el": 393,
	"./el.js": 393,
	"./en-au": 394,
	"./en-au.js": 394,
	"./en-ca": 395,
	"./en-ca.js": 395,
	"./en-gb": 396,
	"./en-gb.js": 396,
	"./en-ie": 397,
	"./en-ie.js": 397,
	"./en-il": 398,
	"./en-il.js": 398,
	"./en-nz": 399,
	"./en-nz.js": 399,
	"./eo": 400,
	"./eo.js": 400,
	"./es": 401,
	"./es-do": 402,
	"./es-do.js": 402,
	"./es-us": 403,
	"./es-us.js": 403,
	"./es.js": 401,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fo": 408,
	"./fo.js": 408,
	"./fr": 409,
	"./fr-ca": 410,
	"./fr-ca.js": 410,
	"./fr-ch": 411,
	"./fr-ch.js": 411,
	"./fr.js": 409,
	"./fy": 412,
	"./fy.js": 412,
	"./gd": 413,
	"./gd.js": 413,
	"./gl": 414,
	"./gl.js": 414,
	"./gom-latn": 415,
	"./gom-latn.js": 415,
	"./gu": 416,
	"./gu.js": 416,
	"./he": 417,
	"./he.js": 417,
	"./hi": 418,
	"./hi.js": 418,
	"./hr": 419,
	"./hr.js": 419,
	"./hu": 420,
	"./hu.js": 420,
	"./hy-am": 421,
	"./hy-am.js": 421,
	"./id": 422,
	"./id.js": 422,
	"./is": 423,
	"./is.js": 423,
	"./it": 424,
	"./it.js": 424,
	"./ja": 425,
	"./ja.js": 425,
	"./jv": 426,
	"./jv.js": 426,
	"./ka": 427,
	"./ka.js": 427,
	"./kk": 428,
	"./kk.js": 428,
	"./km": 429,
	"./km.js": 429,
	"./kn": 430,
	"./kn.js": 430,
	"./ko": 431,
	"./ko.js": 431,
	"./ky": 432,
	"./ky.js": 432,
	"./lb": 433,
	"./lb.js": 433,
	"./lo": 434,
	"./lo.js": 434,
	"./lt": 435,
	"./lt.js": 435,
	"./lv": 436,
	"./lv.js": 436,
	"./me": 437,
	"./me.js": 437,
	"./mi": 438,
	"./mi.js": 438,
	"./mk": 439,
	"./mk.js": 439,
	"./ml": 440,
	"./ml.js": 440,
	"./mn": 441,
	"./mn.js": 441,
	"./mr": 442,
	"./mr.js": 442,
	"./ms": 443,
	"./ms-my": 444,
	"./ms-my.js": 444,
	"./ms.js": 443,
	"./mt": 445,
	"./mt.js": 445,
	"./my": 446,
	"./my.js": 446,
	"./nb": 447,
	"./nb.js": 447,
	"./ne": 448,
	"./ne.js": 448,
	"./nl": 449,
	"./nl-be": 450,
	"./nl-be.js": 450,
	"./nl.js": 449,
	"./nn": 451,
	"./nn.js": 451,
	"./pa-in": 452,
	"./pa-in.js": 452,
	"./pl": 453,
	"./pl.js": 453,
	"./pt": 454,
	"./pt-br": 455,
	"./pt-br.js": 455,
	"./pt.js": 454,
	"./ro": 456,
	"./ro.js": 456,
	"./ru": 457,
	"./ru.js": 457,
	"./sd": 458,
	"./sd.js": 458,
	"./se": 459,
	"./se.js": 459,
	"./si": 460,
	"./si.js": 460,
	"./sk": 461,
	"./sk.js": 461,
	"./sl": 462,
	"./sl.js": 462,
	"./sq": 463,
	"./sq.js": 463,
	"./sr": 464,
	"./sr-cyrl": 465,
	"./sr-cyrl.js": 465,
	"./sr.js": 464,
	"./ss": 466,
	"./ss.js": 466,
	"./sv": 467,
	"./sv.js": 467,
	"./sw": 468,
	"./sw.js": 468,
	"./ta": 469,
	"./ta.js": 469,
	"./te": 470,
	"./te.js": 470,
	"./tet": 471,
	"./tet.js": 471,
	"./tg": 472,
	"./tg.js": 472,
	"./th": 473,
	"./th.js": 473,
	"./tl-ph": 474,
	"./tl-ph.js": 474,
	"./tlh": 475,
	"./tlh.js": 475,
	"./tr": 476,
	"./tr.js": 476,
	"./tzl": 477,
	"./tzl.js": 477,
	"./tzm": 478,
	"./tzm-latn": 479,
	"./tzm-latn.js": 479,
	"./tzm.js": 478,
	"./ug-cn": 480,
	"./ug-cn.js": 480,
	"./uk": 481,
	"./uk.js": 481,
	"./ur": 482,
	"./ur.js": 482,
	"./uz": 483,
	"./uz-latn": 484,
	"./uz-latn.js": 484,
	"./uz.js": 483,
	"./vi": 485,
	"./vi.js": 485,
	"./x-pseudo": 486,
	"./x-pseudo.js": 486,
	"./yo": 487,
	"./yo.js": 487,
	"./zh-cn": 488,
	"./zh-cn.js": 488,
	"./zh-hk": 489,
	"./zh-hk.js": 489,
	"./zh-tw": 490,
	"./zh-tw.js": 490
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
webpackContext.id = 668;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 79;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 80;

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;

/***/ })

},[533]);
//# sourceMappingURL=main.js.map