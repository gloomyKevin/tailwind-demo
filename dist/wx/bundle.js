
var window = window || {};

var context = (function() { return this })() || Function("return this")();

// Fix babel runtime in some quirky environment like ali & qq dev.
try {
  if(!context.console){
    context.console = console;
    context.setInterval = setInterval;
    context.setTimeout = setTimeout;
    context.JSON = JSON;
    context.Math = Math;
    context.Date = Date;
    context.RegExp = RegExp;
    context.Infinity = Infinity;
    context.isFinite = isFinite;
    context.parseFloat = parseFloat;
    context.parseInt = parseInt;
    context.Promise = Promise;
    context.WeakMap = WeakMap;
    context.RangeError = RangeError;
    context.TypeError = TypeError;
    context.Uint8Array = Uint8Array;
    context.DataView = DataView;
    context.ArrayBuffer = ArrayBuffer;
    context.Symbol = Symbol;
    context.Reflect = Reflect;
    context.Object = Object;
    context.Error = Error;
    context.Array = Array;
    context.Float32Array = Float32Array;
    context.Float64Array = Float64Array;
    context.Int16Array = Int16Array;
    context.Int32Array = Int32Array;
    context.Int8Array = Int8Array;
    context.Uint16Array = Uint16Array;
    context.Uint32Array = Uint32Array;
    context.Uint8ClampedArray = Uint8ClampedArray;
    context.String = String;
    context.Function = Function;
    context.SyntaxError = SyntaxError;
    context.decodeURIComponent = decodeURIComponent;
    context.encodeURIComponent = encodeURIComponent;
  }
} catch(e){
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPureObject", function() { return toPureObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(180);
/* harmony import */ var _core_createStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(395);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createStoreWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createStateWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGettersWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createGettersWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutationsWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createMutationsWithThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActionsWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createActionsWithThis"]; });

/* harmony import */ var _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(183);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(222);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(203);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return _core_mergeOptions__WEBPACK_IMPORTED_MODULE_8__["getMixin"]; });

/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(283);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(274);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(284);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(389);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(330);


var _this = undefined;














function createApp(config) {
  var _context;

  var mpx = new EXPORT_MPX();

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createApp"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
    proto: mpx.proto
  }, config)]).call(_context, rest));
}
function createPage(config) {
  var _context2;

  var mpx = new EXPORT_MPX();

  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createPage"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
    proto: mpx.proto
  }, config)]).call(_context2, rest));
}
function createComponent(config) {
  var _context3;

  var mpx = new EXPORT_MPX();

  for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createComponent"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = [_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
    proto: mpx.proto
  }, config)]).call(_context3, rest));
}

function toPureObject(obj) {
  return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["diffAndCloneA"])(obj).clone;
}

function extendProps(target, proxyObj, rawProps, option) {
  var keys = Object.getOwnPropertyNames(proxyObj);
  var rawPropsMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["makeMap"])(rawProps);

  var _iterator = _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default()(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (APIs[key] || rawPropsMap[key]) {
        continue;
      } else if (option && (option.prefix || option.postfix)) {
        var transformKey = option.prefix ? option.prefix + '_' + key : key + '_' + option.postfix;
        target[transformKey] = proxyObj[key];
      } else if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(target, key)) {
        target[key] = proxyObj[key];
      } else {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["error"])("Mpx property [".concat(key, "] from installing plugin conflicts with already exists\uFF0Cplease pass prefix/postfix options to avoid property conflict, for example: \"use('plugin', {prefix: 'mm'})\""));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // 安装插件进行扩展API


var installedPlugins = [];

function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(installedPlugins).call(installedPlugins, plugin) > -1) {
    return this;
  }

  var args = [options];
  var proxyMPX = factory();
  var rawProps = Object.getOwnPropertyNames(proxyMPX);
  var rawPrototypeProps = Object.getOwnPropertyNames(proxyMPX.prototype);
  args.unshift(proxyMPX); // 传入真正的mpx对象供插件访问

  args.push(EXPORT_MPX);

  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args);
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args);
  }

  extendProps(EXPORT_MPX, proxyMPX, rawProps, options);
  extendProps(EXPORT_MPX.prototype, proxyMPX.prototype, rawPrototypeProps, options);
  installedPlugins.push(plugin);
  return this;
}

var APIs = {}; // 实例属性

var InstanceAPIs = {};
var observable;
var watch;

if (false) { var remove, _del, _set, vm; } else {
  observable = function observable(obj) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_11__["observe"])(obj);
    return obj;
  };

  var _vm = {};

  watch = function watch(expOrFn, cb, options) {
    return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_12__["watch"])(_vm, expOrFn, cb, options);
  };

  var _remove = function _remove() {
    if (true) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["error"])('$remove will be removed in next minor version, please use $delete instead!', this.$rawOptions && this.$rawOptions.mpxFileResource);
    }

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _observer_index__WEBPACK_IMPORTED_MODULE_11__["del"].apply(this, args);
  };

  APIs = {
    createApp,
    createPage,
    createComponent,
    createStore: _core_createStore__WEBPACK_IMPORTED_MODULE_5__["default"],
    createStoreWithThis: _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createStoreWithThis"],
    mixin: _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__["injectMixins"],
    injectMixins: _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__["injectMixins"],
    toPureObject,
    observable,
    watch,
    use,
    set: _observer_index__WEBPACK_IMPORTED_MODULE_11__["set"],
    remove: _remove,
    delete: _observer_index__WEBPACK_IMPORTED_MODULE_11__["del"],
    getMixin: _core_mergeOptions__WEBPACK_IMPORTED_MODULE_8__["getMixin"],
    implement: _core_implement__WEBPACK_IMPORTED_MODULE_13__["default"]
  };
  InstanceAPIs = {
    $set: _observer_index__WEBPACK_IMPORTED_MODULE_11__["set"],
    $remove: _remove,
    $delete: _observer_index__WEBPACK_IMPORTED_MODULE_11__["del"]
  };
}



function factory() {
  // 作为原型挂载属性的中间层
  function MPX() {
    this.proto = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({}, this);
  }

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(MPX, APIs);

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(MPX.prototype, InstanceAPIs); // 输出web时在mpx上挂载Vue对象


  if (false) {}

  return MPX;
}

var EXPORT_MPX = factory();
EXPORT_MPX.config = {
  useStrictDiff: false,
  ignoreWarning: false,
  ignoreProxyWhiteList: ['id', 'dataset', 'data'],
  observeClassInstance: false,
  hookErrorHandler: null,
  proxyEventHandler: null,
  setDataHandler: null,
  forceRunWatcherSync: false
};
global.__mpx = EXPORT_MPX;

if (true) {
  if (global.i18n) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_11__["observe"])(global.i18n); // 挂载翻译方法

    if (global.i18nMethods) {
      Object.keys(global.i18nMethods).forEach(function (methodName) {
        if (/^__/.test(methodName)) return;

        global.i18n[methodName] = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          // tap i18n.version
          args.unshift((global.i18n.version, global.i18n.locale));
          return global.i18nMethods[methodName].apply(_this, args);
        };
      });

      if (global.i18nMethods.__getMessages) {
        var messages = global.i18nMethods.__getMessages();

        global.i18n.mergeMessages = function (newMessages) {
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["merge"])(messages, newMessages);
          global.i18n.version++;
        };

        global.i18n.mergeLocaleMessage = function (locale, message) {
          messages[locale] = messages[locale] || {};
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["merge"])(messages[locale], message);
          global.i18n.version++;
        };
      }
    }

    EXPORT_MPX.i18n = global.i18n;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EXPORT_MPX);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(9);

var _getIteratorMethod = __webpack_require__(133);

var _Array$isArray = __webpack_require__(140);

var unsupportedIterableToArray = __webpack_require__(145);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(11);
__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(128);
__webpack_require__(129);
__webpack_require__(130);
// TODO: Remove from `core-js@4`
__webpack_require__(131);
// TODO: Remove from `core-js@4`
__webpack_require__(132);

module.exports = parent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(12);
__webpack_require__(113);

module.exports = parent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(96);
__webpack_require__(97);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
var path = __webpack_require__(34);

module.exports = path.Symbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var fails = __webpack_require__(21);
var isArray = __webpack_require__(59);
var isObject = __webpack_require__(31);
var toObject = __webpack_require__(50);
var lengthOfArrayLike = __webpack_require__(60);
var createProperty = __webpack_require__(63);
var arraySpeciesCreate = __webpack_require__(64);
var arrayMethodHasSpeciesSupport = __webpack_require__(70);
var wellKnownSymbol = __webpack_require__(44);
var V8_VERSION = __webpack_require__(38);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(15);
var apply = __webpack_require__(16);
var uncurryThis = __webpack_require__(17);
var isCallable = __webpack_require__(18);
var getOwnPropertyDescriptor = __webpack_require__(19).f;
var isForced = __webpack_require__(54);
var path = __webpack_require__(34);
var bind = __webpack_require__(55);
var createNonEnumerableProperty = __webpack_require__(56);
var hasOwn = __webpack_require__(49);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || /* mpx inject */ (function() { return this })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var call = __webpack_require__(22);
var propertyIsEnumerableModule = __webpack_require__(23);
var createPropertyDescriptor = __webpack_require__(24);
var toIndexedObject = __webpack_require__(25);
var toPropertyKey = __webpack_require__(29);
var hasOwn = __webpack_require__(49);
var IE8_DOM_DEFINE = __webpack_require__(52);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(28);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var uncurryThis = __webpack_require__(17);
var fails = __webpack_require__(21);
var classof = __webpack_require__(27);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(30);
var isSymbol = __webpack_require__(32);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var call = __webpack_require__(22);
var isObject = __webpack_require__(31);
var isSymbol = __webpack_require__(32);
var getMethod = __webpack_require__(40);
var ordinaryToPrimitive = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(44);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(18);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var getBuiltIn = __webpack_require__(33);
var isCallable = __webpack_require__(18);
var isPrototypeOf = __webpack_require__(35);
var USE_SYMBOL_AS_UID = __webpack_require__(36);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(34);
var global = __webpack_require__(15);
var isCallable = __webpack_require__(18);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(37);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(38);
var fails = __webpack_require__(21);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var userAgent = __webpack_require__(39);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(41);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isCallable = __webpack_require__(18);
var tryToString = __webpack_require__(42);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var call = __webpack_require__(22);
var isCallable = __webpack_require__(18);
var isObject = __webpack_require__(31);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var shared = __webpack_require__(45);
var hasOwn = __webpack_require__(49);
var uid = __webpack_require__(51);
var NATIVE_SYMBOL = __webpack_require__(37);
var USE_SYMBOL_AS_UID = __webpack_require__(36);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(46);
var store = __webpack_require__(47);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var setGlobal = __webpack_require__(48);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var toObject = __webpack_require__(50);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var requireObjectCoercible = __webpack_require__(28);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var fails = __webpack_require__(21);
var createElement = __webpack_require__(53);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isObject = __webpack_require__(31);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);
var isCallable = __webpack_require__(18);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var aCallable = __webpack_require__(41);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var definePropertyModule = __webpack_require__(57);
var createPropertyDescriptor = __webpack_require__(24);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(52);
var anObject = __webpack_require__(58);
var toPropertyKey = __webpack_require__(29);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isObject = __webpack_require__(31);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(27);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(61);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(62);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(29);
var definePropertyModule = __webpack_require__(57);
var createPropertyDescriptor = __webpack_require__(24);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(65);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isArray = __webpack_require__(59);
var isConstructor = __webpack_require__(66);
var isObject = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(44);

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var fails = __webpack_require__(21);
var isCallable = __webpack_require__(18);
var classof = __webpack_require__(67);
var getBuiltIn = __webpack_require__(33);
var inspectSource = __webpack_require__(69);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var isCallable = __webpack_require__(18);
var classofRaw = __webpack_require__(27);
var wellKnownSymbol = __webpack_require__(44);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(44);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var isCallable = __webpack_require__(18);
var store = __webpack_require__(47);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(44);
var V8_VERSION = __webpack_require__(38);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var getBuiltIn = __webpack_require__(33);
var apply = __webpack_require__(16);
var call = __webpack_require__(22);
var uncurryThis = __webpack_require__(17);
var IS_PURE = __webpack_require__(46);
var DESCRIPTORS = __webpack_require__(20);
var NATIVE_SYMBOL = __webpack_require__(37);
var fails = __webpack_require__(21);
var hasOwn = __webpack_require__(49);
var isArray = __webpack_require__(59);
var isCallable = __webpack_require__(18);
var isObject = __webpack_require__(31);
var isPrototypeOf = __webpack_require__(35);
var isSymbol = __webpack_require__(32);
var anObject = __webpack_require__(58);
var toObject = __webpack_require__(50);
var toIndexedObject = __webpack_require__(25);
var toPropertyKey = __webpack_require__(29);
var $toString = __webpack_require__(73);
var createPropertyDescriptor = __webpack_require__(24);
var nativeObjectCreate = __webpack_require__(74);
var objectKeys = __webpack_require__(76);
var getOwnPropertyNamesModule = __webpack_require__(84);
var getOwnPropertyNamesExternal = __webpack_require__(85);
var getOwnPropertySymbolsModule = __webpack_require__(87);
var getOwnPropertyDescriptorModule = __webpack_require__(19);
var definePropertyModule = __webpack_require__(57);
var propertyIsEnumerableModule = __webpack_require__(23);
var arraySlice = __webpack_require__(86);
var redefine = __webpack_require__(88);
var shared = __webpack_require__(45);
var sharedKey = __webpack_require__(83);
var hiddenKeys = __webpack_require__(80);
var uid = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(44);
var wrappedWellKnownSymbolModule = __webpack_require__(89);
var defineWellKnownSymbol = __webpack_require__(90);
var setToStringTag = __webpack_require__(91);
var InternalStateModule = __webpack_require__(93);
var $forEach = __webpack_require__(95).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var classof = __webpack_require__(67);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(58);
var defineProperties = __webpack_require__(75);
var enumBugKeys = __webpack_require__(81);
var hiddenKeys = __webpack_require__(80);
var html = __webpack_require__(82);
var documentCreateElement = __webpack_require__(53);
var sharedKey = __webpack_require__(83);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var definePropertyModule = __webpack_require__(57);
var anObject = __webpack_require__(58);
var toIndexedObject = __webpack_require__(25);
var objectKeys = __webpack_require__(76);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(77);
var enumBugKeys = __webpack_require__(81);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var hasOwn = __webpack_require__(49);
var toIndexedObject = __webpack_require__(25);
var indexOf = __webpack_require__(78).indexOf;
var hiddenKeys = __webpack_require__(80);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(79);
var lengthOfArrayLike = __webpack_require__(60);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(62);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45);
var uid = __webpack_require__(51);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(77);
var enumBugKeys = __webpack_require__(81);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(27);
var toIndexedObject = __webpack_require__(25);
var $getOwnPropertyNames = __webpack_require__(84).f;
var arraySlice = __webpack_require__(86);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);

module.exports = uncurryThis([].slice);


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(56);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(44);

exports.f = wellKnownSymbol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(34);
var hasOwn = __webpack_require__(49);
var wrappedWellKnownSymbolModule = __webpack_require__(89);
var defineProperty = __webpack_require__(57).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var defineProperty = __webpack_require__(57).f;
var createNonEnumerableProperty = __webpack_require__(56);
var hasOwn = __webpack_require__(49);
var toString = __webpack_require__(92);
var wellKnownSymbol = __webpack_require__(44);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var classof = __webpack_require__(67);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(94);
var global = __webpack_require__(15);
var uncurryThis = __webpack_require__(17);
var isObject = __webpack_require__(31);
var createNonEnumerableProperty = __webpack_require__(56);
var hasOwn = __webpack_require__(49);
var shared = __webpack_require__(47);
var sharedKey = __webpack_require__(83);
var hiddenKeys = __webpack_require__(80);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isCallable = __webpack_require__(18);
var inspectSource = __webpack_require__(69);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(55);
var uncurryThis = __webpack_require__(17);
var IndexedObject = __webpack_require__(26);
var toObject = __webpack_require__(50);
var lengthOfArrayLike = __webpack_require__(60);
var arraySpeciesCreate = __webpack_require__(64);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var setToStringTag = __webpack_require__(91);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var DOMIterables = __webpack_require__(125);
var global = __webpack_require__(15);
var classof = __webpack_require__(67);
var createNonEnumerableProperty = __webpack_require__(56);
var Iterators = __webpack_require__(116);
var wellKnownSymbol = __webpack_require__(44);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(25);
var addToUnscopables = __webpack_require__(115);
var Iterators = __webpack_require__(116);
var InternalStateModule = __webpack_require__(93);
var defineIterator = __webpack_require__(117);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var call = __webpack_require__(22);
var IS_PURE = __webpack_require__(46);
var FunctionName = __webpack_require__(118);
var isCallable = __webpack_require__(18);
var createIteratorConstructor = __webpack_require__(119);
var getPrototypeOf = __webpack_require__(121);
var setPrototypeOf = __webpack_require__(123);
var setToStringTag = __webpack_require__(91);
var createNonEnumerableProperty = __webpack_require__(56);
var redefine = __webpack_require__(88);
var wellKnownSymbol = __webpack_require__(44);
var Iterators = __webpack_require__(116);
var IteratorsCore = __webpack_require__(120);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var hasOwn = __webpack_require__(49);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(120).IteratorPrototype;
var create = __webpack_require__(74);
var createPropertyDescriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(91);
var Iterators = __webpack_require__(116);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(21);
var isCallable = __webpack_require__(18);
var create = __webpack_require__(74);
var getPrototypeOf = __webpack_require__(121);
var redefine = __webpack_require__(88);
var wellKnownSymbol = __webpack_require__(44);
var IS_PURE = __webpack_require__(46);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var hasOwn = __webpack_require__(49);
var isCallable = __webpack_require__(18);
var toObject = __webpack_require__(50);
var sharedKey = __webpack_require__(83);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(122);

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(17);
var anObject = __webpack_require__(58);
var aPossiblePrototype = __webpack_require__(124);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isCallable = __webpack_require__(18);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(90);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(90);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(135);

module.exports = parent;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(136);
__webpack_require__(113);

module.exports = parent;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
__webpack_require__(137);
var getIteratorMethod = __webpack_require__(139);

module.exports = getIteratorMethod;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(138).charAt;
var toString = __webpack_require__(73);
var InternalStateModule = __webpack_require__(93);
var defineIterator = __webpack_require__(117);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var toIntegerOrInfinity = __webpack_require__(62);
var toString = __webpack_require__(73);
var requireObjectCoercible = __webpack_require__(28);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(67);
var getMethod = __webpack_require__(40);
var Iterators = __webpack_require__(116);
var wellKnownSymbol = __webpack_require__(44);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(142);

module.exports = parent;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(143);

module.exports = parent;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
var path = __webpack_require__(34);

module.exports = path.Array.isArray;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var isArray = __webpack_require__(59);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var _sliceInstanceProperty = __webpack_require__(146);

var _Array$from = __webpack_require__(153);

var arrayLikeToArray = __webpack_require__(164);

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(148);

module.exports = parent;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(149);

module.exports = parent;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(150);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var isArray = __webpack_require__(59);
var isConstructor = __webpack_require__(66);
var isObject = __webpack_require__(31);
var toAbsoluteIndex = __webpack_require__(79);
var lengthOfArrayLike = __webpack_require__(60);
var toIndexedObject = __webpack_require__(25);
var createProperty = __webpack_require__(63);
var wellKnownSymbol = __webpack_require__(44);
var arrayMethodHasSpeciesSupport = __webpack_require__(70);
var un$Slice = __webpack_require__(86);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(34);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(155);

module.exports = parent;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(156);

module.exports = parent;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(157);
var path = __webpack_require__(34);

module.exports = path.Array.from;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var from = __webpack_require__(158);
var checkCorrectnessOfIteration = __webpack_require__(163);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(15);
var bind = __webpack_require__(55);
var call = __webpack_require__(22);
var toObject = __webpack_require__(50);
var callWithSafeIterationClosing = __webpack_require__(159);
var isArrayIteratorMethod = __webpack_require__(161);
var isConstructor = __webpack_require__(66);
var lengthOfArrayLike = __webpack_require__(60);
var createProperty = __webpack_require__(63);
var getIterator = __webpack_require__(162);
var getIteratorMethod = __webpack_require__(139);

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(58);
var iteratorClose = __webpack_require__(160);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(22);
var anObject = __webpack_require__(58);
var getMethod = __webpack_require__(40);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(44);
var Iterators = __webpack_require__(116);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var call = __webpack_require__(22);
var aCallable = __webpack_require__(41);
var anObject = __webpack_require__(58);
var tryToString = __webpack_require__(42);
var getIteratorMethod = __webpack_require__(139);

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(44);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 164 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(167);

module.exports = parent;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(168);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(171);

module.exports = parent;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
var path = __webpack_require__(34);

module.exports = path.Object.assign;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var assign = __webpack_require__(173);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(20);
var uncurryThis = __webpack_require__(17);
var call = __webpack_require__(22);
var fails = __webpack_require__(21);
var objectKeys = __webpack_require__(76);
var getOwnPropertySymbolsModule = __webpack_require__(87);
var propertyIsEnumerableModule = __webpack_require__(23);
var toObject = __webpack_require__(50);
var IndexedObject = __webpack_require__(26);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(176);

module.exports = parent;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(177);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf) ? method : own;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(14);
var uncurryThis = __webpack_require__(17);
var $IndexOf = __webpack_require__(78).indexOf;
var arrayMethodIsStrict = __webpack_require__(179);

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(21);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _createApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(339);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return _createPage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(394);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(337);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(222);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(326);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);







var webAppHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(_platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE"].APP_HOOKS);

function filterOptions(options, appData) {
  var newOptions = {};
  Object.keys(options).forEach(function (key) {
    if (_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_3__["default"][key]) {
      return;
    }

    if (false) {} else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function createApp(option) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // 在App中挂载mpx对象供周边工具访问，如e2e测试
  var builtInMixins = [{
    getMpx() {
      return _index__WEBPACK_IMPORTED_MODULE_6__["default"];
    }

  }];
  var appData = {};

  if (false) {} else {
    builtInMixins.push({
      onLaunch() {
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, option.proto);
      }

    });
  }

  var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_1__["default"])(option, 'app'),
      rawOptions = _transferOptions.rawOptions;

  rawOptions.mixins = builtInMixins;
  var defaultOptions = filterOptions(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["spreadProp"])(Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(rawOptions, 'app', false), 'methods'), appData);

  if (false) {} else {
    var ctor = config.customCtor || global.currentCtor || App;
    ctor(defaultOptions);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transferOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injectMixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
/* harmony import */ var _mergeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(338);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283);






function transferOptions(options, type) {
  var currentInject;

  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject;
  } // 文件编译路径


  options.mpxFileResource = global.currentResource; // 注入全局写入的mixins，原生模式下不进行注入

  if (!options.__nativeRender__) {
    options = Object(_injectMixins__WEBPACK_IMPORTED_MODULE_1__["mergeInjectedMixins"])(options, type);
  }

  if (currentInject && currentInject.injectComputed) {
    // 编译计算属性注入
    options.computed = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.computed, currentInject.injectComputed);
  }

  if (currentInject && currentInject.injectOptions) {
    // 编译option注入,优先微信中的单独配置
    options.options = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, currentInject.injectOptions, options.options);
  } // 转换mode


  options.mpxConvertMode = options.mpxConvertMode || Object(_convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_3__["getConvertMode"])(global.currentSrcMode);
  var rawOptions = Object(_mergeOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(options, type);

  if (currentInject && currentInject.propKeys) {
    var computedKeys = Object.keys(rawOptions.computed || {}); // 头条和百度小程序由于props传递为异步操作，通过props向子组件传递computed数据时，子组件无法在初始时(created/attached)获取到computed数据，如需进一步处理数据建议通过watch获取

    currentInject.propKeys.forEach(function (key) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["findItem"])(computedKeys, key)) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_5__["warn"])("\u7531\u4E8E\u5E73\u53F0\u673A\u5236\u539F\u56E0\uFF0C\u5B50\u7EC4\u4EF6\u65E0\u6CD5\u5728\u521D\u59CB\u65F6(created/attached)\u83B7\u53D6\u5230\u901A\u8FC7props\u4F20\u9012\u7684\u8BA1\u7B97\u5C5E\u6027[".concat(key, "]\uFF0C\u8BE5\u95EE\u9898\u4E00\u822C\u4E0D\u5F71\u54CD\u6E32\u67D3\uFF0C\u5982\u9700\u8FDB\u4E00\u6B65\u5904\u7406\u6570\u636E\u5EFA\u8BAE\u901A\u8FC7watch\u83B7\u53D6\u3002"), global.currentResource);
      }
    });
  }

  return {
    rawOptions,
    currentInject
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInjectMixins", function() { return clearInjectMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectMixins", function() { return injectMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInjectedMixins", function() { return mergeInjectedMixins; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(189);
/* harmony import */ var lodash_flatten_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten_js__WEBPACK_IMPORTED_MODULE_2__);



var mixinsQueueMap = {
  app: [[], []],
  page: [[], []],
  component: [[], []]
};
function clearInjectMixins() {
  mixinsQueueMap.app = [[], []];
  mixinsQueueMap.page = [[], []];
  mixinsQueueMap.component = [[], []];
}
function injectMixins(mixins) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string' || Array.isArray(options)) {
    options = {
      types: options
    };
  }

  var types = options.types || ['app', 'page', 'component'];
  var stage = options.stage || -1;

  if (typeof types === 'string') {
    types = [types];
  }

  if (!Array.isArray(mixins)) {
    mixins = [mixins];
  }

  mixins.stage = stage;
  types.forEach(function (type) {
    var mixinsQueue = stage < 0 ? mixinsQueueMap[type][0] : mixinsQueueMap[type][1];

    for (var i = 0; i <= mixinsQueue.length; i++) {
      if (i === mixinsQueue.length) {
        mixinsQueue.push(mixins);
        break;
      }

      var item = mixinsQueue[i];
      if (mixins === item) break;

      if (stage < item.stage) {
        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(mixinsQueue).call(mixinsQueue, i, 0, mixins);

        break;
      }
    }
  });
  return this;
}
function mergeInjectedMixins(options, type) {
  var _context;

  var before = lodash_flatten_js__WEBPACK_IMPORTED_MODULE_2___default()(mixinsQueueMap[type][0]);
  var middle = options.mixins || [];
  var after = lodash_flatten_js__WEBPACK_IMPORTED_MODULE_2___default()(mixinsQueueMap[type][1]);

  var mixins = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(before).call(before, middle)).call(_context, after);

  if (mixins.length) {
    options.mixins = mixins;
  }

  return options;
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(185);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(186);

module.exports = parent;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(187);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.splice) ? method : own;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var toAbsoluteIndex = __webpack_require__(79);
var toIntegerOrInfinity = __webpack_require__(62);
var lengthOfArrayLike = __webpack_require__(60);
var toObject = __webpack_require__(50);
var arraySpeciesCreate = __webpack_require__(64);
var createProperty = __webpack_require__(63);
var arrayMethodHasSpeciesSupport = __webpack_require__(70);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(190);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(191),
    isFlattenable = __webpack_require__(192);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(193),
    isArguments = __webpack_require__(196),
    isArray = __webpack_require__(202);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(194);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(195);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(197),
    isObjectLike = __webpack_require__(201);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(198),
    isObjectLike = __webpack_require__(201);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(193),
    getRawTag = __webpack_require__(199),
    objectToString = __webpack_require__(200);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(193);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return getMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDefault", function() { return mergeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeHooks", function() { return mergeHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeShallowObj", function() { return mergeShallowObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArray", function() { return mergeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeToArray", function() { return mergeToArray; });
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(213);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(222);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(287);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(283);
/* harmony import */ var _platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(337);
/* harmony import */ var _implement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(330);













var currentHooksMap = {};
var curType;
var convertRule;
var mpxCustomKeysMap;
function mergeOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments.length > 1 ? arguments[1] : undefined;
  var needConvert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // 缓存混合模式下的自定义属性列表
  mpxCustomKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["makeMap"])(options.mpxCustomKeysForBlend || []); // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换

  convertRule = Object(_convertor_convertor__WEBPACK_IMPORTED_MODULE_9__["getConvertRule"])(needConvert ? options.mpxConvertMode || 'default' : 'local'); // 微信小程序使用Component创建page

  if (type === 'page' && convertRule.pageMode) {
    curType = convertRule.pageMode;
  } else {
    curType = type;
  }

  currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["makeMap"])(convertRule.lifecycle[curType]);
  var newOptions = {};
  extractMixins(newOptions, options, needConvert);

  if (needConvert) {
    proxyHooks(newOptions); // 自定义补充转换函数

    typeof convertRule.convert === 'function' && convertRule.convert(newOptions, type); // 当存在lifecycle2时，在转换后将currentHooksMap替换，以确保后续合并hooks时转换后的hooks能够被正确处理

    if (convertRule.lifecycle2) {
      var _context, _context2;

      var implementedHooks = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = convertRule.lifecycle[curType]).call(_context, function (hook) {
        return _implement__WEBPACK_IMPORTED_MODULE_12__["implemented"][hook];
      });

      currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["makeMap"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = convertRule.lifecycle2[curType]).call(_context2, implementedHooks));
    }
  }

  newOptions.mpxCustomKeysForBlend = Object.keys(mpxCustomKeysMap);
  return transformHOOKS(newOptions);
}
function getMixin() {
  var mixin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // 用于ts反向推导mixin类型
  return mixin.mixins ? extractMixins({}, mixin, true) : mixin;
}

function extractMixins(mergeOptions, options, needConvert) {
  // 如果编译阶段behaviors都被当做mixins处理，那么进行别名替换
  if (options.behaviors && options.behaviors[0] && options.behaviors[0].__mpx_behaviors_to_mixins__) {
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["aliasReplace"])(options, 'behaviors', 'mixins');
  }

  if (options.mixins) {
    var _iterator = _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1___default()(options.mixins),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mixin = _step.value;

        if (typeof mixin === 'string') {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["error"])('String-formatted builtin behaviors is not supported to be converted to mixins.', options.mpxFileResource);
        } else {
          extractMixins(mergeOptions, mixin, needConvert);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } // 出于业务兼容考虑暂时不移除pageShow/pageHide
  // options = extractPageShow(options)


  options = extractLifetimes(options);
  options = extractPageHooks(options);

  if (needConvert) {
    options = extractObservers(options);
  }

  mergeMixins(mergeOptions, options);
  return mergeOptions;
} // function extractPageShow (options) {
//   if (options.pageShow || options.pageHide) {
//     const mixin = {
//       pageLifetimes: {}
//     }
//     if (options.pageShow) {
//       mixin.pageLifetimes.show = options.pageShow
//       delete options.pageShow
//     }
//     if (options.pageHide) {
//       mixin.pageLifetimes.hide = options.pageHide
//       delete options.pageHide
//     }
//     mergeToArray(options, mixin, 'pageLifetimes')
//   }
//   return options
// }


function extractLifetimes(options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["isObject"])(options.lifetimes)) {
    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options, options.lifetimes);

    delete newOptions.lifetimes;
    return newOptions;
  } else {
    return options;
  }
}

function extractObservers(options) {
  var observers = options.observers;

  var props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options.properties, options.props);

  var watch = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options.watch);

  var extract = false;

  function mergeWatch(key, config) {
    if (watch[key]) {
      if (!Array.isArray(watch[key])) watch[key] = [watch[key]];
    } else {
      watch[key] = [];
    }

    watch[key].push(config);
    extract = true;
  }

  Object.keys(props).forEach(function (key) {
    var prop = props[key];

    if (prop && prop.observer) {
      mergeWatch(key, {
        handler() {
          var _callback, _context3;

          var callback = prop.observer;

          if (typeof callback === 'string') {
            callback = this[callback];
          }

          for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          typeof callback === 'function' && (_callback = callback).call.apply(_callback, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = [this]).call(_context3, rest));
        },

        deep: true,
        // 延迟触发首次回调，处理转换支付宝时在observer中查询组件的行为，如vant/picker中，如不考虑该特殊情形可用immediate代替
        immediateAsync: true
      });
    }
  });

  if (observers) {
    Object.keys(observers).forEach(function (key) {
      var callback = observers[key];

      if (callback) {
        var deep = false;
        var propsArr = Object.keys(props);
        var keyPathArr = [];
        key.split(',').forEach(function (item) {
          var result = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5___default()(item).call(item);

          result && keyPathArr.push(result);
        }); // 针对prop的watch都需要立刻执行一次

        var watchProp = false;

        for (var _i = 0, _propsArr = propsArr; _i < _propsArr.length; _i++) {
          var prop = _propsArr[_i];

          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["findItem"])(keyPathArr, prop)) {
            watchProp = true;
            break;
          }
        }

        if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default()(key).call(key, '.**') > -1) {
          deep = true;
          key = key.replace('.**', '');
        }

        mergeWatch(key, {
          handler(val, old) {
            var cb = callback;

            if (typeof cb === 'string') {
              cb = this[cb];
            }

            if (typeof cb === 'function') {
              var _cb, _context4;

              if (keyPathArr.length < 2) {
                val = [val];
                old = [old];
              }

              (_cb = cb).call.apply(_cb, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = [this]).call(_context4, _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val), _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(old)));
            }
          },

          deep,
          immediateAsync: watchProp
        });
      }
    });
  }

  if (extract) {
    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options);

    newOptions.watch = watch;
    delete newOptions.observers;
    return newOptions;
  }

  return options;
}

function extractPageHooks(options) {
  if (curType === 'blend') {
    var newOptions = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options);

    var methods = newOptions.methods;
    var pageHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["makeMap"])(convertRule.lifecycle.page);
    methods && Object.keys(methods).forEach(function (key) {
      if (pageHooksMap[key]) {
        if (newOptions[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["warn"])("Duplicate lifecycle [".concat(key, "] is defined in root options and methods, please check."), options.mpxFileResource);
        }

        newOptions[key] = methods[key];
        delete methods[key];
      }
    });
    return newOptions;
  } else {
    return options;
  }
}

function mergeMixins(parent, child) {
  for (var key in child) {
    if (currentHooksMap[key]) {
      mergeHooks(parent, child, key);
    } else if (/^(data|dataFn)$/.test(key)) {
      mergeDataFn(parent, child, key);
    } else if (/^(computed|properties|props|methods|proto|options|relations)$/.test(key)) {
      mergeShallowObj(parent, child, key);
    } else if (/^(watch|observers|pageLifetimes|events)$/.test(key)) {
      mergeToArray(parent, child, key);
    } else if (/^behaviors|externalClasses$/.test(key)) {
      mergeArray(parent, child, key);
    } else if (key !== 'mixins' && key !== 'mpxCustomKeysForBlend') {
      // 收集非函数的自定义属性，在Component创建的页面中挂载到this上，模拟Page创建页面的表现，swan当中component构造器也能自动挂载自定义数据，不需要框架模拟挂载
      if (curType === 'blend' && typeof child[key] !== 'function' && !_platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_11__["default"][key] && "wx" !== 'swan') {
        mpxCustomKeysMap[key] = true;
      }

      mergeDefault(parent, child, key);
    }
  }
}

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}
function mergeHooks(parent, child, key) {
  if (parent[key]) {
    parent[key].push(child[key]);
  } else {
    parent[key] = [child[key]];
  }
}
function mergeShallowObj(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(parentVal, childVal);
}

function mergeDataFn(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (typeof parentVal === 'function' && key === 'data') {
    parent.dataFn = parentVal;
    delete parent.data;
  }

  if (typeof childVal !== 'function') {
    mergeShallowObj(parent, child, 'data');
  } else {
    parentVal = parent.dataFn;

    if (!parentVal) {
      parent.dataFn = childVal;
    } else {
      parent.dataFn = function mergeFn() {
        var to = parentVal.call(this);
        var from = childVal.call(this);
        return _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(to, from);
      };
    }
  }
}

