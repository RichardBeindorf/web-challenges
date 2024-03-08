console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied");
}

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
}
if (number % 2 !== 0) {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000;

let pricetag;
if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 < 100) {
  console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 < 1000000) {
  numberOfHotdogs * 1;
} else if (numberOfHotdogs <= 1000000) {
  numberOfHotdogs * 0.1;
}

console.log(pricetag);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn.." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName==="Coach" ? "Coach" : userName) + "!";

console.log(greeting);
