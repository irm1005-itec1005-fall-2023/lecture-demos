/*
 * Lecture 16: Working with the DOM and Events
 *
 * Topics:
 *  DOM
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 16");


let highestLevelSpan = document.getElementById("pokemon-highest-level");

console.log(highestLevelSpan);

highestLevelSpan.textContent = "HAHAHHA";


//
// Find the highest level Pokemon
//

// Array of Pokemon objects literals
let pokemons = [
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

// Let's print all of our Pokemons to our page
// Find the following ID in the dom pokemon-list

// Use a for loop to loop through all of the pokemons and add each one to the list

let highestIndex = 0;


for (let i = 0; i < pokemons.length; i++)
{
  console.log("Current index", i);
  console.log("Current index", pokemons[i].level);
  console.log("Current highest level at highest index", pokemons[highestIndex].level);

  if (pokemons[i].level >= pokemons[highestIndex].level) {
    highestIndex = i;

    console.log("Highest index", highestIndex);
  }
  console.log(pokemons[i].level);
}

/*
// Calculelate the hightest level pokemon
for (let i = 0; i < pokemons.length; i++){
  if (pokemons[i].level >= pokemons[highestIndex].level) {
    highestIndex = i;
  }
}
*/

console.log("Highest index", highestIndex);


// Use a for loop to loop through all of the pokemons and find out which one is the highest

// Find the following ID in the dom pokemon-highest-level
/*
let highestLevelSpan = document.getElementById("pokemon-highest-level");

console.log(highestLevelSpan);
*/
highestLevelSpan.textContent = pokemons[highestIndex].name;
// Set the textContent of the element to the name of highest level pokemon

// console.clear();



let pokemonCount  = document.getElementById("pokemon-length");

pokemonCount.textContent = pokemons.length;


//
// Display a bit more complicated List
//

/*

<li class="pokemon-list-item">
  <h3 class="pokemon-list-item-name">Pikachu</h3>
  <p class="pokemon-list-item-level">Level: 5</p>
  <p class="pokemon-list-item-type">Type: Electric</p>
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



//
// Remove a specific item
//

// Create a reference to the dom element list with the

// Use style.transform = "scale(2)" to make sure we have the item selected

// Use remove to remove the item from the list





//
// Event Listeners
//


// Three ways of adding events to an element
// addEventListener()
// inline onclick()
// and the onlick property

// const btn1 = document.querySelector("#btn-1");

// // console.log(btn1);

// btn1.addEventListener("click", greet);

// function greet(event) {
//   console.log(event);
// }

// const greet1 = function (message) {
//   console.log(message);
// };

// greet1("my message");

// const greet2 = (message) => {
//   console.log(message);
// };

// greet2("My other function is cooler");

// const btn3 = document.querySelector("#btn-3");

// NO
// btn3.onclick = function () {}

// YES
// btn3.addEventListener("dblclick", greet);
