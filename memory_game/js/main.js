console.log("Aloha World!");
var cards = ["queen", "ace", "king", "joker"];
var cardsInPlay = []; 

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You've found a match!"); 
	} else {
		console.log("Sorry, try again!");
	}
}

function flipCard (cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch ();
}

flipCard(0);
flipCard(2);

