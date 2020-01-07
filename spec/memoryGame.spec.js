describe("adds all cards to an array",function(){
    var clicks = 0;
   beforeEach(function(){
    clicks++;
      var cards = flipCard();
       spyOn(cards, 'lockBoard');
   });
     it("should increase count as it iterates through array", function(){
         expect(cards).toHaveBeenCalled();
     });  
    });

