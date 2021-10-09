exports.ids = [4];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);


/* harmony default export */ __webpack_exports__["a"] = (_VMenu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },

    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);


/* harmony default export */ __webpack_exports__["a"] = (_VChip__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("49c498c3", content, true)

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

/**
  * vee-validate v3.4.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(1)) : undefined;
})(this, function (exports, Vue) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */


  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

    return r;
  }

  function isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
  }

  function isNullOrUndefined(value) {
    return value === null || value === undefined;
  }

  function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
  }

  var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
  };
  /**
   * A reference comparison function with NaN support
   */


  function isRefEqual(lhs, rhs) {
    if (isNaN(lhs) && isNaN(rhs)) {
      return true;
    }

    return lhs === rhs;
  }
  /**
   * Shallow object comparison.
   */


  function isEqual(lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
      return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }

    if (Array.isArray(lhs) && Array.isArray(rhs)) {
      if (lhs.length !== rhs.length) return false;

      for (var i = 0; i < lhs.length; i++) {
        if (!isEqual(lhs[i], rhs[i])) {
          return false;
        }
      }

      return true;
    } // if both are objects, compare each key recursively.


    if (isObject(lhs) && isObject(rhs)) {
      return Object.keys(lhs).every(function (key) {
        return isEqual(lhs[key], rhs[key]);
      }) && Object.keys(rhs).every(function (key) {
        return isEqual(lhs[key], rhs[key]);
      });
    }

    return isRefEqual(lhs, rhs);
  } // Checks if a given value is not an empty string or null or undefined.


  function isSpecified(val) {
    if (val === '') {
      return false;
    }

    return !isNullOrUndefined(val);
  }

  function isCallable(fn) {
    return typeof fn === 'function';
  }

  function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
  }

  function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);

    if (isCallable(array.findIndex)) {
      return array.findIndex(predicate);
    }
    /* istanbul ignore next */


    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i)) {
        return i;
      }
    }
    /* istanbul ignore next */


    return -1;
  }
  /**
   * finds the first element that satisfies the predicate callback, polyfills array.find
   */


  function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
  }

  function includes(collection, item) {
    return collection.indexOf(item) !== -1;
  }
  /**
   * Converts an array-like object to array, provides a simple polyfill for Array.from
   */


  function toArray(arrayLike) {
    if (isCallable(Array.from)) {
      return Array.from(arrayLike);
    }
    /* istanbul ignore next */


    return _copyArray(arrayLike);
  }
  /* istanbul ignore next */


  function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;

    for (var i = 0; i < length; i++) {
      array.push(arrayLike[i]);
    }

    return array;
  }

  function values(obj) {
    if (isCallable(Object.values)) {
      return Object.values(obj);
    } // fallback to keys()

    /* istanbul ignore next */


    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  }

  function merge(target, source) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key]) {
          target[key] = {};
        }

        merge(target[key], source[key]);
        return;
      }

      target[key] = source[key];
    });
    return target;
  }

  function createFlags() {
    return {
      untouched: true,
      touched: false,
      dirty: false,
      pristine: true,
      valid: false,
      invalid: false,
      validated: false,
      pending: false,
      required: false,
      changed: false,
      passed: false,
      failed: false
    };
  }

  function identity(x) {
    return x;
  }

  function debounce(fn, wait, token) {
    if (wait === void 0) {
      wait = 0;
    }

    if (token === void 0) {
      token = {
        cancelled: false
      };
    }

    if (wait === 0) {
      return fn;
    }

    var timeout;
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var later = function () {
        timeout = undefined; // check if the fn call was cancelled.

        if (!token.cancelled) fn.apply(void 0, args);
      }; // because we might want to use Node.js setTimout for SSR.


      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  /**
   * Emits a warning to the console
   */


  function warn(message) {
    console.warn("[vee-validate] " + message);
  }
  /**
   * Replaces placeholder values in a string with their actual values
   */


  function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
      return p in values ? values[p] : "{" + p + "}";
    });
  }

  var RULES = {};

  function normalizeSchema(schema) {
    var _a;

    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
      schema.params = schema.params.map(function (param) {
        if (typeof param === 'string') {
          return {
            name: param
          };
        }

        return param;
      });
    }

    return schema;
  }

  var RuleContainer =
  /** @class */
  function () {
    function RuleContainer() {}

    RuleContainer.extend = function (name, schema) {
      // if rule already exists, overwrite it.
      var rule = normalizeSchema(schema);

      if (RULES[name]) {
        RULES[name] = merge(RULES[name], schema);
        return;
      }

      RULES[name] = __assign({
        lazy: false,
        computesRequired: false
      }, rule);
    };

    RuleContainer.isLazy = function (name) {
      var _a;

      return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };

    RuleContainer.isRequireRule = function (name) {
      var _a;

      return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };

    RuleContainer.getRuleDefinition = function (ruleName) {
      return RULES[ruleName];
    };

    return RuleContainer;
  }();
  /**
   * Adds a custom validator to the list of validation rules.
   */


  function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema); // Full schema object.

    if (typeof schema === 'object') {
      RuleContainer.extend(name, schema);
      return;
    }

    RuleContainer.extend(name, {
      validate: schema
    });
  }
  /**
   * Guards from extension violations.
   */


  function guardExtend(name, validator) {
    if (isCallable(validator)) {
      return;
    }

    if (isCallable(validator.validate)) {
      return;
    }

    if (RuleContainer.getRuleDefinition(name)) {
      return;
    }

    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
  }

  var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
      touched: 'touched',
      untouched: 'untouched',
      valid: 'valid',
      invalid: 'invalid',
      pristine: 'pristine',
      dirty: 'dirty' // control has been interacted with

    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
  };

  var currentConfig = __assign({}, DEFAULT_CONFIG);

  var getConfig = function () {
    return currentConfig;
  };

  var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
  };

  var configure = function (cfg) {
    setConfig(cfg);
  };
  /**
   * Normalizes the given rules expression.
   */


  function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
      value: true,
      writable: false,
      enumerable: false,
      configurable: false
    });

    if (!rules) {
      return acc;
    } // Object is already normalized, skip.


    if (isObject(rules) && rules._$$isNormalized) {
      return rules;
    }

    if (isObject(rules)) {
      return Object.keys(rules).reduce(function (prev, curr) {
        var params = [];

        if (rules[curr] === true) {
          params = [];
        } else if (Array.isArray(rules[curr])) {
          params = rules[curr];
        } else if (isObject(rules[curr])) {
          params = rules[curr];
        } else {
          params = [rules[curr]];
        }

        if (rules[curr] !== false) {
          prev[curr] = buildParams(curr, params);
        }

        return prev;
      }, acc);
    }
    /* istanbul ignore if */


    if (typeof rules !== 'string') {
      warn('rules must be either a string or an object.');
      return acc;
    }

    return rules.split('|').reduce(function (prev, rule) {
      var parsedRule = parseRule(rule);

      if (!parsedRule.name) {
        return prev;
      }

      prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
      return prev;
    }, acc);
  }

  function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);

    if (!ruleSchema) {
      return provided;
    }

    var params = {};

    if (!ruleSchema.params && !Array.isArray(provided)) {
      throw new Error('You provided an object params to a rule that has no defined schema.');
    } // Rule probably uses an array for their args, keep it as is.


    if (Array.isArray(provided) && !ruleSchema.params) {
      return provided;
    }

    var definedParams; // collect the params schema.

    if (!ruleSchema.params || ruleSchema.params.length < provided.length && Array.isArray(provided)) {
      var lastDefinedParam_1; // collect any additional parameters in the last item.

      definedParams = provided.map(function (_, idx) {
        var _a;

        var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
        lastDefinedParam_1 = param || lastDefinedParam_1;

        if (!param) {
          param = lastDefinedParam_1;
        }

        return param;
      });
    } else {
      definedParams = ruleSchema.params;
    } // Match the provided array length with a temporary schema.


    for (var i = 0; i < definedParams.length; i++) {
      var options = definedParams[i];
      var value = options.default; // if the provided is an array, map element value.

      if (Array.isArray(provided)) {
        if (i in provided) {
          value = provided[i];
        }
      } else {
        // If the param exists in the provided object.
        if (options.name in provided) {
          value = provided[options.name]; // if the provided is the first param value.
        } else if (definedParams.length === 1) {
          value = provided;
        }
      } // if the param is a target, resolve the target value.


      if (options.isTarget) {
        value = createLocator(value, options.cast);
      } // A target param using interpolation


      if (typeof value === 'string' && value[0] === '@') {
        value = createLocator(value.slice(1), options.cast);
      } // If there is a transformer defined.


      if (!isLocator(value) && options.cast) {
        value = options.cast(value);
      } // already been set, probably multiple values.


      if (params[options.name]) {
        params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
        params[options.name].push(value);
      } else {
        // set the value.
        params[options.name] = value;
      }
    }

    return params;
  }
  /**
   * Parses a rule string expression.
   */


  var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];

    if (includes(rule, ':')) {
      params = rule.split(':').slice(1).join(':').split(',');
    }

    return {
      name: name,
      params: params
    };
  };

  function createLocator(value, castFn) {
    var locator = function (crossTable) {
      var val = crossTable[value];
      return castFn ? castFn(val) : val;
    };

    locator.__locatorRef = value;
    return locator;
  }

  function extractLocators(params) {
    if (Array.isArray(params)) {
      return params.filter(function (param) {
        return isLocator(param) || typeof param === 'string' && param[0] === '@';
      });
    }

    return Object.keys(params).filter(function (key) {
      return isLocator(params[key]);
    }).map(function (key) {
      return params[key];
    });
  }
  /**
   * Validates a value against the rules.
   */


  function validate(value, rules, options) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, function () {
      var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            shouldBail = options === null || options === void 0 ? void 0 : options.bails;
            skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
            field = {
              name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
              rules: normalizeRules(rules),
              bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
              skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
              forceRequired: false,
              crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
              names: (options === null || options === void 0 ? void 0 : options.names) || {},
              customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
            };
            return [4
            /*yield*/
            , _validate(field, value, options)];

          case 1:
            result = _a.sent();
            errors = [];
            failedRules = {};
            regenerateMap = {};
            result.errors.forEach(function (e) {
              var msg = e.msg();
              errors.push(msg);
              failedRules[e.rule] = msg;
              regenerateMap[e.rule] = e.msg;
            });
            return [2
            /*return*/
            , {
              valid: result.valid,
              errors: errors,
              failedRules: failedRules,
              regenerateMap: regenerateMap
            }];
        }
      });
    });
  }
  /**
   * Starts the validation process.
   */


  function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial,
        isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
      var _c, shouldSkip, errors, rules, length, i, rule, result;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [4
            /*yield*/
            , _shouldSkip(field, value)];

          case 1:
            _c = _d.sent(), shouldSkip = _c.shouldSkip, errors = _c.errors;

            if (shouldSkip) {
              return [2
              /*return*/
              , {
                valid: !errors.length,
                errors: errors
              }];
            }

            rules = Object.keys(field.rules).filter(function (rule) {
              return !RuleContainer.isRequireRule(rule);
            });
            length = rules.length;
            i = 0;
            _d.label = 2;

          case 2:
            if (!(i < length)) return [3
            /*break*/
            , 5];

            if (isInitial && RuleContainer.isLazy(rules[i])) {
              return [3
              /*break*/
              , 4];
            }

            rule = rules[i];
            return [4
            /*yield*/
            , _test(field, value, {
              name: rule,
              params: field.rules[rule]
            })];

          case 3:
            result = _d.sent();

            if (!result.valid && result.error) {
              errors.push(result.error);

              if (field.bails) {
                return [2
                /*return*/
                , {
                  valid: false,
                  errors: errors
                }];
              }
            }

            _d.label = 4;

          case 4:
            i++;
            return [3
            /*break*/
            , 2];

          case 5:
            return [2
            /*return*/
            , {
              valid: !errors.length,
              errors: errors
            }];
        }
      });
    });
  }

  function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
      var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
            length = requireRules.length;
            errors = [];
            isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
            isEmptyAndOptional = isEmpty && field.skipIfEmpty;
            isRequired = false;
            i = 0;
            _a.label = 1;

          case 1:
            if (!(i < length)) return [3
            /*break*/
            , 4];
            rule = requireRules[i];
            return [4
            /*yield*/
            , _test(field, value, {
              name: rule,
              params: field.rules[rule]
            })];

          case 2:
            result = _a.sent();

            if (!isObject(result)) {
              throw new Error('Require rules has to return an object (see docs)');
            }

            if (result.required) {
              isRequired = true;
            }

            if (!result.valid && result.error) {
              errors.push(result.error); // Exit early as the field is required and failed validation.

              if (field.bails) {
                return [2
                /*return*/
                , {
                  shouldSkip: true,
                  errors: errors
                }];
              }
            }

            _a.label = 3;

          case 3:
            i++;
            return [3
            /*break*/
            , 1];

          case 4:
            if (isEmpty && !isRequired && !field.skipIfEmpty) {
              return [2
              /*return*/
              , {
                shouldSkip: false,
                errors: errors
              }];
            } // field is configured to run through the pipeline regardless


            if (!field.bails && !isEmptyAndOptional) {
              return [2
              /*return*/
              , {
                shouldSkip: false,
                errors: errors
              }];
            } // skip if the field is not required and has an empty value.


            return [2
            /*return*/
            , {
              shouldSkip: !isRequired && isEmpty,
              errors: errors
            }];
        }
      });
    });
  }
  /**
   * Tests a single input value against a rule.
   */


  function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
      var ruleSchema, normalizedValue, params, result, values_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            ruleSchema = RuleContainer.getRuleDefinition(rule.name);

            if (!ruleSchema || !ruleSchema.validate) {
              throw new Error("No such validator '" + rule.name + "' exists.");
            }

            normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
            params = fillTargetValues(rule.params, field.crossTable);
            return [4
            /*yield*/
            , ruleSchema.validate(normalizedValue, params)];

          case 1:
            result = _a.sent();

            if (typeof result === 'string') {
              values_1 = __assign(__assign({}, params || {}), {
                _field_: field.name,
                _value_: value,
                _rule_: rule.name
              });
              return [2
              /*return*/
              , {
                valid: false,
                error: {
                  rule: rule.name,
                  msg: function () {
                    return interpolate(result, values_1);
                  }
                }
              }];
            }

            if (!isObject(result)) {
              result = {
                valid: result
              };
            }

            return [2
            /*return*/
            , {
              valid: result.valid,
              required: result.required,
              error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
            }];
        }
      });
    });
  }
  /**
   * Generates error messages.
   */


  function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;

    var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;

    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);

    var _b = _getUserTargets(field, ruleSchema, ruleName, message),
        userTargets = _b.userTargets,
        userMessage = _b.userMessage;

    var values = __assign(__assign(__assign(__assign({}, params || {}), {
      _field_: field.name,
      _value_: value,
      _rule_: ruleName
    }), ruleTargets), userTargets);

    return {
      msg: function () {
        return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values);
      },
      rule: ruleName
    };
  }

  function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;

    if (!params) {
      return {};
    }

    var numTargets = params.filter(function (param) {
      return param.isTarget;
    }).length;

    if (numTargets <= 0) {
      return {};
    }

    var names = {};
    var ruleConfig = field.rules[ruleName];

    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
      ruleConfig = params.map(function (param) {
        return ruleConfig[param.name];
      });
    }

    for (var index = 0; index < params.length; index++) {
      var param = params[index];
      var key = ruleConfig[index];

      if (!isLocator(key)) {
        continue;
      }

      key = key.__locatorRef;
      var name_1 = field.names[key] || key;
      names[param.name] = name_1;
      names["_" + param.name + "_"] = field.crossTable[key];
    }

    return names;
  }

  function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || []; // early return if no rules

    if (!rules) {
      return {};
    } // check all rules to convert targets


    Object.keys(rules).forEach(function (key, index) {
      // get the rule
      var rule = rules[key];

      if (!isLocator(rule)) {
        return {};
      } // get associated parameter


      var param = params[index];

      if (!param) {
        return {};
      } // grab the name of the target


      var name = rule.__locatorRef;
      userTargets[param.name] = field.names[name] || name;
      userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
      userTargets: userTargets,
      userMessage: userMessage
    };
  }

  function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
      return template(field, values);
    }

    return interpolate(template, __assign(__assign({}, values), {
      _field_: field
    }));
  }

  function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
      return params.map(function (param) {
        var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;

        if (targetPart in crossTable) {
          return crossTable[targetPart];
        }

        return param;
      });
    }

    var values = {};

    var normalize = function (value) {
      if (isLocator(value)) {
        return value(crossTable);
      }

      return value;
    };

    Object.keys(params).forEach(function (param) {
      values[param] = normalize(params[param]);
    });
    return values;
  }

  var aggressive = function () {
    return {
      on: ['input', 'blur']
    };
  };

  var lazy = function () {
    return {
      on: ['change', 'blur']
    };
  };

  var eager = function (_a) {
    var errors = _a.errors;

    if (errors.length) {
      return {
        on: ['input', 'change']
      };
    }

    return {
      on: ['change', 'blur']
    };
  };

  var passive = function () {
    return {
      on: []
    };
  };

  var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
  };

  var setInteractionMode = function (mode, implementation) {
    setConfig({
      mode: mode
    });

    if (!implementation) {
      return;
    }

    if (!isCallable(implementation)) {
      throw new Error('A mode implementation must be a function');
    }

    modes[mode] = implementation;
  };

  var EVENT_BUS = new Vue__default['default']();

  function localeChanged() {
    EVENT_BUS.$emit('change:locale');
  }

  var Dictionary =
  /** @class */
  function () {
    function Dictionary(locale, dictionary) {
      this.container = {};
      this.locale = locale;
      this.merge(dictionary);
    }

    Dictionary.prototype.resolve = function (field, rule, values) {
      return this.format(this.locale, field, rule, values);
    };

    Dictionary.prototype.format = function (locale, field, rule, values) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      var message; // find if specific message for that field was specified.

      var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
      var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
      message = fieldContainer || messageContainer || '';

      if (!message) {
        message = '{_field_} is not valid';
      }

      field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
      return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), {
        _field_: field
      }));
    };

    Dictionary.prototype.merge = function (dictionary) {
      merge(this.container, dictionary);
    };

    Dictionary.prototype.hasRule = function (name) {
      var _a, _b;

      return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };

    return Dictionary;
  }();

  var DICTIONARY;

  function localize(locale, dictionary) {
    var _a;

    if (!DICTIONARY) {
      DICTIONARY = new Dictionary('en', {});
      setConfig({
        defaultMessage: function (field, values) {
          return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
        }
      });
    }

    if (typeof locale === 'string') {
      DICTIONARY.locale = locale;

      if (dictionary) {
        DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
      }

      localeChanged();
      return;
    }

    DICTIONARY.merge(locale);
  }

  var isEvent = function (evt) {
    if (!evt) {
      return false;
    }

    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
      return true;
    } // this is for IE

    /* istanbul ignore next */


    if (evt && evt.srcElement) {
      return true;
    }

    return false;
  };

  function normalizeEventValue(value) {
    var _a, _b;

    if (!isEvent(value)) {
      return value;
    }

    var input = value.target;

    if (input.type === 'file' && input.files) {
      return toArray(input.files);
    } // If the input has a `v-model.number` modifier applied.


    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
      // as per the spec the v-model.number uses parseFloat
      var valueAsNumber = parseFloat(input.value);

      if (isNaN(valueAsNumber)) {
        return input.value;
      }

      return valueAsNumber;
    }

    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
      var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
      return trimmedValue;
    }

    return input.value;
  }

  var isTextInput = function (vnode) {
    var _a;

    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm; // it will fallback to being a text input per browsers spec.

    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
      return true;
    }

    if (vnode.tag === 'textarea') {
      return true;
    }

    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
  }; // export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
  //   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
  //   return includes(['radio', 'checkbox'], attrs && attrs.type);
  // };
  // Gets the model object on the vnode.


  function findModel(vnode) {
    if (!vnode.data) {
      return undefined;
    } // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line


    var nonStandardVNodeData = vnode.data;

    if ('model' in nonStandardVNodeData) {
      return nonStandardVNodeData.model;
    }

    if (!vnode.data.directives) {
      return undefined;
    }

    return find(vnode.data.directives, function (d) {
      return d.name === 'model';
    });
  }

  function findValue(vnode) {
    var _a, _b;

    var model = findModel(vnode);

    if (model) {
      return {
        value: model.value
      };
    }

    var config = findModelConfig(vnode);
    var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';

    if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
      var propsDataWithValue = vnode.componentOptions.propsData;
      return {
        value: propsDataWithValue[prop]
      };
    }

    if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
      return {
        value: vnode.data.domProps.value
      };
    }

    return undefined;
  }

  function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
      return vnode;
    }

    if (Array.isArray(vnode.children)) {
      return vnode.children;
    }
    /* istanbul ignore next */


    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
      return vnode.componentOptions.children;
    }

    return [];
  }

  function findInputNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
      return [vnode];
    }

    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
      var candidates = findInputNodes(node);

      if (candidates.length) {
        nodes.push.apply(nodes, candidates);
      }

      return nodes;
    }, []);
  } // Resolves v-model config if exists.


  function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions) return null; // This is also not typed in the standard Vue TS.

    return vnode.componentOptions.Ctor.options.model;
  } // Adds a listener to vnode listener object.


  function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
      obj[eventName] = [handler];
      return;
    } // Is an invoker.


    if (isCallable(obj[eventName]) && obj[eventName].fns) {
      var invoker = obj[eventName];
      invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];

      if (!includes(invoker.fns, handler)) {
        invoker.fns.push(handler);
      }

      return;
    }

    if (isCallable(obj[eventName])) {
      var prev = obj[eventName];
      obj[eventName] = [prev];
    }

    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
      obj[eventName].push(handler);
    }
  } // Adds a listener to a native HTML vnode.


  function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
      node.data = {};
    }

    if (isNullOrUndefined(node.data.on)) {
      node.data.on = {};
    }

    mergeVNodeListeners(node.data.on, eventName, handler);
  } // Adds a listener to a Vue component vnode.


  function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
      return;
    }
    /* istanbul ignore next */


    if (!node.componentOptions.listeners) {
      node.componentOptions.listeners = {};
    }

    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
  }

  function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
      addComponentNodeListener(vnode, eventName, handler);
      return;
    }

    addNativeNodeListener(vnode, eventName, handler);
  } // Determines if `change` should be used over `input` for listeners.


  function getInputEventName(vnode, model) {
    var _a; // Is a component.


    if (vnode.componentOptions) {
      var event_1 = (findModelConfig(vnode) || {
        event: 'input'
      }).event;
      return event_1;
    } // Lazy Models typically use change event


    if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
      return 'change';
    } // is a textual-type input.


    if (isTextInput(vnode)) {
      return 'input';
    }

    return 'change';
  }

  function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
  } // TODO: Type this one properly.


  function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
      slots[key].forEach(function (vnode) {
        if (!vnode.context) {
          slots[key].context = ctx;

          if (!vnode.data) {
            vnode.data = {};
          }

          vnode.data.slot = key;
        }
      });
      return arr.concat(slots[key]);
    }, acc);
  }

  function resolveTextualRules(vnode) {
    var _a;

    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs) return rules;

    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
      rules.email = ['multiple' in attrs];
    }

    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
      rules.regex = attrs.pattern;
    }

    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
      rules.max = attrs.maxlength;
    }

    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
      rules.min = attrs.minlength;
    }

    if (attrs.type === 'number') {
      if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
        rules.min_value = Number(attrs.min);
      }

      if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
        rules.max_value = Number(attrs.max);
      }
    }

    return rules;
  }

  function resolveRules(vnode) {
    var _a;

    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;

    if (!includes(htmlTags, vnode.tag) || !attrs) {
      return {};
    }

    var rules = {};

    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
      rules.required = attrs.type === 'checkbox' ? [true] : true;
    }

    if (isTextInput(vnode)) {
      return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }

    return normalizeRules(rules);
  }

  function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
      return context.$scopedSlots.default(slotProps) || [];
    }

    return context.$slots.default || [];
  }
  /**
   * Determines if a provider needs to run validation.
   */


  function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
      return true;
    } // when the value changes for whatever reason.


    if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
      return true;
    } // when it needs validation due to props/cross-fields changes.


    if (ctx._needsValidation) {
      return true;
    } // when the initial value is undefined and the field wasn't rendered yet.


    if (!ctx.initialized && value === undefined) {
      return true;
    }

    return false;
  }

  function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), {
      errors: ctx.errors,
      classes: ctx.classes,
      failedRules: ctx.failedRules,
      reset: function () {
        return ctx.reset();
      },
      validate: function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return ctx.validate.apply(ctx, args);
      },
      ariaInput: {
        'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
        'aria-required': ctx.isRequired ? 'true' : 'false',
        'aria-errormessage': "vee_" + ctx.id
      },
      ariaMsg: {
        id: "vee_" + ctx.id,
        'aria-live': ctx.errors.length ? 'assertive' : 'off'
      }
    });
  }

  function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
      vm.initialValue = value;
    }

    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;

    if (!validateNow) {
      return;
    }

    var validate = function () {
      if (vm.immediate || vm.flags.validated) {
        return triggerThreadSafeValidation(vm);
      }

      vm.validateSilent();
    };

    if (vm.initialized) {
      validate();
      return;
    }

    vm.$once('hook:mounted', function () {
      return validate();
    });
  }

  function computeModeSetting(ctx) {
    var compute = isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode];
    return compute(ctx);
  }

  function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent(); // avoids race conditions between successive validations.

    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
      if (pendingPromise === vm._pendingValidation) {
        vm.applyResult(result);
        vm._pendingValidation = undefined;
      }

      return result;
    });
  } // Creates the common handlers for a validatable context.


  function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
      vm.$veeOnInput = function (e) {
        vm.syncValue(e); // track and keep the value updated.

        vm.setFlags({
          dirty: true,
          pristine: false
        });
      };
    }

    var onInput = vm.$veeOnInput;

    if (!vm.$veeOnBlur) {
      vm.$veeOnBlur = function () {
        vm.setFlags({
          touched: true,
          untouched: false
        });
      };
    } // Blur event listener.


    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm); // Handle debounce changes.

    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
      onValidate = debounce(function () {
        vm.$nextTick(function () {
          if (!vm._pendingReset) {
            triggerThreadSafeValidation(vm);
          }

          vm._pendingReset = false;
        });
      }, mode.debounce || vm.debounce); // Cache the handler so we don't create it each time.

      vm.$veeHandler = onValidate; // cache the debounce value so we detect if it was changed.

      vm.$veeDebounce = vm.debounce;
    }

    return {
      onInput: onInput,
      onBlur: onBlur,
      onValidate: onValidate
    };
  } // Adds all plugin listeners to the vnode.


  function addListeners(vm, node) {
    var value = findValue(node); // cache the input eventName.

    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);

    var _a = createCommonHandlers(vm),
        onInput = _a.onInput,
        onBlur = _a.onBlur,
        onValidate = _a.onValidate;

    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur); // add the validation listeners.

    vm.normalizedEvents.forEach(function (evt) {
      addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
  }

  var PROVIDER_COUNTER = 0;

  function data() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
      errors: errors,
      value: undefined,
      initialized: false,
      initialValue: undefined,
      flags: createFlags(),
      failedRules: {},
      isActive: true,
      fieldName: fieldName,
      id: ''
    };
    return defaultValues;
  }

  var ValidationProvider = Vue__default['default'].extend({
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function () {
          if (!this.$vnode.context.$_veeObserver) {
            this.$vnode.context.$_veeObserver = createObserver();
          }

          return this.$vnode.context.$_veeObserver;
        }
      }
    },
    props: {
      vid: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: null
      },
      mode: {
        type: [String, Function],
        default: function () {
          return getConfig().mode;
        }
      },
      rules: {
        type: [Object, String],
        default: null
      },
      immediate: {
        type: Boolean,
        default: false
      },
      bails: {
        type: Boolean,
        default: function () {
          return getConfig().bails;
        }
      },
      skipIfEmpty: {
        type: Boolean,
        default: function () {
          return getConfig().skipOptional;
        }
      },
      debounce: {
        type: Number,
        default: 0
      },
      tag: {
        type: String,
        default: 'span'
      },
      slim: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      customMessages: {
        type: Object,
        default: function () {
          return {};
        }
      },
      detectInput: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      rules: {
        deep: true,
        handler: function (val, oldVal) {
          this._needsValidation = !isEqual(val, oldVal);
        }
      }
    },
    data: data,
    computed: {
      fieldDeps: function () {
        var _this = this;

        return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
          var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
            return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
          });
          acc.push.apply(acc, deps);
          deps.forEach(function (depName) {
            watchCrossFieldDep(_this, depName);
          });
          return acc;
        }, []);
      },
      normalizedEvents: function () {
        var _this = this;

        var on = computeModeSetting(this).on;
        return (on || []).map(function (e) {
          if (e === 'input') {
            return _this._inputEventName;
          }

          return e;
        });
      },
      isRequired: function () {
        var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);

        var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
        this.flags.required = !!isRequired;
        return isRequired;
      },
      classes: function () {
        var names = getConfig().classes;
        return computeClassObj(names, this.flags);
      },
      normalizedRules: function () {
        return normalizeRules(this.rules);
      }
    },
    mounted: function () {
      var _this = this;

      var onLocaleChanged = function () {
        if (!_this.flags.validated) {
          return;
        }

        var regenerateMap = _this._regenerateMap;

        if (regenerateMap) {
          var errors_1 = [];
          var failedRules_1 = {};
          Object.keys(regenerateMap).forEach(function (rule) {
            var msg = regenerateMap[rule]();
            errors_1.push(msg);
            failedRules_1[rule] = msg;
          });

          _this.applyResult({
            errors: errors_1,
            failedRules: failedRules_1,
            regenerateMap: regenerateMap
          });

          return;
        }

        _this.validate();
      };

      EVENT_BUS.$on('change:locale', onLocaleChanged);
      this.$on('hook:beforeDestroy', function () {
        EVENT_BUS.$off('change:locale', onLocaleChanged);
      });
    },
    render: function (h) {
      var _this = this;

      this.registerField();
      var ctx = createValidationCtx(this);
      var children = normalizeChildren(this, ctx); // Automatic v-model detection

      if (this.detectInput) {
        var inputs = findInputNodes(children);

        if (inputs.length) {
          inputs.forEach(function (input, idx) {
            var _a, _b, _c, _d, _e, _f; // If the elements are not checkboxes and there are more input nodes


            if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
              return;
            }

            var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};

            if (!isEqual(_this._resolvedRules, resolved)) {
              _this._needsValidation = true;
            }

            if (isHTMLNode(input)) {
              _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
            }

            _this._resolvedRules = resolved;
            addListeners(_this, input);
          });
        }
      }

      return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
      // cleanup reference.
      this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
      this.isActive = true;
    },
    deactivated: function () {
      this.isActive = false;
    },
    methods: {
      setFlags: function (flags) {
        var _this = this;

        Object.keys(flags).forEach(function (flag) {
          _this.flags[flag] = flags[flag];
        });
      },
      syncValue: function (v) {
        var value = normalizeEventValue(v);
        this.value = value;
        this.flags.changed = this.initialValue !== value;
      },
      reset: function () {
        var _this = this;

        this.errors = [];
        this.initialValue = this.value;
        var flags = createFlags();
        flags.required = this.isRequired;
        this.setFlags(flags);
        this.failedRules = {};
        this.validateSilent();
        this._pendingValidation = undefined;
        this._pendingReset = true;
        setTimeout(function () {
          _this._pendingReset = false;
        }, this.debounce);
      },
      validate: function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            if (args.length > 0) {
              this.syncValue(args[0]);
            }

            return [2
            /*return*/
            , triggerThreadSafeValidation(this)];
          });
        });
      },
      validateSilent: function () {
        return __awaiter(this, void 0, void 0, function () {
          var rules, result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this.setFlags({
                  pending: true
                });
                rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                Object.defineProperty(rules, '_$$isNormalized', {
                  value: true,
                  writable: false,
                  enumerable: false,
                  configurable: false
                });
                return [4
                /*yield*/
                , validate(this.value, rules, __assign(__assign({
                  name: this.name || this.fieldName
                }, createLookup(this)), {
                  bails: this.bails,
                  skipIfEmpty: this.skipIfEmpty,
                  isInitial: !this.initialized,
                  customMessages: this.customMessages
                }))];

              case 1:
                result = _a.sent();
                this.setFlags({
                  pending: false,
                  valid: result.valid,
                  invalid: !result.valid
                });
                return [2
                /*return*/
                , result];
            }
          });
        });
      },
      setErrors: function (errors) {
        this.applyResult({
          errors: errors,
          failedRules: {}
        });
      },
      applyResult: function (_a) {
        var errors = _a.errors,
            failedRules = _a.failedRules,
            regenerateMap = _a.regenerateMap;
        this.errors = errors;
        this._regenerateMap = regenerateMap;
        this.failedRules = __assign({}, failedRules || {});
        this.setFlags({
          valid: !errors.length,
          passed: !errors.length,
          invalid: !!errors.length,
          failed: !!errors.length,
          validated: true,
          changed: this.value !== this.initialValue
        });
      },
      registerField: function () {
        updateRenderingContextRefs(this);
      }
    }
  });

  function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;

    var _loop_1 = function (i) {
      var flag = keys[i];
      var className = names && names[flag] || flag;
      var value = flags[flag];

      if (isNullOrUndefined(value)) {
        return "continue";
      }

      if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
        return "continue";
      }

      if (typeof className === 'string') {
        acc[className] = value;
      } else if (Array.isArray(className)) {
        className.forEach(function (cls) {
          acc[cls] = value;
        });
      }
    };

    for (var i = 0; i < length; i++) {
      _loop_1(i);
    }

    return acc;
  }

  function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
      names: {},
      values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
      if (!providers[depName]) {
        return acc;
      }

      acc.values[depName] = providers[depName].value;
      acc.names[depName] = providers[depName].name;
      return acc;
    }, reduced);
  }

  function extractId(vm) {
    if (vm.vid) {
      return vm.vid;
    }

    if (vm.name) {
      return vm.name;
    }

    if (vm.id) {
      return vm.id;
    }

    if (vm.fieldName) {
      return vm.fieldName;
    }

    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
  }

  function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id; // Nothing has changed.

    if (!vm.isActive || id === providedId && vm.$_veeObserver.refs[id]) {
      return;
    } // vid was changed.


    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
      vm.$_veeObserver.unobserve(id);
    }

    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
  }

  function createObserver() {
    return {
      refs: {},
      observe: function (vm) {
        this.refs[vm.id] = vm;
      },
      unobserve: function (id) {
        delete this.refs[id];
      }
    };
  }

  function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) {
      withHooks = true;
    }

    var providers = ctx.$_veeObserver.refs;

    if (!ctx._veeWatchers) {
      ctx._veeWatchers = {};
    }

    if (!providers[depName] && withHooks) {
      return ctx.$once('hook:mounted', function () {
        watchCrossFieldDep(ctx, depName, false);
      });
    }

    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
      ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
        if (ctx.flags.validated) {
          ctx._needsValidation = true;
          ctx.validate();
        }
      });
    }
  }

  var FLAGS_STRATEGIES = [['pristine', 'every'], ['dirty', 'some'], ['touched', 'some'], ['untouched', 'every'], ['valid', 'every'], ['invalid', 'some'], ['pending', 'some'], ['validated', 'every'], ['changed', 'some'], ['passed', 'every'], ['failed', 'some']];
  var OBSERVER_COUNTER = 0;

  function data$1() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {}; // FIXME: Not sure of this one can be typed, circular type reference.

    var observers = [];
    return {
      id: '',
      refs: refs,
      observers: observers,
      errors: errors,
      flags: flags,
      fields: fields
    };
  }

  function provideSelf() {
    return {
      $_veeObserver: this
    };
  }

  var ValidationObserver = Vue__default['default'].extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function () {
          if (!this.$vnode.context.$_veeObserver) {
            return null;
          }

          return this.$vnode.context.$_veeObserver;
        }
      }
    },
    props: {
      tag: {
        type: String,
        default: 'span'
      },
      vid: {
        type: String,
        default: function () {
          return "obs_" + OBSERVER_COUNTER++;
        }
      },
      slim: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data: data$1,
    created: function () {
      var _this = this;

      this.id = this.vid;
      register(this);
      var onChange = debounce(function (_a) {
        var errors = _a.errors,
            flags = _a.flags,
            fields = _a.fields;
        _this.errors = errors;
        _this.flags = flags;
        _this.fields = fields;
      }, 16);
      this.$watch(computeObserverState, onChange);
    },
    activated: function () {
      register(this);
    },
    deactivated: function () {
      unregister(this);
    },
    beforeDestroy: function () {
      unregister(this);
    },
    render: function (h) {
      var children = normalizeChildren(this, prepareSlotProps(this));
      return this.slim && children.length <= 1 ? children[0] : h(this.tag, {
        on: this.$listeners
      }, children);
    },
    methods: {
      observe: function (subscriber, kind) {
        var _a;

        if (kind === void 0) {
          kind = 'provider';
        }

        if (kind === 'observer') {
          this.observers.push(subscriber);
          return;
        }

        this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
      },
      unobserve: function (id, kind) {
        if (kind === void 0) {
          kind = 'provider';
        }

        if (kind === 'provider') {
          var provider = this.refs[id];

          if (!provider) {
            return;
          }

          this.$delete(this.refs, id);
          return;
        }

        var idx = findIndex(this.observers, function (o) {
          return o.id === id;
        });

        if (idx !== -1) {
          this.observers.splice(idx, 1);
        }
      },
      validateWithInfo: function (_a) {
        var _b = (_a === void 0 ? {} : _a).silent,
            silent = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
          var results, isValid, _c, errors, flags, fields;

          return __generator(this, function (_d) {
            switch (_d.label) {
              case 0:
                return [4
                /*yield*/
                , Promise.all(__spreadArrays(values(this.refs).filter(function (r) {
                  return !r.disabled;
                }).map(function (ref) {
                  return ref[silent ? 'validateSilent' : 'validate']().then(function (r) {
                    return r.valid;
                  });
                }), this.observers.filter(function (o) {
                  return !o.disabled;
                }).map(function (obs) {
                  return obs.validate({
                    silent: silent
                  });
                })))];

              case 1:
                results = _d.sent();
                isValid = results.every(function (r) {
                  return r;
                });
                _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                this.errors = errors;
                this.flags = flags;
                this.fields = fields;
                return [2
                /*return*/
                , {
                  errors: errors,
                  flags: flags,
                  fields: fields,
                  isValid: isValid
                }];
            }
          });
        });
      },
      validate: function (_a) {
        var _b = (_a === void 0 ? {} : _a).silent,
            silent = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
          var isValid;
          return __generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                return [4
                /*yield*/
                , this.validateWithInfo({
                  silent: silent
                })];

              case 1:
                isValid = _c.sent().isValid;
                return [2
                /*return*/
                , isValid];
            }
          });
        });
      },
      handleSubmit: function (cb) {
        return __awaiter(this, void 0, void 0, function () {
          var isValid;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.validate()];

              case 1:
                isValid = _a.sent();

                if (!isValid || !cb) {
                  return [2
                  /*return*/
                  ];
                }

                return [2
                /*return*/
                , cb()];
            }
          });
        });
      },
      reset: function () {
        return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) {
          return ref.reset();
        });
      },
      setErrors: function (errors) {
        var _this = this;

        Object.keys(errors).forEach(function (key) {
          var provider = _this.refs[key];
          if (!provider) return;
          var errorArr = errors[key] || [];
          errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
          provider.setErrors(errorArr);
        });
        this.observers.forEach(function (observer) {
          observer.setErrors(errors);
        });
      }
    }
  });

  function unregister(vm) {
    if (vm.$_veeObserver) {
      vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
  }

  function register(vm) {
    if (vm.$_veeObserver) {
      vm.$_veeObserver.observe(vm, 'observer');
    }
  }

  function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), {
      errors: vm.errors,
      fields: vm.fields,
      validate: vm.validate,
      validateWithInfo: vm.validateWithInfo,
      passes: vm.handleSubmit,
      handleSubmit: vm.handleSubmit,
      reset: vm.reset
    });
  } // Creates a modified version of validation flags


  function createObserverFlags() {
    return __assign(__assign({}, createFlags()), {
      valid: true,
      invalid: false
    });
  }

  function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) {
      return !o.disabled;
    }));

    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;

    for (var i = 0; i < length; i++) {
      var vm = vms[i]; // validation provider

      if (Array.isArray(vm.errors)) {
        errors[vm.id] = vm.errors;
        fields[vm.id] = __assign({
          id: vm.id,
          name: vm.name,
          failedRules: vm.failedRules
        }, vm.flags);
        continue;
      } // Nested observer, merge errors and fields


      errors = __assign(__assign({}, errors), vm.errors);
      fields = __assign(__assign({}, fields), vm.fields);
    }

    FLAGS_STRATEGIES.forEach(function (_a) {
      var flag = _a[0],
          method = _a[1];
      flags[flag] = vms[method](function (vm) {
        return vm.flags[flag];
      });
    });
    return {
      errors: errors,
      flags: flags,
      fields: fields
    };
  }

  function withValidation(component, mapProps) {
    var _a;

    if (mapProps === void 0) {
      mapProps = identity;
    }

    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
      name: (options.name || 'AnonymousHoc') + "WithValidation",
      props: __assign({}, providerOpts.props),
      data: providerOpts.data,
      computed: __assign({}, providerOpts.computed),
      methods: __assign({}, providerOpts.methods),
      beforeDestroy: providerOpts.beforeDestroy,
      inject: providerOpts.inject
    };
    var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';

    hoc.render = function (h) {
      var _a;

      this.registerField();
      var vctx = createValidationCtx(this);

      var listeners = __assign({}, this.$listeners);

      var model = findModel(this.$vnode);
      this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
      var value = findValue(this.$vnode);
      onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);

      var _b = createCommonHandlers(this),
          onInput = _b.onInput,
          onBlur = _b.onBlur,
          onValidate = _b.onValidate;

      mergeVNodeListeners(listeners, eventName, onInput);
      mergeVNodeListeners(listeners, 'blur', onBlur);
      this.normalizedEvents.forEach(function (evt) {
        mergeVNodeListeners(listeners, evt, onValidate);
      }); // Props are any attrs not associated with ValidationProvider Plus the model prop.
      // WARNING: Accidental prop overwrite will probably happen.

      var prop = (findModelConfig(this.$vnode) || {
        prop: 'value'
      }).prop;

      var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));

      return h(options, {
        attrs: this.$attrs,
        props: props,
        on: listeners,
        scopedSlots: this.$scopedSlots
      }, normalizeSlots(this.$slots, this.$vnode.context));
    };

    return hoc;
  }

  var version = '3.4.5';
  exports.ValidationObserver = ValidationObserver;
  exports.ValidationProvider = ValidationProvider;
  exports.configure = configure;
  exports.extend = extend;
  exports.localeChanged = localeChanged;
  exports.localize = localize;
  exports.normalizeRules = normalizeRules;
  exports.setInteractionMode = setInteractionMode;
  exports.validate = validate;
  exports.version = version;
  exports.withValidation = withValidation;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export alpha */
/* unused harmony export alpha_dash */
/* unused harmony export alpha_num */
/* unused harmony export alpha_spaces */
/* unused harmony export between */
/* unused harmony export confirmed */
/* unused harmony export digits */
/* unused harmony export dimensions */
/* unused harmony export double */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return email; });
/* unused harmony export excluded */
/* unused harmony export ext */
/* unused harmony export image */
/* unused harmony export integer */
/* unused harmony export is */
/* unused harmony export is_not */
/* unused harmony export length */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return max; });
/* unused harmony export max_value */
/* unused harmony export mimes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return min_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return numeric; });
/* unused harmony export oneOf */
/* unused harmony export regex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return required; });
/* unused harmony export required_if */
/* unused harmony export size */
/**
  * vee-validate v3.4.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

/* eslint-disable no-misleading-character-class */
var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[A-ZĂÂÎŞŢ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[Α-ώ]*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
  el: /^[Α-ώ\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[0-9Α-ώ]*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
  el: /^[0-9Α-ώ_-]*$/i
};

var validate = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alpha).some(function (loc) {
      return alpha[loc].test(value);
    });
  }

  return (alpha[locale] || alpha.en).test(value);
};

var params = [{
  name: 'locale'
}];
var alpha$1 = {
  validate: validate,
  params: params
};

var validate$1 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$1(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var params$1 = [{
  name: 'locale'
}];
var alpha_dash = {
  validate: validate$1,
  params: params$1
};

var validate$2 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$2(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var params$2 = [{
  name: 'locale'
}];
var alpha_num = {
  validate: validate$2,
  params: params$2
};

var validate$3 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$3(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var params$3 = [{
  name: 'locale'
}];
var alpha_spaces = {
  validate: validate$3,
  params: params$3
};

var validate$4 = function (value, _a) {
  var _b = _a === void 0 ? {} : _a,
      min = _b.min,
      max = _b.max;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return !!validate$4(val, {
        min: min,
        max: max
      });
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var params$4 = [{
  name: 'min'
}, {
  name: 'max'
}];
var between = {
  validate: validate$4,
  params: params$4
};

var validate$5 = function (value, _a) {
  var target = _a.target;
  return String(value) === String(target);
};

var params$5 = [{
  name: 'target',
  isTarget: true
}];
var confirmed = {
  validate: validate$5,
  params: params$5
};

var validate$6 = function (value, _a) {
  var length = _a.length;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$6(val, {
        length: length
      });
    });
  }

  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

var params$6 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var digits = {
  validate: validate$6,
  params: params$6
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === width && image.height === height);
    };

    image.src = URL.createObjectURL(file);
  });
};

