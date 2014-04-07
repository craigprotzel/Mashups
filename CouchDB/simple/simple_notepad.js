// Required fields for connecting to Cloudant

// The username you use to log in to cloudant.com
var CLOUDANT_USERNAME="sklise";
// The name of your database
var CLOUDANT_DATABASE="sklisedb";
// These two are generated from your Cloudant dashboard of the above database.
var CLOUDANT_KEY="istakedniourromerselyesc";
var CLOUDANT_PASSWORD="WDACNrPBSj7QMJ00bLBUcQrJ";

// This function takes your Cloudant key and password and returns a Base64
// encoded string to authorize your requets. Without this, you'd need to fill
// in a username and password to make requets. Read more about the btoa()
// function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
var hash = btoa(CLOUDANT_KEY+":"+CLOUDANT_PASSWORD)

// A function to accept a JSON object and post it to CouchDB. Returns a jQuery
// ajax object that you can attach listeners to.
var saveRecord = function (data) {
  return $.ajax("https://"+CLOUDANT_USERNAME+".cloudant.com/"+CLOUDANT_DATABASE, {
    beforeSend: function (xhr) {
      // This function is used to pass authentication data to Cloudant before
      // sending the data
      xhr.setRequestHeader ("Authorization", "Basic "+hash)
    },
    contentType: "application/json",
    type: "POST",
    data: JSON.stringify(data)
  })
}

// Loads all records from the Cloudant database. Loops through them and
// appends each note onto the page.
var loadNotes = function () {
  $.ajax("https://"+CLOUDANT_USERNAME+".cloudant.com/"+CLOUDANT_DATABASE+"/_all_docs?include_docs=true", {
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Basic "+hash)
    }
  }).done(function (resp) {
    notes = JSON.parse(resp)

    // Use Underscore's sort method to sort our records by date.
    sorted = _.sortBy(notes.rows, function (row) { return row.doc.created_at})

    sorted.forEach(function (row) {
      var tmplMarkup = $('#tmpl-note').html();
      var compiledTmpl = _.template(tmplMarkup, row.doc);
      $('#notes').append(compiledTmpl)
    })
  })
}

$(function () {
  loadNotes();

  $("#new-note").submit(function () {
    var noteData = {
      title: $("#note-title").val(),
      text: $("#note-text").val(),
      created_at: new Date()
    }

    var request = saveRecord(noteData);

    request.done(function (resp) {
      $("#notes").append("<h3>"+noteData.title+"</h3><div>"+noteData.text+"</div>")
      $("#note-title").val("")
      $("#note-text").val("")
    });

    request.fail(function (resp) {
      $("#new-note").prepend("<p><strong>Something broke.</strong></p>");
    })

    return false;
  });
});