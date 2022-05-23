"use strict";
(self["webpackChunkrx"] = self["webpackChunkrx"] || []).push([["default"],{

/***/ 930:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/react18-demo/demo2/global-loader.tsx




function GlobalLoader(_ref) {
  var isLoading = _ref.isLoading;

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
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
var app = __webpack_require__(49);
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
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isStartTransition = _useState4[0],
      setIsStartTransition = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      renderValue = _useState6[0],
      setRenderValue = _useState6[1];

  var deferredValue = (0,react.useDeferredValue)(value, {
    timeoutMs: 2000
  });

  var _useTransition = (0,react.useTransition)({
    timeoutMs: 100
  }),
      _useTransition2 = _slicedToArray(_useTransition, 2),
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
;// CONCATENATED MODULE: ./src/api/fakeApi1.ts
function fetchProfileData(userId) {
  var userPromise = fetchUser(userId);
  var postsPromise = fetchPosts(userId);
  return {
    userId: userId,
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  };
} // Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!

function wrapPromise(promise) {
  var status = "pending";
  var result;
  var suspender = promise.then(function (r) {
    status = "success";
    result = r;
  }, function (e) {
    status = "error";
    result = e;
  });
  return {
    read: function read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

function fetchUser(userId) {
  console.log("fetch user " + userId + "...");
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("fetched user " + userId);

      switch (userId) {
        case 0:
          resolve({
            name: "Ringo Starr"
          });
          break;

        case 1:
          resolve({
            name: "George Harrison"
          });
          break;

        case 2:
          resolve({
            name: "John Lennon"
          });
          break;

        case 3:
          resolve({
            name: "Paul McCartney"
          });
          break;

        default:
          throw Error("Unknown user.");
      }
    }, 2000 * Math.random());
  });
}
function fetchPosts(userId) {
  console.log("fetch posts for " + userId + "...");
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("fetched posts for " + userId);

      switch (userId) {
        case 0:
          resolve([{
            id: 0,
            text: "I get by with a little help from my friends"
          }, {
            id: 1,
            text: "I'd like to be under the sea in an octupus's garden"
          }, {
            id: 2,
            text: "You got that sand all over your feet"
          }]);
          break;

        case 1:
          resolve([{
            id: 0,
            text: "Turn off your mind, relax, and float downstream"
          }, {
            id: 1,
            text: "All things must pass"
          }, {
            id: 2,
            text: "I look at the world and I notice it's turning"
          }]);
          break;

        case 2:
          resolve([{
            id: 0,
            text: "Living is easy with eyes closed"
          }, {
            id: 1,
            text: "Nothing's gonna change my world"
          }, {
            id: 2,
            text: "I am the walrus"
          }]);
          break;

        case 3:
          resolve([{
            id: 0,
            text: "Woke up, fell out of bed"
          }, {
            id: 1,
            text: "Here, there, and everywhere"
          }, {
            id: 2,
            text: "Two of us sending postcards, writing letters"
          }]);
          break;

        default:
          throw Error("Unknown user.");
      }
    }, 2000 * Math.random());
  });
}
;// CONCATENATED MODULE: ./src/components/use-transition-demo.tsx



var initResource = fetchProfileData(0);

var getNextUserId = function getNextUserId(id) {
  return id === 3 ? 0 : id + 1;
};

var UseTransitionDemo = function UseTransitionDemo() {
  var _React$useState = react.useState(initResource),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      resource = _React$useState2[0],
      setResource = _React$useState2[1];

  var _React$useTransition = react.useTransition({
    timeout: 2000
  }),
      _React$useTransition2 = _slicedToArray(_React$useTransition, 2),
      isPending = _React$useTransition2[0],
      startTransition = _React$useTransition2[1];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
    disabled: isPending,
    onClick: function onClick() {
      return startTransition(function () {
        var nextUserId = getNextUserId(resource.userId);
        setResource(fetchProfileData(nextUserId));
      });
    }
  }, "Next"), isPending && /*#__PURE__*/react.createElement("h1", null, "update page..."), !isPending && /*#__PURE__*/react.createElement(ProfilePage, {
    resource: resource
  }));
};

function ProfilePage(_ref) {
  var resource = _ref.resource;
  return /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("h1", null, "Loading profile...")
  }, /*#__PURE__*/react.createElement(ProfileDetails, {
    resource: resource
  }), /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("h1", null, "Loading posts...")
  }, /*#__PURE__*/react.createElement(ProfileTimeline, {
    resource: resource
  })));
}

function ProfileDetails(_ref2) {
  var resource = _ref2.resource;
  var user = resource.user.read();
  return /*#__PURE__*/react.createElement("h1", null, user.name);
}

function ProfileTimeline(_ref3) {
  var resource = _ref3.resource;
  var posts = resource.posts.read();
  return /*#__PURE__*/react.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react.createElement("li", {
      key: post.id
    }, post.text);
  }));
}

/* harmony default export */ const use_transition_demo = (UseTransitionDemo);
;// CONCATENATED MODULE: ./src/components/use-deferred-value-demo.tsx



var getLis = function getLis(key) {
  var arr = [];

  for (var i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push( /*#__PURE__*/react.createElement("li", {
        key: i
      }, i));
    }
  }

  return arr;
};

