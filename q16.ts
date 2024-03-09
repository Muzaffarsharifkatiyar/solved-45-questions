// question no.17

let guestArray:string[] = ["ali","hassan","sajjad","awais"]

let canNotAttend:string = "sajjad";


let newGuest:string = "zain"
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);

// guestArray.map((item)=> console.log(`hello,${item} You Are Invited To Dinner`)
// )

guestArray.unshift("mehrab");


let middleGuest:string = "shayab"
let midleindex = guestArray.length/2;
guestArray.splice(midleindex,0 , middleGuest);


guestArray.push("younis");

console.log("I can only invite two peoples for dinner");

while(guestArray.length>2) {
  let removeguest =  guestArray.pop();
    console.log(`\n sorry ${removeguest} we cant invite you to dinner`);  
}

guestArray.map((item)=> console.log(`\n${item} you are still invited to dinner`)
);
guestArray.pop();
guestArray.pop();
console.log(guestArray);

