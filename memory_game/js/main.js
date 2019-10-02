console.log("Up and running!");
var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
};

//cardId is a number (0-3)
function flipCard (cardId) {
    
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    return checkForMatch();



if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo) {
        alert("You found a match!")
    } else { 
    alert("Sorry, try again")
    }
}    
}