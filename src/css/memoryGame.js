const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard=false;
let lockBoard = false;
let fcard, bcard;
let counter = document.getElementById('flips');

let clicks = 0;


function flipCard(){
    counter.innerHTML = clicks++;
    if(lockBoard) return;
        this.classList.toggle('flip');

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
        hasFlippedCard = false;
        lockBoard = false;
        
        // shuffle();
    }

    // function shuffle(){ 
    //     for(let i=cardsArray.length();i<cardsArray.length()-1;i--){
    //         let randomIndex= Math.floor(Math.random*(i-+1));
    //         this.cardsArray[i].style.order = randomIndex;
    //     }        
    // }

    cards.forEach( card=> card.addEventListener('click',flipCard));