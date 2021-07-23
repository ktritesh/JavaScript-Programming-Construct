let a = 2;
let b = 4;
let c = 8;

let p = a + b * c;
let q = c + a / b;
let r = a % b + c;
let s = a * b + c;

if ( p >= q && p >= r && p >= s ) {
    console.log("P is maximum");
} else if ( q >= p && q >= r && q >= s ) {
    console.log("q is maximum");
} else if ( r >= p && r >= q && r >= s ) {
    console.log("r is maximum");
} else {
    console.log("s is maximum");
}

if ( p <= q && p <= r && p <= s ) {
    console.log("P is minimum");
} else if ( q <= p && q <= r && q <= s ) {
    console.log("q is minimum");
} else if ( r <= p && r <= q && r <= s ) {
    console.log("r is minimum");
} else {
    console.log("s is minimum");
}