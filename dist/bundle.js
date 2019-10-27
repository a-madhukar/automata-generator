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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" \n\nclass CellularAutomata \n{\n\n    constructor () {\n      this.cellsBoard = document.querySelector(\".cells__board\");\n      this.patternOptionsSelect = document.querySelector('#patternOptionsSelect'); \n      this.generatePatternButton = document.querySelector('#generatePatternButton'); \n      // this.ruleNumberInputValue = document.querySelector('#ruleNumberInput').value; \n      // this.cellRows = document.querySelectorAll('.cells__row'); \n    }\n\n    init () {\n      this.addDrawSelectOptions(); \n\n      this.addEventListeners(); \n      this.drawRows(); \n      this.drawCells(); \n      \n    }\n\n    addDrawSelectOptions () {\n    //   console.log(\"drawing the select options\"); \n\n      let rules = {\n        30: 'rule30', \n        54: 'rule54',\n        60: 'rule60',\n        62: 'rule62', \n        90: 'rule90',\n        94: 'rule94',\n        102: 'rule102',\n        110: 'rule110',\n        122: 'rule122', \n        126: 'rule126',\n        150: 'rule150',  \n        158: 'rule158',\n        182: 'rule182', \n        188: 'rule188', \n        190: 'rule190', \n        220: 'rule220', \n        222: 'rule222', \n        250: 'rule250'\n      }; \n\n      for (let key in rules) {\n        let option = document.createElement(\"OPTION\"); \n        option.text = \"Rule updated \" + key; \n        option.value = key; \n        this.patternOptionsSelect.append(option); \n      }\n    }\n\n\n    addEventListeners () {\n      this.generatePatternButton.addEventListener('click', this.generatePattern.bind(this)); \n    }\n\n\n    generatePattern () {\n\n      let rows = document.querySelectorAll('.cells__row'); \n\n      let ruleNumberInputValue = document.querySelector('#patternOptionsSelect').value || 30; \n\n      // set first row cells to close state. and turn 1 state on \n\n      let firstRowCells = rows[0].childNodes; \n\n      this.setAllCellsToFalse(firstRowCells);\n\n      firstRowCells[Math.round(firstRowCells.length/2)].classList.add('background--on');\n\n      for (let i=1; i<rows.length; i++) {\n\n        let previousRow = rows[i -1]; \n        let currentRow = rows[i]; \n        let nextRow = rows[i+1]; \n        let currentRowCells = currentRow.childNodes; \n        let previousRowCells = previousRow.childNodes; \n\n        // set current row cells to false \n        this.setAllCellsToFalse(currentRowCells); \n\n        for (let i = 0; i < previousRowCells.length; i++) {\n\n          let leftCell = previousRowCells[i-1];\n          let currentCell = previousRowCells[i];\n          let rightCell = previousRowCells[i+1];\n\n          let leftCellVal = !leftCell ? 0 : +leftCell.classList.contains('background--on'); \n          let currentCellVal = !currentCell ? 0 : + currentCell.classList.contains('background--on'); \n          let rightCellVal = !rightCell ? 0 :  + rightCell.classList.contains('background--on'); \n\n          // console.log(\"cell values\"); \n          // console.table([leftCellVal, currentCellVal, rightCellVal]); \n\n          let patternString = this.getPatternString(leftCellVal, currentCellVal, rightCellVal); \n\n          let result = this.getResultOfPattern(patternString, ruleNumberInputValue); \n\n          currentRowCells[i].classList.add(result ? 'background--on' : 'background--off'); \n\n        }\n\n\n      } \n\n    }\n\n    setAllCellsToFalse (cells) {\n\n      for (let i = 0; i<cells.length; i++) {\n        if (cells[i].classList.contains('background--on')) {\n          cells[i].classList.remove('background--on'); \n          cells[i].classList.add('background--off'); \n        }\n          \n      }\n\n    }\n\n    getNumberOfRowsToDraw () {\n\n      let containerHeight = document.querySelector('.cells__board').offsetHeight;\n\n\n      return containerHeight/7; \n    }\n\n    getNumberOfCellsToDraw (row) {\n      return row.offsetWidth / 5; \n    }\n\n\n    getPatternString (leftNo, currentNo, rightNo) {\n      return '' + leftNo + '' + currentNo + '' + rightNo;\n    }\n\n    getResultOfPattern (patternString, ruleNumber) {\n      let results = this.getRules(ruleNumber); \n\n      return results[patternString]; \n    }\n\n    getRules (ruleNumber) {\n      let rules = {\n        30: 'rule30', \n        54: 'rule54',\n        60: 'rule60',\n        62: 'rule62', \n        90: 'rule90',\n        94: 'rule94',\n        102: 'rule102',\n        110: 'rule110',\n        122: 'rule122', \n        126: 'rule126',\n        150: 'rule150',  \n        158: 'rule158',\n        182: 'rule182', \n        188: 'rule188', \n        190: 'rule190', \n        220: 'rule220', \n        222: 'rule222', \n        250: 'rule250'\n      }; \n\n      return this[rules[ruleNumber]](); \n    }\n\n    rule30 () {\n      return {\n        '111':0, \n        '110':0, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule54 () {\n      return {\n        '111':0, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':0,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule60 () {\n      return {\n        '111':0, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':0,\n        '000':0\n      }; \n    }\n\n    rule62 () {\n      return {\n        '111':0, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule90 () {\n      return {\n        '111':0, \n        '110':1, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':0,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule94 () {\n      return {\n        '111':0, \n        '110':1, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule102 () {\n      return {\n        '111':0, \n        '110':1, \n        '101':1,\n        '100':0, \n        '011':0,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule110 () {\n     return {\n        '111':0, \n        '110':1, \n        '101':1,\n        '100':0, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      }; \n    }\n\n    rule122 () {\n      return {\n        '111':0, \n        '110':1, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':0,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule126 () {\n      return {\n        '111':0, \n        '110':1, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule150 () {\n      return {\n        '111':1, \n        '110':0, \n        '101':0,\n        '100':1, \n        '011':0,\n        '010':1,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule158 () { \n      return {\n        '111':1, \n        '110':0, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule182 () { \n      return {\n        '111':1, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':0,\n        '010':1,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule188 () { \n      return {\n        '111':1, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':0,\n        '000':0\n      }; \n    }\n\n    rule190 () { \n      return {\n        '111':1, \n        '110':0, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      };  \n    }\n\n    rule220 () { \n      return {\n        '111':1, \n        '110':1, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':0,\n        '000':0\n      };  \n    }\n\n    rule222 () {\n      return {\n        '111':1, \n        '110':1, \n        '101':0,\n        '100':1, \n        '011':1,\n        '010':1,\n        '001':1,\n        '000':0\n      };\n    }\n\n    rule250 () {\n      return {\n        '111':1, \n        '110':1, \n        '101':1,\n        '100':1, \n        '011':1,\n        '010':0,\n        '001':1,\n        '000':0\n      };\n    }\n\n    drawRows () {\n\n    //   console.log(\"drawing the rows\"); \n\n      for (let i = 1; i <= this.getNumberOfRowsToDraw(); i++) {\n\n        let cellsRow = document.createElement(\"div\"); \n\n        cellsRow.classList.add('cells__row'); \n\n        this.cellsBoard.append(cellsRow);  \n      }\n\n      console.log(\"completed the drawing rows\"); \n    }\n\n\n    drawCells () {\n\n      let cellRows = document.querySelectorAll('.cells__row'); \n\n    //   console.log(\"drawing the cells\"); \n\n      for (let index in cellRows) {\n\n        for (let i = 1; i <= this.getNumberOfCellsToDraw(cellRows[index]); i++) {\n\n          let cell = document.createElement('div'); \n\n\n          cell.classList.add('cells__row-cell'); \n\n          cell.classList.add(Math.round(Math.random()) ? 'background--on' : 'background--off'); \n\n          cellRows[index].append(cell); \n\n        }\n\n      }\n\n    //   console.log(\"completed the drawing cells\"); \n\n    }\n\n}\n\n\nnew CellularAutomata().init(); \n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });