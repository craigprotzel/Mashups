function Blocks(){
	this.posX = random(0, width);
	this.posY = random(0, height);

	this.blockW = random(10,50);
	this.blockH = random(10,50);

	this.speedX = random(-2,2);
	this.speedY = random(-2,2);

	this.r = random(0,55);
	this.g = random(0,55);
	this.b = random(255);
	// this.a = random(0,100);

	this.display = function(){
		fill(this.r, this.g, this.b);
		rect(this.posX, this.posY, this.blockW, this.blockH);
	};

	this.update = function(){
		this.checkEdges();
		this.posX = this.posX + this.speedX;
		this.posY = this.posY + this.speedY;
	};

	this.checkEdges = function(){
		if (this.posX > width || this.posX < 0){
			this.speedX = -1 * this.speedX;
		}
		else if (this.posY > height || this.posY < 0){
			this.speedY = -1 * this.speedY;
		}
	};

	this.run = function(){
		this.update();
		this.display();
	};
}





