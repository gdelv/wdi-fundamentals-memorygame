console.log("Up and running!");
var cards = [
        {
            rank: 'queen',
            suit: 'hearts',
            cardImage: 'images/queen-of-hearts.png'
        },
        {
            rank: 'queen',
            suit: 'diamonds',
            cardImage: 'images/queen-of-diamonds.png'   
        },
        {
            rank: 'king',
            suit: 'hearts',
            cardImage: 'images/king-of-hearts.png'
        },
        {
            rank: 'king',
            suit: 'diamonds',
            cardImage: 'images/king-of-diamonds.png'
        }
];
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
    console.log(cards[cardId].cardImage);
    console.log("User flipped " + cards[cardId].rank);
    console.log("The suit is "+ cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    return checkForMatch();



if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo) {
        alert("You found a match!")
    } else { 
    alert("Sorry, try again")
    }
}    
}