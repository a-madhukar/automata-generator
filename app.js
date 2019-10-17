new Vue({
  el: '#app', 
  
  data(){
    return {
      cells: [], 
      
      previousRange:[], 
      
      currentRange:[], 
      
      
      log:[], 
      
    }; 
  }, 
  
  methods:{
    init(){

      this.setupFirstRow(); 
      
      for (let row = 0; row < 50; row++) {
        
        let currentCells = this.cells[row]; 
      
        let nextRangeOfCells = []; 

        console.log("Row NO: " + row); 
        console.log("currentCells " + currentCells); 


        for(let i = 0; i< currentCells.length; i++) {

          let patternString =  this.getPatternString(
            !currentCells[i - 1] ? 0 : currentCells[i - 1], 
            currentCells[i], 
            !currentCells[i + 1] ? 0 : currentCells[i + 1]
          ); 

          nextRangeOfCells.push(
            this.getResultOfPattern(patternString)
          ); 

        }

        this.cells.push(nextRangeOfCells); 

        console.log(this.cells);  
        
      }
      
      
    }, 


    getPatternString(leftNo, currentNo, rightNo) {
      return '' + leftNo + '' + currentNo + '' + rightNo;
    }, 

    getResultOfPattern(patternString) {
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
    }, 


    setupFirstRow() {
      //       this.log.push("in the init method"); 
      console.log("in the init method"); 

      let firstRow = []; 
      let totalCells = 80; 

      //setup the first row of the cell 
      for(let count = 1; count <= totalCells; count ++) {
        firstRow.push(0); 
      }

      firstRow.splice(Math.round(totalCells/2), 1, 1); 

      this.cells.push(firstRow); 
    }, 


  }, 
  
  mounted(){
    console.log("vue app is ready"); 
    
    this.init(); 
  }
}); 