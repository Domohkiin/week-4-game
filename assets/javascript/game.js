//function that runs the game 
function startGame(){
	//randomly generates and sets the values of each crystal
	redGemValue = Math.floor(Math.random() * 12) + 1;

	blueGemValue = Math.floor(Math.random() * 12) + 1;

	greenGemValue = Math.floor(Math.random() * 12) + 1;

	yellowGemValue = Math.floor(Math.random() * 12) + 1;
	//generates a random number between 19 and 120 that the user tries to reach
	randomNumber = Math.floor(Math.random()*(120-19+1)+19);
//writes that number to the page
$("#random-number").html("<h1>" + randomNumber);


}
//reset function that sets the score back to 0 and runs the game again
function reset(){
	score = 0;
	$("#score").html("<h1>" + score);
	startGame();
}

var redGemValue = 0;
var blueGemValue = 0;
var greenGemValue = 0;
var yellowGemValue = 0;
//stores the score
var score = 0;
//stores the wins
var wins = 0;
//stores the losses
var losses = 0;
//click functions that add the value of the clicked crystal to the
//players score, writes the new score on the page, and calls the checkWin function
$("#RedGem").click(function(){
	score = score + redGemValue;
	$("#score").html("<h1>" + score);
	checkWin();
});

$("#BlueGem").click(function() {
	score = score + blueGemValue;
	$("#score").html("<h1>" + score);
	checkWin();
});

$("#GreenGem").click(function() {
	score = score + greenGemValue;
	$("#score").html("<h1>" + score);
	checkWin();
});

$("#YellowGem").click(function() {
	score = score + yellowGemValue;
	$("#score").html("<h1>" + score);
	checkWin();
});
//function that checks if the user has won or not
function checkWin() {
	//if the score is equal to the target number wins goes up, the wins are written to the page, and reset is run
	if (score === randomNumber){

		wins++;
		document.querySelector("#wins").innerHTML = wins;
		//$("#wins").hmtl("<h3>" + wins);
		reset();
	}
	//if the score surpasses the target number, losses goes up, the losses are written to the page, and reset is run
	else if (score > randomNumber) {
		losses ++;
		document.querySelector("#losses").innerHTML = losses;
		//$("losses").html("<h3>" + losses);
		reset();
	}
}
//starts the game 
startGame();