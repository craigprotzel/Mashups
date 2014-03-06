//----------------------------//
//SOME BASIC DATA TO PLAY WITH
//JS Objects
var friendOne = {
	name: "Craig",
	gender: "m"
};

var friendTwo = {
	name: "Joy",
	gender: "f"
};

var friendThree = {
	name: "Rune",
	gender: "m"
};

//Array of Objects
var arrayOfFriends = [friendOne, friendTwo, friendThree];
console.log(arrayOfFriends);
//----------------------------//

//Standard For Loop + Array.push()
var maleFriends = [];
for (var i = 0; i < arrayOfFriends.length; i++){
	if (arrayOfFriends[i].gender === 'm'){
		maleFriends.push(arrayOfFriends[i]);
	}
}
console.log(maleFriends);

//Some Examples of Underscore
//Undescore EACH + Array.push
_.each(arrayOfFriends, function(obj){
	if (obj.gender === 'm'){
		maleFriends.push(obj);
	}
});
console.log(maleFriends);

//Underscore FILTER
var filterMaleArray = _.filter(arrayOfFriends, function(obj){
						return obj.gender === 'm';
});
console.log(filterMaleArray);

//Underscore PLUCK
var names = _.pluck(arrayOfFriends, 'name');
console.log(names);

//Underscore MAP
//Be careful, this will change all of the object instances!!!
// _.map(arrayOfFriends, function(obj){
// 	obj.name = obj.name + "!!!!!";
// 	return obj;
// });
// console.log(arrayOfFriends);

//Object Constructor Function
function Friends(n,g){
	this.name = n;
	this.gender = g;
}

//Underscore MAP - Create new objects and return them in an array
var happyPeople = _.map(arrayOfFriends, function(obj){
						var tempName = obj.name + "!!!";
						var tempObj = new Friends(tempName, obj.gender);
						//obj.name = obj.name + "!!!!!";
						return tempObj;
					});
console.log(happyPeople);








