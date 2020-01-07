describe("adds all cards to an array",function(){
    var clicks = 0;
   beforeEach(function(){
    clicks++;
  
    
   });
     it("should increase count as int iterates through array", function(){
         expect(clicks).toBe(clicks++);
     });  
    });
