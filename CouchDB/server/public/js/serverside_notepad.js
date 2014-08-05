var noteTemplate = function (data) {
  template = '<div class="note">';
  template += new Date(data.created_at);
  template += '<h3>'+_.escape(data.title)+'</h3>';
  template += '<div>'+_.escape(data.text)+'</div>';
  template += '</div>';

  return template;
};

// A function to accept a JSON object and post it to CouchDB
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
      // Render the note.
      var compiledTmpl = noteTemplate(theData);
      $("#notes").append(compiledTmpl);

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
      $("#notes").empty();
      notes = resp;

      // Use Underscore's sort method to sort our records by date.
      sorted = _.sortBy(notes, function (row) { return row.doc.created_at;});

      // Now that the notes are sorted, render them using underscore templates
      sorted.forEach(function (row) {
        var compiledTmpl = noteTemplate(row.doc);
        $('#notes').append(compiledTmpl);
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

    console.log("Before saveRecord");
    //Send the data to our saveRecord function
    saveRecord(noteData);
    console.log("After saveRecord");
    //Return false to prevent the form from submitting itself
    return false;
  });
});
