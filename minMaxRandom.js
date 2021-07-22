let a1 = (Math.floor(Math.random() * 1000) + 1);
let a2 = (Math.floor(Math.random() * 1000) + 1);
let a3 = (Math.floor(Math.random() * 1000) + 1);
let a4 = (Math.floor(Math.random() * 1000) + 1);
let a5 = (Math.floor(Math.random() * 1000) + 1);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

if ( a1>a2 && a1>a3 && a1>a4 && a1>a5 ) {
	console.log ("a1 is maximum");
} else if ( a2>a1 && a1>a3 && a3>a4 && a2>a5 ) {
	console.log ("a2 is maximum");
} else if ( a3>a1 && a3>a2 && a3>a4 && a3>a5 ) {
        console.log ("a3 is maximum");
} else if ( a4>a1 && a4>a2 && a4>a3 && a4>a5 ) {
        console.log ("a4 is maximum");
} else {
        console.log ("a5 is maximum");
}

if ( a1<a2 && a1<a3 && a1<a4 && a1<a5 ) {
	console.log ("a1 is minimum");
} else if ( a2<a1 && a2<a3 && a2<a4 && a2<a5 ) {
	console.log ("a2 is minimum");
} else if ( a3<a1 && a3<a2 && a3<a4 && a3<a5 ) {
        console.log ("a3 is minimum");
} else if ( a4<a1 && a4<a2 && a4<a3 && a4<a5 ) {
        console.log ("a4 is minimum");
} else {
        console.log ("a5 is minimum");
}