var validate$7 = function (files, _a) {
  var width = _a.width,
      height = _a.height;
  var list = [];
  files = Array.isArray(files) ? files : [files];

  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return Promise.resolve(false);
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  })).then(function (values) {
    return values.every(function (v) {
      return v;
    });
  });
};

var params$7 = [{
  name: 'width',
  cast: function (value) {
    return Number(value);
  }
}, {
  name: 'height',
  cast: function (value) {
    return Number(value);
  }
}];
var dimensions = {
  validate: validate$7,
  params: params$7
};

var validate$8 = function (value, _a) {
  var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) {
      return emailStr.trim();
    });
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }

  return re.test(String(value));
};

var params$8 = [{
  name: 'multiple',
  default: false
}];
var email = {
  validate: validate$8,
  params: params$8
};

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

function isCallable(fn) {
  return typeof fn === 'function';
}

function includes(collection, item) {
  return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$9(val, options);
    });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var oneOf = {
  validate: validate$9
};

var validate$a = function (value, args) {
  return !validate$9(value, args);
};

var excluded = {
  validate: validate$a
};

var validate$b = function (files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var ext = {
  validate: validate$b
};

var validate$c = function (files) {
  var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var image = {
  validate: validate$c
};

var validate$d = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$d
};

var validate$e = function (value, _a) {
  var other = _a.other;
  return value === other;
};

var params$9 = [{
  name: 'other'
}];
var is = {
  validate: validate$e,
  params: params$9
};

var validate$f = function (value, _a) {
  var other = _a.other;
  return value !== other;
};

var params$a = [{
  name: 'other'
}];
var is_not = {
  validate: validate$f,
  params: params$a
};

var validate$g = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (typeof value === 'string') {
    value = toArray(value);
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return value.length === length;
};

var params$b = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var length = {
  validate: validate$g,
  params: params$b
};

var validate$h = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$h(val, {
        length: length
      });
    });
  }

  return String(value).length <= length;
};

