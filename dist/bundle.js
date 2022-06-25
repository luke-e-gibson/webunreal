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

/***/ "./src/engine/Engine.ts":
/*!******************************!*\
  !*** ./src/engine/Engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Engine = void 0;\r\nvar gl_1 = __webpack_require__(/*! ./gl */ \"./src/engine/gl.ts\");\r\nvar gl = window.gl;\r\n/**\r\n * The Main Engine Class For WEBUNREAL\r\n */\r\nvar Engine = /** @class */ (function () {\r\n    function Engine() {\r\n        this._count = 0;\r\n        document.body.innerHTML = \"\";\r\n    }\r\n    Engine.prototype.start = function () {\r\n        this._canves = gl_1.glUtili.Init();\r\n        window.gl.clearColor(1, 0, 0, 1);\r\n        this.loop();\r\n    };\r\n    Engine.prototype.resize = function () {\r\n        if (this._canves !== undefined) {\r\n            this._canves.width = window.innerWidth;\r\n            this._canves.height = window.innerHeight;\r\n        }\r\n    };\r\n    Engine.prototype.loop = function () {\r\n        this._count++;\r\n        window.gl.clear(window.gl.COLOR_BUFFER_BIT || window.gl.DEPTH_BUFFER_BIT);\r\n        requestAnimationFrame(this.loop.bind(this));\r\n    };\r\n    return Engine;\r\n}());\r\nexports.Engine = Engine;\r\n\n\n//# sourceURL=webpack://webunreal/./src/engine/Engine.ts?");

/***/ }),

/***/ "./src/engine/gl.ts":
/*!**************************!*\
  !*** ./src/engine/gl.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.glUtili = void 0;\r\n/**\r\n * ##### GL Utille Class\r\n * class for utilits for webgl\r\n */\r\nvar glUtili = /** @class */ (function () {\r\n    function glUtili() {\r\n    }\r\n    /**\r\n     * ##### This Funciton Inits webgl\r\n     * with all of the canves need taken care of and gl context for `Engine.ts` Class and your own code\r\n     * @param ElementId Optional Element id\r\n     */\r\n    glUtili.Init = function (ElementId) {\r\n        var canves;\r\n        if (ElementId !== undefined) {\r\n            canves = document.getElementById(ElementId);\r\n            if (canves === undefined) {\r\n                throw new Error(\"Fatale: Can not find the element id in the html body. Have you created the element on the page, this filed is opetenol, leave blank to create an element on the webpage automaticly\");\r\n            }\r\n        }\r\n        else {\r\n            canves = document.createElement(\"canvas\");\r\n            document.body.appendChild(canves);\r\n        }\r\n        window.gl = canves.getContext(\"webgl\");\r\n        if (window.gl === undefined) {\r\n            throw new Error(\"You are using an  old browser Pleas up grade\");\r\n        }\r\n        return canves;\r\n    };\r\n    return glUtili;\r\n}());\r\nexports.glUtili = glUtili;\r\n\n\n//# sourceURL=webpack://webunreal/./src/engine/gl.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Engine_1 = __webpack_require__(/*! ./engine/Engine */ \"./src/engine/Engine.ts\");\r\nvar engine;\r\nwindow.onload = function () {\r\n    document.body.innerHTML += \"Loading\";\r\n    engine = new Engine_1.Engine();\r\n    engine.start();\r\n    engine.resize();\r\n};\r\nwindow.onresize = function () {\r\n    engine.resize();\r\n};\r\n\n\n//# sourceURL=webpack://webunreal/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;