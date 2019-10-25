'use strict'; 

class CellularAutomata 
{

    constructor () {
      this.cellsBoard = document.querySelector(".cells__board");
      this.generatePatternButton = document.querySelector('#generatePatternButton'); 
      // this.ruleNumberInputValue = document.querySelector('#ruleNumberInput').value; 
      // this.cellRows = document.querySelectorAll('.cells__row'); 
    }

    init () {

      this.addEventListeners(); 
      this.drawRows(); 
      this.drawCells(); 
      
    }


    addEventListeners () {
      this.generatePatternButton.addEventListener('click', this.generatePattern.bind(this)); 
    }


    generatePattern () {

      let rows = document.querySelectorAll('.cells__row'); 

      let ruleNumberInputValue = document.querySelector('#ruleNumberInput').value || 30; 

      // set first row cells to close state. and turn 1 state on 

      let firstRowCells = rows[0].childNodes; 

      this.setAllCellsToFalse(firstRowCells);

      firstRowCells[Math.round(firstRowCells.length/2)].classList.add('background--on');

      for (let i=1; i<rows.length; i++) {

        let previousRow = rows[i -1]; 
        let currentRow = rows[i]; 
        let nextRow = rows[i+1]; 
        let currentRowCells = currentRow.childNodes; 
        let previousRowCells = previousRow.childNodes; 

        // set current row cells to false 
        this.setAllCellsToFalse(currentRowCells); 

        for (let i = 0; i < previousRowCells.length; i++) {

          let leftCell = previousRowCells[i-1];
          let currentCell = previousRowCells[i];
          let rightCell = previousRowCells[i+1];

          let leftCellVal = !leftCell ? 0 : +leftCell.classList.contains('background--on'); 
          let currentCellVal = !currentCell ? 0 : + currentCell.classList.contains('background--on'); 
          let rightCellVal = !rightCell ? 0 :  + rightCell.classList.contains('background--on'); 

          // console.log("cell values"); 
          // console.table([leftCellVal, currentCellVal, rightCellVal]); 

          let patternString = this.getPatternString(leftCellVal, currentCellVal, rightCellVal); 

          let result = this.getResultOfPattern(patternString, ruleNumberInputValue); 

          currentRowCells[i].classList.add(result ? 'background--on' : 'background--off'); 

        }


      } 

    }

    setAllCellsToFalse (cells) {

      for (let i = 0; i<cells.length; i++) {
        if (cells[i].classList.contains('background--on')) {
          cells[i].classList.remove('background--on'); 
          cells[i].classList.add('background--off'); 
        }
          
      }

    }

    getNumberOfRowsToDraw () {

      let containerHeight = document.querySelector('.cells__board').offsetHeight;


      return containerHeight/7; 
    }

    getNumberOfCellsToDraw (row) {
      return row.offsetWidth / 5; 
    }


    getPatternString (leftNo, currentNo, rightNo) {
      return '' + leftNo + '' + currentNo + '' + rightNo;
    }

    getResultOfPattern (patternString, ruleNumber) {
      let results = this.getRules(ruleNumber); 

      return results[patternString]; 
    }

    getRules (ruleNumber) {
      let rules = {
        30: 'rule30', 
        54: 'rule54',
        60: 'rule60',
        62: 'rule62', 
        90: 'rule90',
        94: 'rule94',
        102: 'rule102',
        110: 'rule110',
        122: 'rule122', 
        126: 'rule126',
        150: 'rule150',  
        158: 'rule158',
        182: 'rule182', 
        188: 'rule188', 
        190: 'rule190', 
        220: 'rule220', 
        222: 'rule222', 
        250: 'rule250'
      }; 

      return this[rules[ruleNumber]](); 
    }

    rule30 () {
      return {
        '111':0, 
        '110':0, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule54 () {
      return {
        '111':0, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':0,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule60 () {
      return {
        '111':0, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':1,
        '010':1,
        '001':0,
        '000':0
      }; 
    }

    rule62 () {
      return {
        '111':0, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule90 () {
      return {
        '111':0, 
        '110':1, 
        '101':0,
        '100':1, 
        '011':1,
        '010':0,
        '001':1,
        '000':0
      }; 
    }

    rule94 () {
      return {
        '111':0, 
        '110':1, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule102 () {
      return {
        '111':0, 
        '110':1, 
        '101':1,
        '100':0, 
        '011':0,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule110 () {
     return {
        '111':0, 
        '110':1, 
        '101':1,
        '100':0, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      }; 
    }

    rule122 () {
      return {
        '111':0, 
        '110':1, 
        '101':1,
        '100':1, 
        '011':1,
        '010':0,
        '001':1,
        '000':0
      };
    }

    rule126 () {
      return {
        '111':0, 
        '110':1, 
        '101':1,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      };
    }

    rule150 () {
      return {
        '111':1, 
        '110':0, 
        '101':0,
        '100':1, 
        '011':0,
        '010':1,
        '001':1,
        '000':0
      };
    }

    rule158 () { 
      return {
        '111':1, 
        '110':0, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      };
    }

    rule182 () { 
      return {
        '111':1, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':0,
        '010':1,
        '001':1,
        '000':0
      };
    }

    rule188 () { 
      return {
        '111':1, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':1,
        '010':1,
        '001':0,
        '000':0
      }; 
    }

    rule190 () { 
      return {
        '111':1, 
        '110':0, 
        '101':1,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      };  
    }

    rule220 () { 
      return {
        '111':1, 
        '110':1, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':0,
        '000':0
      };  
    }

    rule222 () {
      return {
        '111':1, 
        '110':1, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      };
    }

    rule250 () {
      return {
        '111':1, 
        '110':1, 
        '101':1,
        '100':1, 
        '011':1,
        '010':0,
        '001':1,
        '000':0
      };
    }

    drawRows () {

      console.log("drawing the rows"); 

      for (let i = 1; i <= this.getNumberOfRowsToDraw(); i++) {

        let cellsRow = document.createElement("div"); 

        cellsRow.classList.add('cells__row'); 

        this.cellsBoard.append(cellsRow);  
      }

      console.log("completed the drawing rows"); 
    }


    drawCells () {

      let cellRows = document.querySelectorAll('.cells__row'); 

      console.log("drawing the cells"); 

      for (let index in cellRows) {

        for (let i = 1; i <= this.getNumberOfCellsToDraw(cellRows[index]); i++) {

          let cell = document.createElement('div'); 


          cell.classList.add('cells__row-cell'); 

          cell.classList.add(Math.round(Math.random()) ? 'background--on' : 'background--off'); 

          cellRows[index].append(cell); 

        }

      }

      console.log("completed the drawing cells"); 

    }

}


new CellularAutomata().init(); 
