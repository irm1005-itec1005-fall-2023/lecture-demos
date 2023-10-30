/*
 * Lecture 13: JavaScript Basics
 *
 * Topics:
 *  Variables
 *  Arrays
 *  Conditionals
 *  For loops
 *  Object literals
 *  Functions
 */

// Welcome to JavaScript!

//
// Console log
//

// Console log is a function that prints to the console
console.log("Hello how are you today");

//
// Basic Variables
//

// Let's create a variable using the let keyword

// String
let myName = "John Doe";

console.log(myName);

// Number
let myAge = 25;

console.log(myAge);

// Boolean
let isStudent = false;

console.log("Is John Doe a student: ", isStudent, myAge);

// Array
let myFavouriteFoods = ["pizza", "coffee", "cake"]; // Array of strings

console.log(myFavouriteFoods);


//
// Constant Variables
//

// Let's create a variable using the const keyword

// String
const myOtherName = "Jane Doe";

console.log(myOtherName);

// myOtherName = "Jane Smith";

// Number
let myOtherAge = 30;

myOtherAge = myOtherAge + 1;

console.log(myOtherAge);

// Boolean

// Array

// Try to reassign it and you can't! It's a constant!



//
// Working with arrays
//


// Create an array of strings
let myFavouriteCities = ["Toronto", "New York", "London", "Paris", "Tokyo", "Ottawa"];

// Use the length property to show the number of items in the array

console.log("Number of favourite cities: ", myFavouriteCities.length)
// Use the array[] operator to access an item in the array

console.log("Last in array", myFavouriteCities[5])


// Use the array.push() operator to add an item to the end of the array


myFavouriteCities.push("Vancouver");
myFavouriteCities.push("Nice");
myFavouriteCities.push("Gatineau");
myFavouriteCities.push("Cornwall");


console.log("Favourite cities updated: ", myFavouriteCities, myFavouriteCities.length);


// Use the array.pop() operator to remove an item from the end of the array
myFavouriteCities.pop();
myFavouriteCities.pop();
myFavouriteCities.pop();
myFavouriteCities.pop();myFavouriteCities.pop();

console.log("Favourite cities updated: ", myFavouriteCities);


//
// Conditional logic using operators
//

// Let's create two variables and compare them using operators
let johnsAge = 25;
let janesAge = 15;

// if statement - if the condition is true, run the code inside the block (the curly braces)
if( janesAge >= 20 ) {
  // Code block to run if the condition is true
  console.log("Jane is an adult");
}

// if else statement - if the condition is true, run the code inside the first block (the curly braces),
//  otherwise run the code inside the second block (the curly braces)
if( janesAge >= 20 ) {
  // Code block to run if the condition is true
  console.log("Jane is an adult");
} else {
  // Code block to run if the condition is false
  console.log("Jane is not an adult");
}



// if else if else statement - if the first condition is true, run the code inside the first block (the curly braces),
//  otherwise if the second condition is true, run the code inside the second block (the curly braces),
//  otherwise run the code inside the third block (the curly braces)

if( janesAge >= 40 ) {
  // Code block to run if the condition is true
  console.log("Jane is an older adult");
} else if ( janesAge >= 20) {
  // Code block to run if the condition is false
  console.log("Jane is a younger adult");
} else {
  // Code block to run if the condition is false
  console.log("Jane is definitely under 20");
}



//
// For loops
//

// Let's create a for loop that prints the numbers 1 through 10

for (let i = 0 ; i < 10 ; i++) {
  // Code to run
  console.log("Index: ", i+1);
  console.log(i);
}


// Let's create an array and loop through it
// First we decalre an array of strings

console.log(myFavouriteCities);

for (let i=0; i < 5 ; i = i +1 ) {
  console.log("City: ", myFavouriteCities[i]);
}

// Then we loop through the array and print each string to the console

// Let's create a new array of strings and find a specific index of an item in the array

// First we decalre an array of strings

// Then we loop through the array and print each string to the console as well as the index of the item

// Then we use an if statement to check if the current item is the one we're looking for



//
// Object literals
//

// Variables like this aren't great
let productPrice = 10.99;
let productTitle = "Margherita Pizza";
let productDescription = "A delicious pizza with tomato sauce and fresh mozzarella cheese";
let productIngredients = ["tomato sauce", "fresh mozzarella cheese", "basil", "olive oil"];
let productIsInStock = true;

// Instead, let's create an object literal


// Use an if statement to see if the product is in stock


// Use a for loop to print the ingredients to the console



//
// Functions
//

// Functions are reusable blocks of code that can be called multiple times


// Let's create a function that prints a message to the console


// Let's call the function


// Let's create a function that takes in a name and prints a message to the console


// Let's call the function
