// JavaScript source code
$.ajax({
 url: theURL,
 type: 'GET',
 dataType: 'text',
 error: function(err){
		console.log("Something is wrong...");
		console.log(err);
 },
	success: function(data){
		console.log("Woohoo!");
		//The data is coming back as a string
		console.log(data);
		//So we need to grab the part we want
		//And then convert it into a JSON Object
		//console.log(data.responseText);
		var resp = data.responseText;
		var stringResp = resp.slice(19,-14);
		var dataObj = JSON.parse(stringResp);
		console.log(dataObj);
		
		//Now you can use dataObj!
		
 }
});

/*
Basically, the extra jquery code allows us to pull back the page and "scrape the text", hence the dataType returned is now "text". 
Once we have the site text, we can pull out the string we want by using slice and then parse it to get an actual js object.
This is not ideal but it's a workaround for sites that aren't configured for any form of cross-origin AJAX requests, json or jsonp. 
*/