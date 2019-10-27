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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(pattern) {\n    _classCallCheck(this, Canvas);\n\n    this.cellsBoard = document.querySelector(\".cells__board\");\n    this.generatePatternButton = document.querySelector('#generatePatternButton');\n    this.patternOptionsSelect = document.querySelector('#patternOptionsSelect');\n    this.rules = pattern.rules;\n    this.generator = pattern.generator;\n  }\n\n  _createClass(Canvas, [{\n    key: \"setup\",\n    value: function setup() {\n      var _this = this;\n\n      var methods = ['addDrawSelectOptions', 'drawRows', 'drawCells', 'addEventListeners'];\n      methods.forEach(function (method) {\n        return _this[method]();\n      });\n    }\n  }, {\n    key: \"addDrawSelectOptions\",\n    value: function addDrawSelectOptions() {\n      for (var key in this.rules) {\n        var option = document.createElement(\"OPTION\");\n        option.text = \"Rule \" + key;\n        option.value = key;\n        this.patternOptionsSelect.append(option);\n      }\n    }\n  }, {\n    key: \"drawRows\",\n    value: function drawRows() {\n      for (var i = 1; i <= this.getNumberOfRowsToDraw(); i++) {\n        var cellsRow = document.createElement(\"div\");\n        cellsRow.classList.add('cells__row');\n        this.cellsBoard.append(cellsRow);\n      }\n    }\n  }, {\n    key: \"drawCells\",\n    value: function drawCells() {\n      var cellRows = document.querySelectorAll('.cells__row');\n\n      for (var index in cellRows) {\n        for (var i = 1; i <= this.getNumberOfCellsToDraw(cellRows[index]); i++) {\n          var cell = document.createElement('div');\n          cell.classList.add('cells__row-cell');\n          cell.classList.add(Math.round(Math.random()) ? 'background--on' : 'background--off');\n          cellRows[index].append(cell);\n        }\n      }\n    }\n  }, {\n    key: \"getNumberOfRowsToDraw\",\n    value: function getNumberOfRowsToDraw() {\n      var containerHeight = document.querySelector('.cells__board').offsetHeight;\n      return containerHeight / 7;\n    }\n  }, {\n    key: \"getNumberOfCellsToDraw\",\n    value: function getNumberOfCellsToDraw(row) {\n      return row.offsetWidth / 5;\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      this.generatePatternButton.addEventListener('click', this.generator.handle.bind(this.generator));\n    }\n  }]);\n\n  return Canvas;\n}();\n\nmodule.exports = Canvas;\n\n//# sourceURL=webpack:///./src/Canvas.js?");

/***/ }),

/***/ "./src/CellularAutomata/PatternGenerator.js":
/*!**************************************************!*\
  !*** ./src/CellularAutomata/PatternGenerator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PatternGenerator =\n/*#__PURE__*/\nfunction () {\n  function PatternGenerator(rules) {\n    _classCallCheck(this, PatternGenerator);\n\n    this.rules = rules;\n  }\n\n  _createClass(PatternGenerator, [{\n    key: \"handle\",\n    value: function handle() {\n      var rows = document.querySelectorAll('.cells__row');\n      var rules = this.rules[document.querySelector('#patternOptionsSelect').value || 30];\n      this.setAllCellsToFalse(document.querySelectorAll('.cells__row-cell'));\n      this.activateStartingCell(rows[0]);\n\n      for (var i = 1; i < rows.length; i++) {\n        this.traverseCells(rows[i - 1].childNodes, rows[i].childNodes, rules);\n      }\n    }\n  }, {\n    key: \"traverseCells\",\n    value: function traverseCells(previousRowCells, currentRowCells, rules) {\n      for (var i = 0; i < previousRowCells.length; i++) {\n        var patternString = this.getPatternString(previousRowCells[i - 1], previousRowCells[i], previousRowCells[i + 1]);\n        currentRowCells[i].classList.add(rules[patternString] ? 'background--on' : 'background--off');\n      }\n    }\n  }, {\n    key: \"setAllCellsToFalse\",\n    value: function setAllCellsToFalse(cells) {\n      for (var i = 0; i < cells.length; i++) {\n        if (cells[i].classList.contains('background--on')) {\n          cells[i].classList.remove('background--on');\n          cells[i].classList.add('background--off');\n        }\n      }\n    }\n  }, {\n    key: \"getPatternString\",\n    value: function getPatternString(leftCell, currentCell, rightCell) {\n      var leftCellVal = !leftCell ? 0 : +leftCell.classList.contains('background--on');\n      var currentCellVal = !currentCell ? 0 : +currentCell.classList.contains('background--on');\n      var rightCellVal = !rightCell ? 0 : +rightCell.classList.contains('background--on');\n      return '' + leftCellVal + '' + currentCellVal + '' + rightCellVal;\n    }\n  }, {\n    key: \"activateStartingCell\",\n    value: function activateStartingCell(row) {\n      var firstRowCells = row.childNodes;\n      firstRowCells[Math.round(firstRowCells.length / 2)].classList.add('background--on');\n    }\n  }]);\n\n  return PatternGenerator;\n}();\n\nmodule.exports = PatternGenerator;\n\n//# sourceURL=webpack:///./src/CellularAutomata/PatternGenerator.js?");

/***/ }),

/***/ "./src/CellularAutomata/Rules.js":
/*!***************************************!*\
  !*** ./src/CellularAutomata/Rules.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var rules = {\n  30: {\n    '111': 0,\n    '110': 0,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  54: {\n    '111': 0,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 0,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  60: {\n    '111': 0,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 0,\n    '000': 0\n  },\n  62: {\n    '111': 0,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  90: {\n    '111': 0,\n    '110': 1,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 0,\n    '001': 1,\n    '000': 0\n  },\n  94: {\n    '111': 0,\n    '110': 1,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  102: {\n    '111': 0,\n    '110': 1,\n    '101': 1,\n    '100': 0,\n    '011': 0,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  110: {\n    '111': 0,\n    '110': 1,\n    '101': 1,\n    '100': 0,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  122: {\n    '111': 0,\n    '110': 1,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 0,\n    '001': 1,\n    '000': 0\n  },\n  126: {\n    '111': 0,\n    '110': 1,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  150: {\n    '111': 1,\n    '110': 0,\n    '101': 0,\n    '100': 1,\n    '011': 0,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  158: {\n    '111': 1,\n    '110': 0,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  182: {\n    '111': 1,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 0,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  188: {\n    '111': 1,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 0,\n    '000': 0\n  },\n  190: {\n    '111': 1,\n    '110': 0,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  220: {\n    '111': 1,\n    '110': 1,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 0,\n    '000': 0\n  },\n  222: {\n    '111': 1,\n    '110': 1,\n    '101': 0,\n    '100': 1,\n    '011': 1,\n    '010': 1,\n    '001': 1,\n    '000': 0\n  },\n  250: {\n    '111': 1,\n    '110': 1,\n    '101': 1,\n    '100': 1,\n    '011': 1,\n    '010': 0,\n    '001': 1,\n    '000': 0\n  }\n};\nmodule.exports = rules;\n\n//# sourceURL=webpack:///./src/CellularAutomata/Rules.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Canvas = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n\nvar Rules = __webpack_require__(/*! ./CellularAutomata/Rules */ \"./src/CellularAutomata/Rules.js\");\n\nvar PatternGenerator = __webpack_require__(/*! ./CellularAutomata/PatternGenerator */ \"./src/CellularAutomata/PatternGenerator.js\");\n\nnew Canvas({\n  rules: Rules,\n  generator: new PatternGenerator(Rules)\n}).setup();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });