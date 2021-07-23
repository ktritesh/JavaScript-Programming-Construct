"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let input = prompt("Enter 1 or 10 or 100 or 1000: ");

if ( input == 1 ) {
    console.log("One");
} else if ( input == 10 ) {
    console.log("Ten");
} else if ( input == 100 ) {
    console.log("Hundred");
} else if ( input == 1000 ) {
    console.log("Thousand")
} else {
    console.log("you have entered wrong input")
}