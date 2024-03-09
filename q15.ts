// question no.16

let guestArray:string[] = ["ali","hassan","sajjad","awais"]

let canNotAttend:string = "sajjad";


let newGuest:string = "zain"
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);

// guestArray.map((item)=> console.log(`hello,${item} You Are Invited To Dinner`)
// )

console.log("wellcome all we found a bigger dinner table");
guestArray.unshift("mehrab");


let middleGuest:string = "shayab"
let midleindex = guestArray.length/2;
guestArray.splice(midleindex,0 , middleGuest);


guestArray.push("younis");


guestArray.map((item)=> console.log(`\ndear ${item} you are invited to dinner`)
); 



