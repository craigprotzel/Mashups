var noteTemplate = function (data) {
  template = '<div class="note">'
  template += new Date(data.created_at)
  template += '<h3>'+_.escape(data.title)+'</h3>'
  template += '<div>'+_.escape(data.text)+'</div>'
  template += '</div>'

  return template;
}

// A function to accept a JSON object and post it to CouchDB. Returns a jQuery
// ajax object that you can attach listeners to.
var saveRecord = function (data) {
  // Set the namespace for this note
  data.namespace = window.key;

  return $.ajax("/save", {
    contentType: "application/json",
    type: "POST",
    data: JSON.stringify(data)
  })
}

// Loads all records from the Cloudant database. Loops through them and
// appends each note onto the page.
var loadNotes = function () {
  $.ajax("/api/"+window.key).done(function (resp) {
    $("#notes").empty();
    notes = resp

    // Use Underscore's sort method to sort our records by date.
    sorted = _.sortBy(notes, function (row) { return row.doc.created_at})

    // Now that the notes are sorted, render them using underscore templates
    sorted.forEach(function (row) {
      var compiledTmpl = noteTemplate(row.doc);
      $('#notes').append(compiledTmpl)
    })
  })
}

$(function () {
  loadNotes();

  $("#new-note").submit(function () {
    // Get the information we want from the form including creating a new date.
    var noteData = {
      title: $("#note-title").val(),
      text: $("#note-text").val(),
      created_at: new Date()
    }

    // Send the data to our saveRecord function
    var request = saveRecord(noteData);

    // Attach a callback for a successful save to CouchDB. CouchDB doesn't
    // return the title and text, so we need to use noteData.
    request.done(function (resp) {
      // Render the note.
      var compiledTmpl = noteTemplate(noteData);
      $("#notes").append(compiledTmpl)

      // Empty the form.
      $("#note-title").val("")
      $("#note-text").val("")

      // Deselect the submit button.
      $("#note-submit").blur()
    });

    // Attach a callback if something goes wrong. Tell the user but don't tell
    // them that much.
    request.fail(function (resp) {
      // Add an error message before the new note form.
      $("#new-note").prepend("<p><strong>Something broke.</strong></p>");
    })

    // Finally, return false to prevent the form from submitting itself
    return false;
  });
});
