describe("adds all cards to an array",function(){
    var clicks = 0;
   beforeEach(function(){
    clicks++;
      var card = flipCard();
       spyOn(card, 'lockBoard');
   });
     it("should increase count as it iterates through array", function(){
         expect(card).toHaveBeenCalled();
     });  
    });

