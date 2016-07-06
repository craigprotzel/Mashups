// Required fields for connecting to Cloudant
// The username you use to log in to cloudant.com
var CLOUDANT_USERNAME="";
// The name of your database
var CLOUDANT_DATABASE="";
// These two are generated from your Cloudant dashboard of the above database.
var CLOUDANT_KEY="";
var CLOUDANT_PASSWORD="";

var CLOUDANT_URL = "https://" + CLOUDANT_USERNAME + ".cloudant.com/" + CLOUDANT_DATABASE;

// This function takes your Cloudant key and password and returns a Base64
// encoded string to authorize your requets. Without this, you'd need to fill
// in a username and password to make requets. Read more about the btoa()
// function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
var hash = btoa(CLOUDANT_KEY+":"+CLOUDANT_PASSWORD);

var noteTemplate = function (data) {
	template = '<div class="note">';
	template += new Date(data.created_at);
	template += '<h3>'+_.escape(data.title)+'</h3>';
	template += '<div>'+_.escape(data.text)+'</div>';
	template += '</div>';

	return template;
};

// A function to accept a JSON object and POST it to CouchDB.
function saveRecord (theNote) {
	$.ajax({
		url: CLOUDANT_URL,
		beforeSend: function (xhr) {
			// This function is used to pass authentication data to Cloudant before
			// sending the data
			xhr.setRequestHeader ("Authorization", "Basic " + hash);
		},
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify(theNote),
		error: function(resp){
			$("#new-note").prepend("<p><strong>Something broke.</strong></p>");
		},
		success: function(resp){
			console.log("Saved to our CouchDB!");
			console.log(resp);
			// Render the note.
			var compiledTmpl = noteTemplate(theNote);
			$("#notes").append(compiledTmpl);

			// Empty the form.
			$("#note-title").val("");
			$("#note-text").val("");

			// Deselect the submit button.
			$("#note-submit").blur();
		}
	});
}

// Loads all records from the Cloudant database. Loops through them and
// appends each note onto the page.
function loadNotes() {
	$.ajax({
		url: "https://"+CLOUDANT_USERNAME+".cloudant.com/"+CLOUDANT_DATABASE+"/_all_docs?include_docs=true",
		beforeSend: function (xhr) {
			xhr.setRequestHeader ("Authorization", "Basic " + hash);
		},
		type: "GET",
		data: JSON,
		error: function(resp){
			console.log("Problems");
		},
		success: function(resp){
			$("#notes").empty();
			console.log("Loading notes!");
			//Need to parse the resp string
			var notes = JSON.parse(resp);
			console.log(notes);

			// Use Underscore's sort method to sort our records by date.
			var sorted = _.sortBy(notes.rows, function (row) { return row.doc.created_at;});

			// Now that the notes are sorted, render them using the template
			sorted.forEach(function (row) {
				var compiledTmpl = noteTemplate(row.doc);
				$('#notes').append(compiledTmpl);
			});
		}
	});
}

$(document).ready(function(){
	// Request any existing notes
	loadNotes();

	$("#new-note").submit(function () {
		// Get the information we want from the form including creating a new date.
		var noteData = {
			somethingElse: "HI EVERYONE",
			title: $("#note-title").val(),
			text: $("#note-text").val(),
			created_at: new Date()
		};

		// Send the data to our saveRecord function
		saveRecord(noteData);

		// Return false to prevent the form from submitting itself
		// We need this line because we are using a 'form' element
		return false;
	});
});
