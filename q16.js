var guestArray = ["ali", "hassan", "sajjad", "awais"];
var canNotAttend = "sajjad";
var newGuest = "zain";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
// guestArray.map((item)=> console.log(`hello,${item} You Are Invited To Dinner`)
// )
guestArray.unshift("mehrab");
var middleGuest = "shayab";
var midleindex = guestArray.length / 2;
guestArray.splice(midleindex, 0, middleGuest);
guestArray.push("younis");
console.log("I can only invite two peoples for dinner");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\n sorry ".concat(removeguest, " we cant invite you to dinner"));
}
guestArray.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
