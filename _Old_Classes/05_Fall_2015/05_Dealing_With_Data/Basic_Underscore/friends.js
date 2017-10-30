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
//Undescore EACH
var maleFriendsEach = [];
_.each(arrayOfFriends, function(obj){
	if (obj.gender === 'm'){
		maleFriendsEach.push(obj);
	}
});
console.log(maleFriendsEach);

//Underscore MAP
var maleFriendsUpper = _.map(arrayOfFriends, function(obj){
	return obj.name.toUpperCase();
});
console.log(maleFriendsUpper);

//Underscore FILTER
var filterMaleArray = _.filter(arrayOfFriends, function(obj){
	return obj.gender === 'm';
});
console.log(filterMaleArray);

//Underscore PLUCK
var names = _.pluck(arrayOfFriends, 'name');
console.log(names);

//Object Constructor Function
function Friends(n,g){
	this.name = n;
	this.gender = g;
}

//Underscore MAP - Create new objects and return them in an array
var happyPeople = _.map(arrayOfFriends, function(obj){
						var tempName = obj.name + "!!!";
						var tempObj = new Friends(tempName, obj.gender);
						return tempObj;
					});
console.log(happyPeople);