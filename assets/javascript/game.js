//function that runs the game and generates a random number
function startGame(){
	randomNumber = Math.floor(Math.random() * 120) + 19;
$("#random-number").html("<h1>" + randomNumber);


}

function reset(){
	startGame();
}

var score = 0;

//randomly generated values of each crystal
var redGemValue = Math.floor(Math.random() * 12) + 1;

var blueGemValue = Math.floor(Math.random() * 12) + 1;

var greenGemValue = Math.floor(Math.random() * 12) + 1;

var yellowGemValue = Math.floor(Math.random() * 12) + 1;


var wins = 0;

var losses = 0;

$("#wins").html("<h3>" + "Wins: " + wins);
$("#losses").html("<h3>" + "Losses: " + losses);

$("#RedGem").click(function(){
	redGemValue + score === score;
	checkWin();
});

$("#BlueGem").on("click", function() {
	blueGemValue + score === score;
	checkWin();
});

$("#GreenGem").on("click", function() {
	greenGemValue + score === score;
	checkWin();
});

$("#YellowGem").on("click", function() {
	yellowGemValue + score === score;
	checkWin();
});

$("#score").html("<h1>" + score);

function checkWin() {

	if (score === randomNumber){

		wins++;
		$("#wins").hmtl("<h3>" + wins);
		reset();
	}

	else if (score > randomNumber) {
		losses ++;
		$("losses").html("<h3>" + losses);
		reset();
	}
}

startGame();