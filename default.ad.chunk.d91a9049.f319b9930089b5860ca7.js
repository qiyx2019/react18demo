"use strict";
(self["webpackChunkrx"] = self["webpackChunkrx"] || []).push([["default.ad.chunk.d91a9049"],{

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bN": () => (/* binding */ fetchProfileData)
/* harmony export */ });
/* unused harmony exports fetchUser, fetchPosts */
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

/***/ }),

/***/ 381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_app)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-spring/dist/react-spring.esm.js
var react_spring_esm = __webpack_require__(920);
// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring-web.esm.js
var react_spring_web_esm = __webpack_require__(472);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles.module.css
var styles_module = __webpack_require__(60);
;// CONCATENATED MODULE: ./src/components/styles.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.Z, options);




       /* harmony default export */ const components_styles_module = (styles_module/* default */.Z && styles_module/* default.locals */.Z.locals ? styles_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/chain.tsx



var _excluded = (/* unused pure expression or super */ null && (["size"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





function App() {
  var data = [{
    name: 'Rare Wind',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 50
  }, {
    name: 'Saint Petersburg',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 50
  }, {
    name: 'Deep Blue',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 50
  }, {
    name: 'Ripe Malinka',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: 50
  }, {
    name: 'Perfect White',
    description: '#fdfbfb → #ebedee',
    css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
    height: 50
  }, {
    name: 'Near Moon',
    description: '#5ee7df → #b490ca',
    css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    height: 50
  }, {
    name: 'Wild Apple',
    description: '#d299c2 → #fef9d7',
    css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    height: 50
  }, {
    name: 'Ladoga Bottom',
    description: '#ebc0fd → #d9ded8',
    css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
    height: 50
  }, {
    name: 'Sunny Morning',
    description: '#f6d365 → #fda085',
    css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    height: 50
  }, {
    name: 'Lemon Gate',
    description: '#96fbc4 → #f9f586',
    css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    height: 50
  }, {
    name: 'Salt Mountain',
    description: ' #FFFEFF → #D7FFFE',
    css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
    height: 50
  }, {
    name: 'New York',
    description: ' #fff1eb → #ace0f9',
    css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
    height: 50
  }, {
    name: 'Soft Grass',
    description: ' #c1dfc4 → #deecdd',
    css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
    height: 50
  }, {
    name: 'Japan Blush',
    description: ' #ddd6f3 → #faaca8',
    css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
    height: 50
  }];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      set = _useState2[1];

  var springApi = useSpringRef();

  var _useSpring = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: '20%',
      background: 'hotpink'
    },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink'
    }
  }),
      size = _useSpring.size,
      rest = _objectWithoutProperties(_useSpring, _excluded);

  var transApi = useSpringRef();
  var transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: {
      opacity: 0,
      scale: 0
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0
    }
  }); // This will orchestrate the two animations above, comment the last arg and it creates a sequence

  useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper
  }, /*#__PURE__*/React.createElement(animated.div, {
    style: _objectSpread(_objectSpread({}, rest), {}, {
      width: size,
      height: size
    }),
    className: styles.container,
    onClick: function onClick() {
      return set(function (open) {
        return !open;
      });
    }
  }, transition(function (style, item) {
    return /*#__PURE__*/React.createElement(animated.div, {
      className: styles.item,
      style: _objectSpread(_objectSpread({}, style), {}, {
        background: item.css,
        height: item.height
      })
    });
  })));
}
// EXTERNAL MODULE: ./src/services/message.service.ts
var message_service = __webpack_require__(880);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(120);
;// CONCATENATED MODULE: ./src/components/error-boundary.tsx






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
      console.log(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.hasError);

      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return /*#__PURE__*/react.createElement("h1", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      console.log(error);
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react.Component);

/* harmony default export */ const error_boundary = (ErrorBoundary);
;// CONCATENATED MODULE: ./src/components/use-ref-demo.tsx


var UseRefDemo = function UseRefDemo(props) {
  var myref = react.useRef(null);
  var myref1 = react.useRef(null);
  var myref2 = react.useRef(null);

  var onButtonClick = function onButtonClick() {
    var _myref$current, _myref1$current;

    (_myref$current = myref.current) === null || _myref$current === void 0 ? void 0 : _myref$current.focus();
    myref1.current.innerHTML = Math.random();
    console.log((_myref1$current = myref1.current) === null || _myref1$current === void 0 ? void 0 : _myref1$current.innerHTML);
  };

  var FancyInput = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var inp = react.useRef(null);
    react.useImperativeHandle(ref, function () {
      return {
        focus: function focus() {
          var _inp$current;

          return (_inp$current = inp.current) === null || _inp$current === void 0 ? void 0 : _inp$current.focus();
        }
      };
    });
    return /*#__PURE__*/react.createElement("input", {
      ref: inp,
      type: "text"
    });
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
    ref: myref
  }), /*#__PURE__*/react.createElement("div", {
    ref: myref1
  }, "asd"), /*#__PURE__*/react.createElement("button", {
    onClick: onButtonClick
  }, "Focus the input"), /*#__PURE__*/react.createElement(FancyInput, {
    ref: myref2
  }));
};

