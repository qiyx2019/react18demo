"use strict";
(self["webpackChunkrx"] = self["webpackChunkrx"] || []).push([["main"],{

/***/ 1273:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__(2006);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__(9127);
;// CONCATENATED MODULE: ./src/rx-demo/do.ts


var source = (0,of.of)(1, 2, 3, 4, 5);
var tap_ = source.pipe((0,tap/* tap */.b)(function (value) {
  return console.log("before map" + value);
}), (0,map/* map */.U)(function (value) {
  return value + 10;
}), (0,tap/* tap */.b)(function (value) {
  return console.log("after map" + value);
}));
/* harmony default export */ const rx_demo_do = ((/* unused pure expression or super */ null && (tap_)));
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__(3071);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
var mapTo = __webpack_require__(3833);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delay.js + 3 modules
var delay = __webpack_require__(9361);
;// CONCATENATED MODULE: ./src/rx-demo/delay.ts


var delay_ = (0,of.of)(null);
var message = (0,merge/* merge */.T)(delay_.pipe((0,mapTo/* mapTo */.h)('hello')), delay_.pipe((0,mapTo/* mapTo */.h)('world'), (0,delay/* delay */.g)(1000)), delay_.pipe((0,mapTo/* mapTo */.h)('qyx'), (0,delay/* delay */.g)(2000)), delay_.pipe((0,mapTo/* mapTo */.h)('lm'), (0,delay/* delay */.g)(3000)));
/* harmony default export */ const rx_demo_delay = ((/* unused pure expression or super */ null && (message)));
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__(2401);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
var debounceTime = __webpack_require__(2965);
;// CONCATENATED MODULE: ./src/rx-demo/dt.ts



var debouncedInput = function debouncedInput() {
  var input = document.querySelector("#input");
  var example = (0,fromEvent/* fromEvent */.R)(input, 'keyup').pipe((0,map/* map */.U)(function (i) {
    var _i$currentTarget;

    return (_i$currentTarget = i.currentTarget) === null || _i$currentTarget === void 0 ? void 0 : _i$currentTarget.value;
  }));
  return example.pipe((0,debounceTime/* debounceTime */.b)(500));
};

/* harmony default export */ const dt = (debouncedInput);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js
var timer = __webpack_require__(6625);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/interval.js
var interval = __webpack_require__(6697);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
var switchMap = __webpack_require__(4978);
;// CONCATENATED MODULE: ./src/rx-demo/switchMap.ts



var func = function func() {
  var source = (0,timer/* timer */.H)(0, 5000);
  var example = source.pipe((0,switchMap/* switchMap */.w)(function () {
    return (0,interval/* interval */.F)(1000);
  })).subscribe(function (x) {
    return console.log(x);
  });
  var example_ = (0,fromEvent/* fromEvent */.R)(document, 'click').pipe((0,switchMap/* switchMap */.w)(function () {
    return (0,interval/* interval */.F)(3000).pipe((0,mapTo/* mapTo */.h)('hello ,i tap it'));
  })).subscribe(function (x) {
    return console.log(x);
  });
};

/* harmony default export */ const rx_demo_switchMap = (func);
;// CONCATENATED MODULE: ./src/rx-demo/demo1.tsx



 // import func from './distinctUntilChanged'
// import func from './filter'
// import func from "./take"
// import func from "./takeUntil"
// import func from "./bufferTime"
// import func from "./concatMap"
// import func from "./scan"



var App = function App() {
  rx_demo_switchMap();
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("button", {
    onClick: function onClick() {
      return dt().subscribe(function (x) {
        return console.log(x);
      });
    }
  }, "click"), /*#__PURE__*/react.createElement("input", {
    id: "input",
    type: "text"
  }));
};

/* harmony default export */ const demo1 = (App);
;// CONCATENATED MODULE: ./src/index.tsx



var container = document.getElementById('root');
client/* createRoot */.s(container).render( /*#__PURE__*/react.createElement(demo1, null));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react.ad.chunk.da86be5d","react.ad.chunk.e5bca7e4","vendors.ad.chunk.b632a988","vendors.ad.chunk.13a414ac","vendors.ad.chunk.27545368"], () => (__webpack_exec__(1273)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);