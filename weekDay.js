"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Enter the number between 1 to 7 to display week day: ");

if ( input == 1 ) {
    console.log ("Sunday");
} else if ( input == 2 ) {
    console.log("Monday");
} else if ( input == 3 ) {
    console.log("Tuesday");
} else if ( input == 4 ) {
    console.log ("Wednesday");
} else if ( input == 5 ) {
    console.log ("Thrusday");
} else if ( input == 6 ) {
    console.log("Friday");
} else if ( input == 7 ) {
    console.log("Saturday");
} else {
    console.log("You have entered a wrong input")
}