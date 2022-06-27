/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Engine/Engine.ts":
/*!******************************!*\
  !*** ./src/Engine/Engine.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Engine = void 0;\r\nvar gl_1 = __importDefault(__webpack_require__(/*! ./gl */ \"./src/Engine/gl.ts\"));\r\nvar Shader_1 = __importDefault(__webpack_require__(/*! ./Shader */ \"./src/Engine/Shader.ts\"));\r\nvar Vertex_glsl_1 = __importDefault(__webpack_require__(/*! ./Vertex.glsl */ \"./src/Engine/Vertex.glsl\"));\r\nvar Fragment_glsl_1 = __importDefault(__webpack_require__(/*! ./Fragment.glsl */ \"./src/Engine/Fragment.glsl\"));\r\nvar gl = window.gl;\r\n/**\r\n * The Main Engine Class For WEBUNREAL\r\n */\r\nvar Engine = /** @class */ (function () {\r\n    function Engine() {\r\n        this._count = 0;\r\n        document.body.innerHTML = \"\";\r\n    }\r\n    Engine.prototype.start = function () {\r\n        this._canves = gl_1.default.Init();\r\n        window.gl.clearColor(1, 0, 0, 1);\r\n        console.log(Vertex_glsl_1.default);\r\n        this.loop();\r\n    };\r\n    Engine.prototype.resize = function () {\r\n        if (this._canves !== undefined) {\r\n            this._canves.width = window.innerWidth;\r\n            this._canves.height = window.innerHeight;\r\n        }\r\n    };\r\n    Engine.prototype.loop = function () {\r\n        this._count++;\r\n        window.gl.clear(window.gl.COLOR_BUFFER_BIT || window.gl.DEPTH_BUFFER_BIT);\r\n        requestAnimationFrame(this.loop.bind(this));\r\n    };\r\n    Engine.prototype.loadShader = function () {\r\n        this._shader = new Shader_1.default(\"MyShader\", Vertex_glsl_1.default, Fragment_glsl_1.default);\r\n    };\r\n    return Engine;\r\n}());\r\nexports.Engine = Engine;\r\n\n\n//# sourceURL=webpack://webunreal/./src/Engine/Engine.ts?");

/***/ }),

/***/ "./src/Engine/Shader.ts":
/*!******************************!*\
  !*** ./src/Engine/Shader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n * #### Shader Class\r\n * this class makes and compiles Shader to use in games\r\n *\r\n */\r\nvar Shader = /** @class */ (function () {\r\n    function Shader(_name, _vertexShader, _fragmentShader) {\r\n        this.__name = _name;\r\n        var vertexShader = this.loadshader(_vertexShader, window.gl.VERTEX_SHADER);\r\n        var fragmentShader = this.loadshader(_fragmentShader, window.gl.FRAGMENT_SHADER);\r\n        this.createPrograme(vertexShader, fragmentShader);\r\n    }\r\n    Shader.prototype.loadshader = function (source, shaderType) {\r\n        var shader = window.gl.createShader(shaderType);\r\n        window.gl.shaderSource(shader, source);\r\n        window.gl.compileShader(shader);\r\n        var shaderLog = window.gl.getShaderInfoLog(shader);\r\n        if (shaderLog) {\r\n            console.log(\"Aborting....\");\r\n            throw new Error(\"Shader Compiling Error \" + shaderLog + source + \".Name: \" + this.__name);\r\n        }\r\n        return shader;\r\n    };\r\n    Shader.prototype.createPrograme = function (vertexShader, fragmentShader) {\r\n        this._program = window.gl.createProgram();\r\n        window.gl.attachShader(this._program, vertexShader);\r\n        window.gl.attachShader(this._program, fragmentShader);\r\n        window.gl.linkProgram(this._program);\r\n        var error = window.gl.getProgramInfoLog(this._program);\r\n        if (error) {\r\n            console.log(\"Aborting....\");\r\n            throw new Error(\"Error linking Program. For Shader \" + this.__name + \" Error: \" + error + \".\");\r\n        }\r\n    };\r\n    Object.defineProperty(Shader.prototype, \"name\", {\r\n        get: function () {\r\n            return this.__name;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Shader;\r\n}());\r\nexports[\"default\"] = Shader;\r\n\n\n//# sourceURL=webpack://webunreal/./src/Engine/Shader.ts?");

/***/ }),

/***/ "./src/Engine/gl.ts":
/*!**************************!*\
  !*** ./src/Engine/gl.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n * ##### GL Utille Class\r\n * class for utilits for webgl\r\n */\r\nvar glUtili = /** @class */ (function () {\r\n    function glUtili() {\r\n    }\r\n    /**\r\n     * ##### This Funciton Inits webgl\r\n     * with all of the canves need taken care of and gl context for `Engine.ts` Class and your own code\r\n     * @param ElementId Optional Element id\r\n     */\r\n    glUtili.Init = function (ElementId) {\r\n        var canves;\r\n        if (ElementId !== undefined) {\r\n            canves = document.getElementById(ElementId);\r\n            if (canves === undefined) {\r\n                console.log(\"Aborting....\");\r\n                throw new Error(\"Fatale: Can not find the element id in the html body. Have you created the element on the page, this filed is opetenol, leave blank to create an element on the webpage automaticly\");\r\n            }\r\n        }\r\n        else {\r\n            canves = document.createElement(\"canvas\");\r\n            document.body.appendChild(canves);\r\n        }\r\n        window.gl = canves.getContext(\"webgl\");\r\n        if (window.gl === undefined) {\r\n            console.log(\"Aborting....\");\r\n            throw new Error(\"You are using an  old browser Pleas up grade\");\r\n        }\r\n        return canves;\r\n    };\r\n    return glUtili;\r\n}());\r\nexports[\"default\"] = glUtili;\r\n\n\n//# sourceURL=webpack://webunreal/./src/Engine/gl.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Engine_1 = __webpack_require__(/*! ./Engine/Engine */ \"./src/Engine/Engine.ts\");\r\nvar engine;\r\nwindow.onload = function () {\r\n    document.body.innerHTML += \"Loading\";\r\n    engine = new Engine_1.Engine();\r\n    engine.start();\r\n    engine.resize();\r\n};\r\nwindow.onresize = function () {\r\n    engine.resize();\r\n};\r\n\n\n//# sourceURL=webpack://webunreal/./src/index.ts?");

/***/ }),

/***/ "./src/Engine/Fragment.glsl":
/*!**********************************!*\
  !*** ./src/Engine/Fragment.glsl ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = \"precision mediump float;\\r\\n\\r\\nvoid main(){\\r\\n    gl_FragColor = vec4(1.0);\\r\\n}\"\n\n//# sourceURL=webpack://webunreal/./src/Engine/Fragment.glsl?");

/***/ }),

/***/ "./src/Engine/Vertex.glsl":
/*!********************************!*\
  !*** ./src/Engine/Vertex.glsl ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"\\r\\nattribute vec3 a_possiton;\\r\\n\\r\\nvoid main()\\r\\n{\\r\\n   gl_Position = vec4(a_possiton, 1.0);   \\r\\n}\"\n\n//# sourceURL=webpack://webunreal/./src/Engine/Vertex.glsl?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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