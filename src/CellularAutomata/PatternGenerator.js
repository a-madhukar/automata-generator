'use strict'; 

class PatternGenerator {

    constructor (rules) {
        this.rules = rules; 
    }

    handle () {
        let rows = document.querySelectorAll('.cells__row'); 
  
        let rules = this.rules[document.querySelector('#patternOptionsSelect').value || 30]; 
  
        this.setAllCellsToFalse(document.querySelectorAll('.cells__row-cell'));
        
        this.activateStartingCell(rows[0]); 
  
        for (let i=1; i<rows.length; i++) 
            this.traverseCells(rows[i -1].childNodes, rows[i].childNodes, rules); 
    }

    traverseCells (previousRowCells, currentRowCells, rules) {
        for (let i = 0; i < previousRowCells.length; i++) {

            let patternString = this.getPatternString(
                previousRowCells[i-1], 
                previousRowCells[i], 
                previousRowCells[i+1]
            ); 

            currentRowCells[i].classList.add(rules[patternString] ? 'background--on' : 'background--off'); 
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

    getPatternString (leftCell, currentCell, rightCell) {
        let leftCellVal = !leftCell ? 0 : +leftCell.classList.contains('background--on'); 
        let currentCellVal = !currentCell ? 0 : + currentCell.classList.contains('background--on'); 
        let rightCellVal = !rightCell ? 0 :  + rightCell.classList.contains('background--on'); 

        return '' + leftCellVal + '' + currentCellVal + '' + rightCellVal;
    }

    activateStartingCell (row) {
        let firstRowCells = row.childNodes; 

        firstRowCells[Math.round(firstRowCells.length/2)].classList.add('background--on');
    }
}

module.exports = PatternGenerator; 