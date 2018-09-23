var me = "Craig";

function sayHello(){
	alert("Hello Class!");
}


//console.log("Hello!");

//Answer to exercise #1
function makeHashtagMtn(x){
	var hashtag = "#";
	for(var i = 0; i < x; i++){
		//do this in here 
		console.log(hashtag);
		hashtag = hashtag + "#";
	}
}

//Answer to exercise #2
function fizzBuzz(num){
	for (var i = 1; i < num; i++){

		if (i%3 === 0 && i%5 === 0){
			console.log("FizzBuzz");
		}
		else if(i%3 === 0){
			console.log("Fizz");
		}
		else if (i%5 === 0){
			console.log("Buzz");	
		}
		else{
			console.log(i);
		}
	}
}

//Answer to exercise #3



