const prompt = require('prompt-sync')();

const number = prompt('Enter the value of n: ');
let sum = 0;

process.stdout.write("The series is: ")
for ( i = 1; i <= Number(number); i++ ) {
    if ( i != Number(number)) {
       process.stdout.write('1/' +i+ ' + ');
       sum += 1/i;
    }
    else {
        console.log('1/' +i);
        sum += 1/i;
    }
}
console.log("Harmonic series is: " +sum);