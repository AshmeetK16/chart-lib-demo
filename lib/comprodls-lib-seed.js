(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("comprodls-lib-seed", [], factory);
	else if(typeof exports === 'object')
		exports["comprodls-lib-seed"] = factory();
	else
		root["comprodls-lib-seed"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cat = exports.Dog = undefined;

var _cat = __webpack_require__(1);

var _cat2 = _interopRequireDefault(_cat);

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Dog = _dog2.default;
exports.Cat = _cat2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function () {
  function Cat(context, options) {
    _classCallCheck(this, Cat);

    this._name = 'Cat';
    this._context = context;
    this.chartData = options;

    var contextElement = this._context.nativeElement;

    var dummyDiv = document.createElement('div');

    dummyDiv.innerHTML = "<div class='test-class'>This is class app</div>";
    contextElement.appendChild(dummyDiv);
  }

  _createClass(Cat, [{
    key: 'createElement',
    value: function createElement() {
      var contextElement = this._context.nativeElement;

      var dummyDiv = document.createElement('div');

      var chartHTML = '<div class=\'chart-container mt-4 position-relative\'>\n  <div class=\'chart-area\'>\n    <div class=\'grid-lines d-flex justify-content-end position-absolute w-100\'>\n      <div class=\'inner-divs position-absolute h-100\'>';

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.chartData.xaxis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var statements = _step.value;

          chartHTML += '<div class=\'grid-line position-absolute h-100 statements-' + statements.value + '\'></div>';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      chartHTML += "<div class='chart-data d-flex flex-column w-100'>";

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.chartData.yaxis.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              i = _step2$value[0],
              bar = _step2$value[1];

          chartHTML += '<div class=\'grid-line position-absolute h-100 statements-' + bar.value + '\'>\n      <div class=\'bar-container d-flex align-items-center my-3 w-100\'>\n              <div class=\'d-flex flex-md-column flex-row\'>\n                <div class=\'skill-name d-flex align-items-center justify-content-end pr-2 pr-md-3\'>' + bar.label + '\n                  <i class=\'fa fa-exclamation-circle ml-1 d-inline-block d-md-none\' aria-hidden=\'true\'></i>\n                </div>\n                <div class=\'status align-self-end pr-2 pr-md-3 mt-1 d-md-inline-block d-none\'>\n                  \n                  <i class=\'fa fa-question-circle ml-1\' aria-hidden=\'true\'></i>\n                </div>\n              </div>\n    \n              <div class=\'bar d-flex align-items-center\'>\n                <div class=\'percentage percentage-' + this.chartData['dataSet'][i].value + '\'></div>\n                <div class=\'bar-icon d-flex align-items-center justify-content-center\'>\n                  <i class=\'' + this.chartData['dataSet'][i].icon + '\' \n                   aria-hidden=\'true\'></i>\n                  <img class=\'svg-icon\'  \n                  src=\'' + this.chartData['dataSet'][i].img + '\' alt=\'\'>\n                </div>\n              </div>\n            </div>';
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      chartHTML += '<div class=\'bottom-container d-md-flex d-none w-100\'></div></div>\n    <div class=\'chart-labels d-md-flex d-none position-absolute\'>';

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.chartData.xaxis[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _statements = _step3.value;

          chartHTML += '<p class=\'label position-absolute text-center statements-' + _statements.value + '\'>\n      ' + _statements.label + '</p>';
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      chartHTML += '</div></div>';

      dummyDiv.innerHTML = chartHTML;
      contextElement.appendChild(dummyDiv);
    }
  }, {
    key: 'name',
    get: function get() {
      console.log('getname');

      return {
        name: this._name,
        context: this._context
      };
    }
  }]);

  return Cat;
}();

exports.default = Cat;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog() {
    _classCallCheck(this, Dog);

    this._name = 'Dog';
  }

  _createClass(Dog, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Dog;
}();

exports.default = Dog;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=comprodls-lib-seed.js.map