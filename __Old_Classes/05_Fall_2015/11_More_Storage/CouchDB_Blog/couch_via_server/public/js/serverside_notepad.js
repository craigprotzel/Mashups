var noteTemplate = function (data) {
	template = '<div class="note">';
	template += new Date(data.created_at);
	template += '<h3>'+ data.title +'</h3>';
	template += '<div>'+ data.text +'</div>';
	template += '</div>';

	return template;
};

// A function to accept an object and POST it to the server as JSON
function saveRecord (theData) {
	// Set the namespace for this note
	theData.namespace = window.key;
	console.log("Trying to Post");
	$.ajax({
		url: "/save",
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify(theData),
		error: function (resp) {
			console.log(resp);
			// Add an error message before the new note form.
			$("#new-note").prepend("<p><strong>Something broke.</strong></p>");
		},
		success: function (resp) {
			console.log(resp);
			// Render the note
			var htmlString = noteTemplate(theData);
			$("#notes").append(htmlString);

			// Empty the form.
			$("#note-title").val("");
			$("#note-text").val("");
			// Deselect the submit button.
			$("#note-submit").blur();
		}
	});
}

// Loads all records from the Cloudant database. 
// Loops through them and appends each note onto the page.
function loadNotes() {
	$.ajax({
		url: "/api/"+window.key,
		type: "GET",
		data: JSON,
		error: function(resp){
			console.log(resp);
		},
		success: function (resp) {
			console.log(resp);
			$("#notes").empty();

			if (resp.noData){
				return;
			}

			// Use Underscore's sort method to sort our records by date.
			var sorted = _.sortBy(resp, function (row) { return row.doc.created_at;});

			// Now that the notes are sorted, add them to the page
			sorted.forEach(function (row) {
				var htmlString = noteTemplate(row.doc);
				$('#notes').append(htmlString);
			});
		}
	});
}

$(document).ready(function(){
	console.log("Loaded!");
	loadNotes();

	$("#new-note").submit(function () {
		// Get the information we want from the form including creating a new date.
		var noteData = {
			title: $("#note-title").val(),
			text: $("#note-text").val(),
			created_at: new Date()
		};

		//Send the data to our saveRecord function
		saveRecord(noteData);

		//Return false to prevent the form from submitting itself
		return false;
	});
});
