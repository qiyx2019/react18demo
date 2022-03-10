"use strict";
(self["webpackChunkrx"] = self["webpackChunkrx"] || []).push([["default.ad.chunk.84781932"],{

/***/ 172:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(294);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758);



var container = document.getElementById('root');
react_dom_client__WEBPACK_IMPORTED_MODULE_0__/* .createRoot */ .s(container).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null));

/***/ }),

/***/ 483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ react18_demo_demo1_app)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/react18-demo/demo1/expensive-view.tsx


function ExpensiveView(props) {
  var count = props.count;
  var length = count * 20 + 100;
  return /*#__PURE__*/react.createElement("div", {
    className: "expensive-view"
  }, /*#__PURE__*/react.createElement("h4", null, "SVG Circle count:", length), Array.from(Array(length).keys()).map(function (v) {
    var per = Math.PI * 2 / length;
    var style = {
      left: Math.cos(per * v) * 200 + 250 - 50,
      top: Math.sin(per * v) * 120 + 250 - 50
    };
    return /*#__PURE__*/react.createElement("div", {
      className: "box",
      key: v,
      style: style
    }, /*#__PURE__*/react.createElement("svg", {
      height: "100",
      width: "100"
    }, /*#__PURE__*/react.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "25"
    })));
  }));
}

/* harmony default export */ const expensive_view = (/*#__PURE__*/react.memo(ExpensiveView));
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/react18-demo/demo1/app.css
var app = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/react18-demo/demo1/app.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(app/* default */.Z, options);




       /* harmony default export */ const demo1_app = (app/* default */.Z && app/* default.locals */.Z.locals ? app/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/react18-demo/demo1/app.tsx





function App() {
  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      isStartTransition = _useState4[0],
      setIsStartTransition = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      renderValue = _useState6[0],
      setRenderValue = _useState6[1];

  var deferredValue = (0,react.useDeferredValue)(value, {
    timeoutMs: 2000
  });

  var _useTransition = (0,react.useTransition)({
    timeoutMs: 100
  }),
      _useTransition2 = (0,slicedToArray/* default */.Z)(_useTransition, 2),
      isPending = _useTransition2[0],
      startTransition = _useTransition2[1];

  var atRangeChange = react.useCallback(function (e) {
    setValue(e.target.value);

    if (isStartTransition) {
      startTransition(function () {
        setRenderValue(e.target.value / 1);
      });
    } else {
      setRenderValue(e.target.value / 1);
    }
  }, [isStartTransition, startTransition]);
  return /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react.createElement("div", {
    className: "app-content"
  }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: isStartTransition,
    onChange: function onChange(e) {
      setIsStartTransition(e.target.checked);
    }
  }), "useTransition"), /*#__PURE__*/react.createElement("h3", null, "inpunt:", value), /*#__PURE__*/react.createElement("h3", null, "deferredValue:", deferredValue), /*#__PURE__*/react.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: value,
    onChange: atRangeChange
  }), isPending ? ' Loading...' : null, /*#__PURE__*/react.createElement(expensive_view, {
    count: renderValue
  })));
}

/* harmony default export */ const react18_demo_demo1_app = (App);

/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/global-loader.tsx




function GlobalLoader(_ref) {
  var isLoading = _ref.isLoading;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  (0,react.useEffect)(function () {
    var timeout;

    if (isLoading) {
      setVisible(true);
    } else {
      timeout = setTimeout(function () {
        setVisible(false);
      }, 500);
    }

    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading]);
  return isVisible && /*#__PURE__*/react.createElement("div", {
    className: "global-loader ".concat(isLoading ? 'is-loading' : null)
  }, /*#__PURE__*/react.createElement("div", {
    className: "global-loader-fill"
  }));
}

/* harmony default export */ const global_loader = (GlobalLoader);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/content.tsx

var CONTENT = {
  Uno: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  Dos: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  Tres: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
};

function Content(_ref) {
  var page = _ref.page,
      resource = _ref.resource;
  var time = resource.delay.read();
  return time && /*#__PURE__*/react.createElement("div", {
    className: "tab-content"
  }, "This content is for page \"", page, "\" after ", time.toFixed(), "ms.", /*#__PURE__*/react.createElement("p", null, CONTENT[page]));
}

/* harmony default export */ const content = (Content);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/fakeApi.ts
function fetchData() {
  var promise = createDelay();
  return {
    delay: wrapPromise(promise)
  };
}

function createDelay() {
  return new Promise(function (resolve) {
    var delay = Math.random() * 520 + 230;
    setTimeout(function () {
      return resolve(delay);
    }, delay);
  });
} // Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!