var UseDeferredValueDemo = function UseDeferredValueDemo() {
  var _React$useState = react.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var deferredValue = react.useDeferredValue(value);
  console.log(value, 'value');
  console.log(deferredValue, 'deferredValue');

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: handleChange
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", null, deferredValue ? getLis(deferredValue) : null)));
};

/* harmony default export */ const use_deferred_value_demo = (UseDeferredValueDemo);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/content.tsx




var CONTENT = {
  'demo': /*#__PURE__*/react.createElement(react18_demo_demo1_app, null),
  'use-transition-demo': /*#__PURE__*/react.createElement(use_transition_demo, null),
  'use-deferred-value-demo': /*#__PURE__*/react.createElement(use_deferred_value_demo, null)
};

function Content(_ref) {
  var page = _ref.page,
      resource = _ref.resource;
  var time = resource.delay.read();
  return time && /*#__PURE__*/react.createElement("div", {
    className: "tab-content"
  }, "This content is for page \"", page, "\" after ", time.toFixed(), "ms.", /*#__PURE__*/react.createElement("div", null, CONTENT[page]));
}

/* harmony default export */ const content = (Content);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/fakeApi.ts
function fetchData() {
  var promise = createDelay();
  return {
    delay: fakeApi_wrapPromise(promise)
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


function fakeApi_wrapPromise(promise) {
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/react18-demo/demo2/app.css
var demo2_app = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/react18-demo/demo2/app.css

      
      
      
      
      
      
      
      
      

var app_options = {};

app_options.styleTagTransform = (styleTagTransform_default());
app_options.setAttributes = (setAttributesWithoutAttributes_default());

      app_options.insert = insertBySelector_default().bind(null, "head");
    
app_options.domAPI = (styleDomAPI_default());
app_options.insertStyleElement = (insertStyleElement_default());

var app_update = injectStylesIntoStyleTag_default()(demo2_app/* default */.Z, app_options);




       /* harmony default export */ const react18_demo_demo2_app = (demo2_app/* default */.Z && demo2_app/* default.locals */.Z.locals ? demo2_app/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/react18-demo/demo2/app.tsx




var _excluded = ["children", "slot"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var initialResource = fetchData();
function app_App() {
  var _useState = (0,react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = (0,react.useState)(initialResource),
      _useState4 = _slicedToArray(_useState3, 2),
      resource = _useState4[0],
      setResource = _useState4[1];

  var _useTransition = (0,react.useTransition)({
    timeout: 2000
  }),
      _useTransition2 = _slicedToArray(_useTransition, 2),
      isPending = _useTransition2[0],
      startTransition = _useTransition2[1];

  var root = document.getElementById("root");

  function handleClick(index) {
    startTransition(function () {
      setTab(index);
      setResource(fetchData());
    });
  }

  var Button = function Button(_ref) {
    var props = _extends({}, _ref);

    return /*#__PURE__*/react.createElement("button", props);
  };

  var Clone = function Clone(_ref2) {
    var children = _ref2.children,
        slot = _ref2.slot,
        props = _objectWithoutProperties(_ref2, _excluded);

    console.log(children, "children");
    return /*#__PURE__*/react.cloneElement(children, _objectSpread({
      onClick: function onClick() {
        alert(213);
      },
      style: {
        width: 100,
        borderColor: "red"
      }
    }, props), slot(_objectSpread({}, props))) || null;
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(global_loader, {
    isLoading: isPending
  }), /*#__PURE__*/react.createElement("ul", {
    className: "inline"
  }, /*#__PURE__*/react.createElement("li", {
    className: tab === 0 ? "selected" : null,
    onClick: function onClick() {
      return handleClick(0);
    }
  }, "demo"), /*#__PURE__*/react.createElement("li", {
    className: tab === 1 ? "selected" : null,
    onClick: function onClick() {
      return handleClick(1);
    }
  }, "use-transition-demo"), /*#__PURE__*/react.createElement("li", {
    className: tab === 2 ? "selected" : null,
    onClick: function onClick() {
      return handleClick(2);
    }
  }, "use-deferred-value-demo")), /*#__PURE__*/react.createElement("div", {
    className: "tab ".concat(isPending ? "pending" : null)
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Loader, null)
  }, tab === 0 && /*#__PURE__*/react.createElement(content, {
    page: "demo",
    resource: resource
  }), tab === 1 && /*#__PURE__*/react.createElement(content, {
    page: "use-transition-demo",
    resource: resource
  }), tab === 2 && /*#__PURE__*/react.createElement(content, {
    page: "use-deferred-value-demo",
    resource: resource
  })), /*#__PURE__*/react.createElement(Clone, {
    type: "button",
    slot: function slot(_ref3) {
      var props = _extends({}, _ref3);

      return /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          console.log(props, "props");
        }
      }, "clickme");
    }
  }, /*#__PURE__*/react.createElement(Button, null))));
}

function Loader() {
  var _useState5 = (0,react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
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
    return ".";
  }));
}
;// CONCATENATED MODULE: ./src/index.tsx



var container = document.getElementById('root');
client/* createRoot */.s(container).render( /*#__PURE__*/react.createElement(app_App, null));

window.onscroll = function () {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  console.log("滚动距离" + scrollTop);
  sessionStorage.setItem('scrollTop', String(scrollTop));
};

/***/ }),

/***/ 49:
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


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

}]);