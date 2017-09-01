/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PLAY = exports.PLAY = 'PLAY';
var PAUSE = exports.PAUSE = 'PAUSE';
var RESTART = exports.RESTART = 'RESTART';
var SET_STATUS_BREATH = exports.SET_STATUS_BREATH = 'SET_STATUS_BREATH';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$ = undefined;

var _domSelector = __webpack_require__(47);

var _domSelector2 = _interopRequireDefault(_domSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.$$ = _domSelector2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EASY = exports.EASY = 'EASY';
var MIDDLE = exports.MIDDLE = 'MIDDLE';
var PRO = exports.PRO = 'PRO';

var SET_CURRENT_BREATH = exports.SET_CURRENT_BREATH = 'SET_CURRENT_BREATH';

var SETTINGS = {
  EASY: {
    colors: '#000',
    'setting': [{ value: .3, duration: 0, delay: 0, easing: 'linear' }, { value: 1, duration: 3000, delay: 0, easing: 'linear' }, { value: .3, duration: 3000, delay: 0, easing: 'linear' }]
  },
  MIDDLE: {
    colors: [{ value: '#000' }, { value: '#000', duration: 5000, easing: 'linear' }, { value: 'rgb(0,0,250)', duration: 3000, easing: 'linear' }, { value: '#000', duration: 5000, easing: 'linear' }],
    'setting': [{ value: .3, duration: 0, delay: 0, easing: 'linear' }, { value: 1, duration: 5000, delay: 0, easing: 'linear' }, { value: 1, duration: 3000, delay: 0, easing: 'linear' }, { value: .3, duration: 5000, delay: 0, easing: 'linear' }]
  },
  PRO: {
    colors: [{ value: '#000', easing: 'linear' }, { value: '#000', duration: 5000, easing: 'linear' }, { value: 'rgb(0,0,250)', duration: 3000, easing: 'linear' }, { value: '#000', duration: 5000, easing: 'linear' }, { value: 'rgb(0,250,0)', duration: 3000, easing: 'linear' }],
    'setting': [{ value: .3, duration: 0, delay: 0, easing: 'linear' }, { value: 1, duration: 5000, delay: 0, easing: 'linear' }, { value: 1, duration: 3000, delay: 0, easing: 'linear' }, { value: .3, duration: 5000, delay: 0, easing: 'linear' }, { value: .3, duration: 3000, delay: 0, easing: 'linear' }]
  }
};

exports.default = SETTINGS;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentBreath = getCurrentBreath;
exports.getCurrentControll = getCurrentControll;
exports.getListOfSettings = getListOfSettings;
function getCurrentBreath(store) {
  return store.getState().currentBreath;
}

function getCurrentControll(store) {
  return store.getState().controllBreath;
}

function getListOfSettings(store) {
  return store.getState().settings;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(9);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(28);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(5);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(19);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(18);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(17);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(4);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(7);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(26);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(20);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(22);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(27);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentBreath = exports.setStatusBreath = undefined;

var _setCurrentBreath = __webpack_require__(32);

var _setStatusBreath = __webpack_require__(33);

exports.setStatusBreath = _setStatusBreath.setStatusBreath;
exports.setCurrentBreath = _setCurrentBreath.setCurrentBreath;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$pausePlay = exports.$restart = exports.$breath = undefined;

var _$pausePlay = __webpack_require__(35);

var _$pausePlay2 = _interopRequireDefault(_$pausePlay);

var _$breath = __webpack_require__(34);

var _$breath2 = _interopRequireDefault(_$breath);

var _$restart = __webpack_require__(36);

var _$restart2 = _interopRequireDefault(_$restart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.$breath = _$breath2.default;
exports.$restart = _$restart2.default;
exports.$pausePlay = _$pausePlay2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControllBreath = exports.SelectBreath = exports.Breath = undefined;

var _SelectBreath = __webpack_require__(40);

var _SelectBreath2 = _interopRequireDefault(_SelectBreath);

var _ControllBreath = __webpack_require__(39);

var _ControllBreath2 = _interopRequireDefault(_ControllBreath);

var _Breath = __webpack_require__(38);

var _Breath2 = _interopRequireDefault(_Breath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Breath = _Breath2.default;
exports.SelectBreath = _SelectBreath2.default;
exports.ControllBreath = _ControllBreath2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configureStore = __webpack_require__(46);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configureStore2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = undefined;
(function (v, p) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (p),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = p() : v.anime = p();
})(undefined, function () {
  function v(a) {
    if (!g.col(a)) try {
      return document.querySelectorAll(a);
    } catch (b) {}
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(g.arr(d) ? p(d) : d);
    }, []);
  }function w(a) {
    if (g.arr(a)) return a;g.str(a) && (a = v(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function F(a, b) {
    return a.some(function (a) {
      return a === b;
    });
  }
  function A(a) {
    var b = {},
        d;for (d in a) {
      b[d] = a[d];
    }return b;
  }function G(a, b) {
    var d = A(a),
        c;for (c in a) {
      d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
    }return d;
  }function B(a, b) {
    var d = A(a),
        c;for (c in b) {
      d[c] = g.und(a[c]) ? b[c] : a[c];
    }return d;
  }function S(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, h) {
      return b + b + d + d + h + h;
    });var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a = parseInt(b[1], 16);var d = parseInt(b[2], 16),
        b = parseInt(b[3], 16);return "rgb(" + a + "," + d + "," + b + ")";
  }function T(a) {
    function b(a, b, c) {
      0 > c && (c += 1);1 < c && --c;return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a = parseInt(d[1]) / 360;var c = parseInt(d[2]) / 100,
        d = parseInt(d[3]) / 100;if (0 == c) c = d = a = d;else {
      var e = .5 > d ? d * (1 + c) : d + c - d * c,
          l = 2 * d - e,
          c = b(l, e, a + 1 / 3),
          d = b(l, e, a);a = b(l, e, a - 1 / 3);
    }return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")";
  }function x(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2];
  }function U(a) {
    if (-1 < a.indexOf("translate")) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function H(a, b) {
    return g.fnc(a) ? a(b.target, b.id, b.total) : a;
  }function C(a, b) {
    if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function I(a, b) {
    if (g.dom(a) && F(V, b)) return "transform";if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";if (g.dom(a) && "transform" !== b && C(a, b)) return "css";if (null != a[b]) return "object";
  }function W(a, b) {
    var d = U(b),
        d = -1 < b.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) {
      e.push(c[1]), l.push(c[2]);
    }a = l.filter(function (a, c) {
      return e[c] === b;
    });return a.length ? a[0] : d;
  }function J(a, b) {
    switch (I(a, b)) {case "transform":
        return W(a, b);case "css":
        return C(a, b);case "attribute":
        return a.getAttribute(b);}return a[b] || 0;
  }function K(a, b) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;b = parseFloat(b);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return b + a;case "-":
        return b - a;case "*":
        return b * a;}
  }function D(a) {
    return g.obj(a) && a.hasOwnProperty("totalLength");
  }function X(a, b) {
    function d(c) {
      c = void 0 === c ? 0 : c;return a.el.getPointAtLength(1 <= b + c ? b + c : 0);
    }var c = d(),
        e = d(-1),
        l = d(1);switch (a.property) {case "x":
        return c.x;case "y":
        return c.y;case "angle":
        return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI;}
  }function L(a, b) {
    var d = /-?\d*\.?\d+/g;a = D(a) ? a.totalLength : a;if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;else {
      var c = x(a);a = c ? a.substr(0, a.length - c.length) : a;b = b ? a + b : a;
    }b += "";return { original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: b.split(d) };
  }function Y(a, b) {
    return b.reduce(function (b, c, e) {
      return b + a[e - 1] + c;
    });
  }function M(a) {
    return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function (a, d, c) {
      return c.indexOf(a) === d;
    });
  }function Z(a) {
    var b = M(a);return b.map(function (a, c) {
      return { target: a, id: c, total: b.length };
    });
  }function aa(a, b) {
    var d = A(b);if (g.arr(a)) {
      var c = a.length;2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = { value: a };
    }return w(a).map(function (a, c) {
      c = c ? 0 : b.delay;
      a = g.obj(a) && !D(a) ? a : { value: a };g.und(a.delay) && (a.delay = c);return a;
    }).map(function (a) {
      return B(a, d);
    });
  }function ba(a, b) {
    var d = {},
        c;for (c in a) {
      var e = H(a[c], b);g.arr(e) && (e = e.map(function (a) {
        return H(a, b);
      }), 1 === e.length && (e = e[0]));d[c] = e;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return g.arr(a) ? y.apply(this, a) : N[a];
  }function da(a, b) {
    var d;return a.tweens.map(function (c) {
      c = ba(c, b);var e = c.value,
          l = J(b.target, a.name),
          h = d ? d.to.original : l,
          h = g.arr(e) ? e[0] : h,
          m = K(g.arr(e) ? e[1] : e, h),
          l = x(m) || x(h) || x(l);c.isPath = D(e);c.from = L(h, l);c.to = L(m, l);c.start = d ? d.end : a.offset;c.end = c.start + c.delay + c.duration;c.easing = ca(c.easing);c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;g.col(c.from.original) && (c.round = 1);return d = c;
    });
  }function ea(a, b) {
    return p(a.map(function (a) {
      return b.map(function (b) {
        var c = I(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })).filter(function (a) {
      return !g.und(a);
    });
  }
  function O(a, b, d) {
    var c = "delay" === a ? Math.min : Math.max;return b.length ? c.apply(Math, b.map(function (b) {
      return b[a];
    })) : d[a];
  }function fa(a) {
    var b = G(ga, a),
        d = G(ha, a),
        c = Z(a.targets),
        e = [],
        g = B(b, d),
        h;for (h in a) {
      g.hasOwnProperty(h) || "targets" === h || e.push({ name: h, offset: g.offset, tweens: aa(a[h], d) });
    }a = ea(c, e);return B(b, { children: [], animatables: c, animations: a, duration: O("duration", a, d), delay: O("delay", a, d) });
  }function n(a) {
    function b() {
      return window.Promise && new Promise(function (a) {
        return Q = a;
      });
    }function d(a) {
      return f.reversed ? f.duration - a : a;
    }function c(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        var g = d[b],
            h = g.animatable,
            m = g.tweens;e.tween = m.filter(function (b) {
          return a < b.end;
        })[0] || m[m.length - 1];e.isPath$1 = e.tween.isPath;e.round = e.tween.round;e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);m = Y(e.tween.to.numbers.map(function (a) {
          return function (b, c) {
            c = a.isPath$1 ? 0 : a.tween.from.numbers[c];b = c + a.eased * (b - c);a.isPath$1 && (b = X(a.tween.value, b));a.round && (b = Math.round(b * a.round) / a.round);return b;
          };
        }(e)), e.tween.to.strings);ia[g.type](h.target, g.property, m, c, h.id);g.currentValue = m;b++;e = { isPath$1: e.isPath$1, tween: e.tween, eased: e.eased, round: e.round };
      }if (c) for (var k in c) {
        E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
      }f.currentTime = a;f.progress = a / f.duration * 100;
    }function e(a) {
      if (f[a]) f[a](f);
    }function g() {
      f.remaining && !0 !== f.remaining && f.remaining--;
    }function h(a) {
      var h = f.duration,
          l = f.offset,
          n = f.delay,
          P = f.currentTime,
          q = f.reversed,
          r = d(a),
          r = Math.min(Math.max(r, 0), h);if (f.children) {
        var p = f.children;if (r >= f.currentTime) for (var u = 0; u < p.length; u++) {
          p[u].seek(r);
        } else for (u = p.length; u--;) {
          p[u].seek(r);
        }
      }r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))), k = 0);e("update");
    }a = void 0 === a ? {} : a;var m,
        t,
        k = 0,
        Q = null,
        R = b(),
        f = fa(a);f.reset = function () {
      var a = f.direction,
          b = f.loop;f.currentTime = 0;f.progress = 0;f.paused = !0;f.began = !1;f.completed = !1;f.reversed = "reverse" === a;f.remaining = "alternate" === a && 1 === b ? 2 : b;for (a = f.children.length; a--;) {
        b = f.children[a], b.seek(b.offset), b.reset();
      }
    };f.tick = function (a) {
      m = a;t || (t = m);h((k + m - t) * n.speed);
    };f.seek = function (a) {
      h(d(a));
    };f.pause = function () {
      var a = q.indexOf(f);-1 < a && q.splice(a, 1);f.paused = !0;
    };f.play = function () {
      f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja());
    };f.reverse = function () {
      f.reversed = !f.reversed;t = 0;k = d(f.currentTime);
    };f.restart = function () {
      f.pause();f.reset();f.play();
    };f.finished = R;f.reset();f.autoplay && f.play();return f;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      ha = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
      E,
      g = { arr: function arr(a) {
      return Array.isArray(a);
    }, obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    }, svg: function svg(a) {
      return a instanceof SVGElement;
    }, dom: function dom(a) {
      return a.nodeType || g.svg(a);
    }, str: function str(a) {
      return "string" === typeof a;
    }, fnc: function fnc(a) {
      return "function" === typeof a;
    }, und: function und(a) {
      return "undefined" === typeof a;
    }, hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    }, col: function col(a) {
      return g.hex(a) || g.rgb(a) || g.hsl(a);
    } },
      y = function () {
    function a(a, d, c) {
      return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a;
    }return function (b, d, c, e) {
      if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
        var g = new Float32Array(11);if (b !== d || c !== e) for (var h = 0; 11 > h; ++h) {
          g[h] = a(.1 * h, b, c);
        }return function (h) {
          if (b === d && c === e) return h;if (0 === h) return 0;if (1 === h) return 1;for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) {
            m += .1;
          }--k;var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;if (.001 <= l) {
            for (m = 0; 4 > m; ++m) {
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;if (0 === l) break;
              var n = a(k, b, c) - h,
                  k = k - n / l;
            }h = k;
          } else if (0 === l) h = k;else {
            var k = m,
                m = m + .1,
                f = 0;do {
              n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n;
            } while (1e-7 < Math.abs(l) && 10 > ++f);h = n;
          }return a(h, d, e);
        };
      }
    };
  }(),
      N = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        c = { linear: y(.25, .25, .75, .75) },
        e = {},
        l;for (l in d) {
      e.type = l, d[e.type].forEach(function (a) {
        return function (d, e) {
          c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d);
        };
      }(e)), e = { type: e.type };
    }return c;
  }(),
      ia = { css: function css(a, b, d) {
      return a.style[b] = d;
    }, attribute: function attribute(a, b, d) {
      return a.setAttribute(b, d);
    }, object: function object(a, b, d) {
      return a[b] = d;
    }, transform: function transform(a, b, d, c, e) {
      c[e] || (c[e] = []);c[e].push(b + "(" + d + ")");
    } },
      q = [],
      z = 0,
      ja = function () {
    function a() {
      z = requestAnimationFrame(b);
    }function b(b) {
      var c = q.length;if (c) {
        for (var d = 0; d < c;) {
          q[d] && q[d].tick(b), d++;
        }a();
      } else cancelAnimationFrame(z), z = 0;
    }return a;
  }();n.version = "2.0.2";
  n.speed = 1;n.running = q;n.remove = function (a) {
    a = M(a);for (var b = q.length; b--;) {
      for (var d = q[b], c = d.animations, e = c.length; e--;) {
        F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause());
      }
    }
  };n.getValue = J;n.path = function (a, b) {
    var d = g.str(a) ? v(a)[0] : a,
        c = b || 100;return function (a) {
      return { el: d, property: a, totalLength: d.getTotalLength() * (c / 100) };
    };
  };n.setDashoffset = function (a) {
    var b = a.getTotalLength();a.setAttribute("stroke-dasharray", b);return b;
  };n.bezier = y;n.easings = N;n.timeline = function (a) {
    var b = n(a);b.pause();
    b.duration = 0;b.add = function (a) {
      b.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });w(a).forEach(function (a) {
        var c = b.duration,
            d = a.offset;a.autoplay = !1;a.offset = g.und(d) ? c : K(d, c);b.seek(a.offset);a = n(a);a.duration > c && (b.duration = a.duration);a.began = !0;b.children.push(a);
      });b.reset();b.seek(0);b.autoplay && b.restart();return b;
    };return b;
  };n.random = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };return n;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(4);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(5);

