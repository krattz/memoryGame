describe("adds all cards to an array",function(){
    var clicks = 0;
   beforeEach(function(){
       clicks++;
       spyOn(clicks, 'flips');
   });
     it("should increase count as int iterates through array", function(){
         expect(count).toBe("16");
     });  
    });
