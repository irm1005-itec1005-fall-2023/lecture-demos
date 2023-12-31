/*
 * Lecture 15: Working with the DOM and Events
 *
 * Topics:
 *
 */

// Welcome to JavaScript!

//
// Quick Review
//  Functions
//  Solving problems with loops and conditionals
//

function shoutHello(){
  console.log("Hellofrom Shout!");
}

shoutHello();

//
// Functions
//  Functions are reusable blocks of code that can be called multiple times
//

// Function deceleration - let's create a function that prints a message to the console

// Just declaring a function won't make it run - you have to actually call the function to run it


function shoutHelloWithName(name){
  console.log("Hello from Shout!" + name);
}

shoutHelloWithName(false);

//
// Arguments / Parameters
//  We can pass in arguments to a function to make it more dynamic
//

// Let's create a function that takes in a name and prints a message to the console

// Let's call the function

// Let's create a function that takes in multiple parameters and prints a message to the console

function shoutHelloWithNames(name1,name2,name3,name4){

  let name5 = "George";

  console.log("Hello from Shout!" + name1 + name2 + name3 + name4 + name5 + " George");
}

shoutHelloWithNames("Jane", "John", "Bob", "Sally");
// Let's call the function


//
// Array of objects literals
//  let's create an array of pokemon objects
//

let pokemonName = "pikachu";
let pokemonType = "Electric";
let pokemonLevel = 10;

let pokemon_1 = {
  name: 'Pikachu',
  type: 'Electric',
  level: 10
}

console.log("Pokemon name: " , pokemon_1.level);

let cities = ["Paris", "Toronto", "New York", "London", "Tokyo"];

// Find
let pokemons = [
  pokemon_1,
  {
    name: 'Pikachu',
    type: 'Electric',
    level: 10
  },
  {
    name: 'Charmander',
    type: 'Fire',
    level: 15
  },
  {
    name: 'Bulbasaur',
    type: 'Grass',
    level: 20
  },
  {
    name: 'Squirtle',
    type: 'Water',
    level: 25
  },
  {
    name: 'Jigglypuff',
    type: 'Normal',
    level: 12
  },
  {
    name: 'Meowth',
    type: 'Normal',
    level: 16
  },
  {
    name: 'Psyduck',
    type: 'Water',
    level: 18
  },
  {
    name: 'Machop',
    type: 'Fighting',
    level: 22
  },
  {
    name: 'Geodude',
    type: 'Rock',
    level: 14
  },
  {
    name: 'Gastly',
    type: 'Ghost',
    level: 19
  }
];

// Use a for loop to list all pokemons with a level higher than 20

for (let i=0; i < pokemons.length; i++)
{

  if (pokemons[i].level > 20) {
    console.log(pokemons[i].name);
  }
  else {
    console.log(pokemons[i].name , " Has a Level is not greater than 20");
  }
}


// Use a for loop to List all pokemons with a type of water



// Use a for loop to change all pokemons with a type of Normal and change the type to Awesome
for (let i = 0; i < pokemons.length; i = i + 1) {

  if (pokemons[i].type === "Normal") {
    pokemons[i].type = "Awesome";
  }

}

console.log(pokemons);

console.clear();

// Console log is a function that prints to the console
console.log("Lecture 15");



//
// document.getElementById("id")
//

// Find the following ID in the dom selecting-targets-1-target-3
// using the getElementById function
// and store it in a variable called i1ListItem

let i1ListItem = document.getElementById("selecting-targets-1-target-3");



// Use console log to validate that you have the correct element
console.log(i1ListItem);

// Use style.transform="rotate(20deg)" to rotate the element 20 degrees

i1ListItem.style.transform = "rotate(50deg)";

i1ListItem.style.backgroundColor = "red";

// Lets do another one.
// Find the following ID in the dom selecting-targets-1-target-2
// using the getElementById function
// and store it in a variable called i2ListItem


let i2ListItem = document.getElementById("selecting-targets-1-target-2");

i2ListItem.style.transform = "rotate(-30deg)";



// Use style.transform="rotate(-10deg)" to rotate the element 10 degrees the other way



//
// document.getElementsByClassName("class")
//

// Find the following class in the dom selecting-targets-2-target-1
// using the getElementsByClassName function
// and store it in a variable called i3UnorderedList

i3ElementsByClassName = document.getElementsByClassName("selecting-targets-1");

// Use console log to validate that you have the correct element
console.log(i3ElementsByClassName);

