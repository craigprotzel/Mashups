var $theH2;
var searchTwitter;
var delay = 10000;

function makeTwitterSearchRequest(){
	$.ajax({
		url: '/search',
		type: 'GET',
		dataType: 'JSON',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log(data);
			var theTweet = data.tweet || 'Waiting...';
			$theH2.html(theTweet);

			console.log("Will call again in: " + delay + " millis...");
			setTimeout(function(){
				makeTwitterSearchRequest();
			}, delay);
		}
	});
}

$('document').ready(function(){
	$theH2 = $('#tweetText');
	makeTwitterSearchRequest();
});