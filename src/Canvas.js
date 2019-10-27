'use strict'; 

class Canvas {

    constructor (rules) {
        this.cellsBoard = document.querySelector(".cells__board");
        this.generatePatternButton = document.querySelector('#generatePatternButton'); 
        this.patternOptionsSelect = document.querySelector('#patternOptionsSelect'); 
        this.rules = rules; 
    }

    setup () {
        let methods = [
            'drawRows', 
            'drawCells',
            'addDrawSelectOptions',
            'addEventListeners'
        ]

        methods.forEach(method => this[method]()); 
    }

    addDrawSelectOptions () {
        for (let key in this.rules) {
            let option = document.createElement("OPTION"); 
            option.text = "Rule " + key; 
            option.value = key; 
            this.patternOptionsSelect.append(option); 
        }
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

    addEventListeners () {
        this.generatePatternButton.addEventListener('click', this.generatePattern.bind(this)); 
    }
}

module.exports = Canvas; 