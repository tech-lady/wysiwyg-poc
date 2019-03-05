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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_container_Editorcontainer_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/container/Editorcontainer.jsx */ \"./src/js/components/container/Editorcontainer.jsx\");\n/* harmony import */ var _js_components_container_Editorcontainer_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_container_Editorcontainer_jsx__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/container/Editorcontainer.jsx":
/*!*********************************************************!*\
  !*** ./src/js/components/container/Editorcontainer.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/empath/Desktop/pages/editor-app/src/js/components/container/Editorcontainer.jsx: Unexpected token (18:6)\\n\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m    \\u001b[36mconst\\u001b[39m { seo_title } \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mform\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"article-form\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mInput\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m          text\\u001b[33m=\\u001b[39m\\u001b[32m\\\"SEO title\\\"\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m          label\\u001b[33m=\\u001b[39m\\u001b[32m\\\"seo_title\\\"\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:3831:17)\\n    at Parser.unexpected (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5143:16)\\n    at Parser.parseExprAtom (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6283:20)\\n    at Parser.parseExprSubscripts (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5862:23)\\n    at Parser.parseMaybeUnary (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at Parser.parseExprOps (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at Parser.parseMaybeConditional (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at Parser.parseMaybeAssign (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6435:28)\\n    at Parser.parseExprAtom (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6215:21)\\n    at Parser.parseExprSubscripts (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5862:23)\\n    at Parser.parseMaybeUnary (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at Parser.parseExprOps (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at Parser.parseMaybeConditional (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at Parser.parseMaybeAssign (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at Parser.parseExpression (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:5595:23)\\n    at Parser.parseReturnStatement (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7617:28)\\n    at Parser.parseStatementContent (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7295:21)\\n    at Parser.parseStatement (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7810:25)\\n    at Parser.parseBlockBody (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7797:10)\\n    at Parser.parseBlock (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7786:10)\\n    at Parser.parseFunctionBody (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6876:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6860:10)\\n    at Parser.parseMethod (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:6804:10)\\n    at Parser.pushClassMethod (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:8200:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:8125:12)\\n    at Parser.parseClassMember (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:8067:10)\\n    at withTopicForbiddingContext (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:8022:14)\\n    at Parser.withTopicForbiddingContext (/Users/empath/Desktop/pages/editor-app/node_modules/@babel/parser/lib/index.js:7150:14)\");\n\n//# sourceURL=webpack:///./src/js/components/container/Editorcontainer.jsx?");

/***/ })

/******/ });