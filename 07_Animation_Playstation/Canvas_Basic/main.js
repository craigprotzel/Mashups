function drawCanvas(){
	//Get the canvas
	var canvas = document.getElementById('myCanvas');
	//Set the context
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "#00CC00";
	ctx.fillRect(0,0, canvas.width, canvas.height);

	ctx.fillStyle = 'aqua';
	ctx.fillRect(100, 50, 50, 50);

	ctx.fillStyle = "rgb(0, 0, 200)";
	ctx.fillRect(100, 250, 50, 50);
}

$('document').ready(function(){
	drawCanvas();
});