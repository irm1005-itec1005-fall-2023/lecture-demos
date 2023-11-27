/*
 * Lecture 21: Working with Promises and Fetch
 *
 * Topics:
 *  Let's make a promise
 *  Let's fetch some data
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 21");

// Let's make a promise
// A promise is a way to handle asynchronous code

// Before we start, lets look at the arrow function

// This is a function declaration
function myFunction() {
  console.log("Hello from Function 1");
}

// This is a function expression
const mySecondFunction = function() {
  console.log("Hello from Function 2");
}

// This is an arrow function
const myThirdFunction = () => {
  console.log("Hello from Function 3");
}


// This is a promise
const myFirstPromise = new Promise((resolve,reject) => {
  let i = 1 + 1;

  if (i === 2) {
    resolve("Success");
  }
  else {
    reject("Failed");
  }

});

myFirstPromise
  .then((message) => {
    console.log("This is the then", message);
  })
  .catch((message) => {
    console.log("This is the catch", message);
  })


console.log("Hello from the Bottom of the Code");

// const myPromise = new Promise((resolve, reject) => {
//   // This is where we do our asynchronous code
//   // We can call resolve or reject to tell the promise what to do
//   resolve("Hello from Promise");
//   //reject("Error from Promise");
// });

// We can use .then to handle the resolve


// myPromise.then((value) => {
//   console.log(value);
// }).catch((value) => {
//   console.log(value);
// }) // We can use .catch to handle the reject


// Let's fetch some data
// Fetch is a way to make a request to a server
// Fetch returns a promise

// We can use fetch to get data from a server

// Fetch this API https://pokeapi.co/api/v2/pokemon/1

console.log(fetch("https://pokeapi.co/api/v2/pokemon/1"));


// Then unpack the response data using response.json()
// Then console.log the data
// Catch any errors and console.log them


fetch("https://pokeapi.co/api/v2/pokemon/33")
  .then((response) => {
    // console.log("This is the response from Pokemon", response);
    return response.json();
  })
  .then((data) => {
    console.log("This is the data from Pokemon", data);

    renderPokemonList(data);

  })
  .catch((message) => {
    console.log("This is the catch", message);
  })







// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((response) => {
//     // We can use .json() to get the json data from the response
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// Or we can use async await

// Address of the API
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// The function that has await inside it MUST have the async keyword









// async function fetchPokemon() {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log("Data from fetch using async await", data);
// }

// // Run the async function
// fetchPokemon();
