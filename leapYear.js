"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let year = prompt("Enter the year: ");

if ( ( ( year % 4 == 0 ) && ( year % 100 != 0 ) ) || ( year % 400 == 0 ) ) {
    console.log(year +" is a leap year");
}
else {
    console.log(year +" is not a leap year");
}