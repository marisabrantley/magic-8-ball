$(document).ready(function(){

	var magic8Ball = {};

	magic8Ball.listOfAnswers = ["Most definitely!", "Ask again later.", "Dream on.", "Possibly…", "Most likely.", "When pigs fly.", "Yes x 1000!"];

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
  $("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = 							Math.floor(randomNumberForListOfAnswers);
	var answer =								this.listOfAnswers[randomIndex];			$("#answer").text(answer);
	console.log(question);
	console.log(answer);

  };

	$("#answer").hide();


var onClick = function() {

  $("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function() {
			var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);
		}, 500);
  };

	$("#questionButton").click(onClick);

});
