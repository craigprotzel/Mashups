//******Homework Exercises******

//----Exercise 1----
//Define the function
function hashtagMtn(mtnTop){
	var hashtag = '#';
	for (var i = 0; i < mtnTop; i++){
		console.log(hashtag);
		hashtag += '#';
	}
}
//Call the function
//hashtagMtn(5);

//----Exercise 2----
//Define the function
function fizzBuzz(totalNums){
	for (var i = 0; i < totalNums; i++){
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
		}
		else if (i%3 === 0){
			console.log("Fizz");
		}
		else if (i%5 === 0){
			console.log("Buzz");
		}
		else{
			console.log(i);
		}
	}
}
//Call the function
//fizzBuzz(100);

//----Exercise 3----

//In the console
function make(rows,cols){
	var wholeBoard = "";
	for (var i = 0; i < rows; i++){
		var text = "";
		if (i % 2 === 0){
			for (var j = 0; j < cols; j++){
				text = text + '# ';
			}
		}
		else{
			for (var k = 0; k < cols; k++){
				text = text + ' #';
			}
		}
		wholeBoard += text + '\n';
	}
	console.log(wholeBoard);
}


//On the page
function makeBoard(rows, cols){
	var wholeBoard = "";
	for (var i = 0; i < rows; i++){
		var text = "";
		if (i%2 === 0){
			for (var j = 0; j < cols; j++){
				text += "#----";
			}
		}
		else {
			for (var k = 0; k < cols; k++){
				text += "--#--";
			}
		}
		wholeBoard += text + "<br>";
	}
	return wholeBoard;
}
//Call the function
//makeBoard(6,4);
var myChessBoard = makeBoard(3, 10);

//******Elements & Selectors******
//JS Approach
/*
var chessBoard = document.getElementById('chessBoard');
chessBoard.innerHTML = myChessBoard;

var myBoardContainer = document.createElement('div');
myBoardContainer.innerHTML = myChessBoard;
chessBoard.appendChild(myBoardContainer);
*/

//jQuery Approach
// $('#chessBoard').html(myChessBoard);
// $('#chessBoard').addClass('chessBoardStyle');


//******Functions******
var nums = 0;
function notify(){
	console.log("You clicked me : " + nums);
	nums++;
}

function generateRandomColor(){
	var r = Math.floor(Math.random() * 125);
	var g = Math.floor(Math.random() * 155);
	var b = Math.floor(Math.random() * 255);

	var randomColor = "rgb(" + r + "," + g + "," + b + ")";
	return randomColor;
}


function getData(curSearchTerm){
	//Write AJAX code
	var myURL = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

	$.ajax({
		url: myURL + curSearchTerm,
		type: 'GET',
		dataType: 'jsonp',
		error: function(){
			console.log("Uh oh...");
			console.log(msg);
		},
		success: function(data){
			console.log("It worked");
			console.log(data);
			
			console.log(data[0]);
			var mySearchTerm = data[0];
			$('#searchTerm').html(mySearchTerm);
			
			console.log(data[1]);
			var searchResults = data[1];
			for (var i = 0; i < searchResults.length; i++){
					var htmlString = "<p>" + searchResults[i] + "</p>";
					$('#searchResults').append(htmlString);
			}
		}
	});
}

//******Events******

// window.onload = function(){
// 	console.log("Loaded!!!");
// 	$('#chessBoard').html(myChessBoard);
// };

$(document).ready(function(){
	console.log("Loaded!!!");

/*
	//JS Approach
		var chessButton = document.getElementById('chessBoardButton');
	chessButton.addEventListener('click', function(){
		notify();
		$('#chessBoard').append(myChessBoard);
		$('#chessBoard').addClass('chessBoardStyle');
	}, false);
*/	

	//jQuery Approach
	$('#chessBoardButton').click(function(){
		//notify();

		//Add the chess board to the page
		//$('#chessBoard').append(myChessBoard);
		//$('#chessBoard').addClass('chessBoardStyle');

		// //Clear the elements on the page
		// $('#searchTerm').html('');
		// $('#searchResults').html('');
		// //Get the input box value
		
		var inputTerm = $('#inputBox').val();
		// console.log(inputTerm);

		//Call the function to execute
		getData(inputTerm);
	});

	// //Extra event manipulating elements via a class
	// $('#doMoreButton').click(function(){
	// 	//Change the background color of the page
	// 	var newBGColor = generateRandomColor();
	// 	$('body').css("background-color", newBGColor);

	// 	//Change the styling of multiple divs via a class
	// 	if ($(".boxBottom").hasClass("extraBox")){
	// 		$(".boxBottom").removeClass("extraBox");
	// 		$(".boxBottom").css("background-color", "green");
	// 	}
	// 	else{
	// 		$(".boxBottom").addClass("extraBox");
	// 	}
	// });
});

console.log("Not loaded yet!!!");