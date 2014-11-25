//Class for my data objects
function FavWord(dataObj){
	//Set the db object as the 
	this.dataObj = dataObj;

	//A method to call on the object to generate HTML and bind event handlers
	this.createDomElement = function(){
		var htmlString = '';
		htmlString += '<li>' + this.dataObj.user + ' : ';
		htmlString += '<a href="/' + this.dataObj.word + '">'  + this.dataObj.word + '</a>';
		htmlString += '<button id=' + this.dataObj._rev + ' class="deleteButton">UPDATE</button>';
		htmlString += '<button id=' + this.dataObj._id + ' class="deleteButton">DELETE</button>';
		htmlString += '</li>';

		//Bind DOM events within the class
		var curObj = this;
		curObj.element = $(htmlString).appendTo('#theDataList');
		curObj.element.click(function(e){
			var theID = $(e.target).attr("id");
			if (theID == curObj.dataObj._rev){
				sendUpdateRequest(curObj.dataObj);
			}
			else if (theID == curObj.dataObj._id){
				sendDeleteRequest(curObj.dataObj);
			}
		});
	};
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
			var dbData = data.map(function(d){
				return d.doc;
			});
			//Clear out current data on the page if any
			$('#dataContainer').html('<ul id="theDataList">');
			//Create Fav Word objects
			dbData.forEach(function(d){
				var tempObj = new FavWord(d);
				tempObj.createDomElement();
			});
		}
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
		}
	});
}

function sendUpdateRequest(obj){
	//Change a value
	var promptVal = prompt('Enter a new word to replace "' + obj.word + '":');
	if (!promptVal) return;
	obj.word = promptVal;

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