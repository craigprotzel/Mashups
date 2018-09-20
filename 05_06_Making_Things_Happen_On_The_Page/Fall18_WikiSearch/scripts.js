var me = "Craig";

function sayHello(){
	alert("Hello Class!");
}


//console.log("Hello!");

//Answer to exercise #1
function makeHashtagMtn(x){
	var hashtag = "#";
	for(var i = 0; i < x; i++){
		//do this in here 
		console.log(hashtag);
		hashtag = hashtag + "#";
	}
}

//Answer to exercise #2
function fizzBuzz(num){
	for (var i = 1; i < num; i++){

		if (i%3 === 0 && i%5 === 0){
			console.log("FizzBuzz");
		}
		else if(i%3 === 0){
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

//Answer to exercise #3

function makeBoard(rows, cols){

	var wholeBoard = "";
	for (var i = 0; i < rows; i++){

		var rowText = "";

		if (i%2 === 0){
			// console.log("Make an even row! - " + i);
			//console.log(" # # # #");

			for (var j = 0; j < cols; j++){

				if (j%2 === 0){
					rowText = rowText + " ";
				}
				else{
					rowText = rowText + "#";
				}
			}
		}
		else{
			// console.log("Make an odd row! - " + i);
			//console.log("# # # # ");

			for (var k = 0; k < cols; k++){
				
				if (k%2 === 0){
					rowText = rowText + "#";
				}
				else{
					rowText = rowText + " ";
				}
			}
		}
		wholeBoard = wholeBoard + rowText + "\n";
	}
	console.log(wholeBoard);
}


// function makeName(){
// 	var name = "Me";

// 	// return name;
// 	// var results = document.getElementById("results");
// 	// results.innerHTML = name;
// 	// console.log("Just called make name!!!");

// 	$('#results').html(name);
// }

// var theName = makeName();
// var results = document.getElementById("results");
// results.innerHTML = theName;


// var theButton = document.getElementById("the-button");
// theButton.addEventListener("click", function(){
// 	makeName();
// 	console.log("Just called make name!!!");
// }, false);



function makeHTML(name, link){
	var nameHTML = "<p><a href=" + link + ">" + name + "</a></p>";
	$('#results').append(nameHTML);
}

var wikiURL = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

function searchWiki(searchTerm){

	var wikiURLSearch = wikiURL + searchTerm;
	console.log(wikiURLSearch);

	$.ajax({
		url : wikiURLSearch,
		type : 'GET',
		dataType : 'jsonp',
		error : function(err){
			console.log("Uh oh???");
			console.log(err);
		},
		success : function(data){
			console.log("WooHoo!!!");
			console.log(data);

			var resultTerms = data[1];
			var resultLinks = data[3];

			for (var i = 0; i < resultTerms.length; i++){
				makeHTML(resultTerms[i], resultLinks[i]);
			}
		} 
	});
}

$('#the-button').click(function(){
	$('#results').html("");
	var theInput = $('#the-input').val();
	console.log(theInput);
	//makeName(theInput);
	searchWiki(theInput);
});


