function mergeArray(parent, child, key) {
  var _context5;

  var childVal = child[key];

  if (!parent[key]) {
    parent[key] = [];
  }

  parent[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = parent[key]).call(_context5, childVal);
}
function mergeToArray(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  Object.keys(childVal).forEach(function (key) {
    if (key in parentVal) {
      var _parent = parentVal[key];
      var _child = childVal[key];

      if (!Array.isArray(_parent)) {
        _parent = [_parent];
      }

      if (!Array.isArray(_child)) {
        _child = [_child];
      }

      parentVal[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_parent).call(_parent, _child);
    } else {
      parentVal[key] = Array.isArray(childVal[key]) ? childVal[key] : [childVal[key]];
    }
  });
}

function composeHooks(target, includes) {
  Object.keys(target).forEach(function (key) {
    if (!includes || includes[key]) {
      var hooksArr = target[key];
      hooksArr && (target[key] = function () {
        var result;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var i = 0; i < hooksArr.length; i++) {
          if (typeof hooksArr[i] === 'function') {
            var data = hooksArr[i].apply(this, args);
            data !== undefined && (result = data);
          }

          if (result === '__abort__') {
            break;
          }
        }

        return result;
      });
    }
  });
}

function proxyHooks(options) {
  var lifecycleProxyMap = convertRule.lifecycleProxyMap;
  lifecycleProxyMap && Object.keys(lifecycleProxyMap).forEach(function (key) {
    var _context6;

    var newHooks = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_7___default()(_context6 = options[key] || []).call(_context6);

    var proxyArr = lifecycleProxyMap[key];
    proxyArr && proxyArr.forEach(function (lifecycle) {
      if (options[lifecycle] && currentHooksMap[lifecycle]) {
        newHooks.push.apply(newHooks, options[lifecycle]);
        delete options[lifecycle];
      }
    });
    newHooks.length && (options[key] = newHooks);
  });
}

function transformHOOKS(options) {
  composeHooks(options, currentHooksMap);
  options.pageLifetimes && composeHooks(options.pageLifetimes);
  options.events && composeHooks(options.events);

  if (curType === 'blend' && convertRule.support) {
    var componentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["makeMap"])(convertRule.lifecycle.component);

    for (var key in options) {
      // 使用Component创建page实例，页面专属生命周期&自定义方法需写在methods内部
      if (typeof options[key] === 'function' && key !== 'dataFn' && !componentHooksMap[key]) {
        if (!options.methods) options.methods = {};
        options.methods[key] = options[key];
        delete options[key];
      }
    }
  }

  return options;
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(205);

var iterableToArray = __webpack_require__(206);

var unsupportedIterableToArray = __webpack_require__(145);

var nonIterableSpread = __webpack_require__(207);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(140);

var arrayLikeToArray = __webpack_require__(164);

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(9);

var _getIteratorMethod = __webpack_require__(133);

var _Array$from = __webpack_require__(153);

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 207 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(210);

module.exports = parent;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(211);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter) ? method : own;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(212);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(14);
var $filter = __webpack_require__(95).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(70);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(215);

module.exports = parent;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(216);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? method : own;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(217);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var $trim = __webpack_require__(218).trim;
var forcedStringTrimMethod = __webpack_require__(220);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var requireObjectCoercible = __webpack_require__(28);
var toString = __webpack_require__(73);
var whitespaces = __webpack_require__(219);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 219 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__(118).PROPER;
var fails = __webpack_require__(21);
var whitespaces = __webpack_require__(219);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncLock", function() { return asyncLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasReplace", function() { return aliasReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findItem", function() { return findItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMap", function() { return normalizeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExistAttr", function() { return isExistAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setByPath", function() { return setByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByPath", function() { return getByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineGetterSetter", function() { return defineGetterSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerableKeys", function() { return enumerableKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProto", function() { return hasProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayProtoAugment", function() { return arrayProtoAugment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidArrayIndex", function() { return isValidArrayIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeArray", function() { return likeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyClass", function() { return stringifyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hump2dash", function() { return hump2dash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dash2hump", function() { return dash2hump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStyleText", function() { return parseStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStyleText", function() { return genStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjectArray", function() { return mergeObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDynamicStyle", function() { return normalizeDynamicStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aIsSubPathOfB", function() { return aIsSubPathOfB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstKey", function() { return getFirstKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processUndefined", function() { return processUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffAndCloneA", function() { return diffAndCloneA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIdentifierStr", function() { return isValidIdentifierStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberStr", function() { return isNumberStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectDataset", function() { return collectDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preProcessRenderData", function() { return preProcessRenderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChainKeyOfObj", function() { return getChainKeyOfObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delChainKeyOfObj", function() { return delChainKeyOfObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spreadProp", function() { return spreadProp; });
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(223);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(255);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(213);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(260);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(268);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(274);
/* harmony import */ var _getByPath__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(275);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(283);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(284);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7);
















 // type在支付宝环境下不一定准确，判断是普通对象优先使用isPlainObject（新版支付宝不复现，issue #644 修改isPlainObject实现与type等价）

function type(n) {
  var _context;

  return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context = Object.prototype.toString.call(n)).call(_context, 8, -1);
}
/**
 * 判断当前环境是否是浏览器环境
 */

var inBrowser = typeof window !== 'undefined';
function asyncLock() {
  var lock = false;
  return function (fn, onerror) {
    if (!lock) {
      lock = true;

      _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve().then(function () {
        lock = false;
        typeof fn === 'function' && fn();
      }).catch(function (e) {
        lock = false;
        Object(_log__WEBPACK_IMPORTED_MODULE_14__["error"])('Something wrong in mpx asyncLock func execution, please check.', undefined, e);
        typeof onerror === 'function' && onerror();
      });
    }
  };
}
function aliasReplace() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var alias = arguments.length > 1 ? arguments[1] : undefined;
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if (options[alias]) {
    if (Array.isArray(options[alias])) {
      var _context2;

      options[target] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = options[alias]).call(_context2, options[target] || []);
    } else if (isObject(options[alias])) {
      options[target] = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options[alias], options[target]);
    } else {
      options[target] = options[alias];
    }

    delete options[alias];
  }

  return options;
}
function findItem() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;

  var _iterator = _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default()(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (key instanceof RegExp && key.test(item) || item === key) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}
function normalizeMap(prefix, arr) {
  if (typeof prefix !== 'string') {
    arr = prefix;
    prefix = '';
  }

  if (Array.isArray(arr)) {
    var map = {};
    arr.forEach(function (value) {
      var _context3;

      map[value] = prefix ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = "".concat(prefix, ".")).call(_context3, value) : value;
    });
    return map;
  }

  if (prefix && isObject(arr)) {
    arr = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, arr);
    Object.keys(arr).forEach(function (key) {
      if (typeof arr[key] === 'string') {
        var _context4;

        arr[key] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = "".concat(prefix, ".")).call(_context4, arr[key]);
      }
    });
  }

  return arr;
}
function isExistAttr(obj, attr) {
  var type = typeof obj;
  var isNullOrUndefined = obj === null || obj === undefined;

  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}
function setByPath(data, pathStrOrArr, value) {
  Object(_getByPath__WEBPACK_IMPORTED_MODULE_13__["default"])(data, pathStrOrArr, function (current, key, meta) {
    if (meta.isEnd) {
      if (false) {} else {
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_15__["set"])(current, key, value);
      }
    } else if (!current[key]) {
      current[key] = {};
    }

    return current[key];
  });
}
function getByPath(data, pathStrOrArr, defaultVal, errTip) {
  var results = [];
  var normalizedArr = [];

  if (Array.isArray(pathStrOrArr)) {
    normalizedArr = [pathStrOrArr];
  } else if (typeof pathStrOrArr === 'string') {
    var _context5;

    normalizedArr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default()(_context5 = pathStrOrArr.split(',')).call(_context5, function (str) {
      return _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(str).call(str);
    });
  }

  normalizedArr.forEach(function (path) {
    if (!path) return;

    var result = Object(_getByPath__WEBPACK_IMPORTED_MODULE_13__["default"])(data, path, function (value, key) {
      var newValue;

      if (isExistAttr(value, key)) {
        newValue = value[key];
      } else {
        newValue = errTip;
      }

      return newValue;
    }); // 小程序setData时不允许undefined数据


    results.push(result === undefined ? defaultVal : result);
  });
  return results.length > 1 ? results : results[0];
}
function defineGetterSetter(target, key, getValue, setValue, context) {
  var get;
  var set;

  if (typeof getValue === 'function') {
    get = context ? getValue.bind(context) : getValue;
  } else {
    get = function get() {
      return getValue;
    };
  }

  if (typeof setValue === 'function') {
    set = context ? setValue.bind(context) : setValue;
  }

  var descriptor = {
    get,
    configurable: true,
    enumerable: true
  };
  if (set) descriptor.set = set;
  Object.defineProperty(target, key, descriptor);
}
function proxy(target, source, keys, readonly, onConflict) {
  keys = keys || Object.keys(source);
  keys.forEach(function (key) {
    var descriptor = {
      get() {
        return source[key];
      },

      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });

    if (onConflict) {
      if (key in target) {
        if (onConflict(key) === false) return;
      }
    }

    Object.defineProperty(target, key, descriptor);
  });
  return target;
} // 包含原型链上属性keys

function enumerableKeys(obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
} // 此函数用于合并mpx插件挂载到mpx.prototype中的实例属性，因此需要进行原型链属性的合并

function extend(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
    var source = _sources[_i];

    if (isObject(source)) {
      // 合并原型链属性
      for (var key in source) {
        target[key] = source[key];
      }
    }
  }

  return target;
} // deepMerge 用于合并i18n语言集

function merge(target) {
  if (isObject(target)) {
    for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      sources[_key2 - 1] = arguments[_key2];
    }

    var _loop = function _loop() {
      var source = _sources2[_i2];

      if (isObject(source)) {
        Object.keys(source).forEach(function (key) {
          if (isObject(source[key]) && isObject(target[key])) {
            merge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        });
      }
    };

    for (var _i2 = 0, _sources2 = sources; _i2 < _sources2.length; _i2++) {
      _loop();
    }
  }

  return target;
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
function isPlainObject(value) {
  if (value === null || typeof value !== 'object' || type(value) !== 'Object') return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null) return true; // 处理支付宝接口返回数据对象的__proto__与js中创建对象的__proto__不一致的问题，判断value.__proto__.__proto__ === null时也认为是plainObject

  var innerProto = Object.getPrototypeOf(proto);
  if (proto === Object.prototype || innerProto === null) return true; // issue #644

  if (_index__WEBPACK_IMPORTED_MODULE_16__["default"].config.observeClassInstance) {
    if (Array.isArray(_index__WEBPACK_IMPORTED_MODULE_16__["default"].config.observeClassInstance)) {
      for (var i = 0; i < _index__WEBPACK_IMPORTED_MODULE_16__["default"].config.observeClassInstance.length; i++) {
        if (proto === _index__WEBPACK_IMPORTED_MODULE_16__["default"].config.observeClassInstance[i].prototype) return true;
      }
    } else {
      return true;
    }
  }

  return false;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
var hasProto = ('__proto__' in {}); // 微信小程序插件环境2.8.3以下基础库protoAugment会失败，对环境进行测试按需降级为copyAugment

function testArrayProtoAugment() {
  var arr = [];
  /* eslint-disable no-proto, camelcase */

  arr.__proto__ = {
    __array_proto_test__: '__array_proto_test__'
  };
  return arr.__array_proto_test__ === '__array_proto_test__';
}

var arrayProtoAugment = testArrayProtoAugment();
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function remove(arr, item) {
  if (arr.length) {
    var index = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default()(arr).call(arr, item);

    if (index > -1) {
      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_8___default()(arr).call(arr, index, 1);
    }
  }
}
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
function likeArray(arr) {
  return Array.isArray(arr);
}
function isDef(v) {
  return v !== undefined && v !== null;
}
function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  }

  return res;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}
function hump2dash(value) {
  return value.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
}
function dash2hump(value) {
  return value.replace(/-([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
}
function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var _context6, _context7;

      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(_context6 = tmp[0]).call(_context6))] = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(_context7 = tmp[1]).call(_context7));
    }
  });
  return res;
}
function genStyleText(styleObj) {
  var res = '';

  for (var key in styleObj) {
    if (hasOwn(styleObj, key)) {
      var _context8;

      var item = styleObj[key];
      res += _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context8 = "".concat(hump2dash(key), ":")).call(_context8, item, ";");
    }
  }

  return res;
}
function mergeObjectArray(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(res, arr[i]);
    }
  }

  return res;
}
function normalizeDynamicStyle(value) {
  if (Array.isArray(value)) {
    return mergeObjectArray(value);
  }

  if (typeof value === 'string') {
    return parseStyleText(value);
  }

  return value;
}
function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }

  for (var key in obj) {
    return false;
  }

  return true;
}
function aIsSubPathOfB(a, b) {
  if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_9___default()(a).call(a, b) && a !== b) {
    var nextChar = a[b.length];

    if (nextChar === '.') {
      return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(a).call(a, b.length + 1);
    } else if (nextChar === '[') {
      return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(a).call(a, b.length);
    }
  }
}
function getFirstKey(path) {
  return /^[^[.]*/.exec(path)[0];
}

function doMergeData(target, source) {
  Object.keys(source).forEach(function (srcKey) {
    if (hasOwn(target, srcKey)) {
      target[srcKey] = source[srcKey];
    } else {
      var processed = false;
      var tarKeys = Object.keys(target);

      for (var i = 0; i < tarKeys.length; i++) {
        var tarKey = tarKeys[i];

        if (aIsSubPathOfB(tarKey, srcKey)) {
          delete target[tarKey];
          target[srcKey] = source[srcKey];
          processed = true;
          continue;
        }

        var subPath = aIsSubPathOfB(srcKey, tarKey);

        if (subPath) {
          setByPath(target[tarKey], subPath, source[srcKey]);
          processed = true;
          break;
        }
      }

      if (!processed) {
        target[srcKey] = source[srcKey];
      }
    }
  });
  return target;
}

function mergeData(target) {
  if (target) {
    for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      sources[_key3 - 1] = arguments[_key3];
    }

    sources.forEach(function (source) {
      if (source) doMergeData(target, source);
    });
  }

  return target;
}
function processUndefined(obj) {
  var result = {};

  for (var key in obj) {
    if (hasOwn(obj, key)) {
      if (obj[key] !== undefined) {
        result[key] = obj[key];
      } else {
        result[key] = '';
      }
    }
  }

  return result;
}
function noop() {}
function diffAndCloneA(a, b) {
  var diffData = null;
  var curPath = '';
  var diff = false;

  function deepDiffAndCloneA(a, b, currentDiff) {
    var setDiff = function setDiff(val) {
      if (val) {
        currentDiff = val;

        if (curPath) {
          diffData = diffData || {};
          diffData[curPath] = clone;
        }
      }
    };

    var clone = a;

    if (typeof a !== 'object' || a === null) {
      if (!currentDiff) setDiff(a !== b);
    } else {
      var _toString = Object.prototype.toString;

      var className = _toString.call(a);

      var sameClass = className === _toString.call(b);

      var length;
      var lastPath;

      if (isPlainObject(a)) {
        var keys = Object.keys(a);
        length = keys.length;
        clone = {};
        if (!currentDiff) setDiff(!sameClass || length < Object.keys(b).length || !Object.keys(b).every(function (key) {
          return hasOwn(a, key);
        }));
        lastPath = curPath;

        for (var i = 0; i < length; i++) {
          var key = keys[i];
          curPath += ".".concat(key);
          clone[key] = deepDiffAndCloneA(a[key], sameClass ? b[key] : undefined, currentDiff);
          curPath = lastPath;
        } // 继承原始对象的freeze/seal/preventExtensions操作


        if (Object.isFrozen(a)) {
          Object.freeze(clone);
        } else if (Object.isSealed(a)) {
          Object.seal(clone);
        } else if (!Object.isExtensible(a)) {
          Object.preventExtensions(clone);
        }
      } else if (Array.isArray(a)) {
        length = a.length;
        clone = [];
        if (!currentDiff) setDiff(!sameClass || length < b.length);
        lastPath = curPath;

        for (var _i3 = 0; _i3 < length; _i3++) {
          curPath += "[".concat(_i3, "]");
          clone[_i3] = deepDiffAndCloneA(a[_i3], sameClass ? b[_i3] : undefined, currentDiff);
          curPath = lastPath;
        } // 继承原始数组的freeze/seal/preventExtensions操作


        if (Object.isFrozen(a)) {
          Object.freeze(clone);
        } else if (Object.isSealed(a)) {
          Object.seal(clone);
        } else if (!Object.isExtensible(a)) {
          Object.preventExtensions(clone);
        }
      } else if (a instanceof RegExp) {
        if (!currentDiff) setDiff(!sameClass || '' + a !== '' + b);
      } else if (a instanceof Date) {
        if (!currentDiff) setDiff(!sameClass || +a !== +b);
      } else {
        if (!currentDiff) setDiff(!sameClass || a !== b);
      }
    }

    if (currentDiff) {
      diff = currentDiff;
    }

    return clone;
  }

  return {
    clone: deepDiffAndCloneA(a, b, diff),
    diff,
    diffData
  };
}
function isValidIdentifierStr(str) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(str);
}
function isNumberStr(str) {
  return /^\d+$/.test(str);
}
var datasetReg = /^data-(.+)$/;
function collectDataset(props) {
  var dataset = {};

  for (var key in props) {
    if (hasOwn(props, key)) {
      var matched = datasetReg.exec(key);

      if (matched) {
        dataset[matched[1]] = props[key];
      }
    }
  }

  return dataset;
}
/**
 * process renderData, remove sub node if visit parent node already
 * @param {Object} renderData
 * @return {Object} processedRenderData
 */

