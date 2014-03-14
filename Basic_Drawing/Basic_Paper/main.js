//Create some global vars to pass into our paperscript file
var dataIsReady = false;
var spaceData = {};

//Function to make AJAX call
function getSpaceData() {
	var myURL = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$('#totalPeople').html(data.number);

			spaceData.total = data.number;
			dataIsReady = true;
		}
	});
}

$('document').ready(function(){
	getSpaceData();
});























