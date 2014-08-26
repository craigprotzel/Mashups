// Require what we need
var http = require("http");

// Build the server
var app = http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.end("Node!!!!");
});

// Start that server
app.listen(3000, "localhost");
console.log("Server running at http://localhost:3000/");