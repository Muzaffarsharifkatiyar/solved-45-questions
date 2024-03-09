// question no.15

let guestArray:string[] = ["ali","hassan","sajjad","awais"]

let canNotAttend:string = "sajjad";
console.log(`${canNotAttend} can not attend dinner`);

let newGuest:string = "zain"
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);

guestArray.map((item)=> console.log(`hello,${item} You Are Invited To Dinner`)
)

