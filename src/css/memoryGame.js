const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard=false;
let lockBoard = false;
let fcard, bcard;
let counter = document.getElementById('flips');
parseInt(counter);
let clicks = 0;

function flipCard(){
    if(lockBoard) return;
        this.classList.toggle('flip');
        this.counter = this.clicks++;
        
    if(!hasFlippedCard){
        hasFlippedCard = true;
        fcard = this;     
    }
    else{
        hasFlippedCard = false;
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
      this.bcard.removeEventListener('click', flipCard());
      resetBoard();
}

    function unflipCards(){
        lockBoard = true;   
        setTimeout(()=> {
         fcard.classList.remove('flip');
         bcard.classList.remove('flip');
        resetBoard();
        },1500);
    }

    function resetBoard(){
        [hasFlippedCard,lockBoard] = [false,false];
        [fcard,bcard] = [null,null];
    }

    function shuffle(){
        cards.forEach(card =>{
            let randomP = Math.floor(Math.random()*12);
            card.style.order = randomP;
        });         
    }

    cards.forEach( card=> card.addEventListener('click',flipCard));