// Use style.transform="rotate(-60deg)" to rotate the element 60 degrees the other way


i3ElementsByClassName[1].style.transform = "rotate(-30deg)";



//
// document.querySelector(".class")
//

let i4ListItem = document.querySelector("#selecting-targets-4-target-1");

console.log(i4ListItem);

i4ListItem.style.transform = "rotate(30deg) scale(1.5)";

// Find the following class in the dom selecting-targets-3-target-1
// using the getElementsByClassName function
// and store it in a variable called i4ListItem
// NOTE: You have to use the . in front of the class name - this is how querySelector knows you are looking for a class

// Use console log to validate that you have the correct element

// Use style.transform="scale(1.5)" to scale the element 1.5 times



//
// document.querySelectorAll(".class")
//

// Find all of the elements that have the following class in the dom selecting-targets-1
// using the getElementsByClassName function
// and store it in a variable called i5ListsByClass

// Use console log to validate that you have the correct elements

// Use a for loop to loop through all of the elements and change the background color to red





//
// ADD A CLASS
//

// Find the following ID in the dom mc-1-list-item-3
// using the getElementById function
// and store it in a variable called i6ItemToChange



let i5ListItem = document.getElementById("mc-1-list-item-4");

i5ListItem.classList.add("done");

// Use console log to validate that you have the correct element

// Use classList.add("done") to add the class done to the element

// Use classList.remove("done") to remove the class done from the element
let i6ListItem = document.getElementById("mc-1-list-item-3");

i6ListItem.classList.remove("done");

i6ListItem.style.transform = "rotate(30deg)";

// Select all of the list items in the mc-1-list and store them in a variable called i7CollectionOfChildren


//
// Manipulating the DOM
//  using createElement, appendChild, prepend, remove
//

// Create a reference to the dom element list with the id manipulating-targets-1

let i7List = document.getElementById("manipulating-targets-1");

// Create a new list item using createElement and store it in a variable

let i8myNewListItem = document.createElement("li");

i8myNewListItem.textContent = "Item 1 in the list";

i7List.appendChild(i8myNewListItem);


// Use the textContent property to set the text of the list item to "Item 1 in the list"

// Use appendChild to add the list item to the list

// Do this a few times to add a few more items to the list

// Use prepend to add an item to the beginning of the list


//
// Add Items from an Array
//

// Simple colours array to use for the next example
const colours = ["purple", "gold", "red", "green", "hotpink", "orange"];

// Create a reference to the dom element list with the id manipulating-targets-2



let i8List = document.getElementById("manipulating-targets-2");

for(let i = 0; i < colours.length; i++) {

let i9myNewListItem = document.createElement("li");

i9myNewListItem.textContent = colours[i];

i8List.appendChild(i9myNewListItem);

}

// Use a for loop to loop through the array and add each item to the list
// Inside the foor loop you will have to create a new list item using createElement
// And then set the textContent property to the current item in the array
// And then use appendChild to add the list item to the list


//
// Add Items from an Array
//

// Use the pokemon array from above to add each pokemon to the list
// console.log(pokemons);

// Create a reference to the dom element list with the id manipulating-targets-3

// Use a for loop to loop through the array and add each item to the list
// Inside the foor loop you will have to create a new list item using createElement
// And then set the textContent property to the current item in the array
// And then use appendChild to add the list item to the list




//
// Remove a specific item
//

// Create a reference to the dom element list with the id manipulating-targets-3
// and store it in a variable called iXXItemToRemove

// Use style.transform = "scale(2)" to make sure we have the item selected

// Use remove to remove the item from the list


//
// ADD MORE COMPLEX ITEMS
//

/*

<li>
    <h4>Hello world</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Illum, tempore.
    </p>
    <a href="#">What's up!</a>
</li>

*/



//
// Use Inner HTML
//


// Create a reference to the dom element list from the id manipulating-targets-5

// Create a new list item using createElement and store it in a variable

// Use a template literal to create a complex list item with an h4, p, and a tag

// Use innerHTML to set the inner html of the list item to the template literal

// Use appendChild to add the list item to the list



//
// Use Fragment
//

// Create a reference to the dom element list from the id manipulating-targets-5

// Create a new list item using createElement and store it in a variable

// Create an h4 element, a p tag, and an a tag using createElement and store them in variables

// Use appendChild to add them all to the list item

// Use appendChild to add the list item to the list
