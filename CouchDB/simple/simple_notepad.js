var CLOUDANT_KEY="istakedniourromerselyesc";
var CLOUDANT_PASSWORD="WDACNrPBSj7QMJ00bLBUcQrJ";
var CLOUDANT_USERNAME="sklise";
var CLOUDANT_DATABASE="sklisedb";

var saveRecord = function (data) {
  return $.ajax("https://"+CLOUDANT_USERNAME+".cloudant.com/"+CLOUDANT_DATABASE, {
    username: CLOUDANT_KEY,
    password: CLOUDANT_PASSWORD,
    xhrFields: {withCredentials:true},
    contentType: "application/json",
    type: "POST",
    data: JSON.stringify(data)
  })
}

$(function () {
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