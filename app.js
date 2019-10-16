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
//       this.log.push("in the init method"); 
      console.log("in the init method"); 

      let firstRow = []; 
      let totalCells = 50; 

      //setup the first row of the cell 
      for(let count = 1; count <= totalCells; count ++) {
        firstRow.push(0); 
      }

      firstRow.splice(Math.round(totalCells/2), 1, 1); 

      this.cells.push(firstRow); 

      
      for (let row = 0; row < 50; row++) {
        
        let currentCells = this.cells[row]; 
      
        let nextRangeOfCells = []; 


        for(let i = 0; i< currentCells.length; i++) {

          let currentNo = currentCells[i]; 
          let leftNo = !currentCells[i - 1] ? 0 : currentCells[i - 1]; 
          let rightNo = !currentCells[i + 1] ? 0 : currentCells[i + 1]; 
          let result = 0; 

          console.log("current no: " + currentCells[i]); 
          console.log(leftNo, currentNo, rightNo); 

          // rule 1 
          if (leftNo === 1 && currentNo == 1 && rightNo == 1)
            result = 0;

          // rule 2
          if (leftNo == 1 && currentNo == 1 && rightNo == 0)
            result = 0; 

          // rule 3
          if (leftNo == 1 && currentNo == 0 && rightNo == 1)
            result = 0; 

          // rule 4
          if (leftNo == 1 && currentNo == 0 && rightNo == 0)
            result = 1; 

          // rule 5
          if(leftNo == 0 && currentNo == 1 && rightNo == 1)
            result = 1; 


          // rule 6
          if (leftNo == 0 && currentNo == 1 && rightNo == 0)
            result = 1; 

          // rule 7
          if (leftNo == 0 && currentNo == 0 && rightNo == 1)
            result = 1; 

          // rule 8
          if (leftNo == 0 && currentNo == 0 && rightNo == 0)
            result = 0; 


          console.log("Result: " + result); 
          nextRangeOfCells.push(result); 

        }

        console.log("next range of cells: ", nextRangeOfCells); 

        this.cells.push(nextRangeOfCells); 

        console.log(this.cells);
        
        
      }
      
       
   
      
    }, 
  }, 
  
  mounted(){
    console.log("vue app is ready"); 
    
    this.init(); 
  }
}); 