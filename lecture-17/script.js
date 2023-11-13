/*
 * Lecture 16: Working with the DOM and Events
 *
 * Topics:
 *  DOM
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 17");


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


//
// Display a bit more complicated List
//

let pokemonList = document.getElementById("pokemon-list-1");

console.log(pokemonList)

for (let i = 0; i < pokemons.length; i++) {

  let tempPokemon = document.createElement("li");

  tempPokemon.textContent = pokemons[i].name + " - " + pokemons[i].level;

  pokemonList.appendChild(tempPokemon);

}

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




// Create a reference to the dom element list from the id
let pokemonAdvancedList = document.getElementById("pokemon-list-2");

// Create a new list item using createElement and store it in a variable

// Use a template literal to create a complex list item with an h4, p, and a tag

// Use innerHTML to set the inner html of the list item to the template literal

// Use appendChild to add the list item to the list

for (let i = 0; i < pokemons.length; i++) {

  let tempPokemon =
  `
  <li class="pokemon-list-item">
    <h3 class="pokemon-list-item-name">${pokemons[i].name}</h3>
    <p class="pokemon-list-item-level">Level: ${pokemons[i].level} </p>
    <p class="pokemon-list-item-type">Type: ${pokemons[i].type}</p>
  </li>
  `
  pokemonAdvancedList.innerHTML = pokemonAdvancedList.innerHTML + tempPokemon;

}




//
// Use Fragment
//

// Create a reference to the dom element list from the id
pokemonAdvancedList = document.getElementById("pokemon-list-3");

// Create a new list item using createElement and store it in a variable

// Create an h3 element, a p tag, and an a tag using createElement and store them in variables

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

// Get a reference to the button
// const btn1 = document.querySelector("#btn-1");

// Check that we have the right button
// console.log(btn1);

// Add an event listener to the button
// btn1.addEventListener("click", greet);

// Create a simple function that will be called when the button is clicked
// function greet(event) {
//   console.log(event);
// }

// Get a reference to the button
// const btn3 = document.querySelector("#btn-3");

// NO
// btn3.onclick = function () {
//   console.log("Hello");
// }


// Get a reference to the button
// const btn4 = document.querySelector("#btn-4");

// Add an event listener to the button but this time listen to a dblclick event
// btn3.addEventListener("dblclick", doubleGreet);

// Create a simple function that will be called when the button is clicked
// function doubleGreet(event) {
//   console.log(event);
// }




//
// Grab data from a form and display it on the page
//

// Get a reference to the form
const form = document.querySelector("#form-1");

// Add an event listener to the form
form.addEventListener("submit", handleSubmit);

// Create a simple function that will be called when the form is submitted
function handleSubmit(event) {

    // Prevent the default behavior of the form
    event.preventDefault();

    // Get a reference to the input
    const input = document.querySelector("#number-input");

    // Get the value of the input
    const inputValue = input.value;

    // Create a reference to the list
    const list = document.querySelector("#form-results");

    // Create a new list item
    const listItem = document.createElement("li");

    // Set the text content of the list item to the input value
    listItem.textContent = inputValue;

    // Add the list item to the list
    list.appendChild(listItem);

    // Clear the input
    input.value = "";
}





//
// Grab data from a form and display it on the page
// Put the data into an array and then display the array
//


