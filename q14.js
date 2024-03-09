var guestArray = ["ali", "hassan", "sajjad", "awais"];
var canNotAttend = "sajjad";
console.log("".concat(canNotAttend, " can not attend dinner"));
var newGuest = "zain";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (item) { return console.log("hello,".concat(item, " You Are Invited To Dinner")); });
