// Week 2 Homework

//----Exercise 1----
function hashTagMtn(mtnTop){
	var hashtag = "#";
	for (var i = 0; i < mtnTop; i++){
		console.log(hashtag);
		hashtag += '#';
	}
}

//----Exercise 2----
function fizzBuzz(totalNums){
	var wholeThing = "";
	for (var i = 0; i < totalNums; i++){
		if (i%3 === 0 && i%5 === 0) {
			wholeThing += "<p>FizzBuzz</p>";
			console.log("FizzBuzz");
		}
		else if (i%3 === 0){
			console.log("Fizz");
			wholeThing += "<p>Fizz</p>";
		}
		else if (i%5 === 0){
			console.log("Buzz");
			wholeThing += "<p>Buzz</p>";
		}
		else{
			console.log(i);
			wholeThing += '<p>' + i + '</p>';
		}
	}
	return wholeThing;
}

//----Exercise 3----

//In the console
function makeBoard(rows,cols){
	var wholeBoard = "<div>";
	for (var i = 0; i < rows; i++){
		var text = "";
		if (i % 2 === 0){
			for (var j = 0; j < cols; j++){
				text = text + '#--';
			}
		}
		else{
			for (var k = 0; k < cols; k++){
				text = text + '--#';
			}
		}
		wholeBoard += text + '<br>';
	}
	wholeBoard += "</div>";
	return wholeBoard;
}

//var myBoard = makeBoard(8,4);

// var fBZ = fizzBuzz(100);

//Native JS
// var theBoard = document.getElementById('board');
// theBoard.innerHTML = fBZ;

// var newDiv = document.createElement('div');
// newDiv.innerHTML = "Hi Chuksy";

// //jQuery
// $('body').append(newDiv);
// var nestedDiv = "<div id='nestedBoard'>" + myBoard + '</div>';
// $('#board').append(fizzBuzz(50));

var nums = 0;
function notify(){
	console.log(nums);
	nums++;
}

console.log("Are we loaded?");

$(document).ready(function(){

	console.log("We are loaded!");

	// var theButton = document.getElementById('theButton');
	// theButton.addEventListener('click', function(){
	// 	var total = "I have been pressed " + nums + " times!";
	// 	notify(total);
	// }, false );
	
	$('#theButton').click(function(){
		// var total = "I have been pressed " + nums + " times!";
		// notify(total);
		var randomRows = Math.ceil(Math.random() * 10);
		var randomCols = Math.ceil(Math.random() * 10);
		var randomBoard = makeBoard(randomRows,randomCols);
		$('#board').append(randomBoard);
		notify();
	});

	console.log("About to call notify function");
	notify();
	console.log("Just ran the notify function");

});

console.log("Are we loaded yet?");


