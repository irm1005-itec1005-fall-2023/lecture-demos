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



myFavouriteCities.push("Vancouver");
myFavouriteCities.push("Nice");

console.log("Length", myFavouriteCities.length);

for (let i=0; i < myFavouriteCities.length ; i = i +1 ) {
  console.log("City: ", myFavouriteCities[i]);
}

// Then we loop through the array and print each string to the console

// Let's create a new array of strings and find a specific index of an item in the array

// First we decalre an array of strings

// Then we loop through the array and print each string to the console as well as the index of the item

// Then we use an if statement to check if the current item is the one we're looking for

// Where is PARIS in my array

console.log(myFavouriteCities);

for (let i=0; i < myFavouriteCities.length ; i = i +1 ) {
  if( myFavouriteCities[i] === "Paris") {
    console.log("I found Paris at ", i);

    myFavouriteCities[i] = "Berlin";
  }



  // console.log("City: ", myFavouriteCities[i]);
}

console.log(myFavouriteCities);



//
// Object literals
//

// Variables like this aren't great
let productPrice = 10.99;
let productTitle = "Margherita Pizza";
let productDescription = "A delicious pizza with tomato sauce and fresh mozzarella cheese";
let productIngredients = ["tomato sauce", "fresh mozzarella cheese", "basil", "olive oil"];
let productIsInStock = true;

let productPrice1 = 15.99;
let productTitle1 = "Meat Lover Pizza";
let productDescription1 = "A delicious pizza with tomato sauce and fresh mozzarella cheese and meat";
let productIngredients1 = ["tomato sauce", "fresh mozzarella cheese", "basil", "olive oil", "salami"];
let productIsInStock1 = true;

// Instead, let's create an object literal

let product_1 = {
  price: 10.99,
  title: "Margherita Pizza",
  description: "A delicious pizza with tomato sauce and fresh mozzarella cheese",
  ingredients: ["tomato sauce", "fresh mozzarella cheese", "basil", "olive oil"],
  isInStock: true,
}

let product_2 = {
  price: 15.99,
  title: "Meat Lover Pizza",
  description: "A delicious pizza with tomato sauce and fresh mozzarella cheese and meat",
  ingredients: ["tomato sauce", "fresh mozzarella cheese", "basil", "olive oil", "salami"],
  isInStock: false,
}


let todo = {
  id: 0,
  text: "This is a todo",
  completed: false,
}


console.log("Product 1", product_1);

product_1.price = 15.99;
product_1.title = "Joe's best pizza name";
product_1.ingredients.push("Dough");
product_1.ingredients.push("More Cheese");

console.log("Product 1 after price update", product_1);


console.log(todo);

todo.completed = true;

console.log(todo);


// Use an if statement to see if the product is in stock


// Use a for loop to print the ingredients to the console



//
// Functions
//

// Functions are reusable blocks of code that can be called multiple times

console.clear();

// Function deceleration - let's create a function that prints a message to the console
function printName() {
  console.log("John Doe");
}

// Actually running the function
printName();



// Let's create a function that prints a message to the console


// Let's call the function


// Let's create a function that takes in a name and prints a message to the console


// Let's call the function


// Array of objects - let's create an array of pokemon objects


// Find
let pokemons = [
  { name: 'Pikachu', type: 'Electric', level: 10 },
  { name: 'Charmander', type: 'Fire', level: 15 },
  { name: 'Bulbasaur', type: 'Grass', level: 20 },
  { name: 'Squirtle', type: 'Water', level: 25 },
  { name: 'Jigglypuff', type: 'Normal', level: 12 },
  { name: 'Meowth', type: 'Normal', level: 16 },
  { name: 'Psyduck', type: 'Water', level: 18 },
  { name: 'Machop', type: 'Fighting', level: 22 },
  { name: 'Geodude', type: 'Rock', level: 14 },
  { name: 'Gastly', type: 'Ghost', level: 19 }
];

