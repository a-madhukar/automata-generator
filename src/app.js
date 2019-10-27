'use strict'; 

const Canvas = require('./Canvas'); 
const Rules = require('./CellularAutomata/Rules'); 
const PatternGenerator = require('./CellularAutomata/PatternGenerator');  

(new Canvas({
    rules: Rules, 
    generator:new PatternGenerator(Rules), 
})).setup(); 
