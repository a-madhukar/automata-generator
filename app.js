'use strict'; 

class CellularAutomata 
{

    constructor () {
      this.cellsBoard = document.querySelector(".cells__board");
      this.generatePatternButton = document.querySelector('#generatePatternButton'); 
      // this.cellRows = document.querySelectorAll('.cells__row'); 
    }

    init () {

      this.addEventListeners(); 
      this.drawRows(); 
      this.drawCells(); 

      


      


      // draw the cells 
    
      
    }


    addEventListeners () {
      this.generatePatternButton.addEventListener('click', this.generatePattern.bind(this)); 
    }


    generatePattern () {

      let rows = document.querySelectorAll('.cells__row'); 

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

          let result = this.getResultOfPattern(patternString); 

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


      return containerHeight/12; 
    }

    getNumberOfCellsToDraw (row) {

      return row.offsetWidth / 10; 

    }


    getPatternString (leftNo, currentNo, rightNo) {
      return '' + leftNo + '' + currentNo + '' + rightNo;
    }

    getResultOfPattern (patternString) {
      let results = {
        '111':0, 
        '110':0, 
        '101':0,
        '100':1, 
        '011':1,
        '010':1,
        '001':1,
        '000':0
      }; 

      return results[patternString]; 
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
