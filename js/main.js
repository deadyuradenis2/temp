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
/******/ 		"main": 0
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
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/range/range.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/range/range.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

var rangeSliders = document.querySelectorAll('.jsRange');
[].slice.call(rangeSliders).forEach(function (slider, index) {
  var rangeSlider = slider.querySelector('.jsRangeSlider');
  var inputMin = slider.querySelector('.jsRangeInputMin');
  var inputMax = slider.querySelector('.jsRangeInputMax');
  var valueMin = Number(inputMin.getAttribute('min'));
  var valueMax = Number(inputMax.getAttribute('max'));
  var countMin = slider.querySelector('.jsRangeCountMin');
  var countMax = slider.querySelector('.jsRangeCountMax');
  var inputs = [inputMin, inputMax];
  nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(rangeSlider, {
    start: [valueMin, valueMax],
    step: 1,
    connect: true,
    range: {
      'min': valueMin,
      'max': valueMax
    }
  });
  inputMin.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d.]/g, '');
  });
  inputMax.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d.]/g, '');
  });
  inputMin.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([Number(this.value), null]);
  });
  inputMax.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([null, Number(this.value)]);
  });
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
    check(inputMin, countMin);
    check(inputMax, countMax);
  });

  function check(input, count) {
    count.innerHTML = Math.round(input.value);
  }
});
var rangePriceSliders = document.querySelectorAll('.jsRangePrice');
[].slice.call(rangePriceSliders).forEach(function (slider, index) {
  var rangeSlider = slider.querySelector('.jsRangeSlider');
  var inputMin = slider.querySelector('.jsRangeInputMin');
  var inputMax = slider.querySelector('.jsRangeInputMax');
  var valueMin = Number(inputMin.getAttribute('min'));
  var valueMax = Number(inputMax.getAttribute('max'));
  var countMin = slider.querySelector('.jsRangeCountMin');
  var countMax = slider.querySelector('.jsRangeCountMax');
  var digitMin = slider.querySelector('.jsRangeDigitMin');
  var digitMax = slider.querySelector('.jsRangeDigitMax');
  var digit = inputMin.getAttribute('data-digit');
  var inputs = [inputMin, inputMax];
  nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(rangeSlider, {
    start: [valueMin, valueMax],
    step: 1,
    connect: true,
    range: {
      'min': valueMin,
      '40%': valueMax / 100,
      'max': valueMax
    }
  });
  inputMin.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d.]/g, '');
  });
  inputMax.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d.]/g, '');
  });
  inputMin.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([Number(this.value), null]);
  });
  inputMax.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([null, Number(this.value)]);
  });
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
    check(inputMin, countMin, digit, digitMin);
    check(inputMax, countMax, digit, digitMax);
  });

  function check(input, count, digit, type) {
    if (input.value / digit >= 1000) {
      count.innerHTML = Math.round(input.value / (digit * 1000));
      var types = type.getAttribute('data-type').split(",", 2);
      type.innerHTML = types[1];
    } else {
      count.innerHTML = Math.round(input.value / digit);

      var _types = type.getAttribute('data-type').split(",", 2);

      type.innerHTML = _types[0];
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! sumoselect/jquery.sumoselect.min */ "./node_modules/sumoselect/jquery.sumoselect.min.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jsSelect').each(function () {
    var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var searchTitle = that.data('search');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).SumoSelect({
      search: true,
      clearAll: true,
      forceCustomRendering: true,
      captionFormat: '{0} Выбрано',
      captionFormatAllSelected: '{0} Выбрано',
      noMatch: 'Ничего не найдено'
    });
    setTimeout(function () {
      that.siblings('.jsSelect').find('.search-txt').attr("placeholder", searchTitle);
      that.siblings('.optWrapper ').find('.btnOk').text('Применить');
      that.siblings('.optWrapper ').find('.reset-all').text('Сбросить');
    }, 10);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.opt', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.SumoSelect').addClass('is-changed');
  });
});

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var jsSliderIntro = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.jsSliderIntro .slider__inner', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_0__["EffectFade"]],
  pagination: {
    el: ".jsSliderIntro .swiper-pagination",
    clickable: true,
    bulletClass: "slider__pagination-item"
  },
  navigation: {
    nextEl: '.jsSliderIntro .swiper-button-next',
    prevEl: '.jsSliderIntro .swiper-button-prev'
  },
  autoplay: {
    delay: 5600,
    disableOnInteraction: false
  },
  waitForTransition: false,
  effect: "fade",
  loop: false,
  slidesPerView: 1,
  speed: 400,
  breakpoints: {
    0: {
      pagination: {
        el: ".jsSliderIntro .swiper-pagination",
        clickable: true,
        bulletClass: "slider__pagination-item"
      }
    },
    576: {
      pagination: {
        el: ".jsSliderIntro .swiper-pagination",
        clickable: true,
        bulletClass: "slider__pagination-item"
      }
    },
    1440: {
      pagination: {
        el: ".jsSliderIntro .swiper-fraction",
        type: 'fraction',
        formatFractionCurrent: function formatFractionCurrent(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        },
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="slider__fraction-item slider__fraction-item--current jsFractionCurrent ' + currentClass + '"></span>' + '<span class="slider__fraction-line"></span>' + '<div class="slider__fraction-item slider__fraction-item--next jsFractionNext"></div>' + '<span class="slider__fraction-item slider__fraction-item--total jsFractionTotal ' + totalClass + '"></span>';
        }
      }
    }
  }
});
paginationChange(jsSliderIntro, 'jsSliderIntro');
jsSliderIntro.update();

function paginationChange(e, w) {
  e.on('slideChange update', function () {
    var thisSlider = $('.' + w + '');
    var next = thisSlider.find('.jsFractionNext');
    var current = parseInt(thisSlider.find('.jsFractionCurrent').text(), 10);
    var total = parseInt(thisSlider.find('.jsFractionTotal').text(), 10);
    var line = thisSlider.find('.slider__fraction-line');
    line.removeClass('is-animate');
    setTimeout(function () {
      line.addClass('is-animate');
    }, 1);

    if (current < total) {
      next.text("0" + (current + 1));
    } else {
      next.text("0" + 1);
    }
  });
}

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_range_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/range/range */ "./src/blocks/modules/range/range.js");




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jsScrollButton').on('click', function (e) {
  e.preventDefault();
  var getvalue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').stop().animate({
    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1___default()(getvalue).offset().top
  }, 500);
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map