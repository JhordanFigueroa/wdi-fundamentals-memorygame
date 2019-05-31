console.log("Aloha World!");
var cards = ["queen", "ace", "king", "joker"];
var cardsInPlay = [, ,]; 
var cardOne = cards[0];
console.log(cards[0]);
cardsInPlay.push(cardOne);
console.log("User Flipped ",cardsInPlay);
var cardTwo = cards[2]; 
cardsInPlay.push(cardTwo); 
console.log('User Flipped ', cardsInPlay);

if (cardsInPlay.length === 2) {
	result = "there are two cards";
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!"); 
} else {
	alert ("Sorry, try again."); 
}

