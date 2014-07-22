var WUC = {};

var myKey =	'2481dc6ebf4f42918aaed25bb22c50fd';

function getCongressData(){
	//console.log("Yup!");

	//Create necessary date structure for AJAX request
	var today = new Date();
	//Convert it into the YYYY-MM-DD format
	var dd = today.getDate();
	if (dd < 10){
		dd = 0 + dd.toString();
	}
	var mm = today.getMonth()+1;  //getMonth is zero based
	if (mm < 10){
		mm = 0 + mm.toString();
	}
	var yyyy = today.getFullYear();
	//Construct string
	var queryDay = yyyy + '-' + mm + '-' + dd;
	//console.log(queryDay);

	var congressURL = 'http://congress.api.sunlightfoundation.com/floor_updates?legislative_day=' + queryDay + '&apikey=';

	//Make AJAX request
	$.ajax({
		url: congressURL + myKey,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			//console.log("WooHoo!");
			console.log(data);
			//return;

			WUC.today = data.results;
			//console.log(WUC.today);

			//Run Data Parsing Function
			parseData();

			//Run Data ID Parsing + Second Request
			//parseForID();
		}
	});
}


//LOTS OF UNDERSCORE CODE
//This function is just for example purposes
function parseData(){

	//Underscore EACH
	_.each(WUC.today, function(el){
		//console.log(el);
	});

	//Pull Out updates using EACH and PUSH
	var allUpdates = [];
	_.each(WUC.today, function(el){
		allUpdates.push(el.update);
	});
	//console.log(allUpdates);

	//Alt method using Underscore PLUCK
	var updates = _.pluck(WUC.today, 'update');
	//console.log(updates);
	//Add the updates to the page
	// _.each(updates, function(el){
	// 	$('#congressData').append("<p>" + el + "</p>");
	// });

	//Or
	//addToPage(updates);

	//Underscore FILTER
	//Which updates had vote?
	var voteEvents = _.filter(updates, function(el){
		return el.match('vote');
	});
	//console.log(voteEvents);

	//House Events
	var houseEvents = _.filter(WUC.today, function(el){
		return el.chamber == "house";
	});
	//console.log("House: " + houseEvents.length);

	//Senate Events
	var senateEvents = _.filter(WUC.today, function(el){
		return el.chamber == "senate";
	});
	//console.log("Senate: " + senateEvents.length);
	//console.log(senateEvents);

	// _.each(senateEvents, function(el){
	// 	console.log(el.update);
	// });

	//Underscore MAP
	//Samuel L. Jackson-ify the Updates
	var sljUpdates = _.map(updates, function(el){
		//return  el + " Godammit";
		//return el.replace(".", " Godammit! ");
		//return el.replace(/./, " Godammit! ");
		//return el.replace(/\./, " Godammit! ");
		return el.replace(/\.$/, " GODDAMIT!");
	});
	console.log(sljUpdates);
	addToPage(sljUpdates);
	// _.each(sljUpdates, function(el){
	// 	$('#congressData').append("<p>" + el + "</p>");
	// });

	//Create an array of words for each update
	//Use EACH + PUSH
	var allWords = [];
	_.each(updates, function(el){
		allWords.push(el.split(" "));
	});
	//console.log(allWords);

	//Use map
	var updateWords = _.map(updates, function(el){
		return el.split(" ");
	});
	//console.log(updateWords);

	//Find common words
	var commonWords = _.intersection(updateWords[2], updateWords[4]);
	//console.log(commonWords);

	//Create a single array using FLATTEN
	var flatArray = _.flatten(updateWords);
	//console.log(flatArray);

	//Remove duplicates using UNIQ
	var uniqueWords = _.uniq(flatArray);
	//console.log(uniqueWords);


	//Add Data to events with legislators
	//Underscore FILTER
	var legislators = _.filter(WUC.today, function(el){
		return el.legislator_ids.length !== 0;
	});
	//console.log(legislators);

	//Alt way - Underscore PLUCK + FILTER
	var legIDs = _.pluck(WUC.today, 'legislator_ids');
	//console.log(legIDs);
	var filteredLegIDs = _.filter(legIDs, function(el){
		return el.length > 0;
	});
	//console.log(filteredLegIDs);
	var justTheIDs = [];
	_.each(filteredLegIDs, function(el){
		_.each(el, function(id){
			justTheIDs.push(id);
		});
	});
	//console.log(justTheIDs);
}

function addToPage(pageData){
	_.each(pageData, function(el){
		$('#congressData').append("<p>" + el + "</p>");
	});
}


function parseForID(){
	//var searchIDs = [];
	_.each(WUC.today, function(obj){
		if (obj.legislator_ids.length !== 0){
			_.each(obj.legislator_ids, function(el){
				//WUC.asyncCount++;
				//searchIDs.push(el);
				//Make request for personal info
				makeInfoRequest(el, obj);
			});
		}
	});
}

//Example for handling asynchronous requests
function makeInfoRequest(personID, theObj){
	console.log("Making Request For: " + personID);
	var personURL = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + personID + '&apikey=';
	var myKey = '2481dc6ebf4f42918aaed25bb22c50fd';

	theObj.returnCount = 0;

	$.ajax({
		url: personURL + myKey,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log(data);
		},
		success: function(data){
			console.log("Individual Request");
			console.log(data);
			console.log(data.results[0].twitter_id);
			theObj.twitter_id = [];
			theObj.twitter_id.push(data.results[0].twitter_id);

			theObj.returnCount++;

			if (theObj.returnCount == theObj.legislator_ids.length ){
				console.log('Everyone is here!!!');
				//Put all of the data on the page!!!!!
				createDomElements(WUC.today);
			}
			else{
				var remaining = theObj.legislator_ids.length - theObj.returnCount;
				console.log('Almost, waiting on ' + remaining + ' more...');
			}
		}
	});
}

//Function for generating HTML Markup
//A precursor to templates!
function createDomElements(obj){
	//console.log(obj);
	var HTMLString = '';
	HTMLString += '<ol>';
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].chamber == "house") {
			HTMLString += '<li class="house">' + obj[i].update + '</li>';
		}
		else {
			HTMLString += '<li class="senate">' + obj[i].update + '</li>';
		}
		if (obj[i].twitter_id){
			for (var j = 0; j < obj[i].twitter_id.length; j++){
			HTMLString += '<a class="twitter" target="_blank" href="http://twitter.com/' + obj[i].twitter_id[j] + '">' +
							obj[i].twitter_id[j] +
							'</a>';
			}
		}
	}
	HTMLString += '<ol>';
	//Add HTML to the page
	$('#congressData').html(HTMLString);
}


$(document).ready(function(){
	//Make request to Sunlight Congress API
	getCongressData();
});
