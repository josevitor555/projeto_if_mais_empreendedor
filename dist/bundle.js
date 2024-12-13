/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/progressbar.js":
/*!**********************************!*\
  !*** ./public/js/progressbar.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var progress = document.getElementById(\"progressbar\");\n  var totalHeight = document.body.scrollHeight - window.innerHeight;\n  window.onscroll = function () {\n    var progressHeight = window.pageYOffset / totalHeight * 100;\n    progress.style.height = progressHeight + \"%\";\n  };\n});\n\n//# sourceURL=webpack://projeto_cruz/./public/js/progressbar.js?");

/***/ }),

/***/ "./public/js/slide.js":
/*!****************************!*\
  !*** ./public/js/slide.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var slides = document.querySelectorAll('[role=\"group\"][aria-roledescription=\"slide\"]');\n  var nextButton = document.querySelector('button[aria-label=\"Next slide\"]');\n  var prevButton = document.querySelector('button[aria-label=\"Previous slide\"]');\n  var currentSlideIndex = 0;\n  function showSlide(index) {\n    slides.forEach(function (slide, i) {\n      slide.style.opacity = i === index ? '1' : '0';\n      slide.style.display = i === index ? 'block' : 'none';\n    });\n  }\n  function nextSlide() {\n    currentSlideIndex = (currentSlideIndex + 1) % slides.length;\n    showSlide(currentSlideIndex);\n  }\n  function prevSlide() {\n    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;\n    showSlide(currentSlideIndex);\n  }\n  setInterval(nextSlide, 5000);\n  nextButton.addEventListener('click', nextSlide);\n  prevButton.addEventListener('click', prevSlide);\n  showSlide(currentSlideIndex);\n});\n// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')\n\n//# sourceURL=webpack://projeto_cruz/./public/js/slide.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/progressbar.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/slide.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;