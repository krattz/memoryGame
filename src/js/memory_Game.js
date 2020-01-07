const cards = document.querySelectorAll('.memory-card');
let hasCardFlipped=false;
let lockBoard = false;
let fcard, bcard;
let counter = document.getElementById('flips');
let modal = document.getElementById("popup1")
let clicks = 0;

function flipCard(){
    clicks++
    counter.innerHTML = clicks;
    if(lockBoard) return;
        this.classList.add('flip');

    if(!hasCardFlipped){
        hasCardFlipped = true;
        fcard = this;        
    }
    else{
        hasCardFlipped = false;
        bcard = this;
        checkForMatch(); 
    }

}
function checkForMatch(){
    if(fcard.dataset.cardtest==bcard.dataset.cardtest){
        disableCards();

    }else{
        unflipCards();        
    }
}

function disableCards(){
      this.fcard.remove('click', flipCard());
      this.bcard.remove('click', flipCard());
      resetBoard();
}

    function unflipCards(){
        hasCardFlipped = true;   
        setTimeout(()=> {
         fcard.classList.remove('flip');
         bcard.classList.remove('flip');
        resetBoard();
        },690);
    }

    function resetBoard(){
        hasCardFlipped = false;
    }

    (function shuffle(){
        cards.forEach(card => {
          let randomPosition = Math.floor(Math.random() *12);
          card.style.order = randomPosition;
        });
      })();

    cards.foreEach( card=> card.addEventListener('click',flipCard));
    
    module.exports = {
        flipCard
    };