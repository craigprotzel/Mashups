/*--------------------------------------------------------
Nodeschool.io
Functional Javascript Workshop
https://github.com/timoxley/functional-javascript-workshop

Mashups NYUAD - Homework Exercises
Hello World through Basic Every-Some
--------------------------------------------------------*/

/*---------
Hello World
---------*/
/*
function run(term){
 return term.toUpperCase();
}
module.exports = run;
*/

/*--------------------
Higher Order Functions
--------------------*/

/*
//'For Loop' Approach
function run(fn,num){
	for (var i = 0; i < num; i++){
		fn();
	}
}
module.exports = run;
*/

/*
//'Recursion' Approach
function run(fn,num){
	if (num <= 0){
		return;
	}
	fn();
	num--;
	return run(fn,num);
}
module.exports = run;
*/

/*-------
Basic Map
-------*/
/*
function doubleAll(numbers) {
	var result = numbers.map(function(i,index){
		console.log(index);
		return i*2;
	});
	return result;
}
module.exports = doubleAll;
*/

/*----------
Basic Filter
----------*/
/*
//Need to filter & map
function getShortMessages(msgObjArray){
	var msgArray = msgObjArray.map(function(obj){
		return obj.message;
		}).filter(function(msg){
			return msg.length < 50;
		});
	return msgArray;
}
module.exports = getShortMessages;
*/

/*--------------
Basic Every-Some
--------------*/
/*
function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		var checkedValue = submittedUsers.every(function(submittedUser){
				return goodUsers.some(function(goodUser){
					return goodUser.id === submittedUser.id;
				});
			});
		return checkedValue;
	};
}
module.exports = checkUsersValid;
*/