function wrapPromise(promise) {
  var status = 'pending';
  var result;
  var suspender = promise.then(function (r) {
    status = 'success';
    result = r;
  }, function (e) {
    status = 'error';
    result = e;
  });
  return {
    read: function read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/react18-demo/demo2/app.css
var app = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/app.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(app/* default */.Z, options);




       /* harmony default export */ const demo2_app = (app/* default */.Z && app/* default.locals */.Z.locals ? app/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/react18-demo/demo2/app.tsx







var initialResource = fetchData();
function App() {
  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = (0,react.useState)(initialResource),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      resource = _useState4[0],
      setResource = _useState4[1];

  var _useTransition = (0,react.useTransition)(),
      _useTransition2 = (0,slicedToArray/* default */.Z)(_useTransition, 2),
      isPending = _useTransition2[0],
      startTransition = _useTransition2[1];

  function handleClick(index) {
    startTransition(function () {
      setTab(index);
      setResource(fetchData());
    });
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(global_loader, {
    isLoading: isPending
  }), /*#__PURE__*/react.createElement("ul", {
    className: "inline"
  }, /*#__PURE__*/react.createElement("li", {
    className: tab === 0 ? 'selected' : null,
    onClick: function onClick() {
      return handleClick(0);
    }
  }, "Uno"), /*#__PURE__*/react.createElement("li", {
    className: tab === 1 ? 'selected' : null,
    onClick: function onClick() {
      return handleClick(1);
    }
  }, "Dos"), /*#__PURE__*/react.createElement("li", {
    className: tab === 2 ? 'selected' : null,
    onClick: function onClick() {
      return handleClick(2);
    }
  }, "Tres")), /*#__PURE__*/react.createElement("div", {
    className: "tab ".concat(isPending ? 'pending' : null)
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Loader, null)
  }, tab === 0 && /*#__PURE__*/react.createElement(content, {
    page: "Uno",
    resource: resource
  }), tab === 1 && /*#__PURE__*/react.createElement(content, {
    page: "Dos",
    resource: resource
  }), tab === 2 && /*#__PURE__*/react.createElement(content, {
    page: "Tres",
    resource: resource
  }))));
}

function Loader() {
  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  react.useEffect(function () {
    var interval = setInterval(function () {
      return setCount(function (c) {
        return (c + 1) % 4;
      });
    }, 150);
    return function () {
      if (interval) clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, "Loading ", Array.from(new Array(count), function () {
    return '.';
  }));
}

/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export messageService */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(516);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .x();
var messageService = {
  sendMessage: function sendMessage(message) {
    return subject.next(_objectSpread({}, message));
  },
  clearMessages: function clearMessages() {
    return subject.next({});
  },
  onMessage: function onMessage() {
    return subject.asObservable();
  }
};

/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useStore */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var co__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333);
/* harmony import */ var co__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(co__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var Effect = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Effect() {
    _classCallCheck(this, Effect);
  }

  _createClass(Effect, null, [{
    key: "exec",
    value: function exec(effect) {
      for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
      }

      var arr = Array.apply(null, arg); //这里使用co自动执行saga

      co(effect.apply(null, arr));
    }
  }]);

  return Effect;
}()));

var useStore = function useStore(initModel) {
  var init = cloneDeep(initModel.state);
  var initState = null;

  var Reducer = function Reducer(state, action) {
    console.log(state);

    if (!initState) {
      initState = cloneDeep(state);
    }

    var effects = initModel.effects,
        reducers = initModel.reducers;
    var type = action.type;
    console.log(effects, reducers);

    if (effects.hasOwnProperty(type)) {
      Effect.exec(effects[type], action);
    }

    if (reducers.hasOwnProperty(type)) {
      state = cloneDeep(reducers[type](state, action));
    }

    return _objectSpread({}, state);
  };

  var _React$useReducer = React.useReducer(Reducer, init),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return [state, dispatch];
};

/***/ }),

/***/ 930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.App {\n  font-family: sans-serif;\n  text-align: center;\n}\n.app-content {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.expensive-view {\n  margin-top: 20px;\n  position: relative;\n  width: 500px;\n  height: 500px;\n  border: 2px solid white;\n}\n.box {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.box circle {\n  fill: #ff000033;\n  stroke: #ffffff33;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #eee;\n}\n\n#root {\n  border-radius: 3px;\n  border: 1px solid #e5e5e5;\n  margin: 15px;\n  background-color: white;\n}\n\n.tab {\n  padding: 25px;\n  font-family: sans-serif;\n  color: #444;\n  min-height: 400px;\n}\n\n.pending {\n  transition: color 0.1s;\n  transition-delay: 0.3s;\n  transition-timing-function: ease-in;\n  color: #888;\n}\n\nul.inline {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n}\nli {\n  display: inline-block;\n  margin-left: 0;\n  padding: 10px;\n  border-bottom: 2px solid #eee;\n  transition: all 0.5s;\n  font-family: sans-serif;\n  font-weight: 300;\n  cursor: pointer;\n  color: #aaa;\n}\n.selected {\n  border-bottom: 2px solid #337ab7;\n  color: #444;\n}\n.loader {\n  color: #888;\n  font-size: 16px;\n  font-weight: 600;\n  width: 80px;\n}\n@keyframes Indeterminate {\n  0% {\n    transform: translateX(-100%);\n  }\n  20% {\n    transform: translateX(-10%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.is-loading .global-loader-fill {\n  transition: none;\n  opacity: 1;\n  animation: Indeterminate 10s ease-out;\n  animation-fill-mode: forwards;\n}\n.is-initing .global-loader-fill {\n  transition: none;\n  opacity: 1;\n  animation: Indeterminate 5s ease-out;\n  animation-fill-mode: forwards;\n}\n.global-loader-fill {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 200%;\n  transform: translateX(0);\n  opacity: 0;\n  transition: transform 2s ease, opacity 1s ease;\n  background: linear-gradient(\n    to right,\n    rgba(52, 82, 255, 0.93) 0%,\n    rgba(255, 16, 83, 0.92) 99%,\n    rgba(255, 255, 255, 1) 100%\n  );\n}\n.global-loader-fill::after {\n  display: block;\n  content: ' ';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.global-loader {\n  height: 2px;\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);