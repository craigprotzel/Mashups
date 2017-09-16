// alert("Hi everybody!!!");

var me = "Craig";

function sayHello(){
	console.log("HI " + me);
	//return "HI " + me;
}

var button1 = document.getElementById('button1');
var num = 0;

button1.addEventListener('click', function(){
	var button1Data = document.getElementById('button1-data');
	button1Data.innerHTML = num;
	// console.log("HI " + me);
	num = num + 1;
});