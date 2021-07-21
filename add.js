let a = 10;
let b = 20;
let c = a + b;
console.log("Number Addition is: "+c);

let s1 = "10";
let s2 = "20";
let s3 = s1 + s2;
console.log("String addition is: "+s3);

let d = new Date(); // creates a variable which will contain the current date
let today = "Today is: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
let time = "Time: " + d.getHours() + ":" + (d.getMinutes());
console.log("Todays Date: "+today);
console.log("Current Time: "+time);

// chrome://inspect/#devices
//Output
// $ node add.js
// Number Addition is: 30
// String addition is: 1020
// Todays Date: Today is: 7/21/2021
// Current Time: Time: 21:34

