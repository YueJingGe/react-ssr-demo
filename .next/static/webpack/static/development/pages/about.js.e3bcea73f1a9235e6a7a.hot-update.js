webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jinggeyue/Documents/yjg/react-ssr-demo/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var HelloBundle = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()({
  modules: function modules() {
    var components = {
      Connect: __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/connect */ "./components/connect.js")),
      Address: __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/address */ "./components/address.js"))
    };
    return components;
  },
  render: function render(props, _ref) {
    var Connect = _ref.Connect,
        Address = _ref.Address;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.title), __jsx(Connect, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx(Address, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/connect */ "./components/connect.js"), /*require.resolve*/(/*! ../components/address */ "./components/address.js")];
    },
    modules: ["../components/connect", "../components/address"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(HelloBundle, {
    title: "\u5173\u4E8E\u6211\uFF1A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=about.js.e3bcea73f1a9235e6a7a.hot-update.js.map