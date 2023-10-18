// Welcome to JavaScript!

/*

JavaScript is a programming language that is used to make web pages interactive. It is a scripting language, which means that it is interpreted by the browser as it is loaded. It is not compiled like Java or C++.

*/

//
// Basic Variables
//


// String
let myFirstName = "Neil";

// Number
let myNumber = 5;

// Boolean
let isColdOutside = true;

// Array
let myArray = ["one", "two", "three", "four", "five"];

console.log(myFirstName);
console.log(myNumber);
console.log(isColdOutside);
console.log(myArray);

myNumber = myNumber + 10;

console.log("This is my number after adding ten: " , myNumber);

console.log(myArray[5])

// Objects (or object literals)



// Null
let todoItem = null;


// Undefined - DO NOT DO THIS
let todoItem2 = undefined; // DO NOT DO THIS


//
// Operators
//

// Arithmetic
myNumber = myNumber + 10;
myNumber ++; // Adds 1 to the variable

console.log(myNumber);

// Add to string together
myFirstName = "Jamie";
let myLastName = "Smith";
let myFullName = myFirstName + " " + myLastName;

// console.clear();
console.log(myFullName);

// Add two numbers together

// Subtract two numbers
myNumber = myNumber-30;

console.log(myNumber);

// Be consistent with variable names
let MyNextNumber = 10;
let my_next_number = 20;
let myNextNubmer = 30;


//
// Conditional Logic
// using operators
//

let myUserAge = 41;

// if
if (myUserAge > 40) {
    console.log("Damn dude! You are old!");
}
else if (myUserAge > 20) {
  console.log(myUserAge, "You are just old enough to drink in Vegas!");
}
else {
  console.log(myUserAge, "Sorry, you are too young to drink in Vegas.");
}


// if else

// if else if else

// switch


//
// Loops
//

// for

// while

// do while


//
// Functions
//

// function declaration

// Variable scope (global vs local)

// Outer variables
