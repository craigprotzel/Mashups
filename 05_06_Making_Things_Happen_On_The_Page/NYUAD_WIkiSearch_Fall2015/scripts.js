//*****Homework Exercises*****

//Exercise 1
function hashtagMtn(mtnValue){
	if (typeof mtnValue == "number"){
	// console.log("You forgot a number!");
	// }
	// else{
		var hashtagStr = '#';
		for (var i = 0; i < mtnValue; i++){
			console.log(hashtagStr);
			hashtagStr += '#';
		}
	}
	else{
		console.log("We got problems...");
	}
}

//hashtagMtn(6);

//Exercise 2
function fizzBuzz(numVal){
	var totalFixed = numVal + 1;
	for (var i = 1; i < totalFixed; i++){
		if (i%3 === 0 && i%5 === 0){
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


//Exercise 3
function makeBoard(rows, cols){
	var wholeBoard = '';
	for (var i = 0 ; i < rows; i++){
		var theRowStr = '';
		if(i%2 === 0){
			for (var j = 0; j < cols; j++){
				theRowStr = theRowStr + "#---";
			}
		}
		else{
			for (var k = 0; k < cols; k++){
				theRowStr = theRowStr + "---#";
			}
		}
		wholeBoard += theRowStr + '<br>';
	}
	return wholeBoard;
}

var theBoard = makeBoard(8,10);
//console.log(theBoard);

//var theChessBoardEl = document.getElementById('chessBoard');
//theChessBoardEl.innerHTML = theBoard;

// Plain Javascrpit
// var theChessBoardEl = $('#chessBoard');
// theChessBoardEl.html(theBoard);


// jQuery Way
//$('#chessBoard').html(theBoard);


//Callback Function
function putBoardOnPage(){
	console.log("Putting the board on the page!!!");
	var boardHTMLString = '<div class="theBoard">' + theBoard + '</div>';
	$('#chessBoard').append(boardHTMLString);
}

//var theButton = document.getElementById('theButton');
//document.addEventListener(theButton, putBoardOnPage, false);

//$('#theButton').click(putBoardOnPage);

// $('#theButton').click(function(){
	
// 	console.log("Putting the board on the page!!!");
// 	var boardHTMLString = '<div class="theBoard">' + theBoard + '</div>';
// 	$('#chessBoard').append(boardHTMLString);

// });

console.log("Loaded 1");


function searchWiki(searchTerm){
	console.log(searchTerm);

	var tempString = '<div class="searchResult">Searching for ' + searchTerm + ' ...</div>'

	$('#theSearchResults').html(tempString);

	var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
	var wikiSearchURL = wikiURL + searchTerm;

	$.ajax({
		url: wikiSearchURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems.");
			console.log(data);
		},
		success: function(data){
			console.log("WooHoo!!!");
			console.log(data);
			console.log(data[1]);
			var searchResults = data[1];
			var searchLinks = data[3];

			$('#theSearchResults').html('');

			for (var i = 0; i < searchResults.length; i++){
				console.log(searchResults[i]);
				var searchStr = '<div class="searchResult"><a target="_blank" href=' + searchLinks[i] + '>' + searchResults[i] + '</a></div>';
				$('#theSearchResults').append(searchStr);
			}
		}
	});
}

$(document).ready( function(){

	console.log("Loaded 2");

	$('#theButton').click( function(){
		//Do this stuff when a click occurs
		console.log("You clicked!!!");
		var theInputValue = $('#theInput').val();
		console.log(theInputValue);

		$('#theSearchResults').html('');

		searchWiki(theInputValue);
	});
});

console.log("Loaded 3");