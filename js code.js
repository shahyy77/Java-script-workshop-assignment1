
const userName = prompt("Enter your name:");

if (userName) {
    console.log(`Hello, ${userName}! Your name has ${userName.length} letters.`);
} else {
    console.log("No name entered.");
}


function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

const c = prompt("Enter temperature in Celsius:");
alert(c + "°C = " + celsiusToFahrenheit(Number(c)) + "°F");


function largest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    else if (b >= a && b >= c) {
        return b;
    }

    else {
        return c;
    }
}

console.log("Largest Number =", largest(5, 12, 8));

let sum = 0;

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0) {
        console.log(i);
        sum += i;
    }

}

console.log("Total Sum =", sum);
// Bonus Challenge: FizzBuzz

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}