const cards = document.querySelectorAll('.memory-card');
let hasCardFlipped=false;
let lockBoard = false;
let fcard, bcard;
let counter = document.getElementById('flips');

let clicks = 0;

function flipCard(){
    counter.innerHTML = clicks++;
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
      this.fcard.removeEventListener('click', flipCard());
      this.fcard.remove('flip');
      this.bcard.removeEventListener('click', flipCard());
      this.bcard.remove('flip');
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

    cards.forEach( card=> card.addEventListener('click',flipCard));