UseRefDemo.displayName = "UseRefDemo";
/* harmony default export */ const use_ref_demo = ((/* unused pure expression or super */ null && (UseRefDemo)));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(152);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(942);
// EXTERNAL MODULE: ./src/utils/store.ts
var store = __webpack_require__(115);
;// CONCATENATED MODULE: ./src/components/use-reducer-demo.tsx



function use_reducer_demo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function use_reducer_demo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? use_reducer_demo_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : use_reducer_demo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var reducer = function reducer(state, action) {
  var type = action.type,
      payload = action.payload;
  console.log(type, payload);

  if (type === 'getCount') {
    state.count += payload;
    return use_reducer_demo_objectSpread({}, state);
  }

  return state;
};

var UseReducerDemo = function UseReducerDemo(props) {
  var _React$useReducer = react.useReducer(reducer, {
    count: 0
  }),
      _React$useReducer2 = (0,slicedToArray/* default */.Z)(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: "getCount",
        payload: 1
      });
    }
  }, '+'), state.count);
};

UseReducerDemo.displayName = 'UseReducerDemo';
/* harmony default export */ const use_reducer_demo = ((/* unused pure expression or super */ null && (UseReducerDemo)));
;// CONCATENATED MODULE: ./src/api/fakeApi.ts
function fetchProfileData() {
  var userPromise = fetchUser();
  var postsPromise = fetchPosts();
  return {
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

function fetchUser() {
  console.log("fetch user...");
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("fetched user");
      resolve({
        name: "Ringo Starr"
      });
    }, 1000);
  });
}

function fetchPosts() {
  console.log("fetch posts...");
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("fetched posts");
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
    }, 1100);
  });
}
;// CONCATENATED MODULE: ./src/components/suspense-demo.tsx


var resource = fetchProfileData();

var SuspenseDemo = function SuspenseDemo() {
  return /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: 'loading...'
  }, /*#__PURE__*/React.createElement(ProfileDetails, null), /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: 'loading...'
  }, /*#__PURE__*/React.createElement(ProfileTimeline, null)));
};

var ProfileDetails = function ProfileDetails() {
  var user = resource.user.read();
  return /*#__PURE__*/React.createElement("h1", null, user.name);
};

var ProfileTimeline = function ProfileTimeline() {
  var posts = resource.posts.read();
  return /*#__PURE__*/React.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/React.createElement("li", {
      key: post.id
    }, post.text);
  }));
};

/* harmony default export */ const suspense_demo = ((/* unused pure expression or super */ null && (SuspenseDemo)));
// EXTERNAL MODULE: ./src/components/use-transition-demo.tsx
var use_transition_demo = __webpack_require__(889);
// EXTERNAL MODULE: ./src/components/use-deferred-value-demo.tsx
var use_deferred_value_demo = __webpack_require__(903);
// EXTERNAL MODULE: ./src/react18-demo/demo2/app.tsx + 4 modules
var app = __webpack_require__(641);
// EXTERNAL MODULE: ./src/react18-demo/demo1/app.tsx + 2 modules
var demo1_app = __webpack_require__(483);
;// CONCATENATED MODULE: ./src/app.tsx














var Home = function Home(props) {
  return /*#__PURE__*/react.createElement(error_boundary, null, /*#__PURE__*/react.createElement(app/* default */.Z, null));
};

Home.displayName = 'Home';
/* harmony default export */ const src_app = (Home);

/***/ }),

/***/ 903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);



var getLis = function getLis(key) {
  var arr = [];

  for (var i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: i
      }, i));
    }
  }

  return arr;
};

var UseDeferredValueDemo = function UseDeferredValueDemo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var deferredValue = react__WEBPACK_IMPORTED_MODULE_0__.useDeferredValue(value);
  console.log(value, 'value');
  console.log(deferredValue, 'deferredValue');

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, deferredValue ? getLis(deferredValue) : null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseDeferredValueDemo);

/***/ }),

/***/ 60:
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
___CSS_LOADER_EXPORT___.push([module.id, ".ndMmBZt_RgLgXOZyMpgt {\n  width: 100%;\n  height: 100%;\n  background: lightblue;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.MgAJFM7hV6Qfb61xe3ZE {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(100px, 1fr));\n  grid-gap: 25px;\n  padding: 25px;\n  background: white;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);\n  will-change: width, height;\n}\n\n.SWwQpl5AvlXPGva6p9mg {\n  width: 100%;\n  height: 100%;\n  background: white;\n  border-radius: 5px;\n  will-change: transform, opacity;\n}\n.Hvgi7xtIlKE30uRsyhWF {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  will-change: transform;\n}\n\n.Hvgi7xtIlKE30uRsyhWF > div {\n  touch-action: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n  will-change: transform;\n  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n}\n\n.MgAJFM7hV6Qfb61xe3ZE {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n}\n\n.ndMmBZt_RgLgXOZyMpgt {\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "ndMmBZt_RgLgXOZyMpgt",
	"container": "MgAJFM7hV6Qfb61xe3ZE",
	"item": "SWwQpl5AvlXPGva6p9mg",
	"page": "Hvgi7xtIlKE30uRsyhWF"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);