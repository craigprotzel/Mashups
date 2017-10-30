//A Constructor Function - called with 'new'
function Person(name,age){
	this.name = name;
	this.age = age;
	this.sayMyName = function(){
		console.log(this.name);
	};
}
var me = new Person("Craig", 35);
console.log(me);
var meTwo = new Person("Rock", 16);
console.log(meTwo);

//Alt way to create and return an object
function makeAnObj(nameData, ageData){
	var myObj = {
		name: nameData,
		age: ageData
	};
	return myObj;
}
var meAgain = makeAnObj();
console.log(meAgain);