var _isPlainObject = __webpack_require__(9);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(7);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(8);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(23);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(24);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

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
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(25);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(8);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

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

exports.default = getRawTag;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = objectToString;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(21);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(29);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(30);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(31)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentBreath = setCurrentBreath;

var _settings = __webpack_require__(2);

function setCurrentBreath(currentBreath) {
  return {
    type: _settings.SET_CURRENT_BREATH,
    data: {
      currentBreath: currentBreath
    }
  };
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatusBreath = setStatusBreath;

var _status = __webpack_require__(0);

function setStatusBreath(status) {
  return {
    type: _status.SET_STATUS_BREATH,
    data: {
      status: status
    }
  };
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _animejs = __webpack_require__(16);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $breath = function () {
  function $breath(settings) {
    _classCallCheck(this, $breath);

    this.settings = settings;
    this.currentSetting = null;
    this.currentAnime = null;

    this.$breathWrap = (0, _utils.$$)('.breath-wrap')[0];
    this.$breathElement = '<div class="breath-element"></div>';
    this.$breathWrap.innerHTML = this.$breathElement;
  }

  _createClass($breath, [{
    key: 'setNewBreath',
    value: function setNewBreath(setting) {
      this.replaceBreathHTML();
      this.currentSetting = setting;
      this.currentAnime = (0, _animejs2.default)({
        targets: '.breath-element',
        scale: this.settings[this.currentSetting].setting,
        autoplay: false,
        loop: true,
        backgroundColor: this.settings[this.currentSetting].colors
      });
    }
  }, {
    key: 'PLAY',
    value: function PLAY() {
      this.currentAnime.play();
    }
  }, {
    key: 'PAUSE',
    value: function PAUSE() {
      this.currentAnime.pause();
    }
  }, {
    key: 'RESTART',
    value: function RESTART() {
      this.replaceBreathHTML();
      this.setNewBreath(this.currentSetting);
    }
  }, {
    key: 'replaceBreathHTML',
    value: function replaceBreathHTML() {
      this.$breathWrap.innerHTML = this.$breathElement;
    }
  }, {
    key: 'init',
    value: function init(setting) {
      this.setNewBreath(setting);
    }
  }]);

  return $breath;
}();

exports.default = $breath;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _status = __webpack_require__(0);

var _play = __webpack_require__(49);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(48);

var _pause2 = _interopRequireDefault(_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $pausePlay = function () {
  function $pausePlay() {
    _classCallCheck(this, $pausePlay);

    this.$controllBreath = (0, _utils.$$)('.breath-pause-play')[0];
  }

  _createClass($pausePlay, [{
    key: 'getComponent',
    value: function getComponent() {
      return this.$controllBreath;
    }
  }, {
    key: 'updateControll',
    value: function updateControll(status) {
      switch (status) {
        case _status.PLAY:
          this.controllEmpty();
          this.$controllBreath.innerHTML = '\u041F\u0430\u0443\u0437\u0430 <img class="status-icon" src=' + _pause2.default + ' >';
          return;
        case _status.PAUSE:
          this.controllEmpty();
          this.$controllBreath.innerHTML = '\u041D\u0430\u0447\u0430\u0442\u044C <img class="status-icon" src=' + _play2.default + ' >';
          return;
        case _status.RESTART:
          this.controllEmpty();
          this.$controllBreath.innerHTML = '\u041D\u0430\u0447\u0430\u0442\u044C <img class="status-icon" src=' + _play2.default + ' >';
          return;
        default:
          this.controllEmpty();
          this.$controllBreath.innerHTML = '\u041D\u0430\u0447\u0430\u0442\u044C <img class="status-icon" src=' + _play2.default + ' >';
      }
    }
  }, {
    key: 'controllEmpty',
    value: function controllEmpty() {
      this.$controllBreath.innerHTML = '';
    }
  }, {
    key: 'init',
    value: function init(status) {
      this.updateControll(status);
    }
  }]);

  return $pausePlay;
}();

exports.default = $pausePlay;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SETTINGS = undefined;

var _settings = __webpack_require__(2);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SETTINGS = _settings2.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _components = __webpack_require__(13);

var _connect = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Breath = function () {
  function Breath(store) {
    _classCallCheck(this, Breath);

    this.store = store;
    this.currentSetting = (0, _connect.getCurrentBreath)(this.store);
    this.currentControll = (0, _connect.getCurrentControll)(this.store);

    this.breathElement = new _components.$breath((0, _connect.getListOfSettings)(this.store));
  }

  _createClass(Breath, [{
    key: 'breathUpdate',
    value: function breathUpdate() {
      var newSetting = (0, _connect.getCurrentBreath)(this.store);
      var newControll = (0, _connect.getCurrentControll)(this.store);

      if (this.currentSetting != newSetting) {
        this.currentSetting = newSetting;
        this.breathElement.setNewBreath(this.currentSetting);
        return;
      }

      if (newControll) {
        this.currentControll = newControll;
        this.breathElement[this.currentControll]();
        return;
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.store.subscribe(this.breathUpdate.bind(this));
      this.breathElement.init(this.currentSetting);
    }
  }]);

  return Breath;
}();

exports.default = Breath;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _connect = __webpack_require__(3);

var _components = __webpack_require__(13);

var _actions = __webpack_require__(12);

var _status = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllBreath = function () {
  function ControllBreath(store) {
    _classCallCheck(this, ControllBreath);

    this.store = store;
    this.currentControll = (0, _connect.getCurrentControll)(store);

    this.$pausePlay = new _components.$pausePlay();
    this.$pausePlay.init(this.currentControll);

    this.$controllRestart = (0, _utils.$$)('.breath-restart')[0];
  }

  _createClass(ControllBreath, [{
    key: 'onClickPausePlay',
    value: function onClickPausePlay(_ref) {
      var target = _ref.target;

      var currentControll = (0, _connect.getCurrentControll)(this.store);

      switch (currentControll) {
        case _status.PLAY:
          this.store.dispatch((0, _actions.setStatusBreath)(_status.PAUSE));
          return;
        case _status.PAUSE:
          this.store.dispatch((0, _actions.setStatusBreath)(_status.PLAY));
          return;
        case _status.RESTART:
          this.store.dispatch((0, _actions.setStatusBreath)(_status.PLAY));
          return;
        default:
          this.store.dispatch((0, _actions.setStatusBreath)(_status.PLAY));
          return;
      }
    }
  }, {
    key: 'onClickRestart',
    value: function onClickRestart(_ref2) {
      var target = _ref2.target;

      this.store.dispatch((0, _actions.setStatusBreath)(_status.RESTART));
    }
  }, {
    key: 'pausePlayUpdate',
    value: function pausePlayUpdate() {
      var currentControll = (0, _connect.getCurrentControll)(this.store);

      this.$pausePlay.updateControll(currentControll);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      this.$pausePlay.getComponent().addEventListener('click', this.onClickPausePlay.bind(this));
      this.$controllRestart.addEventListener('click', this.onClickRestart.bind(this));
    }
  }, {
    key: 'init',
    value: function init() {
      this.store.subscribe(this.pausePlayUpdate.bind(this));
    }
  }]);

  return ControllBreath;
}();

exports.default = ControllBreath;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _actions = __webpack_require__(12);

var _connect = __webpack_require__(3);

var _status = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectBreath = function () {
  function SelectBreath(store) {
    _classCallCheck(this, SelectBreath);

    this.store = store;
    this.currentBreath = (0, _connect.getCurrentBreath)(this.store);

    this.$selectBreath = (0, _utils.$$)('.select-breath')[0];
  }

  _createClass(SelectBreath, [{
    key: 'onClickSelector',
    value: function onClickSelector(_ref) {
      var target = _ref.target;

      //установить новую настройку для дыхания
      this.store.dispatch((0, _actions.setCurrentBreath)(target.value));

      this.store.dispatch((0, _actions.setStatusBreath)(_status.PAUSE));
    }
  }, {
    key: 'onChangeOption',
    value: function onChangeOption() {
      var newCurrentBreath = (0, _connect.getCurrentBreath)(this.store);

      if (newCurrentBreath !== this.currentBreath) {
        this.currentBreath = newCurrentBreath;
        this.$selectBreath.value = newCurrentBreath;
      }
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      this.$selectBreath.addEventListener('change', this.onClickSelector.bind(this));
    }
  }, {
    key: 'init',
    value: function init() {
      this.store.subscribe(this.onChangeOption.bind(this));
      this.$selectBreath.value = this.currentBreath;
    }
  }]);

  return SelectBreath;
}();

exports.default = SelectBreath;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(15);

var _store2 = _interopRequireDefault(_store);

var _container = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();
var selectBreath = new _container.SelectBreath(store);
selectBreath.init();
selectBreath.addEvents();

var controllBreath = new _container.ControllBreath(store);
controllBreath.init();
controllBreath.addEvents();

var breath = new _container.Breath(store);
breath.init();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = controllBreath;

var _status = __webpack_require__(0);

function controllBreath() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _status.PAUSE;
  var action = arguments[1];

  switch (action.type) {
    case _status.SET_STATUS_BREATH:
      return action.data.status;
    default:
      return state;
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currentBreath;

var _settings = __webpack_require__(2);

function currentBreath() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _settings.EASY;
  var action = arguments[1];

  switch (action.type) {
    case _settings.SET_CURRENT_BREATH:
      return action.data.currentBreath;
    default:
      return state;
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _settings = __webpack_require__(45);

var _settings2 = _interopRequireDefault(_settings);

var _currentBreath = __webpack_require__(43);

var _currentBreath2 = _interopRequireDefault(_currentBreath);

var _controllBreath = __webpack_require__(42);

var _controllBreath2 = _interopRequireDefault(_controllBreath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  settings: _settings2.default,
  currentBreath: _currentBreath2.default,
  controllBreath: _controllBreath2.default
});

exports.default = reducer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settings;

var _constants = __webpack_require__(37);

function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.SETTINGS;

  return _constants.SETTINGS;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(6);

var _reducers = __webpack_require__(44);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  return (0, _redux.createStore)(_reducers2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return document.querySelectorAll(selector);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/pause.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/play.png";

/***/ })
/******/ ]);
//# sourceMappingURL=app.build.js.map