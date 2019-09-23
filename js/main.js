
// the score board should be set to 0 to begin with
// the computer will randomly choose rock, paper or scissors
// if player clicks rock and computer chooses paper
// the message will be updated to reflect what player chose, computer chose and that the computer wins
// and there will be an update to the score board adding one point for the computer

let userscoreBoard = 0;
let compScoreBoard = 0;
let choices = ["rock", "paper", "scissors"];
let randChoiceIndex;
let computerChoice;
let userChoice;
let reset;

$("#rock").on('click', function(){
	userChoice = "rock";
	randChoiceIndex = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randChoiceIndex];

		if (computerChoice === userChoice) {
			compScoreBoard = compScoreBoard +1;
			userscoreBoard = compScoreBoard +1;
			$('#status').text('You chose rock. Computer chose rock. Its a tie.');
			$("#humanScore").text(userscoreBoard);
			$("#computerScore").text(compScoreBoard);
		}

		else if (computerChoice === "paper") {
			compScoreBoard = compScoreBoard + 1;
			$('#status').text('You chose rock. Computer chose paper. Computer Wins.');
			$("#computerScore").text(compScoreBoard);
		} 

		else if (computerChoice === "scissors") {
			userscoreBoard = userscoreBoard +1;
			$('#status').text('You chose rock. Computer chose scissors. You Win.');
			$("#humanScore").text(userscoreBoard);
		}
});

$("#paper").on('click', function(){
	userChoice = "paper";
	randChoiceIndex = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randChoiceIndex];

		if (computerChoice === userChoice) {
			compScoreBoard = compScoreBoard +1;
			userscoreBoard = compScoreBoard +1;
			$('#status').text('You chose paper. Computer chose paper. Its a tie.');
			$("#humanScore").text(userscoreBoard);
			$("#computerScore").text(compScoreBoard);
		}

		else if (computerChoice === "rock") {
			compScoreBoard = compScoreBoard + 1;
			$('#status').text('You chose paper. Computer chose rock. You Win.');
			$("#humanScore").text(userscoreBoard);
		} 

		else if (computerChoice === "scissors") {
			userscoreBoard = userscoreBoard +1;
			$('#status').text('You chose paper. Computer chose scissors. Computer Wins.');
			$("#computerScore").text(compScoreBoard);

		}
});

$("#scissors").on('click', function(){
	userChoice = "scissors";
	randChoiceIndex = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randChoiceIndex];

		if (computerChoice === userChoice) {
			compScoreBoard = compScoreBoard +1;
			userscoreBoard = compScoreBoard +1;
			$('#status').text('You chose scissors. Computer chose scissors. Its a tie.');
			$("#humanScore").text(userscoreBoard);
			$("#computerScore").text(compScoreBoard);
		}

		else if (computerChoice === "paper") {
			compScoreBoard = compScoreBoard + 1;
			$('#status').text('You chose scissors. Computer chose paper. You Win.');
			$("#humanScore").text(userscoreBoard);
		} 

		else if (computerChoice === "rock") {
			userscoreBoard = userscoreBoard +1;
			$('#status').text('You chose scissors. Computer chose rock. Computer Wins.');
			$("#computerScore").text(compScoreBoard);
			
		}
});

$('#reset').on('click', function (){
	reset = compScoreBoard * 0;
})

/*
$("#rock").on("click", function(){
    randChoiceIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randChoiceIndex];

/*let scoreboard = 0;
let choices = ["rock", "paper", "scissors"];
let randChoiceIndex //= Math.floor(Math.random() * choices.length);
let computerChoice //= choices[randChoiceIndex];

$('rock').on('click')

console.log (choices[randChoiceIndex]);*/


// let computerBot = ["rock", "paper", "scissors"];
// let .scoreboard = 0;

// $('rock').on('click', function (){
// 	computerBot
// 	if computerBot === 'rock', Math.floor(Math.random() * {2}) {
// 		alert ('You chose rock. Computer chose rock. Tie.')
// 	}

// 	else if (computerBot === 'paper') {
// 		alert ('You chose rock. Computer chose paper. You Lose')
// 	}

// 	else if (computerBot === 'scissors') {
// 		alert ('You chose rock. Computer chose scissors. You Win!')
// 	}

// });


// $('paper').on('click', function (){
// computerBot
// 	if computerBot === 'rock', //.scoreboard- add it here some way//
// 		alert ('You chose paper. Computer chose rock. You Win.')

// 	if computerBot === 'paper'
// 		alert ('You chose paper. Computer chose paper. Tie.')

// 	if computerBot === 'scissors'
// 		alert ('You chose paper. Computer chose scissors. You Lose.')

// });
	

// $('scissors').on('click', function (){
// computerBot
// 	if computerBot === 'rock', //.scoreboard- add it here some way//
// 		alert ('You chose scissors. Computer chose rock. You Lose.')

// 	if computerBot === 'paper'
// 		alert ('You chose scissors. Computer chose paper. You Win.')

// 	if computerBot === 'scissors'
// 		alert ('You chose scissors. Computer chose scissors. Tie.')

// });

/*

/ 1. Write a detailed pseudocode for this game
// 2. Follow your pseudocode line by line (or in an order that makes sense)
// 3. Can't remember a method/function, Google it. Ask out loud. You got this :)

// Tip: Method for getting a random number: Math.floor(Math.random() * {maxNum});can get a random number, between a set of numbers



//1.the score board should be set to 0 to begin with
//you will compete against a computer, so the computer should be given 3 options
// to play at random--rock, paper or scissors
//2. the computer will randomly choose rock, paper or scissors
//3. on the click of rock, the computer will play at random and play paper
//if player clicks rock and computer chooses paper, the message will give an alert that the player wins
//and there will be an update to the score board adding one point for the player

// 6.you will need to add 1 for each time the computer or player wins 
// lose, which will again prompt a message saying "you lose" and add points 
//8.on the scoreboard for the computer 
//9.when the player selects scissors, this will result in a tie
//10.both computer and play will receive a point
//11.if the player would like to start over, on clicking of "start over" button,
//the score will reset

/*
let currentImageIndex;
let totalImages = $('img').length;

$('.btn.next').on('click', function (){
	currentImageIndex = $('.active').index();
	if (currentImageIndex === (totalImages - 1)) {
		$('.active').removeClass('active');
		$('img-container img').eq(0).addClass('active');
}
else{
	$('.active').removeClass('active').next().addClass('active');
}

});

$('.btn.prev').on('click', function (){
	currentImageIndex = $('.active').index();
	if (currentImageIndex === 0) {
		$('.active').removeClass('active');
		$('img-container img').eq(totalImages - 1);.addClass('active');
	}
	else {
		$('.active').removeClass('active').prev().addClass('active');
	}
});*/