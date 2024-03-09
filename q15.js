// question no.16
var guestArray = ["ali", "hassan", "sajjad", "awais"];
var canNotAttend = "sajjad";
var newGuest = "zain";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
// guestArray.map((item)=> console.log(`hello,${item} You Are Invited To Dinner`)
// )
console.log("wellcome all we found a bigger dinner table");
guestArray.unshift("mehrab");
var middleGuest = "shayab";
var midleindex = guestArray.length / 2;
guestArray.splice(midleindex, 0, middleGuest);
guestArray.push("younis");
guestArray.map(function (item) { return console.log("\ndear ".concat(item, " you are invited to dinner")); });