function preProcessRenderData(renderData) {
  // method for get key path array
  var processKeyPathMap = function processKeyPathMap(keyPathMap) {
    var keyPath = Object.keys(keyPathMap);
    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10___default()(keyPath).call(keyPath, function (keyA) {
      return keyPath.every(function (keyB) {
        if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_9___default()(keyA).call(keyA, keyB) && keyA !== keyB) {
          var nextChar = keyA[keyB.length];

          if (nextChar === '.' || nextChar === '[') {
            return false;
          }
        }

        return true;
      });
    });
  };

  var processedRenderData = {};
  var renderDataFinalKey = processKeyPathMap(renderData);
  Object.keys(renderData).forEach(function (item) {
    if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default()(renderDataFinalKey).call(renderDataFinalKey, item) > -1) {
      processedRenderData[item] = renderData[item];
    }
  });
  return processedRenderData;
}
function makeMap(arr) {
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11___default()(arr).call(arr, function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}
/**
 * Get object values by chaining-key
 * @param {Object} obj target Object
 * @param {String} key chaining-key, e.g.: 'a.b.c'
 */

function getChainKeyOfObj() {
  var _context9;

  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11___default()(_context9 = key.split('.')).call(_context9, function (o, k) {
    return o && o[k];
  }, obj);
}
/**
 * Delete object values by chaining-key
 * @param {Object} obj target object
 * @param {String} key chaining-key
 */

function delChainKeyOfObj() {
  var _context10;

  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_11___default()(_context10 = key.split('.')).call(_context10, function (o, k, index, arr) {
    if (arr.length === index + 1) {
      try {
        return delete o[k];
      } catch (e) {
        // undefined
        return false;
      }
    }

    return o && o[k];
  }, obj);
}
function spreadProp(obj, key) {
  if (hasOwn(obj, key)) {
    var temp = obj[key];
    delete obj[key];

    _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(obj, temp);
  }

  return obj;
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(225);
__webpack_require__(113);

module.exports = parent;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(226);
__webpack_require__(114);
__webpack_require__(71);
__webpack_require__(234);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(137);
var path = __webpack_require__(34);

module.exports = path.Promise;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var isPrototypeOf = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(121);
var setPrototypeOf = __webpack_require__(123);
var copyConstructorProperties = __webpack_require__(227);
var create = __webpack_require__(74);
var createNonEnumerableProperty = __webpack_require__(56);
var createPropertyDescriptor = __webpack_require__(24);
var clearErrorStack = __webpack_require__(229);
var installErrorCause = __webpack_require__(230);
var iterate = __webpack_require__(231);
var normalizeStringArgument = __webpack_require__(232);
var wellKnownSymbol = __webpack_require__(44);
var ERROR_STACK_INSTALLABLE = __webpack_require__(233);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Error = global.Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error(undefined), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  createNonEnumerableProperty(that, 'message', normalizeStringArgument(message, ''));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, Error);
else copyConstructorProperties($AggregateError, Error);

var AggregateErrorPrototype = $AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(49);
var ownKeys = __webpack_require__(228);
var getOwnPropertyDescriptorModule = __webpack_require__(19);
var definePropertyModule = __webpack_require__(57);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);
var uncurryThis = __webpack_require__(17);
var getOwnPropertyNamesModule = __webpack_require__(84);
var getOwnPropertySymbolsModule = __webpack_require__(87);
var anObject = __webpack_require__(58);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(17);
var arraySlice = __webpack_require__(86);

var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var join = uncurryThis([].join);

var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var IS_FIREFOX_OR_SAFARI_STACK = /@[^\n]*\n/.test(TEST) && !/zxcasd/.test(TEST);

module.exports = function (stack, dropEntries) {
  if (typeof stack != 'string') return stack;
  if (IS_V8_OR_CHAKRA_STACK) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } else if (IS_FIREFOX_OR_SAFARI_STACK) {
    return join(arraySlice(split(stack, '\n'), dropEntries), '\n');
  } return stack;
};


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
var createNonEnumerableProperty = __webpack_require__(56);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var bind = __webpack_require__(55);
var call = __webpack_require__(22);
var anObject = __webpack_require__(58);
var tryToString = __webpack_require__(42);
var isArrayIteratorMethod = __webpack_require__(161);
var lengthOfArrayLike = __webpack_require__(60);
var isPrototypeOf = __webpack_require__(35);
var getIterator = __webpack_require__(162);
var getIteratorMethod = __webpack_require__(139);
var iteratorClose = __webpack_require__(160);

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(73);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);
var createPropertyDescriptor = __webpack_require__(24);

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var IS_PURE = __webpack_require__(46);
var global = __webpack_require__(15);
var getBuiltIn = __webpack_require__(33);
var call = __webpack_require__(22);
var NativePromise = __webpack_require__(235);
var redefine = __webpack_require__(88);
var redefineAll = __webpack_require__(236);
var setPrototypeOf = __webpack_require__(123);
var setToStringTag = __webpack_require__(91);
var setSpecies = __webpack_require__(237);
var aCallable = __webpack_require__(41);
var isCallable = __webpack_require__(18);
var isObject = __webpack_require__(31);
var anInstance = __webpack_require__(238);
var inspectSource = __webpack_require__(69);
var iterate = __webpack_require__(231);
var checkCorrectnessOfIteration = __webpack_require__(163);
var speciesConstructor = __webpack_require__(239);
var task = __webpack_require__(241).set;
var microtask = __webpack_require__(244);
var promiseResolve = __webpack_require__(247);
var hostReportErrors = __webpack_require__(249);
var newPromiseCapabilityModule = __webpack_require__(248);
var perform = __webpack_require__(250);
var InternalStateModule = __webpack_require__(93);
var isForced = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(44);
var IS_BROWSER = __webpack_require__(251);
var IS_NODE = __webpack_require__(243);
var V8_VERSION = __webpack_require__(38);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            call(then, result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reactions = state.reactions;
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      reactions[reactions.length] = reaction;
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);

module.exports = global.Promise;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(88);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(33);
var definePropertyModule = __webpack_require__(57);
var wellKnownSymbol = __webpack_require__(44);
var DESCRIPTORS = __webpack_require__(20);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isPrototypeOf = __webpack_require__(35);

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(58);
var aConstructor = __webpack_require__(240);
var wellKnownSymbol = __webpack_require__(44);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isConstructor = __webpack_require__(66);
var tryToString = __webpack_require__(42);

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var apply = __webpack_require__(16);
var bind = __webpack_require__(55);
var isCallable = __webpack_require__(18);
var hasOwn = __webpack_require__(49);
var fails = __webpack_require__(21);
var html = __webpack_require__(82);
var arraySlice = __webpack_require__(86);
var createElement = __webpack_require__(53);
var IS_IOS = __webpack_require__(242);
var IS_NODE = __webpack_require__(243);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(isCallable(fn) ? fn : Function(fn), undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(27);
var global = __webpack_require__(15);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var bind = __webpack_require__(55);
var getOwnPropertyDescriptor = __webpack_require__(19).f;
var macrotask = __webpack_require__(241).set;
var IS_IOS = __webpack_require__(242);
var IS_IOS_PEBBLE = __webpack_require__(245);
var IS_WEBOS_WEBKIT = __webpack_require__(246);
var IS_NODE = __webpack_require__(243);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);
var global = __webpack_require__(15);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(58);
var isObject = __webpack_require__(31);
var newPromiseCapability = __webpack_require__(248);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(41);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var call = __webpack_require__(22);
var aCallable = __webpack_require__(41);
var newPromiseCapabilityModule = __webpack_require__(248);
var perform = __webpack_require__(250);
var iterate = __webpack_require__(231);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var aCallable = __webpack_require__(41);
var getBuiltIn = __webpack_require__(33);
var call = __webpack_require__(22);
var newPromiseCapabilityModule = __webpack_require__(248);
var perform = __webpack_require__(250);
var iterate = __webpack_require__(231);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var IS_PURE = __webpack_require__(46);
var NativePromise = __webpack_require__(235);
var fails = __webpack_require__(21);
var getBuiltIn = __webpack_require__(33);
var isCallable = __webpack_require__(18);
var speciesConstructor = __webpack_require__(239);
var promiseResolve = __webpack_require__(247);
var redefine = __webpack_require__(88);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromise)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(256);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(257);

module.exports = parent;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(258);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(259);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var $map = __webpack_require__(95).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(70);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(261);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(262);

module.exports = parent;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(263);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.startsWith) ? method : own;
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(264);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('String').startsWith;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var uncurryThis = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(19).f;
var toLength = __webpack_require__(61);
var toString = __webpack_require__(73);
var notARegExp = __webpack_require__(265);
var requireObjectCoercible = __webpack_require__(28);
var correctIsRegExpLogic = __webpack_require__(267);
var IS_PURE = __webpack_require__(46);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var isRegExp = __webpack_require__(266);

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
var classof = __webpack_require__(27);
var wellKnownSymbol = __webpack_require__(44);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(44);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(269);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(270);

module.exports = parent;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(271);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce) ? method : own;
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(272);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var $reduce = __webpack_require__(273).left;
var arrayMethodIsStrict = __webpack_require__(179);
var CHROME_VERSION = __webpack_require__(38);
var IS_NODE = __webpack_require__(243);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var aCallable = __webpack_require__(41);
var toObject = __webpack_require__(50);
var IndexedObject = __webpack_require__(26);
var lengthOfArrayLike = __webpack_require__(60);

var TypeError = global.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getByPath; });
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(213);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);





var curStack;
var targetStacks;
var property;

var Stack = /*#__PURE__*/function () {
  function Stack(mark) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Stack);

    this.mark = mark; // 字符串stack需要特殊处理

    this.type = /['"]/.test(mark) ? 'string' : 'normal';
    this.value = [];
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Stack, [{
    key: "push",
    value: function push(data) {
      this.value.push(data);
    }
  }]);

  return Stack;
}();

function startStack(mark) {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  curStack && targetStacks.push(curStack);
  curStack = new Stack(mark);
}

function endStack() {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver(); // 字符串栈直接拼接

  var result = curStack.type === 'string' ? '__mpx_str_' + curStack.value.join('') : curStack.value;
  curStack = targetStacks.pop(); // 将当前stack结果保存到父级stack里

  curStack.push(result);
}

function propertyJoinOver() {
  property = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3___default()(property).call(property);
  if (property) curStack.push(property);
  property = '';
}

function init() {
  property = ''; // 根stack

  curStack = new Stack();
  targetStacks = [];
}

function parse(str) {
  init();

  var _iterator = _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0___default()(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var char = _step.value;

      // 当前遍历引号内的字符串时
      if (curStack.type === 'string') {
        // 若为对应的结束flag，则出栈，反之直接push
        curStack.mark === char ? endStack() : curStack.push(char);
      } else if (/['"[]/.test(char)) {
        startStack(char);
      } else if (char === ']') {
        endStack();
      } else if (char === '.' || char === '+') {
        propertyJoinOver();
        if (char === '+') curStack.push(char);
      } else {
        property += char;
      }
    } // 字符解析收尾

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  propertyJoinOver();
  return curStack.value;
}

function outPutByPath(context, path, isSimple, transfer) {
  var result = context;
  var len = path.length;
  var meta = {
    isEnd: false,
    stop: false
  };

  for (var index = 0; index < len; index++) {
    if (index === len - 1) meta.isEnd = true;
    var key = void 0;
    var item = path[index];

    if (result) {
      if (isSimple) {
        key = item;
      } else if (Array.isArray(item)) {
        // 获取子数组的输出结果作为当前key
        key = outPutByPath(context, item, isSimple, transfer);
      } else if (/^__mpx_str_/.test(item)) {
        // 字符串一定会被[]包裹，一定在子数组中
        result = item.replace('__mpx_str_', '');
      } else if (/^\d+$/.test(item)) {
        // 数字一定会被[]包裹，一定在子数组中
        result = +item;
      } else if (item === '+') {
        // 获取加号后面所有path最终的结果
        result += outPutByPath(context, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(path).call(path, index + 1), isSimple, transfer);
        break;
      } else {
        key = item;
      }

      if (key !== undefined) {
        result = transfer ? transfer(result, key, meta) : result[key];
        if (meta.stop) break;
      }
    } else {
      break;
    }
  }

  return result;
}

function getByPath(context, pathStrOrArr, transfer) {
  if (!pathStrOrArr) {
    return context;
  }

  var isSimple = false;

  if (Array.isArray(pathStrOrArr)) {
    isSimple = true;
  } else if (!/[[\]]/.test(pathStrOrArr)) {
    pathStrOrArr = pathStrOrArr.split('.');
    isSimple = true;
  }

  if (!isSimple) pathStrOrArr = parse(pathStrOrArr);
  return outPutByPath(context, pathStrOrArr, isSimple, transfer);
}

/***/ }),
/* 276 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(278);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(279);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(280);

module.exports = parent;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(281);

module.exports = parent;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(282);
var path = __webpack_require__(34);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(20);
var objectDefinePropertyModile = __webpack_require__(57);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



function warn(msg, location, e) {
  var condition = _index__WEBPACK_IMPORTED_MODULE_2__["default"].config.ignoreWarning;
  var ignore = false;

  if (typeof condition === 'boolean') {
    ignore = condition;
  } else if (typeof condition === 'string') {
    ignore = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(msg).call(msg, condition) !== -1;
  } else if (typeof condition === 'function') {
    ignore = condition(msg, location, e);
  } else if (condition instanceof RegExp) {
    ignore = condition.test(msg);
  }

  if (!ignore) return log('warn', msg, location, e);
}
function error(msg, location, e) {
  return log('error', msg, location, e);
}

function log(type, msg, location, e) {
  if (true) {
    var header = "[Mpx runtime ".concat(type, "]: ");

    if (location) {
      var _context;

      header = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = "[Mpx runtime ".concat(type, " at ")).call(_context, location, "]: ");
    }

    console[type](header + msg);
    if (e) console[type](e);
  }
}

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerState", function() { return observerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return defineReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(285);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(286);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283);







var arrayKeys = Object.getOwnPropertyNames(_array__WEBPACK_IMPORTED_MODULE_4__["arrayMethods"]);
/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */

var observerState = {
  shouldConvert: true
};
/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */

var Observer = /*#__PURE__*/function () {
  function Observer(value) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observer);

    this.value = value;
    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.vmCount = 0;
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["def"])(value, '__ob__', this);

    if (Array.isArray(value)) {
      var augment = _helper_utils__WEBPACK_IMPORTED_MODULE_5__["hasProto"] && _helper_utils__WEBPACK_IMPORTED_MODULE_5__["arrayProtoAugment"] ? protoAugment : copyAugment;
      augment(value, _array__WEBPACK_IMPORTED_MODULE_4__["arrayMethods"], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Observer, [{
    key: "walk",
    value: function walk(obj) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    }
    /**
     * Observe a list of Array items.
     */

  }, {
    key: "observeArray",
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}(); // helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */

function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["def"])(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isObject"])(value)) {
    return;
  }

  var ob;

  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && (Array.isArray(value) || Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(value)) && Object.isExtensible(value)) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */

function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new _dep__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;
  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (_dep__WEBPACK_IMPORTED_MODULE_3__["default"].target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      customSetter && customSetter();

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */

function set(target, key, val) {
  if (Array.isArray(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isValidArrayIndex"])(key)) {
    target.length = Math.max(target.length, key);

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(target).call(target, key, 1, val);

    return val;
  }

  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(target, key)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["warn"])('Avoid adding reactive properties to the root data at runtime, declare it upfront in the data option!');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */

function del(target, key) {
  if (Array.isArray(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isValidArrayIndex"])(key)) {
    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(target).call(target, key, 1);

    return;
  }

  var ob = target.__ob__;

  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["warn"])('Avoid deleting properties on the root data, just set it to null!');
    return;
  }

  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */

function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTarget", function() { return pushTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popTarget", function() { return popTarget; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222);




var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = /*#__PURE__*/function () {
  function Dep() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "removeSub",
    value: function removeSub(sub) {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["remove"])(this.subs, sub);
    }
  }, {
    key: "depend",
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      var _context;

      // stabilize the subscriber list first
      var subs = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(_context = this.subs).call(_context);

      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}(); // the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.



Dep.target = null;
var targetStack = [];
function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(222);


/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)
/**
 * Intercept mutating methods and emit events
 */
;
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["def"])(arrayMethods, method, function mutator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(args).call(args, 2);
        break;
    }

    if (inserted) ob.observeArray(inserted); // notify change

    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertRule", function() { return getConvertRule; });
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(323);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(326);
/* harmony import */ var _platform_patch_swan_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(327);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283);
/* harmony import */ var _wxToAli__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(329);
/* harmony import */ var _wxToWeb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(331);
/* harmony import */ var _wxToSwan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(332);
/* harmony import */ var _wxToQq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(333);
/* harmony import */ var _wxToTt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(334);
/* harmony import */ var _wxToDd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(335);
/* harmony import */ var _wxToJd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(336);













 // 根据当前环境获取的默认生命周期信息

var lifecycleInfo;
var pageMode;

if (false) {} else if (false) {} else if (false) {} else {
  lifecycleInfo = _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_1__;
  pageMode = 'blend';
}
/**
 * 转换规则包含四点
 * lifecycle [object] 生命周期
 * lifecycleProxyMap [object] 代理规则
 * pageMode [string] 页面生命周期合并模式，是否为blend
 * support [boolean]当前平台是否支持blend
 * convert [function] 自定义转换函数, 接收一个options
 */


var defaultConvertRule = {
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(lifecycleInfo.LIFECYCLE),
  lifecycleProxyMap: lifecycleInfo.lifecycleProxyMap,
  pageMode,
  support: !!pageMode,
  convert: null
};
var rulesMap = {
  local: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule),
  default: defaultConvertRule,
  wxToWeb: _wxToWeb__WEBPACK_IMPORTED_MODULE_8__["default"],
  wxToAli: _wxToAli__WEBPACK_IMPORTED_MODULE_7__["default"],
  wxToSwan: _wxToSwan__WEBPACK_IMPORTED_MODULE_9__["default"],
  wxToQq: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule), _wxToQq__WEBPACK_IMPORTED_MODULE_10__["default"]),
  wxToTt: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule), _wxToTt__WEBPACK_IMPORTED_MODULE_11__["default"]),
  wxToDd: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule), _wxToDd__WEBPACK_IMPORTED_MODULE_12__["default"]),
  wxToJd: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule), _wxToJd__WEBPACK_IMPORTED_MODULE_13__["default"])
};
function getConvertRule(convertMode) {
  var rule = rulesMap[convertMode];

  if (!rule || !rule.lifecycle) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["error"])("Absence of convert rule for ".concat(convertMode, ", please check."));
  } else {
    return rule;
  }
}

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__(289);

