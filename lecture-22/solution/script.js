/*
 * Lecture 21: Working with Promises and Fetch
 *
 * Topics:
 *  Let's make a promise
 *  Let's fetch some data
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 22");

// Create our variables
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonForm = document.querySelector("#search-pokemon-form");
const pokemonInputNumber = document.querySelector("#pokemon-number");
const pokemonEmptyState = document.querySelector(".empty-state");
const pokemonContainer = document.querySelector(".pokemon-container");

let pokemonData = null;


function renderPokemon() {

  // Clear the container
  pokemonContainer.innerHTML = "";

  if (pokemonData === null) {
    return;
  }

  console.log(pokemonData);

//   <div class="pokemon"> // Done
//    <h3 class="name">Kingler</h3> // Done
//    <p class="id">#99</p> // Done
//    <img class="image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png" alt="Kingler" />
//    <ul class="types">
//     <li>
//       Water
//     </li>
//   </ul>
//  </div>

  // Create the div
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("pokemon");

  // Create the h3
  const pokemonName = document.createElement("h3");
  pokemonName.classList.add("name");

  const firstLetter = pokemonData.name.charAt(0).toUpperCase();
  const restOfName = pokemonData.name.slice(1);

  pokemonName.textContent = firstLetter + restOfName;

  // Create the p
  const pokemonID = document.createElement("p");
  pokemonID.classList.add("id");
  pokemonID.textContent = `#${pokemonData.id}`;

  // Create the img
  const pokemonImage = document.createElement("img");
  pokemonImage.classList.add("image");
  pokemonImage.src = pokemonData.sprites.front_default;

  // Create the ul list of types
  const pokemonTypes = document.createElement("ul");
  pokemonTypes.classList.add("types");

  // Create the li for each type
  for(let i=0; i < pokemonData.types.length && i < 2; i++) {

    // Create the li
    const tempPokemonType = document.createElement("li");

    const firstLetter = pokemonData.types[i].type.name.charAt(0).toUpperCase();
    const restOfType = pokemonData.types[i].type.name.slice(1);

    tempPokemonType.textContent = firstLetter + restOfType;

    // Add the li to the ul
    pokemonTypes.appendChild(tempPokemonType);
  }

  // Add everything to the parent div
  pokemonDiv.appendChild(pokemonName);
  pokemonDiv.appendChild(pokemonID);
  pokemonDiv.appendChild(pokemonImage);
  pokemonDiv.appendChild(pokemonTypes);

  // Add the parent div to the container
  pokemonContainer.appendChild(pokemonDiv);
}


function handleSearchPokemon(event) {

  // Prevent the default behavior of the form
  event.preventDefault();

  // Get the value of the input
  const pokemonNumberToSearch = pokemonInputNumber.value;

  // Fetch the data from the API
  fetch(`${API_URL}${pokemonNumberToSearch}`)
    .then((response) => {
      // We can use .json() to get the json data from the response
      if (response.status === 404) {
        throw new Error("Pokemon not found");
      }

      return response.json();
    })
    .then((data) => {

      // Hide the empty state
      pokemonEmptyState.classList.add("hidden");

      // Set the pokemon data
      pokemonData = data;

      // Show the pokemon container
      renderPokemon();
    })
    .catch((error) => {
      console.log(error);
    });

}

// Add event handler for form submit
pokemonForm.addEventListener("submit", handleSearchPokemon);

