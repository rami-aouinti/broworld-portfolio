(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./login-controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./node_modules/@symfony/ux-live-component/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./node_modules/@symfony/ux-live-component/dist/live.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_date_to-primitive_js-node_modules_core-js_modules_es_-206d3b"), __webpack_require__.e("assets_controllers_login-controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/login-controller.js */ "./assets/controllers/login-controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/alert */ "./node_modules/bootstrap/js/dist/alert.js");
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/tab */ "./node_modules/bootstrap/js/dist/tab.js");
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_flatpicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/flatpicker */ "./assets/js/flatpicker.js");


// loads the Bootstrap plugins







// loads the code syntax highlighting library


// Creates links to the Symfony documentation


// start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// Wraps some elements in anchor tags referencing to the Symfony documentation
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
document.addEventListener('DOMContentLoaded', function () {
  var modalElt = document.querySelector('#sourceCodeModal');
  if (!modalElt) {
    return;
  }
  var controllerCode = modalElt.querySelector('code.php');
  var templateCode = modalElt.querySelector('code.twig');
  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }
  function wrap(content, links) {
    return content.replace(new RegExp(Object.keys(links).join('|'), 'g'), function (token) {
      return anchor(links[token], token);
    });
  }

  // Wrap Symfony Doc urls in comments
  _toConsumableArray(modalElt.querySelectorAll('.hljs-comment')).forEach(function (commentElt) {
    commentElt.innerHTML = commentElt.innerHTML.replace(/https:\/\/symfony.com\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    });
  });

  // Wraps Symfony PHP attributes in code
  var attributes = {
    'Cache': 'https://symfony.com/doc/current/http_cache.html#http-cache-expiration-intro',
    'Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-attributes',
    'IsGranted': 'https://symfony.com/doc/current/security.html#security-securing-controller-annotations'
  };
  _toConsumableArray(controllerCode.querySelectorAll('.hljs-meta')).forEach(function (elt) {
    elt.innerHTML = wrap(elt.textContent, attributes);
  });

  // Wraps Twig's tags
  _toConsumableArray(templateCode.querySelectorAll('.hljs-template-tag + .hljs-name')).forEach(function (elt) {
    var tag = elt.textContent;
    if ('else' === tag || tag.match(/^end/)) {
      return;
    }
    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    elt.innerHTML = anchor(url, tag);
  });

  // Wraps Twig's functions
  _toConsumableArray(templateCode.querySelectorAll('.hljs-template-variable > .hljs-name')).forEach(function (elt) {
    var func = elt.textContent;
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    elt.innerHTML = anchor(url, func);
  });
});

/***/ }),

/***/ "./assets/js/flatpicker.js":
/*!*********************************!*\
  !*** ./assets/js/flatpicker.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/l10n */ "./node_modules/flatpickr/dist/l10n/index.js");
/* harmony import */ var flatpickr_dist_l10n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n__WEBPACK_IMPORTED_MODULE_3__);




flatpickr.defaultConfig.animate = window.navigator.userAgent.indexOf('MSIE') === -1;
var lang = document.documentElement.getAttribute('lang') || 'en';
var Locale = (flatpickr_dist_l10n__WEBPACK_IMPORTED_MODULE_3___default())["".concat(lang)] || (flatpickr_dist_l10n__WEBPACK_IMPORTED_MODULE_3___default()["default"]);
flatpickr.localize(Locale);
var configs = {
  standard: {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    allowInput: true,
    time_24hr: true,
    defaultHour: 24,
    parseDate: function parseDate(datestr, format) {
      return flatpickr.parseDate(datestr, format);
    },
    formatDate: function formatDate(date, format, locale) {
      return flatpickr.formatDate(date, format);
    }
  }
};
var flatpickrs = document.querySelectorAll(".flatpickr");
for (var i = 0; i < flatpickrs.length; i++) {
  var element = flatpickrs[i];
  var configValue = configs[element.getAttribute("data-flatpickr-class")] || {};
  // Overrides the default format with the one sent by data attribute
  configValue.dateFormat = element.getAttribute("data-date-format") || 'Y-m-d H:i';
  // ...and then initialize the flatpickr
  flatpickr(element, configValue);
}

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js");



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('php', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('twig', highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAll();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_add-to-unscopables_-ceece7","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-live-compo-306ef3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI4RTtBQUN4QjtBQUN0RCxpRUFBZTtBQUNmLFVBQVUsMEZBQVk7QUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0orQztBQUNoRCxpQ0FBaUMsMERBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsNFdBQXdHO0FBQ2hIO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjJCOztBQUUzQjtBQUNpQztBQUNHO0FBQ0E7QUFDTDtBQUNFO0FBQ2xCOztBQUVmO0FBQzJCOztBQUUzQjtBQUMwQjs7QUFFMUI7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ1Qzs7QUFFNUQ7QUFDTyxJQUFNQyxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQUEsU0FBQUUsbUJBQUFDLEdBQUEsV0FBQUMsa0JBQUEsQ0FBQUQsR0FBQSxLQUFBRSxnQkFBQSxDQUFBRixHQUFBLEtBQUFHLDJCQUFBLENBQUFILEdBQUEsS0FBQUksa0JBQUE7QUFBQSxTQUFBQSxtQkFBQSxjQUFBQyxTQUFBO0FBQUEsU0FBQUYsNEJBQUFHLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsQ0FBQUMsUUFBQSxDQUFBQyxJQUFBLENBQUFQLENBQUEsRUFBQVEsS0FBQSxhQUFBTCxDQUFBLGlCQUFBSCxDQUFBLENBQUFTLFdBQUEsRUFBQU4sQ0FBQSxHQUFBSCxDQUFBLENBQUFTLFdBQUEsQ0FBQUMsSUFBQSxNQUFBUCxDQUFBLGNBQUFBLENBQUEsbUJBQUFRLEtBQUEsQ0FBQUMsSUFBQSxDQUFBWixDQUFBLE9BQUFHLENBQUEsK0RBQUFVLElBQUEsQ0FBQVYsQ0FBQSxVQUFBRCxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBTCxpQkFBQWtCLElBQUEsZUFBQUMsTUFBQSxvQkFBQUQsSUFBQSxDQUFBQyxNQUFBLENBQUFDLFFBQUEsYUFBQUYsSUFBQSwrQkFBQUgsS0FBQSxDQUFBQyxJQUFBLENBQUFFLElBQUE7QUFBQSxTQUFBbkIsbUJBQUFELEdBQUEsUUFBQWlCLEtBQUEsQ0FBQU0sT0FBQSxDQUFBdkIsR0FBQSxVQUFBUSxpQkFBQSxDQUFBUixHQUFBO0FBQUEsU0FBQVEsa0JBQUFSLEdBQUEsRUFBQXdCLEdBQUEsUUFBQUEsR0FBQSxZQUFBQSxHQUFBLEdBQUF4QixHQUFBLENBQUF5QixNQUFBLEVBQUFELEdBQUEsR0FBQXhCLEdBQUEsQ0FBQXlCLE1BQUEsV0FBQUMsQ0FBQSxNQUFBQyxJQUFBLE9BQUFWLEtBQUEsQ0FBQU8sR0FBQSxHQUFBRSxDQUFBLEdBQUFGLEdBQUEsRUFBQUUsQ0FBQSxJQUFBQyxJQUFBLENBQUFELENBQUEsSUFBQTFCLEdBQUEsQ0FBQTBCLENBQUEsVUFBQUMsSUFBQTtBQUFBOUIsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFDQStCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzNELElBQUksQ0FBQ0QsUUFBUSxFQUFFO0lBQ1g7RUFDSjtFQUNBLElBQU1FLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ3pELElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBRXhELFNBQVNHLE1BQU1BLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFO0lBQzFCLE9BQU8sMkNBQTJDLEdBQUdELEdBQUcsR0FBRyxJQUFJLEdBQUdDLE9BQU8sR0FBRyxNQUFNO0VBQ3RGO0VBRUEsU0FBU0MsSUFBSUEsQ0FBQ0QsT0FBTyxFQUFFRSxLQUFLLEVBQUU7SUFDMUIsT0FBT0YsT0FBTyxDQUFDRyxPQUFPLENBQ2xCLElBQUlDLE1BQU0sQ0FBQzlCLE1BQU0sQ0FBQytCLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDN0MsVUFBQUMsS0FBSztNQUFBLE9BQUlULE1BQU0sQ0FBQ0ksS0FBSyxDQUFDSyxLQUFLLENBQUMsRUFBRUEsS0FBSyxDQUFDO0lBQUEsQ0FDeEMsQ0FBQztFQUNMOztFQUVBO0VBQ0E1QyxrQkFBQSxDQUFJK0IsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUNDLFVBQVUsRUFBSztJQUNwRUEsVUFBVSxDQUFDQyxTQUFTLEdBQUdELFVBQVUsQ0FBQ0MsU0FBUyxDQUFDUixPQUFPLENBQUMsbUNBQW1DLEVBQUUsVUFBQ0osR0FBRztNQUFBLE9BQUtELE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQSxHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3ZILENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1hLFVBQVUsR0FBRztJQUNmLE9BQU8sRUFBRSw2RUFBNkU7SUFDdEYsT0FBTyxFQUFFLDRFQUE0RTtJQUNyRixXQUFXLEVBQUU7RUFDakIsQ0FBQztFQUNEakQsa0JBQUEsQ0FBSWlDLGNBQWMsQ0FBQ1ksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFDSSxHQUFHLEVBQUs7SUFDaEVBLEdBQUcsQ0FBQ0YsU0FBUyxHQUFHVixJQUFJLENBQUNZLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFRixVQUFVLENBQUM7RUFDckQsQ0FBQyxDQUFDOztFQUVGO0VBQ0FqRCxrQkFBQSxDQUFJa0MsWUFBWSxDQUFDVyxnQkFBZ0IsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQ0ksR0FBRyxFQUFLO0lBQ25GLElBQU1FLEdBQUcsR0FBR0YsR0FBRyxDQUFDQyxXQUFXO0lBQzNCLElBQUksTUFBTSxLQUFLQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQ3JDO0lBQ0o7SUFDQSxJQUFNakIsR0FBRyxHQUFHLHdDQUF3QyxHQUFHZ0IsR0FBRyxHQUFHLFFBQVEsR0FBR0EsR0FBRztJQUMzRUYsR0FBRyxDQUFDRixTQUFTLEdBQUdiLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFZ0IsR0FBRyxDQUFDO0VBQ3BDLENBQUMsQ0FBQzs7RUFFRjtFQUNBcEQsa0JBQUEsQ0FBSWtDLFlBQVksQ0FBQ1csZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUNJLEdBQUcsRUFBSztJQUN4RixJQUFNSSxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0MsV0FBVztJQUM1QixJQUFNZixHQUFHLEdBQUcsNkNBQTZDLEdBQUdrQixJQUFJLEdBQUcsUUFBUSxHQUFHQSxJQUFJO0lBQ2xGSixHQUFHLENBQUNGLFNBQVMsR0FBR2IsTUFBTSxDQUFDQyxHQUFHLEVBQUVrQixJQUFJLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRpQjtBQUNtQjtBQUNDO0FBRXZDRSxTQUFTLENBQUNDLGFBQWEsQ0FBQ0MsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25GLElBQUlDLElBQUksR0FBR2xDLFFBQVEsQ0FBQ21DLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUk7QUFDaEUsSUFBTUMsTUFBTSxHQUFHWCw0REFBSSxJQUFBWSxNQUFBLENBQUlKLElBQUksRUFBRyxJQUFJUix1RUFBWTtBQUM5Q0MsU0FBUyxDQUFDWSxRQUFRLENBQUNGLE1BQU0sQ0FBQztBQUMxQixJQUFNRyxPQUFPLEdBQUc7RUFDWkMsUUFBUSxFQUFFO0lBQ05DLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxVQUFVLEVBQUUsV0FBVztJQUN2QkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLFNBQVMsRUFBRSxTQUFBQSxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUM1QixPQUFPdEIsU0FBUyxDQUFDb0IsU0FBUyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0lBQ0RDLFVBQVUsRUFBRSxTQUFBQSxXQUFDQyxJQUFJLEVBQUVGLE1BQU0sRUFBRUcsTUFBTSxFQUFLO01BQ2xDLE9BQU96QixTQUFTLENBQUN1QixVQUFVLENBQUNDLElBQUksRUFBRUYsTUFBTSxDQUFDO0lBQzdDO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTUksVUFBVSxHQUFHckQsUUFBUSxDQUFDZ0IsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0FBQzFELEtBQUssSUFBSWxCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3VELFVBQVUsQ0FBQ3hELE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEVBQUU7RUFDeEMsSUFBSXdELE9BQU8sR0FBR0QsVUFBVSxDQUFDdkQsQ0FBQyxDQUFDO0VBQzNCLElBQUl5RCxXQUFXLEdBQUdmLE9BQU8sQ0FBQ2MsT0FBTyxDQUFDbEIsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0U7RUFDQW1CLFdBQVcsQ0FBQ1osVUFBVSxHQUFHVyxPQUFPLENBQUNsQixZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxXQUFXO0VBQ2hGO0VBQ0FULFNBQVMsQ0FBQzJCLE9BQU8sRUFBRUMsV0FBVyxDQUFDO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ3lDO0FBQ1E7QUFDRTtBQUVuREMsNkRBQUksQ0FBQ0csZ0JBQWdCLENBQUMsS0FBSyxFQUFFRixzRUFBRyxDQUFDO0FBQ2pDRCw2REFBSSxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVELHVFQUFJLENBQUM7QUFFbkNGLDZEQUFJLENBQUNJLFlBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNQbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW4tY29udHJvbGxlci5qcz82Yzk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZsYXRwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2xvZ2luLWNvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbi1jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5jb250cm9sbGVycy5maW5kKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW1wb3J0KCcvVXNlcnMvcmFtaS9QaHBzdG9ybVByb2plY3RzLzIwMjMvU3ltZm9ueSBQcm9qZWN0cy9CbG9nL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbi1jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gbG9hZHMgdGhlIEJvb3RzdHJhcCBwbHVnaW5zXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2FsZXJ0JztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbmltcG9ydCAnanF1ZXJ5J1xuXG4vLyBsb2FkcyB0aGUgY29kZSBzeW50YXggaGlnaGxpZ2h0aW5nIGxpYnJhcnlcbmltcG9ydCAnLi9qcy9oaWdobGlnaHQuanMnO1xuXG4vLyBDcmVhdGVzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbmltcG9ydCAnLi9qcy9kb2NsaW5rcy5qcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAnLi9qcy9mbGF0cGlja2VyJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXcmFwcyBzb21lIGVsZW1lbnRzIGluIGFuY2hvciB0YWdzIHJlZmVyZW5jaW5nIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb2RhbEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VyY2VDb2RlTW9kYWwnKTtcbiAgICBpZiAoIW1vZGFsRWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbGxlckNvZGUgPSBtb2RhbEVsdC5xdWVyeVNlbGVjdG9yKCdjb2RlLnBocCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlQ29kZSA9IG1vZGFsRWx0LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUudHdpZycpO1xuXG4gICAgZnVuY3Rpb24gYW5jaG9yKHVybCwgY29udGVudCkge1xuICAgICAgICByZXR1cm4gJzxhIGNsYXNzPVwiZG9jbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgdXJsICsgJ1wiPicgKyBjb250ZW50ICsgJzwvYT4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyYXAoY29udGVudCwgbGlua3MpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIG5ldyBSZWdFeHAoT2JqZWN0LmtleXMobGlua3MpLmpvaW4oJ3wnKSwgJ2cnKSxcbiAgICAgICAgICAgIHRva2VuID0+IGFuY2hvcihsaW5rc1t0b2tlbl0sIHRva2VuKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFdyYXAgU3ltZm9ueSBEb2MgdXJscyBpbiBjb21tZW50c1xuICAgIFsuLi5tb2RhbEVsdC5xdWVyeVNlbGVjdG9yQWxsKCcuaGxqcy1jb21tZW50JyldLmZvckVhY2goKGNvbW1lbnRFbHQpID0+IHtcbiAgICAgICAgY29tbWVudEVsdC5pbm5lckhUTUwgPSBjb21tZW50RWx0LmlubmVySFRNTC5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL1tcXHcvLiMtXSsvZywgKHVybCkgPT4gYW5jaG9yKHVybCwgdXJsKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXcmFwcyBTeW1mb255IFBIUCBhdHRyaWJ1dGVzIGluIGNvZGVcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICAgICAnQ2FjaGUnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9odHRwX2NhY2hlLmh0bWwjaHR0cC1jYWNoZS1leHBpcmF0aW9uLWludHJvJyxcbiAgICAgICAgJ1JvdXRlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvcm91dGluZy5odG1sI2NyZWF0aW5nLXJvdXRlcy1hcy1hdHRyaWJ1dGVzJyxcbiAgICAgICAgJ0lzR3JhbnRlZCc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3NlY3VyaXR5Lmh0bWwjc2VjdXJpdHktc2VjdXJpbmctY29udHJvbGxlci1hbm5vdGF0aW9ucydcbiAgICB9O1xuICAgIFsuLi5jb250cm9sbGVyQ29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuaGxqcy1tZXRhJyldLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBlbHQuaW5uZXJIVE1MID0gd3JhcChlbHQudGV4dENvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIHRhZ3NcbiAgICBbLi4udGVtcGxhdGVDb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5obGpzLXRlbXBsYXRlLXRhZyArIC5obGpzLW5hbWUnKV0uZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZyA9IGVsdC50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKCdlbHNlJyA9PT0gdGFnIHx8IHRhZy5tYXRjaCgvXmVuZC8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L3RhZ3MvJyArIHRhZyArICcuaHRtbCMnICsgdGFnO1xuICAgICAgICBlbHQuaW5uZXJIVE1MID0gYW5jaG9yKHVybCwgdGFnKTtcbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFR3aWcncyBmdW5jdGlvbnNcbiAgICBbLi4udGVtcGxhdGVDb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5obGpzLXRlbXBsYXRlLXZhcmlhYmxlID4gLmhsanMtbmFtZScpXS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGVsdC50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L2Z1bmN0aW9ucy8nICsgZnVuYyArICcuaHRtbCMnICsgZnVuYztcbiAgICAgICAgZWx0LmlubmVySFRNTCA9IGFuY2hvcih1cmwsIGZ1bmMpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgJ2ZsYXRwaWNrcic7XG5pbXBvcnQgJ2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3MnO1xuaW1wb3J0IGwxMG4gZnJvbSBcImZsYXRwaWNrci9kaXN0L2wxMG5cIjtcblxuZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuYW5pbWF0ZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTE7XG5sZXQgbGFuZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fCAnZW4nO1xuY29uc3QgTG9jYWxlID0gbDEwbltgJHtsYW5nfWBdIHx8IGwxMG4uZGVmYXVsdDtcbmZsYXRwaWNrci5sb2NhbGl6ZShMb2NhbGUpO1xuY29uc3QgY29uZmlncyA9IHtcbiAgICBzdGFuZGFyZDoge1xuICAgICAgICBlbmFibGVUaW1lOiB0cnVlLFxuICAgICAgICBkYXRlRm9ybWF0OiBcIlktbS1kIEg6aVwiLFxuICAgICAgICBhbGxvd0lucHV0OiB0cnVlLFxuICAgICAgICB0aW1lXzI0aHI6IHRydWUsXG4gICAgICAgIGRlZmF1bHRIb3VyOiAyNCxcbiAgICAgICAgcGFyc2VEYXRlOiAoZGF0ZXN0ciwgZm9ybWF0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmxhdHBpY2tyLnBhcnNlRGF0ZShkYXRlc3RyLCBmb3JtYXQpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXREYXRlOiAoZGF0ZSwgZm9ybWF0LCBsb2NhbGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0cGlja3IuZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgZmxhdHBpY2tycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmxhdHBpY2tyXCIpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBmbGF0cGlja3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmbGF0cGlja3JzW2ldO1xuICAgIGxldCBjb25maWdWYWx1ZSA9IGNvbmZpZ3NbZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZsYXRwaWNrci1jbGFzc1wiKV0gfHwge307XG4gICAgLy8gT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGZvcm1hdCB3aXRoIHRoZSBvbmUgc2VudCBieSBkYXRhIGF0dHJpYnV0ZVxuICAgIGNvbmZpZ1ZhbHVlLmRhdGVGb3JtYXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZS1mb3JtYXRcIikgfHwgJ1ktbS1kIEg6aSc7XG4gICAgLy8gLi4uYW5kIHRoZW4gaW5pdGlhbGl6ZSB0aGUgZmxhdHBpY2tyXG4gICAgZmxhdHBpY2tyKGVsZW1lbnQsIGNvbmZpZ1ZhbHVlKTtcbn1cbiIsImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQgcGhwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocCc7XG5pbXBvcnQgdHdpZyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90d2lnJztcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdwaHAnLCBwaHApO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0d2lnJywgdHdpZyk7XG5cbmhsanMuaGlnaGxpZ2h0QWxsKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpc0FycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbEVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250cm9sbGVyQ29kZSIsInRlbXBsYXRlQ29kZSIsImFuY2hvciIsInVybCIsImNvbnRlbnQiLCJ3cmFwIiwibGlua3MiLCJyZXBsYWNlIiwiUmVnRXhwIiwia2V5cyIsImpvaW4iLCJ0b2tlbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29tbWVudEVsdCIsImlubmVySFRNTCIsImF0dHJpYnV0ZXMiLCJlbHQiLCJ0ZXh0Q29udGVudCIsInRhZyIsIm1hdGNoIiwiZnVuYyIsImwxMG4iLCJmbGF0cGlja3IiLCJkZWZhdWx0Q29uZmlnIiwiYW5pbWF0ZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJsYW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiTG9jYWxlIiwiY29uY2F0IiwibG9jYWxpemUiLCJjb25maWdzIiwic3RhbmRhcmQiLCJlbmFibGVUaW1lIiwiZGF0ZUZvcm1hdCIsImFsbG93SW5wdXQiLCJ0aW1lXzI0aHIiLCJkZWZhdWx0SG91ciIsInBhcnNlRGF0ZSIsImRhdGVzdHIiLCJmb3JtYXQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsZSIsImZsYXRwaWNrcnMiLCJlbGVtZW50IiwiY29uZmlnVmFsdWUiLCJobGpzIiwicGhwIiwidHdpZyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJoaWdobGlnaHRBbGwiXSwic291cmNlUm9vdCI6IiJ9