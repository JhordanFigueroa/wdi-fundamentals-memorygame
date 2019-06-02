console.log("Aloha World!");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];
var cardsInPlay = []; 

function checkForMatch () {
	console.log(this.setAttribute('src',cards.cardImage));
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!"); 
	} else {
		alert("Sorry, try again!");
	}
}

function flipCard () {
	cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch ();
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};
createBoard();






