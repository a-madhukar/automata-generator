'use strict'; 

class Canvas {

    constructor () {
        this.cellsBoard = document.querySelector(".cells__board");
    }

    init () {
        this.drawRows(); 
        this.drawCells(); 
    }

    drawRows () {
        for (let i = 1; i <= this.getNumberOfRowsToDraw(); i++) {
            let cellsRow = document.createElement("div"); 
            cellsRow.classList.add('cells__row'); 
            this.cellsBoard.append(cellsRow);  
        }
    }
  
  
    drawCells () {
        let cellRows = document.querySelectorAll('.cells__row'); 

        for (let index in cellRows) {

            for (let i = 1; i <= this.getNumberOfCellsToDraw(cellRows[index]); i++) {

                let cell = document.createElement('div'); 

                cell.classList.add('cells__row-cell'); 

                cell.classList.add(Math.round(Math.random()) ? 'background--on' : 'background--off'); 

                cellRows[index].append(cell); 
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
}

module.exports = Canvas; 