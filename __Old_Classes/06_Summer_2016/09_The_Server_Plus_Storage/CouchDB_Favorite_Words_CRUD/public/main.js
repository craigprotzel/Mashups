function makeHTML(theData){
	var htmlString = '<ul id="theDataList">';
	theData.forEach(function(d){
		htmlString += '<li>' + d.user + ' : <a href="/' + d.word + '">'  + d.word + '</a>';
		htmlString += '<button id=' + d._rev + ' class="deleteButton">UPDATE</button>';
		htmlString += '<button id=' + d._id + ' class="deleteButton">DELETE</button>';
		htmlString += '</li>';
	});
	htmlString += '</ul';
	return htmlString;
}

function getWord(term){
	$.ajax({
		url: '/api/word/' + term + '?nums=10',
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$('#dataContainer').html('');
			var wordData = data.map(function(d){
				return d.doc;
			});
			var str = '';
			if (wordData.length === 1){
				str = " time";
			}
			else{
				str = " times";
			}
			$('#dataContainer').append('<h2>The word "' + term + '" has been favorited ' + wordData.length + str + '!</h2>');
		}
	});
}

var allData = [];
function getAllData(){
	$.ajax({
		url: '/api/all',
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("We have data");
			console.log(data);
			//You could do this on the server
			allData = data.map(function(d){
				return d.doc;
			});
			//Clear out current data on the page if any
			$('#dataContainer').html('');
			var htmlString = makeHTML(allData);
			$('#dataContainer').append(htmlString);
			//Bind events to each object
			allData.forEach(function(d){
				setDeleteEvent(d);
				setUpdateEvent(d);
			});
		}
	});
}

function setDeleteEvent(data){
		var theID = '#' + data._id;
		$(theID).click(function(){
			var theObj = _.find(allData, function(d){
				return d._id == data._id;
			});
			console.log(theObj);
			sendDeleteRequest(theObj);
	});
}

function sendDeleteRequest(obj){
	console.log(obj);
	//Make sure you want to delete
	var conf = confirm("Are you sure you want to delete '" + obj.user + " : " + obj.word + "' ?");
	if (!conf) return;
	//Proceed if confirm is true
	$('#dataContainer').html('<div id="loading">Data is being deleted...</div>');
	$.ajax({
		url: '/delete',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('Deleted!');
			console.log(resp);
			getAllData();

			/*----------------------------------------
			//ALT APPROACH - Avoid extra request to db
			//Remove deleted obj from allData array
			allData = _.reject(allData, function(d){
				return d._id == obj._id;
			});
			//Clear out current data on the page if any
			$('#dataContainer').html('');
			var htmlString = makeHTML(allData);
			$('#dataContainer').append(htmlString);
			//Bind events to each object
			allData.forEach(function(d){
				setDeleteEvent(d);
				setUpdateEvent(d);
			});
			----------------------------------------*/
		}
	});
}

function setUpdateEvent(data){
		var theID = '#' + data._rev;
		$(theID).click(function(){
			var theObj = _.find(allData, function(d){
				return d._rev == data._rev;
			});
			//Change a value
			var promptVal = prompt('Enter a new word to replace "' + theObj.word + '":');
			if (!promptVal) return;
			theObj.word = promptVal;
			console.log(theObj);
			sendUpdateRequest(theObj);
	});
}

function sendUpdateRequest(obj){
	$('#dataContainer').html('<div id="loading">Data is being updated...</div>');
	//console.log(obj);
	$.ajax({
		url: '/update',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('Updated!');
			console.log(resp);
			getAllData();
		}
	});
}

function saveData(obj){
	$.ajax({
		url: '/save',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('WooHoo!');
			console.log(resp);
			getAllData();
		}
	});
}

$(document).ready(function(){

	if (page === 'get all data'){
		$('#container').show();
		getAllData();
	}
	else{
		$('#container').hide();
		getWord(page);
	}

	$('#enterButton').click(function(){
		var userName = $("#userName").val() || 'ME';
		var favWord = $("#favWord").val().toLowerCase() || 'test';
		var timeStamp = new Date();
		//Create data object to be saved
		var data = {
			user: userName,
			word: favWord,
			date: timeStamp
		};
		console.log(data);
		saveData(data);
		//Clear out the form fields
		$("#userName").val('');
		$("#favWord").val('');
	});
});