var params$c = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var max = {
  validate: validate$h,
  params: params$c
};

var validate$i = function (value, _a) {
  var max = _a.max;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$i(val, {
        max: max
      });
    });
  }

  return Number(value) <= max;
};

var params$d = [{
  name: 'max',
  cast: function (value) {
    return Number(value);
  }
}];
var max_value = {
  validate: validate$i,
  params: params$d
};

var validate$j = function (files, mimes) {
  var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.type);
    });
  }

  return regex.test(files.type);
};

var mimes = {
  validate: validate$j
};

var validate$k = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$k(val, {
        length: length
      });
    });
  }

  return String(value).length >= length;
};

var params$e = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var min = {
  validate: validate$k,
  params: params$e
};

var validate$l = function (value, _a) {
  var min = _a.min;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$l(val, {
        min: min
      });
    });
  }

  return Number(value) >= min;
};

var params$f = [{
  name: 'min',
  cast: function (value) {
    return Number(value);
  }
}];
var min_value = {
  validate: validate$l,
  params: params$f
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$m = function (value) {
  var testValue = function (val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$m
};

var validate$n = function (value, _a) {
  var regex = _a.regex;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$n(val, {
        regex: regex
      });
    });
  }

  return regex.test(String(value));
};

var params$g = [{
  name: 'regex',
  cast: function (value) {
    if (typeof value === 'string') {
      return new RegExp(value);
    }

    return value;
  }
}];
var regex = {
  validate: validate$n,
  params: params$g
};

var validate$o = function (value, _a) {
  var allowFalse = (_a === void 0 ? {
    allowFalse: true
  } : _a).allowFalse;
  var result = {
    valid: false,
    required: true
  };

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return result;
  } // incase a field considers `false` as an empty value like checkboxes.


  if (value === false && !allowFalse) {
    return result;
  }

  result.valid = !!String(value).trim().length;
  return result;
};

var computesRequired = true;
var params$h = [{
  name: 'allowFalse',
  default: true
}];
var required = {
  validate: validate$o,
  params: params$h,
  computesRequired: computesRequired
};

var testEmpty = function (value) {
  return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};

var validate$p = function (value, _a) {
  var target = _a.target,
      values = _a.values;
  var required;

  if (values && values.length) {
    if (!Array.isArray(values) && typeof values === 'string') {
      values = [values];
    } // eslint-disable-next-line


    required = values.some(function (val) {
      return val == String(target).trim();
    });
  } else {
    required = !testEmpty(target);
  }

  if (!required) {
    return {
      valid: true,
      required: required
    };
  }

  return {
    valid: !testEmpty(value),
    required: required
  };
};

var params$i = [{
  name: 'target',
  isTarget: true
}, {
  name: 'values'
}];
var computesRequired$1 = true;
var required_if = {
  validate: validate$p,
  params: params$i,
  computesRequired: computesRequired$1
};

var validate$q = function (files, _a) {
  var size = _a.size;

  if (isNaN(size)) {
    return false;
  }

  var nSize = size * 1024;

  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var params$j = [{
  name: 'size',
  cast: function (value) {
    return Number(value);
  }
}];
var size = {
  validate: validate$q,
  params: params$j
};

var validate$r = function (value, params) {
  var _a = params || {},
      _b = _a.decimals,
      decimals = _b === void 0 ? 0 : _b,
      _c = _a.separator,
      separator = _c === void 0 ? 'dot' : _c;

  var separators = {
    dot: '.',
    comma: ','
  };
  var regexPart = +decimals === 0 ? '+' : "{" + decimals + "}";
  var regex = new RegExp("^-?\\d+\\" + (separators[separator] || '.') + "\\d" + regexPart + "$");
  return Array.isArray(value) ? value.every(function (val) {
    return regex.test(String(val));
  }) : regex.test(String(value));
};

var params$k = [{
  name: 'decimals',
  default: 0
}, {
  name: 'separator',
  default: 'dot'
}];
var double = {
  validate: validate$r,
  params: params$k
};


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* deepEqual */ "i"]
    }
  }
}));

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "z"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "z"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "z"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3f041ed3", content, true)

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-select .v-select__selection--comma{color:rgba(0,0,0,.87)}.theme--light.v-select .v-select__selection--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-select .v-select__selection--comma,.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selection--comma{color:#fff}.theme--dark.v-select .v-select__selection--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selection--comma{color:rgba(0,0,0,.87)}.v-select{position:relative}.v-select:not(.v-select--is-multi).v-text-field--single-line .v-select__selections{flex-wrap:nowrap}.v-select>.v-input__control>.v-input__slot{cursor:pointer}.v-select .v-chip{flex:0 1 auto;margin:4px}.v-select .v-chip--selected:after{opacity:.22}.v-select .fade-transition-leave-active{position:absolute;left:0}.v-select.v-input--is-dirty ::-moz-placeholder{color:transparent!important}.v-select.v-input--is-dirty :-ms-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty ::placeholder{color:transparent!important}.v-select:not(.v-input--is-dirty):not(.v-input--is-focused) .v-text-field__prefix{line-height:20px;top:7px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-select.v-text-field--enclosed:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__selections{padding-top:20px}.v-select.v-text-field--outlined:not(.v-text-field--single-line) .v-select__selections{padding:8px 0}.v-select.v-text-field--outlined:not(.v-text-field--single-line).v-input--dense .v-select__selections{padding:4px 0}.v-select.v-text-field input{flex:1 1;margin-top:0;min-width:0;pointer-events:none;position:relative}.v-select.v-select--is-menu-active .v-input__icon--append .v-icon{transform:rotate(180deg)}.v-select.v-select--chips input{margin:0}.v-select.v-select--chips .v-select__selections{min-height:42px}.v-select.v-select--chips.v-input--dense .v-select__selections{min-height:40px}.v-select.v-select--chips .v-chip--select.v-chip--active:before{opacity:.2}.v-select.v-select--chips.v-select--chips--small .v-select__selections{min-height:26px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections{min-height:68px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-input--dense .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-input--dense .v-select__selections{min-height:40px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small .v-select__selections{min-height:26px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small.v-input--dense .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small.v-input--dense .v-select__selections{min-height:38px}.v-select.v-text-field--reverse .v-select__selections,.v-select.v-text-field--reverse .v-select__slot{flex-direction:row-reverse}.v-select__selections{align-items:center;display:flex;flex:1 1;flex-wrap:wrap;line-height:18px;max-width:100%;min-width:0}.v-select__selection{max-width:90%}.v-select__selection--comma{margin:7px 4px 7px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select.v-input--dense .v-select__selection--comma{margin:5px 4px 3px 0}.v-select.v-input--dense .v-chip{margin:0 4px}.v-select__slot{position:relative;align-items:center;display:flex;max-width:100%;min-width:0;width:100%}.v-select:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{align-self:flex-end}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("d6779068", content, true)

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-simple-checkbox{align-self:center;line-height:normal;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.v-simple-checkbox--disabled{cursor:default}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("96c4765c", content, true)

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ defaultMenuProps; });

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSelect/VSelect.sass
var VSelect = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/index.js
var VChip = __webpack_require__(275);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js
var VMenu = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass
var VSimpleCheckbox = __webpack_require__(294);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var directives_ripple = __webpack_require__(21);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js



 // Mixins


 // Utilities



