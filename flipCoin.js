"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let no = (Math.floor(Math.random() * 2));

if (no/2 == 0){
    console.log("Head");
} else {
    console.log("Tail");
}