var _Object$getOwnPropertySymbols = __webpack_require__(294);

var _filterInstanceProperty = __webpack_require__(298);

var _Object$getOwnPropertyDescriptor = __webpack_require__(300);

var _forEachInstanceProperty = __webpack_require__(305);

var _Object$getOwnPropertyDescriptors = __webpack_require__(312);

var _Object$defineProperties = __webpack_require__(317);

var _Object$defineProperty = __webpack_require__(278);

var defineProperty = __webpack_require__(322);

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      var _context;

      _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (_Object$getOwnPropertyDescriptors) {
      _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source));
    } else {
      var _context2;

      _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) {
        _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(291);

module.exports = parent;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(292);

module.exports = parent;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(293);
var path = __webpack_require__(34);

module.exports = path.Object.keys;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var toObject = __webpack_require__(50);
var nativeKeys = __webpack_require__(76);
var fails = __webpack_require__(21);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(296);

module.exports = parent;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(297);

module.exports = parent;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var path = __webpack_require__(34);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(299);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(209);

module.exports = parent;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(301);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(302);

module.exports = parent;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(303);

module.exports = parent;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);
var path = __webpack_require__(34);

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var fails = __webpack_require__(21);
var toIndexedObject = __webpack_require__(25);
var nativeGetOwnPropertyDescriptor = __webpack_require__(19).f;
var DESCRIPTORS = __webpack_require__(20);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(306);

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(307);

module.exports = parent;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
var classof = __webpack_require__(67);
var hasOwn = __webpack_require__(49);
var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(308);

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(309);

module.exports = parent;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(310);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var forEach = __webpack_require__(311);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(95).forEach;
var arrayMethodIsStrict = __webpack_require__(179);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(313);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(314);

module.exports = parent;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(315);

module.exports = parent;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(316);
var path = __webpack_require__(34);

module.exports = path.Object.getOwnPropertyDescriptors;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(20);
var ownKeys = __webpack_require__(228);
var toIndexedObject = __webpack_require__(25);
var getOwnPropertyDescriptorModule = __webpack_require__(19);
var createProperty = __webpack_require__(63);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(319);

module.exports = parent;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(320);

module.exports = parent;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(321);
var path = __webpack_require__(34);

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(20);
var defineProperties = __webpack_require__(75);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(278);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);

var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange'];
var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];
var COMPONENT_HOOKS = ['beforeCreate', 'created', 'attached', 'ready', 'moved', 'detached', 'updated', 'pageShow', 'pageHide', 'definitionFilter'];
var lifecycleProxyMap = {
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]: ['beforeCreate'],
  // 类微信平台中onLoad不能代理到CREATED上，否则Component构造页面时无法获取页面参数
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]: ['created', 'attached'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["UPDATED"]]: ['updated'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFOREMOUNT"]]: ['beforeMount'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["MOUNTED"]]: ['ready', 'onReady'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["DESTROYED"]]: ['detached', 'onUnload']
};
var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORECREATE", function() { return BEFORECREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREMOUNT", function() { return BEFOREMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUNTED", function() { return MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED", function() { return UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROYED", function() { return DESTROYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_LIFECYCLES", function() { return INNER_LIFECYCLES; });
var BEFORECREATE = '__beforeCreate__';
var CREATED = '__created__';
var BEFOREMOUNT = '__beforeMount__';
var MOUNTED = '__mounted__';
var UPDATED = '__updated__';
var DESTROYED = '__destroyed__';
var INNER_LIFECYCLES = [BEFORECREATE, CREATED, BEFOREMOUNT, MOUNTED, UPDATED, DESTROYED];

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);

var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onShareAppMessage', 'onUnhandledRejection'];
var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTitleClick', 'onOptionMenuClick', 'onUpdated', 'onBeforeCreate'];
var COMPONENT_HOOKS = ['onInit', 'deriveDataFromProps', 'didMount', 'didUpdate', 'didUnmount', 'updated', 'beforeCreate', 'pageShow', 'pageHide'];
var lifecycleProxyMap = {
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]: ['beforeCreate'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]: ['onInit'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["UPDATED"]]: ['didUpdate', 'updated'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFOREMOUNT"]]: ['beforeMount'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["MOUNTED"]]: ['didMount', 'onReady'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["DESTROYED"]]: ['didUnmount', 'onUnload']
};
var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
var _context, _context2;


var COMPONENT_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'beforeDestroy', 'destroyed', 'errorCaptured', 'onPageNotFound'];

var PAGE_HOOKS = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = []).call(_context, COMPONENT_HOOKS, ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onPageScroll', 'onTabItemTap', 'onResize']);

var APP_HOOKS = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = []).call(_context2, COMPONENT_HOOKS, ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange']);

var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);

var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange'];
var PAGE_HOOKS = ['onInit', 'onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];
var COMPONENT_HOOKS = ['beforeCreate', 'created', 'attached', 'ready', 'moved', 'detached', 'updated', 'pageShow', 'pageHide', 'definitionFilter'];
var lifecycleProxyMap = {
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]: ['beforeCreate'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]: ['onInit', 'created', 'attached'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["UPDATED"]]: ['updated'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFOREMOUNT"]]: ['beforeMount'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["MOUNTED"]]: ['ready', 'onReady'],
  [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["DESTROYED"]]: ['detached', 'onUnload']
};
var LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
};

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeLifecycle", function() { return mergeLifecycle; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);


function mergeLifecycle(lifecycle) {
  if (lifecycle) {
    var _context, _context2, _context3;

    var appHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = lifecycle.APP_HOOKS || []).call(_context, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    var pageHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = lifecycle.PAGE_HOOKS || []).call(_context2, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    var componentHooks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = lifecycle.COMPONENT_HOOKS || []).call(_context3, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"]);

    return {
      'app': appHooks,
      'page': pageHooks,
      'component': componentHooks,
      'blend': _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(pageHooks).call(pageHooks, lifecycle.COMPONENT_HOOKS || [])
    };
  }
}

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(323);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(330);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(222);








var unsupported = ['moved', 'definitionFilter'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_5__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to ali."), global.currentResource);
}

function notSupportTip(options) {
  unsupported.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_6__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_6__["implemented"][key].remove) {
        delete options[key];
      }
    }
  }); // relations部分支持

  var relations = options['relations'];

  if (relations) {
    Object.keys(relations).forEach(function (path) {
      var item = relations[path];

      if (item.target) {
        convertErrorDesc('relations > target');
      }

      if (item.linkChanged) {
        convertErrorDesc('relations > linkChanged');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__["mergeLifecycle"])(_platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"]),
  pageMode: 'blend',
  support: false,
  lifecycleProxyMap: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_1__["lifecycleProxyMap"],

  convert(options) {
    var props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.properties, options.props);

    if (props) {
      Object.keys(props).forEach(function (key) {
        var prop = props[key];

        if (prop) {
          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(prop, 'value')) {
            props[key] = prop.value;
          } else {
            var type = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(prop, 'type') ? prop.type : prop;
            if (typeof type === 'function') props[key] = type();
          }
        }
      });
      options.props = props;
      delete options.properties;
    }

    if (options.onResize) {
      Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__["mergeToArray"])(options, {
        events: {
          onResize: options.onResize
        }
      }, 'events');
      delete options.onResize;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implemented", function() { return implemented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return implement; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(222);


var implemented = {};
function implement(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$modes = _ref.modes,
      modes = _ref$modes === void 0 ? [] : _ref$modes,
      _ref$processor = _ref.processor,
      processor = _ref$processor === void 0 ? Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"])() : _ref$processor,
      _ref$remove = _ref.remove,
      remove = _ref$remove === void 0 ? false : _ref$remove;

  if (!name) return;

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(modes).call(modes, "wx") > -1) {
    processor();
    implemented[name] = {
      remove
    };
  }
}

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(326);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(222);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(330);








 // 暂不支持的wx选项，后期需要各种花式支持

var unsupported = ['moved', 'definitionFilter', 'onShareAppMessage', 'pageShow', 'pageHide'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to web."), global.currentResource);
}

function notSupportTip(options) {
  unsupported.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(_platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"]),
  pageMode: 'blend',
  support: true,
  lifecycleProxyMap: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycleProxyMap"],

  convert(options) {
    var props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options.properties, options.props);

    if (props) {
      Object.keys(props).forEach(function (key) {
        var prop = props[key];

        if (prop) {
          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(prop, 'type')) {
            var newProp = {};

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(prop, 'optionalTypes')) {
              var _context;

              newProp.type = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = [prop.type]).call(_context, _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prop.optionalTypes));
            } else {
              newProp.type = prop.type;
            }

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["hasOwn"])(prop, 'value')) {
              // vue中对于引用类型数据需要使用函数返回
              newProp.default = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["isObject"])(prop.value) ? function propFn() {
                return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["diffAndCloneA"])(prop.value).clone;
              } : prop.value;
            }

            props[key] = newProp;
          } else {
            props[key] = prop;
          }
        }
      });
      options.props = props;
      delete options.properties;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(330);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(323);
/* harmony import */ var _platform_patch_swan_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(327);






var BEHAVIORS_MAP = {
  'wx://form-field': 'swan://form-field',
  'wx://component-export': 'swan://component-export'
};
var unsupported = ['moved', 'relations'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_1__["error"])("Options.".concat(key, " is not supported in runtime conversion from wx to swan."), global.currentResource);
}

function notSupportTip(options) {
  unsupported.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_2__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_2__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__["mergeLifecycle"])(_platform_patch_swan_lifecycle__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE"]),
  pageMode: 'blend',
  support: true,
  lifecycleProxyMap: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_4__["lifecycleProxyMap"],

  convert(options, type) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = options.behaviors).call(_context, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }

    if (type === 'page' && !options.__pageCtor__) {
      options.options = options.options || {};
      options.options.addGlobalClass = true;
    }

    notSupportTip(options);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);

var BEHAVIORS_MAP = {
  'wx://form-field': 'qq://form-field',
  'wx://component-export': 'qq://component-export'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = options.behaviors).call(_context, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
  }

});

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);


/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string') {
          var _context;

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_1__["error"])("Built-in behavior \"".concat(behavior, "\" is not supported in tt environment!"), global.currentResource);

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = options.behaviors).call(_context, idx, 1);
        }
      });
    }
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);

var BEHAVIORS_MAP = {
  'wx://form-field': 'dd://form-field',
  'wx://component-export': 'dd://component-export'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = options.behaviors).call(_context, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
  }

});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);

var BEHAVIORS_MAP = {
  'wx://form-field': 'jd://form-field',
  'wx://component-export': 'jd://component-export'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = options.behaviors).call(_context, idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
  }

});

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222);



var bulitInKeys;

if (false) {} else {
  bulitInKeys = ['dataFn', 'proto', 'mixins', 'watch', 'computed', 'mpxCustomKeysForBlend', 'mpxConvertMode', 'mpxFileResource', '__nativeRender__', '__type__', '__pageCtor__'];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["makeMap"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(bulitInKeys).call(bulitInKeys, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["INNER_LIFECYCLES"])));

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertMode", function() { return getConvertMode; });
var convertModes = {
  'wx-ali': 'wxToAli',
  'wx-web': 'wxToWeb',
  'wx-swan': 'wxToSwan',
  'wx-qq': 'wxToQq',
  'wx-tt': 'wxToTt',
  'wx-jd': 'wxToJd',
  'wx-dd': 'wxToDd'
};
function getConvertMode(srcMode) {
  return convertModes[srcMode + '-' + "wx"];
}

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);

/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('page'));

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderCallBack", function() { return getRenderCallBack; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _builtInMixins_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(341);
/* harmony import */ var _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(366);
/* harmony import */ var _ali_getDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(391);
/* harmony import */ var _swan_getDefaultOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(392);
/* harmony import */ var _web_getDefaultOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(393);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(283);








function createFactory(type) {
  return function (options) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        isNative = _ref.isNative,
        customCtor = _ref.customCtor,
        customCtorType = _ref.customCtorType;

    options.__nativeRender__ = !!isNative;
    options.__type__ = type;
    var ctor;

    if (true) {
      if (customCtor) {
        ctor = customCtor;
        customCtorType = customCtorType || type;

        if (type === 'page' && customCtorType === 'page') {
          options.__pageCtor__ = true;
        }
      } else {
        if (global.currentCtor) {
          ctor = global.currentCtor;

          if (global.currentCtorType === 'page') {
            options.__pageCtor__ = true;
          }

          if (global.currentResourceType && global.currentResourceType !== type) {
            var _context, _context2;

            Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["error"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "The ".concat(global.currentResourceType, " [")).call(_context2, global.currentResource, "] is not supported to be created by ")).call(_context, type, " constructor."));
          }
        } else {
          if (type === 'page') {
            ctor = Page;
            options.__pageCtor__ = true;
          } else {
            ctor = Component;
          }
        }
      }
    }

    var getDefaultOptions;

    if (false) {} else if (false) {} else if (false) {} else {
      getDefaultOptions = _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__["getDefaultOptions"];
    }

    var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_1__["default"])(options, type),
        rawOptions = _transferOptions.rawOptions,
        currentInject = _transferOptions.currentInject; // 注入内建的mixins, 内建mixin是按原始平台编写的，所以合并规则和rootMixins保持一致
    // 将合并后的用户定义的rawOptions传入获取当前应该注入的内建mixins


    rawOptions.mixins = Object(_builtInMixins_index__WEBPACK_IMPORTED_MODULE_2__["default"])(rawOptions, type);
    var defaultOptions = getDefaultOptions(type, {
      rawOptions,
      currentInject
    });

    if (false) {} else if (ctor) {
      return ctor(defaultOptions);
    }
  };
}
function getRenderCallBack(context) {
  return function () {
    if (true) {
      context.updated();
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBuiltInMixins; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pageStatusMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(342);
/* harmony import */ var _proxyEventMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _renderHelperMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(344);
/* harmony import */ var _refsMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(345);
/* harmony import */ var _showMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(353);
/* harmony import */ var _relationsMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(354);
/* harmony import */ var _i18nMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(355);
/* harmony import */ var _pageTitleMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(356);
/* harmony import */ var _pageScrollMixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(357);
/* harmony import */ var _componentGenericsMixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(358);
/* harmony import */ var _getTabBarMixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(359);
/* harmony import */ var _pageRouteMixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(365);














function getBuiltInMixins(options, type) {
  var bulitInMixins = [];

  if (false) {} else {
    // 此为差异抹平类mixins，原生模式下也需要注入也抹平平台差异
    bulitInMixins = [Object(_proxyEventMixin__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_pageStatusMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(type), Object(_refsMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_relationsMixin__WEBPACK_IMPORTED_MODULE_7__["default"])(type)]; // 此为纯增强类mixins，原生模式下不需要注入

    if (!options.__nativeRender__) {
      bulitInMixins = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(bulitInMixins).call(bulitInMixins, [Object(_renderHelperMixin__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_showMixin__WEBPACK_IMPORTED_MODULE_6__["default"])(type), Object(_i18nMixin__WEBPACK_IMPORTED_MODULE_8__["default"])()]);
    }
  }

  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(bulitInMixins).call(bulitInMixins, function (item) {
    return item;
  });
}

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);

function pageStatusMixin(mixinType) {
  // 只有tt和ali没有pageLifeTimes支持，需要框架实现，其余平台一律使用原生pageLifeTimes
  // 由于业务上大量使用了pageShow进行初始化。。。下个版本再移除非必要的pageShow/Hide实现。。。
  if (mixinType === 'page') {
    var pageMixin = {
      data: {
        mpxPageStatus: 'show'
      },

      onShow() {
        this.mpxPageStatus = 'show';
      },

      onHide() {
        this.mpxPageStatus = 'hide';
      }

    };

    if (false) {}

    if (false) {}

    return pageMixin;
  } else {
    return {
      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]() {
        var _this = this;

        var options = this.$rawOptions;
        var hasPageShow = options.pageShow || options.pageHide;
        var needPageLifetimes = options.pageLifetimes && ( false || "wx" === 'tt');

        if (hasPageShow || needPageLifetimes) {
          var currentPage;

          if (false) {} else {
            var pages = getCurrentPages();
            currentPage = pages[pages.length - 1];
          }

          if (currentPage) {
            this.$watch(function () {
              return currentPage.mpxPageStatus;
            }, function (val) {
              if (val) {
                if (val === 'show' && typeof options.pageShow === 'function') options.pageShow.call(_this);
                if (val === 'hide' && typeof options.pageHide === 'function') options.pageHide.call(_this);

                if (needPageLifetimes) {
                  var pageLifetimes = options.pageLifetimes;
                  if (val === 'show' && typeof pageLifetimes.show === 'function') pageLifetimes.show.call(_this);
                  if (val === 'hide' && typeof pageLifetimes.hide === 'function') pageLifetimes.hide.call(_this);
                  if (val === 'resize' && typeof pageLifetimes.resize === 'function') pageLifetimes.resize.call(_this, currentPage.__resizeEvent);
                }
              }
            }, {
              sync: true,
              immediate: true
            });
          }
        }
      }

    };
  }
}

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxyEventMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(213);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);








function proxyEventMixin() {
  var methods = {
    __invoke($event) {
      var _this = this;

      if (typeof _index__WEBPACK_IMPORTED_MODULE_7__["default"].config.proxyEventHandler === 'function') {
        try {
          _index__WEBPACK_IMPORTED_MODULE_7__["default"].config.proxyEventHandler($event);
        } catch (e) {}
      }

      var type = $event.type;
      var emitMode = $event.detail && $event.detail.mpxEmit;

      if (!type) {
        throw new Error('Event object must have [type] property!');
      }

      var fallbackType = '';

      if (type === 'begin' || type === 'end') {
        // 地图的 regionchange 事件会派发 e.type 为 begin 和 end 的事件
        fallbackType = 'regionchange';
      }

      var target = $event.currentTarget || $event.target;

      if (!target) {
        throw new Error("[".concat(type, "] event object must have [currentTarget/target] property!"));
      }

      var eventConfigs = target.dataset.eventconfigs || {};
      var curEventConfig = eventConfigs[type] || eventConfigs[fallbackType] || [];
      var returnedValue;
      curEventConfig.forEach(function (item) {
        var callbackName = item[0];

        if (emitMode) {
          $event = $event.detail.data;
        }

        if (callbackName) {
          var _context;

          var params = item.length > 1 ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(item).call(item, 1)).call(_context, function (item) {
            // 暂不支持$event.xxx的写法
            // if (/^\$event/.test(item)) {
            //   this.__mpxTempEvent = $event
            //   const value = getByPath(this, item.replace('$event', '__mpxTempEvent'))
            //   // 删除临时变量
            //   delete this.__mpxTempEvent
            //   return value
            if (item === '__mpx_event__') {
              return $event;
            } else {
              return item;
            }
          }) : [$event];

          if (typeof _this[callbackName] === 'function') {
            returnedValue = _this[callbackName].apply(_this, params);
          } else {
            var location = _this.__mpxProxy && _this.__mpxProxy.options.mpxFileResource;
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["error"])("Instance property [".concat(callbackName, "] is not function, please check."), location);
          }
        }
      });
      return returnedValue;
    },

    __model(expr, $event) {
      var valuePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['value'];
      var filterMethod = arguments.length > 3 ? arguments[3] : undefined;
      var innerFilter = {
        trim: function trim(val) {
          return typeof val === 'string' && _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_2___default()(val).call(val);
        }
      };

      var originValue = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_3___default()(valuePath).call(valuePath, function (acc, cur) {
        return acc[cur];
      }, $event.detail);

      var value = filterMethod ? innerFilter[filterMethod] ? innerFilter[filterMethod](originValue) : typeof this[filterMethod] === 'function' ? this[filterMethod](originValue) : originValue : originValue;
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["setByPath"])(this, expr, value);
    }

  };

  if (false) {}

  return {
    methods
  };
}

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderHelperMixin; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);