/* harmony default export */ var VCheckbox_VSimpleCheckbox = (external_vue_default.a.extend({
  name: 'v-simple-checkbox',
  functional: true,
  directives: {
    ripple: directives_ripple["a" /* default */]
  },
  props: { ...colorable["a" /* default */].options.props,
    ...themeable["a" /* default */].options.props,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    }
  },

  render(h, {
    props,
    data,
    listeners
  }) {
    const children = [];

    if (props.ripple && !props.disabled) {
      const ripple = h('div', colorable["a" /* default */].options.methods.setTextColor(props.color, {
        staticClass: 'v-input--selection-controls__ripple',
        directives: [{
          name: 'ripple',
          value: {
            center: true
          }
        }]
      }));
      children.push(ripple);
    }

    let icon = props.offIcon;
    if (props.indeterminate) icon = props.indeterminateIcon;else if (props.value) icon = props.onIcon;
    children.push(h(VIcon["a" /* default */], colorable["a" /* default */].options.methods.setTextColor(props.value && props.color, {
      props: {
        disabled: props.disabled,
        dark: props.dark,
        light: props.light
      }
    }), icon));
    const classes = {
      'v-simple-checkbox': true,
      'v-simple-checkbox--disabled': props.disabled
    };
    return h('div', Object(mergeData["a" /* default */])(data, {
      class: classes,
      on: {
        click: e => {
          e.stopPropagation();

          if (data.on && data.on.input && !props.disabled) {
            Object(helpers["A" /* wrapInArray */])(data.on.input).forEach(f => f(!props.value));
          }
        }
      }
    }), children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js
var VDivider = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSubheader/VSubheader.sass
var VSubheader = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
// Styles
 // Mixins



/* harmony default export */ var VSubheader_VSubheader = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-subheader',
  props: {
    inset: Boolean
  },

  render(h) {
    return h('div', {
      staticClass: 'v-subheader',
      class: {
        'v-subheader--inset': this.inset,
        ...this.themeClasses
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSubheader/index.js


/* harmony default export */ var components_VSubheader = (VSubheader_VSubheader);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var VList = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList_VList = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelectList.js
// Components



 // Directives

 // Mixins


 // Helpers

 // Types


/* @vue/component */

/* harmony default export */ var VSelectList = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-select-list',
  // https://github.com/vuejs/vue/issues/6872
  directives: {
    ripple: directives_ripple["a" /* default */]
  },
  props: {
    action: Boolean,
    dense: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    noDataText: String,
    noFilter: Boolean,
    searchInput: null,
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    parsedItems() {
      return this.selectedItems.map(item => this.getValue(item));
    },

    tileActiveClass() {
      return Object.keys(this.setTextColor(this.color).class || {}).join(' ');
    },

    staticNoDataTile() {
      const tile = {
        attrs: {
          role: undefined
        },
        on: {
          mousedown: e => e.preventDefault()
        }
      };
      return this.$createElement(VListItem["a" /* default */], tile, [this.genTileContent(this.noDataText)]);
    }

  },
  methods: {
    genAction(item, inputValue) {
      return this.$createElement(VListItemAction["a" /* default */], [this.$createElement(VCheckbox_VSimpleCheckbox, {
        props: {
          color: this.color,
          value: inputValue
        },
        on: {
          input: () => this.$emit('select', item)
        }
      })]);
    },

    genDivider(props) {
      return this.$createElement(VDivider["a" /* default */], {
        props
      });
    },

    genFilteredText(text) {
      text = text || '';
      if (!this.searchInput || this.noFilter) return Object(helpers["j" /* escapeHTML */])(text);
      const {
        start,
        middle,
        end
      } = this.getMaskedCharacters(text);
      return `${Object(helpers["j" /* escapeHTML */])(start)}${this.genHighlight(middle)}${Object(helpers["j" /* escapeHTML */])(end)}`;
    },

    genHeader(props) {
      return this.$createElement(components_VSubheader, {
        props
      }, props.header);
    },

    genHighlight(text) {
      return `<span class="v-list-item__mask">${Object(helpers["j" /* escapeHTML */])(text)}</span>`;
    },

    getMaskedCharacters(text) {
      const searchInput = (this.searchInput || '').toString().toLocaleLowerCase();
      const index = text.toLocaleLowerCase().indexOf(searchInput);
      if (index < 0) return {
        start: text,
        middle: '',
        end: ''
      };
      const start = text.slice(0, index);
      const middle = text.slice(index, index + searchInput.length);
      const end = text.slice(index + searchInput.length);
      return {
        start,
        middle,
        end
      };
    },

    genTile({
      item,
      index,
      disabled = null,
      value = false
    }) {
      if (!value) value = this.hasItem(item);

      if (item === Object(item)) {
        disabled = disabled !== null ? disabled : this.getDisabled(item);
      }

      const tile = {
        attrs: {
          // Default behavior in list does not
          // contain aria-selected by default
          'aria-selected': String(value),
          id: `list-item-${this._uid}-${index}`,
          role: 'option'
        },
        on: {
          mousedown: e => {
            // Prevent onBlur from being called
            e.preventDefault();
          },
          click: () => disabled || this.$emit('select', item)
        },
        props: {
          activeClass: this.tileActiveClass,
          disabled,
          ripple: true,
          inputValue: value
        }
      };

      if (!this.$scopedSlots.item) {
        return this.$createElement(VListItem["a" /* default */], tile, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(item, value) : null, this.genTileContent(item, index)]);
      }

      const parent = this;
      const scopedSlot = this.$scopedSlots.item({
        parent,
        item,
        attrs: { ...tile.attrs,
          ...tile.props
        },
        on: tile.on
      });
      return this.needsTile(scopedSlot) ? this.$createElement(VListItem["a" /* default */], tile, scopedSlot) : scopedSlot;
    },

    genTileContent(item, index = 0) {
      const innerHTML = this.genFilteredText(this.getText(item));
      return this.$createElement(VList["a" /* VListItemContent */], [this.$createElement(VList["c" /* VListItemTitle */], {
        domProps: {
          innerHTML
        }
      })]);
    },

    hasItem(item) {
      return this.parsedItems.indexOf(this.getValue(item)) > -1;
    },

    needsTile(slot) {
      return slot.length !== 1 || slot[0].componentOptions == null || slot[0].componentOptions.Ctor.options.name !== 'v-list-item';
    },

    getDisabled(item) {
      return Boolean(Object(helpers["n" /* getPropertyFromItem */])(item, this.itemDisabled, false));
    },

    getText(item) {
      return String(Object(helpers["n" /* getPropertyFromItem */])(item, this.itemText, item));
    },

    getValue(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
    }

  },

  render() {
    const children = [];
    const itemsLength = this.items.length;

    for (let index = 0; index < itemsLength; index++) {
      const item = this.items[index];
      if (this.hideSelected && this.hasItem(item)) continue;
      if (item == null) children.push(this.genTile({
        item,
        index
      }));else if (item.header) children.push(this.genHeader(item));else if (item.divider) children.push(this.genDivider(item));else children.push(this.genTile({
        item,
        index
      }));
    }

    children.length || children.push(this.$slots['no-data'] || this.staticNoDataTile);
    this.$slots['prepend-item'] && children.unshift(this.$slots['prepend-item']);
    this.$slots['append-item'] && children.push(this.$slots['append-item']);
    return this.$createElement(VList_VList["a" /* default */], {
      staticClass: 'v-select-list',
      class: this.themeClasses,
      attrs: {
        role: 'listbox',
        tabindex: -1
      },
      props: {
        dense: this.dense
      }
    }, children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField_VTextField = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/comparable/index.js
var comparable = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/filterable/index.js

/* @vue/component */

/* harmony default export */ var filterable = (external_vue_default.a.extend({
  name: 'filterable',
  props: {
    noDataText: {
      type: String,
      default: '$vuetify.noDataText'
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js
// Styles

 // Components



 // Extensions


 // Mixins



 // Directives

 // Utilities



 // Types


const defaultMenuProps = {
  closeOnClick: false,
  closeOnContentClick: false,
  disableKeys: true,
  openOnClick: false,
  maxHeight: 304
}; // Types

const baseMixins = Object(mixins["a" /* default */])(VTextField_VTextField["a" /* default */], comparable["a" /* default */], dependent["a" /* default */], filterable);
/* @vue/component */

/* harmony default export */ var VSelect_VSelect = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-select',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    appendIcon: {
      type: String,
      default: '$dropdown'
    },
    attach: {
      type: null,
      default: false
    },
    cacheItems: Boolean,
    chips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    disableLookup: Boolean,
    eager: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemColor: {
      type: String,
      default: 'primary'
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => defaultMenuProps
    },
    multiple: Boolean,
    openOnClear: Boolean,
    returnObject: Boolean,
    smallChips: Boolean
  },

  data() {
    return {
      cachedItems: this.cacheItems ? this.items : [],
      menuIsBooted: false,
      isMenuActive: false,
      lastItem: 20,
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      lazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      selectedIndex: -1,
      selectedItems: [],
      keyboardLookupPrefix: '',
      keyboardLookupLastTime: 0
    };
  },

  computed: {
    /* All items that the select has */
    allItems() {
      return this.filterDuplicates(this.cachedItems.concat(this.items));
    },

    classes() {
      return { ...VTextField_VTextField["a" /* default */].options.computed.classes.call(this),
        'v-select': true,
        'v-select--chips': this.hasChips,
        'v-select--chips--small': this.smallChips,
        'v-select--is-menu-active': this.isMenuActive,
        'v-select--is-multi': this.multiple
      };
    },

    /* Used by other components to overwrite */
    computedItems() {
      return this.allItems;
    },

    computedOwns() {
      return `list-${this._uid}`;
    },

    computedCounterValue() {
      return this.multiple ? this.selectedItems.length : (this.getText(this.selectedItems[0]) || '').toString().length;
    },

    directives() {
      return this.isFocused ? [{
        name: 'click-outside',
        value: {
          handler: this.blur,
          closeConditional: this.closeConditional,
          include: () => this.getOpenDependentElements()
        }
      }] : undefined;
    },

    dynamicHeight() {
      return 'auto';
    },

    hasChips() {
      return this.chips || this.smallChips;
    },

    hasSlot() {
      return Boolean(this.hasChips || this.$scopedSlots.selection);
    },

    isDirty() {
      return this.selectedItems.length > 0;
    },

    listData() {
      const scopeId = this.$vnode && this.$vnode.context.$options._scopeId;
      const attrs = scopeId ? {
        [scopeId]: true
      } : {};
      return {
        attrs: { ...attrs,
          id: this.computedOwns
        },
        props: {
          action: this.multiple,
          color: this.itemColor,
          dense: this.dense,
          hideSelected: this.hideSelected,
          items: this.virtualizedItems,
          itemDisabled: this.itemDisabled,
          itemText: this.itemText,
          itemValue: this.itemValue,
          noDataText: this.$vuetify.lang.t(this.noDataText),
          selectedItems: this.selectedItems
        },
        on: {
          select: this.selectItem
        },
        scopedSlots: {
          item: this.$scopedSlots.item
        }
      };
    },

    staticList() {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        Object(console["b" /* consoleError */])('assert: staticList should not be called if slots are used');
      }

      return this.$createElement(VSelectList, this.listData);
    },

    virtualizedItems() {
      return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem);
    },

    menuCanShow: () => true,

    $_menuProps() {
      let normalisedProps = typeof this.menuProps === 'string' ? this.menuProps.split(',') : this.menuProps;

      if (Array.isArray(normalisedProps)) {
        normalisedProps = normalisedProps.reduce((acc, p) => {
          acc[p.trim()] = true;
          return acc;
        }, {});
      }

      return { ...defaultMenuProps,
        eager: this.eager,
        value: this.menuCanShow && this.isMenuActive,
        nudgeBottom: normalisedProps.offsetY ? 1 : 0,
        ...normalisedProps
      };
    }

  },
  watch: {
    internalValue(val) {
      this.initialValue = val;
      this.setSelectedItems();
    },

    isMenuActive(val) {
      window.setTimeout(() => this.onMenuActiveChange(val));
    },

    items: {
      immediate: true,

      handler(val) {
        if (this.cacheItems) {
          // Breaks vue-test-utils if
          // this isn't calculated
          // on the next tick
          this.$nextTick(() => {
            this.cachedItems = this.filterDuplicates(this.cachedItems.concat(val));
          });
        }

        this.setSelectedItems();
      }

    }
  },
  methods: {
    /** @public */
    blur(e) {
      VTextField_VTextField["a" /* default */].options.methods.blur.call(this, e);
      this.isMenuActive = false;
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setMenuIndex(-1);
    },

    /** @public */
    activateMenu() {
      if (!this.isInteractive || this.isMenuActive) return;
      this.isMenuActive = true;
    },

    clearableCallback() {
      this.setValue(this.multiple ? [] : null);
      this.setMenuIndex(-1);
      this.$nextTick(() => this.$refs.input && this.$refs.input.focus());
      if (this.openOnClear) this.isMenuActive = true;
    },

    closeConditional(e) {
      if (!this.isMenuActive) return true;
      return !this._isDestroyed && ( // Click originates from outside the menu content
      // Multiple selects don't close when an item is clicked
      !this.getContent() || !this.getContent().contains(e.target)) && // Click originates from outside the element
      this.$el && !this.$el.contains(e.target) && e.target !== this.$el;
    },

    filterDuplicates(arr) {
      const uniqueValues = new Map();

      for (let index = 0; index < arr.length; ++index) {
        const item = arr[index]; // Do not deduplicate headers or dividers (#12517)

        if (item.header || item.divider) {
          uniqueValues.set(item, item);
          continue;
        }

        const val = this.getValue(item); // TODO: comparator

        !uniqueValues.has(val) && uniqueValues.set(val, item);
      }

      return Array.from(uniqueValues.values());
    },

    findExistingIndex(item) {
      const itemValue = this.getValue(item);
      return (this.internalValue || []).findIndex(i => this.valueComparator(this.getValue(i), itemValue));
    },

    getContent() {
      return this.$refs.menu && this.$refs.menu.$refs.content;
    },

    genChipSelection(item, index) {
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement(VChip["a" /* default */], {
        staticClass: 'v-chip--select',
        attrs: {
          tabindex: -1
        },
        props: {
          close: this.deletableChips && !isDisabled,
          disabled: isDisabled,
          inputValue: index === this.selectedIndex,
          small: this.smallChips
        },
        on: {
          click: e => {
            if (isDisabled) return;
            e.stopPropagation();
            this.selectedIndex = index;
          },
          'click:close': () => this.onChipInput(item)
        },
        key: JSON.stringify(this.getValue(item))
      }, this.getText(item));
    },

    genCommaSelection(item, index, last) {
      const color = index === this.selectedIndex && this.computedColor;
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-select__selection v-select__selection--comma',
        class: {
          'v-select__selection--disabled': isDisabled
        },
        key: JSON.stringify(this.getValue(item))
      }), `${this.getText(item)}${last ? '' : ', '}`);
    },

    genDefaultSlot() {
      const selections = this.genSelections();
      const input = this.genInput(); // If the return is an empty array
      // push the input

      if (Array.isArray(selections)) {
        selections.push(input); // Otherwise push it into children
      } else {
        selections.children = selections.children || [];
        selections.children.push(input);
      }

      return [this.genFieldset(), this.$createElement('div', {
        staticClass: 'v-select__slot',
        directives: this.directives
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, selections, this.suffix ? this.genAffix('suffix') : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()];
    },

    genIcon(type, cb, extraData) {
      const icon = VInput["a" /* default */].options.methods.genIcon.call(this, type, cb, extraData);

      if (type === 'append') {
        // Don't allow the dropdown icon to be focused
        icon.children[0].data = Object(mergeData["a" /* default */])(icon.children[0].data, {
          attrs: {
            tabindex: icon.children[0].componentOptions.listeners && '-1',
            'aria-hidden': 'true',
            'aria-label': undefined
          }
        });
      }

      return icon;
    },

    genInput() {
      const input = VTextField_VTextField["a" /* default */].options.methods.genInput.call(this);
      delete input.data.attrs.name;
      input.data = Object(mergeData["a" /* default */])(input.data, {
        domProps: {
          value: null
        },
        attrs: {
          readonly: true,
          type: 'text',
          'aria-readonly': String(this.isReadonly),
          'aria-activedescendant': Object(helpers["m" /* getObjectValueByPath */])(this.$refs.menu, 'activeTile.id'),
          autocomplete: Object(helpers["m" /* getObjectValueByPath */])(input.data, 'attrs.autocomplete', 'off')
        },
        on: {
          keypress: this.onKeyPress
        }
      });
      return input;
    },

    genHiddenInput() {
      return this.$createElement('input', {
        domProps: {
          value: this.lazyValue
        },
        attrs: {
          type: 'hidden',
          name: this.attrs$.name
        }
      });
    },

    genInputSlot() {
      const render = VTextField_VTextField["a" /* default */].options.methods.genInputSlot.call(this);
      render.data.attrs = { ...render.data.attrs,
        role: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isMenuActive),
        'aria-owns': this.computedOwns
      };
      return render;
    },

    genList() {
      // If there's no slots, we can use a cached VNode to improve performance
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        return this.genListWithSlot();
      } else {
        return this.staticList;
      }
    },

    genListWithSlot() {
      const slots = ['prepend-item', 'no-data', 'append-item'].filter(slotName => this.$slots[slotName]).map(slotName => this.$createElement('template', {
        slot: slotName
      }, this.$slots[slotName])); // Requires destructuring due to Vue
      // modifying the `on` property when passed
      // as a referenced object

      return this.$createElement(VSelectList, { ...this.listData
      }, slots);
    },

    genMenu() {
      const props = this.$_menuProps;
      props.activator = this.$refs['input-slot']; // Attach to root el so that
      // menu covers prepend/append icons

      if ( // TODO: make this a computed property or helper or something
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) {
          props.attach = this.$el;
        } else {
        props.attach = this.attach;
      }

      return this.$createElement(VMenu["a" /* default */], {
        attrs: {
          role: undefined
        },
        props,
        on: {
          input: val => {
            this.isMenuActive = val;
            this.isFocused = val;
          },
          scroll: this.onScroll
        },
        ref: 'menu'
      }, [this.genList()]);
    },

    genSelections() {
      let length = this.selectedItems.length;
      const children = new Array(length);
      let genSelection;

      if (this.$scopedSlots.selection) {
        genSelection = this.genSlotSelection;
      } else if (this.hasChips) {
        genSelection = this.genChipSelection;
      } else {
        genSelection = this.genCommaSelection;
      }

      while (length--) {
        children[length] = genSelection(this.selectedItems[length], length, length === children.length - 1);
      }

      return this.$createElement('div', {
        staticClass: 'v-select__selections'
      }, children);
    },

    genSlotSelection(item, index) {
      return this.$scopedSlots.selection({
        attrs: {
          class: 'v-chip--select'
        },
        parent: this,
        item,
        index,
        select: e => {
          e.stopPropagation();
          this.selectedIndex = index;
        },
        selected: index === this.selectedIndex,
        disabled: !this.isInteractive
      });
    },

    getMenuIndex() {
      return this.$refs.menu ? this.$refs.menu.listIndex : -1;
    },

    getDisabled(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemDisabled, false);
    },

    getText(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemText, item);
    },

    getValue(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
    },

    onBlur(e) {
      e && this.$emit('blur', e);
    },

    onChipInput(item) {
      if (this.multiple) this.selectItem(item);else this.setValue(null); // If all items have been deleted,
      // open `v-menu`

      if (this.selectedItems.length === 0) {
        this.isMenuActive = true;
      } else {
        this.isMenuActive = false;
      }

      this.selectedIndex = -1;
    },

    onClick(e) {
      if (!this.isInteractive) return;

      if (!this.isAppendInner(e.target)) {
        this.isMenuActive = true;
      }

      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit('focus');
      }

      this.$emit('click', e);
    },

    onEscDown(e) {
      e.preventDefault();

      if (this.isMenuActive) {
        e.stopPropagation();
        this.isMenuActive = false;
      }
    },

    onKeyPress(e) {
      if (this.multiple || !this.isInteractive || this.disableLookup) return;
      const KEYBOARD_LOOKUP_THRESHOLD = 1000; // milliseconds

      const now = performance.now();

      if (now - this.keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        this.keyboardLookupPrefix = '';
      }

      this.keyboardLookupPrefix += e.key.toLowerCase();
      this.keyboardLookupLastTime = now;
      const index = this.allItems.findIndex(item => {
        const text = (this.getText(item) || '').toString();
        return text.toLowerCase().startsWith(this.keyboardLookupPrefix);
      });
      const item = this.allItems[index];

      if (index !== -1) {
        this.lastItem = Math.max(this.lastItem, index + 5);
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.$nextTick(() => this.$refs.menu.getTiles());
        setTimeout(() => this.setMenuIndex(index));
      }
    },

    onKeyDown(e) {
      if (this.isReadonly && e.keyCode !== helpers["t" /* keyCodes */].tab) return;
      const keyCode = e.keyCode;
      const menu = this.$refs.menu; // If enter, space, open menu

      if ([helpers["t" /* keyCodes */].enter, helpers["t" /* keyCodes */].space].includes(keyCode)) this.activateMenu();
      this.$emit('keydown', e);
      if (!menu) return; // If menu is active, allow default
      // listIndex change from menu

      if (this.isMenuActive && keyCode !== helpers["t" /* keyCodes */].tab) {
        this.$nextTick(() => {
          menu.changeListIndex(e);
          this.$emit('update:list-index', menu.listIndex);
        });
      } // If menu is not active, up/down/home/end can do
      // one of 2 things. If multiple, opens the
      // menu, if not, will cycle through all
      // available options


      if (!this.isMenuActive && [helpers["t" /* keyCodes */].up, helpers["t" /* keyCodes */].down, helpers["t" /* keyCodes */].home, helpers["t" /* keyCodes */].end].includes(keyCode)) return this.onUpDown(e); // If escape deactivate the menu

      if (keyCode === helpers["t" /* keyCodes */].esc) return this.onEscDown(e); // If tab - select item or close menu

      if (keyCode === helpers["t" /* keyCodes */].tab) return this.onTabDown(e); // If space preventDefault

      if (keyCode === helpers["t" /* keyCodes */].space) return this.onSpaceDown(e);
    },

    onMenuActiveChange(val) {
      // If menu is closing and mulitple
      // or menuIndex is already set
      // skip menu index recalculation
      if (this.multiple && !val || this.getMenuIndex() > -1) return;
      const menu = this.$refs.menu;
      if (!menu || !this.isDirty) return; // When menu opens, set index of first active item

      for (let i = 0; i < menu.tiles.length; i++) {
        if (menu.tiles[i].getAttribute('aria-selected') === 'true') {
          this.setMenuIndex(i);
          break;
        }
      }
    },

    onMouseUp(e) {
      // eslint-disable-next-line sonarjs/no-collapsible-if
      if (this.hasMouseDown && e.which !== 3 && this.isInteractive) {
        // If append inner is present
        // and the target is itself
        // or inside, toggle menu
        if (this.isAppendInner(e.target)) {
          this.$nextTick(() => this.isMenuActive = !this.isMenuActive);
        }
      }

      VTextField_VTextField["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    onScroll() {
      if (!this.isMenuActive) {
        requestAnimationFrame(() => this.getContent().scrollTop = 0);
      } else {
        if (this.lastItem > this.computedItems.length) return;
        const showMoreItems = this.getContent().scrollHeight - (this.getContent().scrollTop + this.getContent().clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },

    onSpaceDown(e) {
      e.preventDefault();
    },

    onTabDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      const activeTile = menu.activeTile; // An item that is selected by
      // menu-index should toggled

      if (!this.multiple && activeTile && this.isMenuActive) {
        e.preventDefault();
        e.stopPropagation();
        activeTile.click();
      } else {
        // If we make it here,
        // the user has no selected indexes
        // and is probably tabbing out
        this.blur(e);
      }
    },

    onUpDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      e.preventDefault(); // Multiple selects do not cycle their value
      // when pressing up or down, instead activate
      // the menu

      if (this.multiple) return this.activateMenu();
      const keyCode = e.keyCode; // Cycle through available values to achieve
      // select native behavior

      menu.isBooted = true;
      window.requestAnimationFrame(() => {
        menu.getTiles();

        switch (keyCode) {
          case helpers["t" /* keyCodes */].up:
            menu.prevTile();
            break;

          case helpers["t" /* keyCodes */].down:
            menu.nextTile();
            break;

          case helpers["t" /* keyCodes */].home:
            menu.firstTile();
            break;

          case helpers["t" /* keyCodes */].end:
            menu.lastTile();
            break;
        }

        menu.activeTile && menu.activeTile.click();
      });
    },

    selectItem(item) {
      if (!this.multiple) {
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.isMenuActive = false;
      } else {
        const internalValue = (this.internalValue || []).slice();
        const i = this.findExistingIndex(item);
        i !== -1 ? internalValue.splice(i, 1) : internalValue.push(item);
        this.setValue(internalValue.map(i => {
          return this.returnObject ? i : this.getValue(i);
        })); // When selecting multiple
        // adjust menu after each
        // selection

        this.$nextTick(() => {
          this.$refs.menu && this.$refs.menu.updateDimensions();
        }); // We only need to reset list index for multiple
        // to keep highlight when an item is toggled
        // on and off

        if (!this.multiple) return;
        const listIndex = this.getMenuIndex();
        this.setMenuIndex(-1); // There is no item to re-highlight
        // when selections are hidden

        if (this.hideSelected) return;
        this.$nextTick(() => this.setMenuIndex(listIndex));
      }
    },

    setMenuIndex(index) {
      this.$refs.menu && (this.$refs.menu.listIndex = index);
    },

    setSelectedItems() {
      const selectedItems = [];
      const values = !this.multiple || !Array.isArray(this.internalValue) ? [this.internalValue] : this.internalValue;

      for (const value of values) {
        const index = this.allItems.findIndex(v => this.valueComparator(this.getValue(v), this.getValue(value)));

        if (index > -1) {
          selectedItems.push(this.allItems[index]);
        }
      }

      this.selectedItems = selectedItems;
    },

    setValue(value) {
      const oldValue = this.internalValue;
      this.internalValue = value;
      value !== oldValue && this.$emit('change', value);
    },

    isAppendInner(target) {
      // return true if append inner is present
      // and the target is itself or inside
      const appendInner = this.$refs['append-inner'];
      return appendInner && (appendInner === target || appendInner.contains(target));
    }

  }
}));

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=template&id=3ec8bad6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('section',{staticStyle:{"height":"100%"}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('v-card',{staticClass:"mx-auto",staticStyle:{"z-index":"50","position":"relative"},attrs:{"max-width":"400"}},[_c('v-toolbar',{attrs:{"color":"white","light":""}},[_c('v-col',{attrs:{"cols":"12"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('a',{staticClass:"my-1",staticStyle:{"font-weight":"bolder","font-size":"22px","color":"#424242"}},[_vm._v("\nRegister\n     ")])])],1)],1)],1),_vm._v(" "),_c('validation-observer',{ref:"observer",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.login($event)}}},[_c('v-card-text',[_c('v-col',{attrs:{"cols":"12"}},[_c('v-col',{attrs:{"cols":"12"}},[_c('validation-provider',{attrs:{"name":"Register As","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('v-select',{attrs:{"label":"Register As","error-messages":errors,"items":_vm.option,"outlined":"","persistent-hint":"","item-text":"text","item-value":"value"},model:{value:(_vm.data),callback:function ($$v) {_vm.data=$$v},expression:"data"}})]}}],null,true)})],1)],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/login"}},[_c('a',{staticClass:"text-left ml-4",staticStyle:{"font-size":"14px","color":"#2196F3","font-weight":"bold"}},[_vm._v("\n                                Sudah punya akun ? Login disini !\n                            ")])]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"pa-5",staticStyle:{"font-weight":"bold"},attrs:{"color":"primary","disabled":invalid,"rounded":""},on:{"click":_vm.proceed}},[_vm._v("\n                            NEXT\n                              ")])],1)],1)]}}])})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"wave wave1"}),_vm._v(" "),_c('div',{staticClass:"wave wave2"}),_vm._v(" "),_c('div',{staticClass:"wave wave3"}),_vm._v(" "),_c('div',{staticClass:"wave wave4"})],1),_vm._v(" "),_c('notifications',{attrs:{"group":"foo"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=template&id=3ec8bad6&

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(282);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate["setInteractionMode"])("eager");
Object(vee_validate["extend"])("required", { ...rules["f" /* required */],
  message: "{_field_} can not be empty"
});

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  auth: false,
  layout: "empty",
  components: {
    ValidationProvider: vee_validate["ValidationProvider"],
    ValidationObserver: vee_validate["ValidationObserver"]
  },

  data() {
    return {
      option: [{
        text: "Student",
        value: 0
      }, {
        text: "Teacher",
        value: 1
      }],
      data: 0
    };
  },

  mounted() {
    if (this.$auth.loggedIn) {
      if (this.$auth.$state.user.is_teacher == 0) {
        this.$router.push('/student');
      }

      if (this.$auth.$state.user.is_teacher == 1) {
        this.$router.push('/teacher');
      }
    }
  },

  methods: {
    proceed() {
      if (this.data == 0) {
        this.$router.push('/register/student');
      } else if (this.data == 1) {
        this.$router.push('/register/teacher');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 5 modules
var VSelect = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/register/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f941f80"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */













installComponents_default()(component, {VApp: VApp["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);


/* harmony default export */ __webpack_exports__["a"] = (_VDivider__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=index.js.map