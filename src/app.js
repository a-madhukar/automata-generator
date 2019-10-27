'use strict'; 

const Canvas = require('./Canvas'); 
const Rules = require('./CellularAutomata/Rules'); 

class CellularAutomata 
{
    constructor () {
        this.rules = Rules; 
        
        (new Canvas(this.rules)).setup(); 
    }

    generatePattern () {

      let rows = document.querySelectorAll('.cells__row'); 

      let ruleNumberInputValue = document.querySelector('#patternOptionsSelect').value || 30; 

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

    getPatternString (leftNo, currentNo, rightNo) {
      return '' + leftNo + '' + currentNo + '' + rightNo;
    }

    getResultOfPattern (patternString, ruleNumber) {
      let results = this.getRules(ruleNumber); 

      return results[patternString]; 
    }

    getRules (ruleNumber) {
        return this.rules[ruleNumber]; 
    }
}


new CellularAutomata(); 