function renderHelperMixin() {
  return {
    methods: {
      _i(val, handler) {
        var i, l, keys, key;

        if (Array.isArray(val) || typeof val === 'string') {
          for (i = 0, l = val.length; i < l; i++) {
            handler.call(this, val[i], i);
          }
        } else if (typeof val === 'number') {
          for (i = 0; i < val; i++) {
            handler.call(this, i + 1, i);
          }
        } else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(val)) {
          keys = Object.keys(val);

          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            handler.call(this, val[key], key, i);
          }
        }
      },

      _c(key, value) {
        this.__mpxProxy.renderData[key] = value;
        return value;
      },

      _r() {
        this.__mpxProxy.renderWithData();
      }

    }
  };
}

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRefsMixin; });
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(346);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_last_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(255);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(213);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(223);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(324);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(283);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(352);












var envObj = Object(_helper_env__WEBPACK_IMPORTED_MODULE_11__["getEnvObj"])();

var setNodeRef = function setNodeRef(target, ref, context) {
  Object.defineProperty(target.$refs, ref.key, {
    enumerable: true,
    configurable: true,

    get() {
      return context.__getRefNode(ref); // for nodes, every time being accessed, returns as a new selector context.
    }

  });
};

var setComponentRef = function setComponentRef(target, ref, context, isAsync) {
  var cacheRef = null;
  var targetRefs = isAsync ? target.$asyncRefs : target.$refs;
  Object.defineProperty(targetRefs, ref.key, {
    enumerable: true,
    configurable: true,

    get() {
      if (!cacheRef) {
        return cacheRef = context.__getRefNode(ref, isAsync);
      }

      return cacheRef;
    }

  });
};

function getRefsMixin() {
  var aliMethods;

  if (false) { var proxyMethods; }

  return {
    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__["BEFORECREATE"]]() {
      this.$refs = {};

      if (false) {}
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__["CREATED"]]() {
      this.__updateRef && this.__updateRef();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__["BEFOREMOUNT"]]() {
      this.__getRefs();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__["UPDATED"]]() {
      this.__getRefs();
    },

    [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_8__["DESTROYED"]]() {
      // 销毁ref
      this.__updateRef && this.__updateRef(true);
    },

    methods: _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, aliMethods), {}, {
      __getRefs() {
        var _this = this;

        if (this.__getRefsData) {
          var refs = this.__getRefsData();

          refs.forEach(function (ref) {
            var setRef = ref.type === 'node' ? setNodeRef : setComponentRef;
            setRef(_this, ref, _this);

            if (false) {}
          });
        }
      },

      __getRefNode(ref, isAsync) {
        var _this2 = this;

        if (!ref) return;
        var selector = ref.selector.replace(/{{mpxCid}}/g, this.mpxCid);

        if (ref.type === 'node') {
          var query = this.createSelectorQuery ? this.createSelectorQuery() : envObj.createSelectorQuery();
          return query && (ref.all ? query.selectAll(selector) : query.select(selector));
        } else if (ref.type === 'component') {
          if (isAsync) {
            return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve) {
              ref.all ? _this2.selectAllComponents(selector, resolve) : _this2.selectComponent(selector, resolve);
            });
          } else {
            return ref.all ? this.selectAllComponents(selector) : this.selectComponent(selector);
          }
        }
      }

    })
  };
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(348);

module.exports = parent;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(349);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.lastIndexOf;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.lastIndexOf) ? method : own;
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(350);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').lastIndexOf;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var lastIndexOf = __webpack_require__(351);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(16);
var toIndexedObject = __webpack_require__(25);
var toIntegerOrInfinity = __webpack_require__(62);
var lengthOfArrayLike = __webpack_require__(60);
var arrayMethodIsStrict = __webpack_require__(179);

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return getEnvObj; });
function getEnvObj() {
  switch ("wx") {
    case 'wx':
      return wx;

    case 'ali':
      return my;

    case 'swan':
      return swan;

    case 'qq':
      return qq;

    case 'tt':
      return tt;

    case 'jd':
      return jd;

    case 'qa':
      return qa;

    case 'dd':
      return dd;
  }
}

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
function pageStatusMixin(mixinType) {
  if (mixinType === 'component') {
    if (false) {} else {
      return {
        properties: {
          mpxShow: {
            type: Boolean,
            value: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relationsMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);







var targets = [];
var curTarget = null;

function pushTarget(cur) {
  targets.push(curTarget);
  curTarget = cur;
}

function popTarget() {
  curTarget = targets.pop();
}

function parsePath(path, absolute) {
  var _context;

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(path).call(path, '/') === 0) {
    return path;
  }

  var dirs = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context = absolute.split('/')).call(_context, 0, -1);

  var relatives = path.split('/');
  relatives = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(relatives).call(relatives, function (path) {
    if (path === '..') {
      dirs.pop();
      return false;
    } else {
      return path !== '.';
    }
  });
  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(dirs).call(dirs, relatives).join('/');
}

function transferPath(relations, base) {
  var newRelations = {};
  Object.keys(relations).forEach(function (key) {
    newRelations[parsePath(key, base)] = relations[key];
  });
  return newRelations;
}

var relationTypeMap = {
  parent: 'child',
  ancestor: 'descendant'
};
function relationsMixin(mixinType) {
  if (false) {} else if (false) {}
}

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i18nMixin; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(284);


function i18nMixin() {
  if (global.i18n) {
    return {
      // 替换为dataFn注入，再每次组件创建时重新执行获取，处理reLaunch后无法拿到更新后语言的问题
      data() {
        return {
          mpxLocale: global.i18n.locale || 'zh-CN'
        };
      },

      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["BEFORECREATE"]]() {
        var _this = this;

        this.$i18n = {
          locale: global.i18n.locale
        };
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["observe"])(this.$i18n);
        this.$watch(function () {
          return global.i18n.locale;
        }, function (locale) {
          _this.mpxLocale = _this.$i18n.locale = locale;
        }, {
          sync: true
        });
        this.$watch(function () {
          return _this.$i18n.locale;
        }, function (locale) {
          _this.mpxLocale = locale;
        }, {
          sync: true
        }); // 挂载翻译方法

        if (global.i18nMethods) {
          Object.keys(global.i18nMethods).forEach(function (methodName) {
            if (/^__/.test(methodName)) return;

            _this['$' + methodName] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              // tap i18n.version
              args.unshift((global.i18n.version, _this.mpxLocale));
              return global.i18nMethods[methodName].apply(_this, args);
            };
          });
        }
      }

    };
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageTitleMixin; });
// web专用mixin，在web中实现页面title功能
function pageTitleMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      activated() {
        if (this.$options.__mpxPageConfig.navigationBarTitleText) {
          document.title = this.$options.__mpxPageConfig.navigationBarTitleText;
        }
      }

    };
  }
}

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageScrollMixin; });
function pageScrollMixin() {
  return {};
}

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentGenericsMixin; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
// web专用mixin，在web中实现抽象节点功能

function componentGenericsMixin(mixinType) {
  if (global.__mpxGenericsMap && mixinType === 'component') {
    return {
      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["CREATED"]]() {
        var _this = this;

        if (this.generichash && global.__mpxGenericsMap[this.generichash]) {
          Object.keys(global.__mpxGenericsMap[this.generichash]).forEach(function (name) {
            var value = global.__mpxGenericsMap[_this.generichash][name];
            _this.$options.components[name] = value;
          });
        }
      }

    };
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTabBarMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);

// web专用mixin，在web中实现getTabBar功能

function getTabBarMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      [_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"]]() {
        var _context,
            _this = this;

        if (this.$parent && this.$parent.$vnode && this.$parent.$vnode.tag && _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.$parent.$vnode.tag).call(_context, 'mpx-tab-bar-container')) {
          this.getTabBar = function () {
            return _this.$parent.$refs.tabBar;
          };
        }
      }

    };
  }
}

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(361);

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(362);

module.exports = parent;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(363);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.endsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.endsWith) ? method : own;
};


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(364);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('String').endsWith;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var uncurryThis = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(19).f;
var toLength = __webpack_require__(61);
var toString = __webpack_require__(73);
var notARegExp = __webpack_require__(265);
var requireObjectCoercible = __webpack_require__(28);
var correctIsRegExpLogic = __webpack_require__(267);
var IS_PURE = __webpack_require__(46);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var un$EndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return un$EndsWith
      ? un$EndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageRouteMixin; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);

// web专用mixin，在web页面上挂载route属性
function pageRouteMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      beforeCreate() {
        if (this.$options.__mpxPageRoute) {
          var _context;

          this.route = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.$options.__mpxPageRoute).call(_context, 1);
        }
      }

    };
  }
}

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOptions", function() { return filterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProxy", function() { return initProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(367);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _observer_scheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(379);








function transformProperties(properties) {
  if (!properties) {
    return {};
  }

  var newProps = {};
  Object.keys(properties).forEach(function (key) {
    var rawFiled = properties[key];
    var newFiled = null;

    if (rawFiled === null) {
      rawFiled = {
        type: null
      };
    }

    if (typeof rawFiled === 'function') {
      newFiled = {
        type: rawFiled
      };
    } else {
      newFiled = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, rawFiled);
    }

    newFiled.observer = function (value, oldValue) {
      var _this = this;

      if (this.__mpxProxy) {
        this[key] = value;
        Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_6__["queueWatcher"])(function () {
          // 只有当当前没有渲染任务时，属性更新才需要单独触发updated，否则可以由渲染任务结束后触发updated
          if (_this.__mpxProxy.curRenderTask && _this.__mpxProxy.curRenderTask.state === 'finished') {
            _this.__mpxProxy.updated();
          }
        });
      }
    };

    newProps[key] = newFiled;
  });
  return newProps;
}

function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);
  Object.defineProperties(context, {
    setData: {
      get() {
        return function (data, callback) {
          return this.__mpxProxy.forceUpdate(data, {
            sync: true
          }, callback);
        };
      },

      configurable: true
    },
    __getInitialData: {
      get() {
        return function (options) {
          var data = {};

          var validData = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.data, options.properties, options.props);

          for (var key in context.data) {
            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(context.data, key) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(validData, key)) {
              data[key] = context.data[key];
            }
          }

          return data;
        };
      },

      configurable: false
    },
    __render: {
      get() {
        return rawSetData;
      },

      configurable: false
    }
  }); // 绑定注入的render

  if (currentInject) {
    if (currentInject.render) {
      Object.defineProperties(context, {
        __injectedRender: {
          get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }

    if (currentInject.getRefsData) {
      Object.defineProperties(context, {
        __getRefsData: {
          get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options) {
  var newOptions = {};
  Object.keys(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_4__["default"][key]) {
      return;
    }

    if (key === 'properties' || key === 'props') {
      newOptions.properties = transformProperties(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.properties, options.props));
    } else if (key === 'methods' && options.__pageCtor__) {
      // 构造器为Page时抽取所有methods方法到顶层
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}
function initProxy(context, rawOptions, currentInject, params) {
  // 提供代理对象需要的api
  transformApiForProxy(context, currentInject); // 缓存options

  context.$rawOptions = rawOptions; // 创建proxy对象

  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_3__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;

  context.__mpxProxy.created(params);
}
function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;
  var hookNames = ['attached', 'ready', 'detached']; // 当用户传入page作为构造器构造页面时，修改所有关键hooks

  if (rawOptions.__pageCtor__) {
    hookNames = ['onLoad', 'onReady', 'onUnload'];
  }

  var rootMixins = [{
    [hookNames[0]]() {
      if (!this.__mpxProxy) {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        initProxy(this, rawOptions, currentInject, params);
      }
    },

    [hookNames[1]]() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },

    [hookNames[2]]() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }];
  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MPXProxy; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(223);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(284);
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(368);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(389);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(390);
/* harmony import */ var _observer_scheduler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(379);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(222);
/* harmony import */ var _helper_getByPath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(275);
/* harmony import */ var _platform_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(340);
/* harmony import */ var _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(324);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(283);















var uid = 0;

var MPXProxy = /*#__PURE__*/function () {
  function MPXProxy(options, target) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MPXProxy);

    this.target = target;
    this.uid = uid++;
    this.name = options.name || '';
    this.options = options; // initial -> created -> mounted -> destroyed

    this.state = 'initial';
    this.lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["asyncLock"])();
    this.ignoreProxyMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["makeMap"])(_index__WEBPACK_IMPORTED_MODULE_9__["default"].config.ignoreProxyWhiteList);

    if (true) {
      this._watchers = [];
      this._watcher = null;
      this.localKeysMap = {}; // 非props key

      this.renderData = {}; // 渲染函数中收集的数据

      this.miniRenderData = {};
      this.forceUpdateData = {}; // 强制更新的数据

      this.forceUpdateAll = false; // 下次是否需要强制更新全部渲染数据

      this.curRenderTask = null;
    }
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MPXProxy, [{
    key: "created",
    value: function created(params) {
      this.initApi();
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["BEFORECREATE"]);

      if (true) {
        this.initState(this.options);
      }

      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["CREATED"];
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["CREATED"], params);

      if (true) {
        // 强制走小程序原生渲染逻辑
        this.options.__nativeRender__ ? this.doRender() : this.initRender();
      }
    }
  }, {
    key: "renderTaskExecutor",
    value: function renderTaskExecutor(isEmptyRender) {
      var _this = this;

      if (!this.isMounted() && this.curRenderTask || this.isMounted() && isEmptyRender) {
        return;
      }

      this.curRenderTask = {
        state: 'pending'
      };
      var promise = new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
        _this.curRenderTask.resolve = function (res) {
          _this.curRenderTask.state = 'finished';
          resolve(res);
        };
      });
      this.curRenderTask.promise = promise; // isMounted之前基于mounted触发，isMounted之后基于setData回调触发

      return this.isMounted() && this.curRenderTask.resolve;
    }
  }, {
    key: "isMounted",
    value: function isMounted() {
      return this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["MOUNTED"];
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["CREATED"]) {
        this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["MOUNTED"]; // 用于处理refs等前置工作

        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["BEFOREMOUNT"]);
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["MOUNTED"]);
        this.curRenderTask && this.curRenderTask.resolve();
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      if (this.isMounted()) {
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["UPDATED"]);
      }
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["DESTROYED"];

      if (true) {
        this.clearWatchers();
      }

      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_13__["DESTROYED"]);
    }
  }, {
    key: "initApi",
    value: function initApi() {
      var _this2 = this;

      // 挂载扩展属性到实例上
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["proxy"])(this.target, this.options.proto, Object.keys(this.options.proto), true, function (key) {
        if (_this2.ignoreProxyMap[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The key [".concat(key, "] of mpx.prototype is a reserved keyword of miniprogram, please check and rename it!"), _this2.options.mpxFileResource);
          return false;
        }

        Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The key [".concat(key, "] of mpx.prototype exist in the component/page instance already, please check your plugins!"), _this2.options.mpxFileResource);
      }); // 挂载混合模式下createPage中的自定义属性，模拟原生Page构造器的表现

      if (this.options.__type__ === 'page' && !this.options.__pageCtor__) {
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["proxy"])(this.target, this.options, this.options.mpxCustomKeysForBlend, undefined, function (key) {
          if (_this2.ignoreProxyMap[key]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The key [".concat(key, "] of page options is a reserved keyword of miniprogram, please check and rename it!"), _this2.options.mpxFileResource);
            return false;
          }

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The key [".concat(key, "] of page options exist in the page instance already, please check your page options!"), _this2.options.mpxFileResource);
        });
      }

      if (true) {
        // 挂载$watch
        this.target.$watch = function () {
          return _this2.watch.apply(_this2, arguments);
        }; // 强制执行render


        this.target.$forceUpdate = function () {
          return _this2.forceUpdate.apply(_this2, arguments);
        };

        this.target.$nextTick = function (fn) {
          return _this2.nextTick(fn);
        };
      }
    }
  }, {
    key: "initState",
    value: function initState() {
      var _this3 = this;

      var options = this.options;
      var proxyedKeys = this.initData(options.data, options.dataFn);
      var proxyedKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["makeMap"])(proxyedKeys);
      this.initComputed(options.computed); // target的数据访问代理到将proxy的data

      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["proxy"])(this.target, this.data, undefined, undefined, function (key) {
        if (_this3.ignoreProxyMap[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The data/props/computed key [".concat(key, "] is a reserved keyword of miniprogram, please check and rename it!"), _this3.options.mpxFileResource);
          return false;
        }

        if (!proxyedKeysMap[key]) Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The data/props/computed key [".concat(key, "] exist in the component/page instance already, please check and rename it!"), _this3.options.mpxFileResource);
      });
      this.initWatch(options.watch);
    }
  }, {
    key: "initComputed",
    value: function initComputed(computedOpt) {
      if (computedOpt) {
        this.collectLocalKeys(computedOpt);

        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_7__["initComputed"])(this, this.data, computedOpt);
      }
    } // 构建响应式data

  }, {
    key: "initData",
    value: function initData(data, dataFn) {
      var _this4 = this;

      var proxyedKeys = []; // 获取包含data/props在内的初始数据，包含初始原生微信转换支付宝时合并props进入data的逻辑

      var initialData = this.target.__getInitialData(this.options) || {}; // 之所以没有直接使用initialData，而是通过对原始dataOpt进行深clone获取初始数据对象，主要是为了避免小程序自身序列化时错误地转换数据对象，比如将promise转为普通object

      this.data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data || {}).clone;

      if (dataFn) {
        proxyedKeys = Object.keys(initialData); // 预先将initialData代理到this.target中，便于data函数访问

        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["proxy"])(this.target, initialData, proxyedKeys, undefined, function (key) {
          if (_this4.ignoreProxyMap[key]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The props/data key [".concat(key, "] is a reserved keyword of miniprogram, please check and rename it!"), _this4.options.mpxFileResource);
            return false;
          }

          Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("The props/data key [".concat(key, "] exist in the component instance already, please check and rename it!"), _this4.options.mpxFileResource);
        });

        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(this.data, dataFn.call(this.target));
      }

      this.collectLocalKeys(this.data);
      Object.keys(initialData).forEach(function (key) {
        if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(_this4.data, key)) {
          // 除了data函数返回的数据外深拷贝切断引用关系，避免后续watch由于小程序内部对data赋值重复触发watch
          _this4.data[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(initialData[key]).clone;
        }
      }); // mpxCid 解决支付宝环境selector为全局问题

      this.data.mpxCid = this.uid;
      this.localKeysMap.mpxCid = true;
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["observe"])(this.data, true);
      return proxyedKeys;
    }
  }, {
    key: "initWatch",
    value: function initWatch(watch) {
      if (watch) {
        for (var key in watch) {
          var handler = watch[key];

          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              this.watch(key, handler[i]);
            }
          } else {
            this.watch(key, handler);
          }
        }
      }
    }
  }, {
    key: "collectLocalKeys",
    value: function collectLocalKeys(data) {
      for (var key in data) {
        if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(data, key)) {
          this.localKeysMap[key] = true;
        }
      }
    }
  }, {
    key: "nextTick",
    value: function nextTick(fn) {
      var _this5 = this;

      if (typeof fn === 'function') {
        Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_8__["queueWatcher"])(function () {
          _this5.curRenderTask ? _this5.curRenderTask.promise.then(fn) : fn();
        });
      }
    }
  }, {
    key: "callUserHook",
    value: function callUserHook(hookName, params) {
      var hook = this.options[hookName] || this.target[hookName];

      if (typeof hook === 'function') {
        try {
          hook.apply(this.target, params);
        } catch (e) {
          if (typeof _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.hookErrorHandler === 'function') {
            _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.hookErrorHandler(e, this.target, hookName);
          } else {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])("User hook [".concat(hookName, "] exec error!"), this.options.mpxFileResource, e);
          }
        }
      }
    }
  }, {
    key: "watch",
    value: function watch(expOrFn, cb, options) {
      return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_6__["watch"])(this, expOrFn, cb, options);
    }
  }, {
    key: "clearWatchers",
    value: function clearWatchers() {
      var i = this._watchers.length;

      while (i--) {
        this._watchers[i].teardown();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderData = this.data;
      this.doRender(this.processRenderDataWithStrictDiff(renderData));
    }
  }, {
    key: "renderWithData",
    value: function renderWithData() {
      var renderData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["preProcessRenderData"])(this.renderData);
      this.doRender(this.processRenderDataWithStrictDiff(renderData)); // 重置renderData准备下次收集

      this.renderData = {};
    }
  }, {
    key: "processRenderDataWithDiffData",
    value: function processRenderDataWithDiffData(result, key, diffData) {
      Object.keys(diffData).forEach(function (subKey) {
        result[key + subKey] = diffData[subKey];
      });
    }
  }, {
    key: "processRenderDataWithStrictDiff",
    value: function processRenderDataWithStrictDiff(renderData) {
      var _this6 = this;

      var result = {};

      var _loop = function _loop(key) {
        if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(renderData, key)) {
          var _ret2 = function () {
            var data = renderData[key];
            var firstKey = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["getFirstKey"])(key);

            if (!_this6.localKeysMap[firstKey]) {
              return {
                v: "continue"
              };
            } // 外部clone，用于只需要clone的场景


            var clone;

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(_this6.miniRenderData, key)) {
              var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data, _this6.miniRenderData[key]),
                  localClone = _diffAndCloneA.clone,
                  diff = _diffAndCloneA.diff,
                  diffData = _diffAndCloneA.diffData;

              clone = localClone;

              if (diff) {
                _this6.miniRenderData[key] = clone;

                if (diffData && _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.useStrictDiff) {
                  _this6.processRenderDataWithDiffData(result, key, diffData);
                } else {
                  result[key] = clone;
                }
              }
            } else {
              var processed = false;
              var miniRenderDataKeys = Object.keys(_this6.miniRenderData);

              for (var i = 0; i < miniRenderDataKeys.length; i++) {
                var tarKey = miniRenderDataKeys[i];

                if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["aIsSubPathOfB"])(tarKey, key)) {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data).clone;
                  delete _this6.miniRenderData[tarKey];
                  _this6.miniRenderData[key] = result[key] = clone;
                  processed = true;
                  continue;
                }

                var subPath = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["aIsSubPathOfB"])(key, tarKey);

                if (subPath) {
                  // setByPath 更新miniRenderData中的子数据
                  Object(_helper_getByPath__WEBPACK_IMPORTED_MODULE_11__["default"])(_this6.miniRenderData[tarKey], subPath, function (current, subKey, meta) {
                    if (meta.isEnd) {
                      var _diffAndCloneA2 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data, current[subKey]),
                          _clone = _diffAndCloneA2.clone,
                          _diff = _diffAndCloneA2.diff,
                          _diffData = _diffAndCloneA2.diffData;

                      if (_diff) {
                        current[subKey] = _clone;

                        if (_diffData && _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.useStrictDiff) {
                          _this6.processRenderDataWithDiffData(result, key, _diffData);
                        } else {
                          result[key] = _clone;
                        }
                      }
                    } else if (!current[subKey]) {
                      current[subKey] = {};
                    }

                    return current[subKey];
                  });

                  processed = true;
                  break;
                }
              }

              if (!processed) {
                // 如果当前数据和上次的miniRenderData完全无关，但存在于组件的视图数据中，则与组件视图数据进行diff
                if (_this6.target.data && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(_this6.target.data, firstKey)) {
                  var localInitialData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["getByPath"])(_this6.target.data, key);

                  var _diffAndCloneA3 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data, localInitialData),
                      _clone2 = _diffAndCloneA3.clone,
                      _diff2 = _diffAndCloneA3.diff,
                      _diffData2 = _diffAndCloneA3.diffData;

                  _this6.miniRenderData[key] = _clone2;

                  if (_diff2) {
                    if (_diffData2 && _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.useStrictDiff) {
                      _this6.processRenderDataWithDiffData(result, key, _diffData2);
                    } else {
                      result[key] = _clone2;
                    }
                  }
                } else {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data).clone;
                  _this6.miniRenderData[key] = result[key] = clone;
                }
              }
            }

            if (_this6.forceUpdateAll) {
              if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(data).clone;
              _this6.forceUpdateData[key] = clone;
            }
          }();

          if (typeof _ret2 === "object") return _ret2.v;
        }
      };

      for (var key in renderData) {
        var _ret = _loop(key);

        if (_ret === "continue") continue;
      }

      return result;
    }
  }, {
    key: "doRender",
    value: function doRender(data, cb) {
      var _this7 = this;

      if (typeof this.target.__render !== 'function') {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["error"])('Please specify a [__render] function to render view.', this.options.mpxFileResource);
        return;
      }

      if (typeof cb !== 'function') {
        cb = undefined;
      }

      var isEmpty = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["isEmptyObject"])(data) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["isEmptyObject"])(this.forceUpdateData);
      var resolve = this.renderTaskExecutor(isEmpty);

      if (isEmpty) {
        cb && cb();
        return;
      } // 使用forceUpdateData后清空


      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["isEmptyObject"])(this.forceUpdateData)) {
        data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["mergeData"])({}, data, this.forceUpdateData);
        this.forceUpdateData = {};
        this.forceUpdateAll = false;
      }
      /**
       * mounted之后才接收回调来触发updated钩子，换言之mounted之前修改数据是不会触发updated的
       */


      var callback = cb;

      if (this.isMounted()) {
        callback = function callback() {
          Object(_platform_patch__WEBPACK_IMPORTED_MODULE_12__["getRenderCallBack"])(_this7)();
          cb && cb();
          resolve && resolve();
        };
      }

      data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["processUndefined"])(data);

      if (typeof _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.setDataHandler === 'function') {
        try {
          _index__WEBPACK_IMPORTED_MODULE_9__["default"].config.setDataHandler(data, this.target);
        } catch (e) {}
      }

      this.target.__render(data, callback);
    }
  }, {
    key: "initRender",
    value: function initRender() {
      var _this8 = this;

      var renderWatcher;

      if (this.target.__injectedRender) {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_5__["default"](this, function () {
          try {
            return _this8.target.__injectedRender();
          } catch (e) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["warn"])("Failed to execute render function, degrade to full-set-data mode.", _this8.options.mpxFileResource, e);

            _this8.render();
          }
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_10__["noop"]);
      } else {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_5__["default"](this, function () {
          _this8.render();
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_10__["noop"]);
      }

      this._watcher = renderWatcher;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(data, options, callback) {
      var _this9 = this;

      if (typeof data === 'function') {
        callback = data;
        data = undefined;
      }

      options = options || {};

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["isPlainObject"])(data)) {
        this.forceUpdateData = data;
        Object.keys(this.forceUpdateData).forEach(function (key) {
          if (!_this9.options.__nativeRender__ && !_this9.localKeysMap[Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["getFirstKey"])(key)]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_14__["warn"])("ForceUpdate data includes a props/computed key [".concat(key, "], which may yield a unexpected result."), _this9.options.mpxFileResource);
          }

          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["setByPath"])(_this9.data, key, _this9.forceUpdateData[key]);
        });
      } else {
        this.forceUpdateAll = true;
      }

      if (callback) {
        callback = callback.bind(this.target);
        this.nextTick(callback);
      }

      if (this._watcher) {
        this._watcher.update(options.sync);
      } else {
        if (this.forceUpdateAll) {
          Object.keys(this.data).forEach(function (key) {
            if (_this9.localKeysMap[key]) {
              _this9.forceUpdateData[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_10__["diffAndCloneA"])(_this9.data[key]).clone;
            }
          });
        }

        options.sync ? this.doRender() : Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_8__["queueWatcher"])(function () {
          _this9.doRender();
        });
      }
    }
  }]);

  return MPXProxy;
}();



/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(369);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(379);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(285);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);






var uid = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = /*#__PURE__*/function () {
  function Watcher(vm, expOrFn, cb, options) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Watcher);

    this.vm = vm;
    vm._watchers = vm._watchers || [];

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid; // uid for batching

    this.active = true;
    this.immediateAsync = false;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a();
    this.newDepIds = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a();
    this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = function () {
        return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["getByPath"])(this, expOrFn);
      };
    }

    this.value = this.lazy ? undefined : this.get();
  }
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Watcher, [{
    key: "get",
    value: function get() {
      Object(_dep__WEBPACK_IMPORTED_MODULE_4__["pushTarget"])(this);
      var value;
      var vm = this.vm;

      try {
        value = this.getter.call(vm.target);
      } catch (e) {
        throw e;
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }

        Object(_dep__WEBPACK_IMPORTED_MODULE_4__["popTarget"])();
        this.cleanupDeps();
      }

      return value;
    }
    /**
     * Add a dependency to this directive.
     */

  }, {
    key: "addDep",
    value: function addDep(dep) {
      var id = dep.id;

      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);

        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    }
    /**
     * Clean up for dependency collection.
     */

  }, {
    key: "cleanupDeps",
    value: function cleanupDeps() {
      var i = this.deps.length;

      while (i--) {
        var dep = this.deps[i];

        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }

      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    }
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    // 支持临时将某个异步watcher修改为sync执行，在模拟setData时使用

  }, {
    key: "update",
    value: function update(sync) {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync || sync) {
        if (sync) Object(_scheduler__WEBPACK_IMPORTED_MODULE_3__["dequeueWatcher"])(this);
        this.run();
      } else {
        Object(_scheduler__WEBPACK_IMPORTED_MODULE_3__["queueWatcher"])(this);
      }
    }
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */

  }, {
    key: "run",
    value: function run() {
      if (this.active) {
        var value = this.get();

        if (this.immediateAsync) {
          this.immediateAsync = false;
          this.value = value;
          this.cb.call(this.vm.target, value);
        } else if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isObject"])(value) || this.deep) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          this.cb.call(this.vm.target, value, oldValue);
        }
      }
    }
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */

  }, {
    key: "evaluate",
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }
    /**
     * Depend on all deps collected by this watcher.
     */

  }, {
    key: "depend",
    value: function depend() {
      var i = this.deps.length;

      while (i--) {
        this.deps[i].depend();
      }
    }
    /**
     * Remove self from all dependencies' subscriber list.
     */

  }, {
    key: "teardown",
    value: function teardown() {
      if (this.active) {
        if (this.vm.state !== '__destroyed__') {
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["remove"])(this.vm._watchers, this);
        }

        var i = this.deps.length;

        while (i--) {
          this.deps[i].removeSub(this);
        }

        this.active = false;
      }
    }
  }]);

  return Watcher;
}();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */



var seenObjects = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a();

function traverse(val) {
  seenObjects.clear();

  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isObject"])(val) || !Object.isExtensible(val)) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(370);

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(371);
__webpack_require__(113);

module.exports = parent;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
__webpack_require__(71);
__webpack_require__(372);
__webpack_require__(137);
var path = __webpack_require__(34);

module.exports = path.Set;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(373);
var collectionStrong = __webpack_require__(378);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var global = __webpack_require__(15);
var InternalMetadataModule = __webpack_require__(374);
var fails = __webpack_require__(21);
var createNonEnumerableProperty = __webpack_require__(56);
var iterate = __webpack_require__(231);
var anInstance = __webpack_require__(238);
var isCallable = __webpack_require__(18);
var isObject = __webpack_require__(31);
var setToStringTag = __webpack_require__(91);
var defineProperty = __webpack_require__(57).f;
var forEach = __webpack_require__(95).forEach;
var DESCRIPTORS = __webpack_require__(20);
var InternalStateModule = __webpack_require__(93);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || !isCallable(NativeConstructor)
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var uncurryThis = __webpack_require__(17);
var hiddenKeys = __webpack_require__(80);
var isObject = __webpack_require__(31);
var hasOwn = __webpack_require__(49);
var defineProperty = __webpack_require__(57).f;
var getOwnPropertyNamesModule = __webpack_require__(84);
var getOwnPropertyNamesExternalModule = __webpack_require__(85);
var isExtensible = __webpack_require__(375);
var uid = __webpack_require__(51);
var FREEZING = __webpack_require__(377);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);
var isObject = __webpack_require__(31);
var classof = __webpack_require__(27);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(376);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(21);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(21);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(57).f;
var create = __webpack_require__(74);
var redefineAll = __webpack_require__(236);
var bind = __webpack_require__(55);
var anInstance = __webpack_require__(238);
var iterate = __webpack_require__(231);
var defineIterator = __webpack_require__(117);
var setSpecies = __webpack_require__(237);
var DESCRIPTORS = __webpack_require__(20);
var fastKey = __webpack_require__(374).fastKey;
var InternalStateModule = __webpack_require__(93);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueWatcher", function() { return queueWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequeueWatcher", function() { return dequeueWatcher; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(380);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(283);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);






var queue = [];
var has = {};
var circular = {};
var flushing = false;
var curIndex = 0;
var lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["asyncLock"])();
var MAX_UPDATE_COUNT = 100;
function queueWatcher(watcher) {
  if (!watcher.id && typeof watcher === 'function') {
    watcher = {
      id: Infinity,
      run: watcher
    };
  } // 开启EXPORT_MPX.config.forceRunWatcherSync时，queueWatcher同步执行，便于调试排查问题


  if (_index__WEBPACK_IMPORTED_MODULE_5__["default"].config.forceRunWatcherSync) return watcher.run();

  if (!has[watcher.id] || watcher.id === Infinity) {
    has[watcher.id] = true;

    if (!flushing) {
      queue.push(watcher);
      lockTask(flushQueue, resetQueue);
    } else {
      var i = queue.length - 1;

      while (i > curIndex && watcher.id < queue[i].id) {
        i--;
      }

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(queue).call(queue, i + 1, 0, watcher);
    }
  }
}
function dequeueWatcher(watcher) {
  if (!watcher.id || !has[watcher.id]) return;

  var index = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(queue).call(queue, watcher);

  if (index > -1) {
    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(queue).call(queue, index, 1);

    has[watcher.id] = false;
  }
}

function flushQueue() {
  flushing = true;

  _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default()(queue).call(queue, function (a, b) {
    return a.id - b.id;
  });

  for (curIndex = 0; curIndex < queue.length; curIndex++) {
    var watcher = queue[curIndex];
    var id = watcher.id;

    if (id !== Infinity) {
      delete has[id];

      if (true) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          var location = watcher.vm && watcher.vm.options && watcher.vm.options.mpxFileResource;
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_4__["error"])("You may have a dead circular update in watcher with expression [".concat(watcher.expression, "], please check!"), location);
          break;
        }
      }
    }

    watcher.run();
  }

  resetQueue();
}

function resetQueue() {
  flushing = false;
  curIndex = queue.length = 0;
  has = {};

  if (true) {
    circular = {};
  }
}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(382);

module.exports = parent;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(35);
var method = __webpack_require__(383);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.sort) ? method : own;
};


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(384);
var entryVirtual = __webpack_require__(152);

module.exports = entryVirtual('Array').sort;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var uncurryThis = __webpack_require__(17);
var aCallable = __webpack_require__(41);
var toObject = __webpack_require__(50);
var lengthOfArrayLike = __webpack_require__(60);
var toString = __webpack_require__(73);
var fails = __webpack_require__(21);
var internalSort = __webpack_require__(385);
var arrayMethodIsStrict = __webpack_require__(179);
var FF = __webpack_require__(386);
var IE_OR_EDGE = __webpack_require__(387);
var V8 = __webpack_require__(38);
var WEBKIT = __webpack_require__(388);

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__(86);

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__(39);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(368);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(379);



function watch(vm, expOrFn, cb, options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(cb)) {
    options = cb;
    cb = cb.handler;
  }

  if (typeof cb === 'string') {
    if (vm.target && vm.target[cb]) {
      cb = vm.target[cb];
    } else {
      cb = _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
  }

  cb = cb || _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
  options = options || {};
  options.user = true;
  var watcher = new _watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, expOrFn, cb, options);

  if (options.immediate) {
    cb.call(vm.target, watcher.value);
  } else if (options.immediateAsync) {
    watcher.immediateAsync = true;
    Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["queueWatcher"])(watcher);
  }

  return function unwatchFn() {
    watcher.teardown();
  };
}

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initComputed", function() { return initComputed; });
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(283);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(285);




var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  set: _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
};
function initComputed(vm, target, computed) {
  var watchers = vm._computedWatchers = {};

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    watchers[key] = new _watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, getter || _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"], _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"], {
      lazy: true
    });

    if (!(key in target)) {
      defineComputed(vm, target, key, userDef);
    } else {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])("The computed key [".concat(key, "] is duplicated with data/props, please check."), vm.options.mpxFileResource);
    }
  }
}

function defineComputed(vm, target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(vm, key);
    sharedPropertyDefinition.set = _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
  } else {
    sharedPropertyDefinition.get = userDef.get ? createComputedGetter(vm, key) : _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
    sharedPropertyDefinition.set = userDef.set ? userDef.set.bind(vm.target) : _helper_utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(vm, key) {
  return function () {
    var watcher = vm._computedWatchers && vm._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (_dep__WEBPACK_IMPORTED_MODULE_3__["default"].target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(367);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(222);








function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);

  if (Object.getOwnPropertyDescriptor(context, 'setData').configurable) {
    Object.defineProperty(context, 'setData', {
      get() {
        return function (data, callback) {
          return context.__mpxProxy.forceUpdate(data, {
            sync: true
          }, callback);
        };
      },

      configurable: true
    });
  }

  Object.defineProperties(context, {
    __getInitialData: {
      get() {
        return function (options) {
          if (context.props) {
            var newData = context.$rawOptions.__nativeRender__ ? context.data : _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, context.data);

            var validProps = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.props, options.properties);

            Object.keys(context.props).forEach(function (key) {
              if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(validProps, key) && typeof context.props[key] !== 'function') {
                newData[key] = context.props[key];
              }
            });
            return newData;
          }

          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get() {
        return rawSetData;
      },

      configurable: false
    }
  });

  if (currentInject) {
    if (currentInject.render) {
      Object.defineProperties(context, {
        __injectedRender: {
          get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }

    if (currentInject.getRefsData) {
      Object.defineProperties(context, {
        __getRefsData: {
          get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options, type) {
  var newOptions = {};
  Object.keys(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_3__["default"][key]) {
      return;
    }

    if (key === 'properties' || key === 'props') {
      newOptions.props = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options.props, options.properties);
    } else if (key === 'methods' && type === 'page') {
      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function initProxy(context, rawOptions, currentInject, params) {
  // 提供代理对象需要的api
  transformApiForProxy(context, currentInject); // 缓存options

  context.$rawOptions = rawOptions; // 创建proxy对象

  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_2__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;

  context.__mpxProxy.created(params);
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;
  var hookNames = type === 'component' ? ['onInit', 'didMount', 'didUnmount'] : ['onLoad', 'onReady', 'onUnload'];
  var rootMixins = [{
    [hookNames[0]]() {
      if (!this.__mpxProxy) {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        initProxy(this, rawOptions, currentInject, params);
      }
    },

    deriveDataFromProps(nextProps) {
      var _this = this;

      if (this.__mpxProxy && this.__mpxProxy.isMounted() && nextProps && nextProps !== this.props) {
        var validProps = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.$rawOptions.props, this.$rawOptions.properties);

        if (this.$rawOptions.__nativeRender__) {
          var newData = {}; // 微信原生转换支付宝时，每次props更新将其设置进data模拟微信表现

          Object.keys(nextProps).forEach(function (key) {
            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(validProps, key) && typeof nextProps[key] !== 'function') {
              var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["diffAndCloneA"])(nextProps[key], _this.props[key]),
                  diff = _diffAndCloneA.diff,
                  clone = _diffAndCloneA.clone;

              if (diff) newData[key] = clone;
            }
          });
          this.setData(newData);
        } else {
          // 由于支付宝中props透传父级setData的值，此处发生变化的属性实例一定不同，只需浅比较即可确定发生变化的属性
          // 支付宝appx2.0版本后props传递发生变化，此处获取到的nextProps和this.props以及父组件setData的数据引用都不一致，进行了两次深克隆，此处this.props和nextProps的比对需要用deep diff
          Object.keys(nextProps).forEach(function (key) {
            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(validProps, key) && typeof nextProps[key] !== 'function') {
              var _diffAndCloneA2 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["diffAndCloneA"])(nextProps[key], _this.props[key]),
                  diff = _diffAndCloneA2.diff,
                  clone = _diffAndCloneA2.clone; // 由于支付宝中透传父级setData的值，此处进行深copy后赋值避免父级存储的miniRenderData部分数据在此处被响应化，在子组件对props赋值时触发父组件的render


              if (diff) _this[key] = clone;
            }
          });
        }
      }
    },

    didUpdate() {
      var _this2 = this;

      if (this.__mpxProxy) {
        this.__mpxProxy.lockTask(function () {
          _this2.__mpxProxy.updated();
        });
      }
    },

    [hookNames[1]]() {
      if (this.__mpxProxy) {
        this.__mpxProxy.mounted();
      } else {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_5__["error"])('请在支付宝开发工具的详情设置里面，启用component2编译。依赖基础库版本 >=1.14.0');
      }
    },

    [hookNames[2]]() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }];
  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_4__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions, type);
}

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(203);
/* harmony import */ var _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(366);



function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;
  var hookNames = ['attached', 'ready', 'detached']; // 当用户传入page作为构造器构造页面时，修改所有关键hooks

  if (rawOptions.__pageCtor__) {
    hookNames = ['onLoad', 'onReady', 'onUnload'];
  }

  var rootMixin = {
    [hookNames[0]]() {
      if (!this.__mpxProxy) {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        Object(_wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["initProxy"])(this, rawOptions, currentInject, params);
      }
    },

    [hookNames[1]]() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },

    [hookNames[2]]() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }; // 如构造页面，优先使用onInit进行初始化

  if (type === 'page') {
    rootMixin.onInit = function () {
      if (!this.__mpxProxy) {
        for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        Object(_wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["initProxy"])(this, rawOptions, currentInject, params);
      }
    };
  }

  var rootMixins = [rootMixin];
  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_1__["default"])(rawOptions, type, false);
  return Object(_wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["filterOptions"])(rawOptions);
}

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(337);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(367);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);







function filterOptions(options) {
  var newOptions = {};
  Object.keys(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_2__["default"][key]) {
      return;
    }

    if (key === 'data' || key === 'dataFn') {
      newOptions.data = function mergeFn() {
        return _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["diffAndCloneA"])(options.data || {}).clone, options.dataFn && options.dataFn.call(this));
      };
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function initProxy(context, rawOptions, params) {
  // 缓存options
  context.$rawOptions = rawOptions; // 创建proxy对象

  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_4__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;

  context.__mpxProxy.created(params);
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === void 0 ? {} : _ref$rawOptions;
  var rootMixins = [{
    created() {
      if (!this.__mpxProxy) {
        var query = global.__mpxRouter && global.__mpxRouter.currentRoute && global.__mpxRouter.currentRoute.query || {};
        initProxy(this, rawOptions, [query]);
        this.onLoad && this.onLoad(query);
      }
    },

    mounted() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },

    updated() {
      this.__mpxProxy && this.__mpxProxy.updated();
    },

    destroyed() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }

  }]; // 为了在builtMixin中可以使用某些rootMixin实现的特性（如数据响应等），此处builtInMixin在rootMixin之后执行，但是当builtInMixin使用存在对应内建生命周期的目标平台声明周期写法时，可能会出现用户生命周期比builtInMixin中的生命周期先执行的情况，为了避免这种情况发生，builtInMixin应该尽可能使用内建生命周期来编写

  rawOptions.mixins = rawOptions.mixins ? _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(rootMixins).call(rootMixins, rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_3__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);

/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('component'));

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStateWithThis", function() { return createStateWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGettersWithThis", function() { return createGettersWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutationsWithThis", function() { return createMutationsWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionsWithThis", function() { return createActionsWithThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return createStoreWithThis; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(223);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(221);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(174);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(284);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(390);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(274);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(283);
/* harmony import */ var _mapStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(396);












 // 兼容在web和小程序平台中创建表现一致的store



function transformGetters(getters, module, store) {
  var newGetters = {};

  var _loop = function _loop(key) {
    if (key in store.getters) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])("Duplicate getter type: ".concat(key, "."));
    }

    var getter = function getter() {
      if (store.withThis) {
        return getters[key].call({
          state: module.state,
          getters: store.getters,
          rootState: store.state
        });
      }

      return getters[key](module.state, store.getters, store.state);
    };

    newGetters[key] = getter;
  };

  for (var key in getters) {
    _loop(key);
  }

  return newGetters;
}

function transformMutations(mutations, module, store) {
  var newMutations = {};

  var _loop2 = function _loop2(key) {
    if (store.mutations[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])("Duplicate mutation type: ".concat(key, "."));
    }

    var context = {
      state: module.state,
      commit: store.commit.bind(store)
    };

    var mutation = function mutation() {
      var _context;

      for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      if (store.withThis) return mutations[key].apply(context, payload);
      return mutations[key].apply(mutations, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = [module.state]).call(_context, payload));
    };

    newMutations[key] = mutation;
  };

  for (var key in mutations) {
    _loop2(key);
  }

  return newMutations;
}

function transformActions(actions, module, store) {
  var newActions = {};

  var _loop3 = function _loop3(key) {
    if (store.actions[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])("Duplicate action type: ".concat(key, "."));
    }

    newActions[key] = function () {
      var context = {
        rootState: store.state,
        state: module.state,
        getters: store.getters,
        dispatch: store.dispatch.bind(store),
        commit: store.commit.bind(store)
      };
      var result;

      for (var _len2 = arguments.length, payload = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        payload[_key2] = arguments[_key2];
      }

      if (store.withThis) {
        result = actions[key].apply(context, payload);
      } else {
        var _context2;

        result = actions[key].apply(actions, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = [context]).call(_context2, payload));
      } // action一定返回一个promise


      if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
        return result;
      } else {
        return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(result);
      }
    };
  };

  for (var key in actions) {
    _loop3(key);
  }

  return newActions;
}

function mergeDeps(module, deps) {
  var mergeProps = ['state', 'getters', 'mutations', 'actions'];
  Object.keys(deps).forEach(function (key) {
    var store = deps[key];
    mergeProps.forEach(function (prop) {
      if (module[prop] && key in module[prop]) {
        var _context3;

        Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = "Deps's name [".concat(key, "] conflicts with ")).call(_context3, prop, "'s key in current options."));
      } else {
        module[prop] = module[prop] || {};

        if (prop === 'getters') {
          // depsGetters单独存放，不需要重新进行初始化
          module.depsGetters = module.depsGetters || {};
          module.depsGetters[key] = store.getters; // module[prop][key] = () => store[prop]
        } else {
          module[prop][key] = store[prop];
        }
      }
    });
  });
}

var Store = /*#__PURE__*/function () {
  function Store(options) {
    var _this = this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Store);

    var _options$plugins = options.plugins,
        plugins = _options$plugins === void 0 ? [] : _options$plugins;
    this.withThis = options.withThis;
    this.__wrappedGetters = {};
    this.__depsGetters = {};
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this._subscribers = [];
    this.state = this.registerModule(options).state;
    this.resetStoreVM();

    _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(this, Object(_mapStore__WEBPACK_IMPORTED_MODULE_13__["default"])(this));

    plugins.forEach(function (plugin) {
      return plugin(_this);
    });
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Store, [{
    key: "dispatch",
    value: function dispatch(type) {
      var action = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["getByPath"])(this.actions, type);

      if (!action) {
        return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default.a.reject(new Error("unknown action type: ".concat(type)));
      } else {
        for (var _len3 = arguments.length, payload = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          payload[_key3 - 1] = arguments[_key3];
        }

        return action.apply(void 0, payload);
      }
    }
  }, {
    key: "commit",
    value: function commit(type) {
      var _this2 = this;

      for (var _len4 = arguments.length, payload = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        payload[_key4 - 1] = arguments[_key4];
      }

      var mutation = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["getByPath"])(this.mutations, type);

      if (!mutation) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_12__["warn"])("Unknown mutation type: ".concat(type, "."));
      } else {
        var _context4;

        mutation.apply(void 0, payload);
        return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = this._subscribers).call(_context4).forEach(function (sub) {
          return sub({
            type,
            payload
          }, _this2.state);
        });
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn, options) {
      return genericSubscribe(fn, this._subscribers, options);
    }
  }, {
    key: "registerModule",
    value: function registerModule(module) {
      var _this3 = this;

      var state = module.state || {};
      var reactiveModule = {
        state
      };

      if (module.getters) {
        reactiveModule.getters = transformGetters(module.getters, reactiveModule, this);
      }

      if (module.mutations) {
        reactiveModule.mutations = transformMutations(module.mutations, reactiveModule, this);
      }

      if (module.actions) {
        reactiveModule.actions = transformActions(module.actions, reactiveModule, this);
      }

      if (module.deps) {
        mergeDeps(reactiveModule, module.deps);
      }

      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(this.__depsGetters, reactiveModule.depsGetters);

      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(this.__wrappedGetters, reactiveModule.getters); // merge mutations


      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(this.mutations, reactiveModule.mutations); // merge actions


      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(this.actions, reactiveModule.actions); // 子module


      if (module.modules) {
        var childs = module.modules;
        Object.keys(childs).forEach(function (key) {
          reactiveModule.state[key] = _this3.registerModule(childs[key]).state;
        });
      }

      return reactiveModule;
    }
  }, {
    key: "resetStoreVM",
    value: function resetStoreVM() {
      if (false) { var computedKeys; } else {
        this._vm = {};
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_8__["observe"])(this.state, true);
        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_9__["initComputed"])(this._vm, this.getters, this.__wrappedGetters);
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["proxy"])(this.getters, this.__depsGetters);
      }
    }
  }]);

  return Store;
}();

function genericSubscribe(fn, subs, options) {
  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default()(subs).call(subs, fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }

  return function () {
    var i = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_6___default()(subs).call(subs, fn);

    if (i > -1) {
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_7___default()(subs).call(subs, i, 1);
    }
  };
}

function createStore(options) {
  return new Store(options);
} // ts util functions

function createStateWithThis(state) {
  return state;
}
function createGettersWithThis(getters) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return getters;
}
function createMutationsWithThis(mutations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return mutations;
}
function createActionsWithThis(actions) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return actions;
}
function createStoreWithThis(options) {
  options.withThis = true;
  return new Store(options);
}

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);



function mapFactory(type, store) {
  return function (depPath, maps) {
    maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeMap"])(depPath, maps);
    var result = {};

    var _loop = function _loop(key) {
      result[key] = function (payload) {
        var value = maps[key];

        if (type === 'mutations') {
          return store.commit(value, payload);
        } else if (type === 'actions') {
          return store.dispatch(value, payload);
        } else {
          var getterVal = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["getByPath"])(store.getters, value, '', '__NOTFOUND__');

          if (getterVal === '__NOTFOUND__') {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_1__["warn"])("Unknown getter named [".concat(value, "]."));
            getterVal = '';
          }

          return getterVal;
        }
      };
    };

    for (var key in maps) {
      _loop(key);
    }

    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    mapGetters: mapFactory('getters', store),
    mapMutations: mapFactory('mutations', store),
    mapActions: mapFactory('actions', store),
    mapState: function mapState(depPath, maps) {
      maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeMap"])(depPath, maps);
      var result = {};
      Object.keys(maps).forEach(function (key) {
        var value = maps[key];

        result[key] = function () {
          if (typeof value === 'function') {
            return value.call(this, store.state, store.getters);
          } else if (typeof value === 'string') {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["getByPath"])(store.state, value);
          }
        };
      });
      return result;
    }
  };
});

/***/ })
/******/ ]);
module.exports = window["webpackJsonp"];

//# sourceMappingURL=bundle.js.map