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

// The form
const pokemonForm = document.querySelector("#search-pokemon-form");
// The input number
const pokemonNumberInput = document.querySelector("#pokemon-number");
// The empty state
const emptyState = document.querySelector(".empty-state");
// The container
const container = document.querySelector(".pokemon-container");
// Pokemon data from the api
let pokemonData = null;

// Render the pokemon item

/* <div class="pokemon">
          <h2 class="name">Pikachu</h2> // done
          <p class="id">#64</p> // done
          <img class="image" src="./images/pica.jpg" alt="Pikachu" /> // done
          <ul class="types">
            <li>Water</li>
            <li>Flying</li>
          </ul>
        </div>
 */

function renderPokemon() {

  console.log(pokemonData)

  // Clear whatever is in the container
  container.innerHTML = "";

  // Create the pokemon div
  const pokemonDiv = document.createElement("div");
  // Add the pokemon class
  pokemonDiv.classList.add("pokemon");

  // Create the name element
  const nameElement = document.createElement("h2");
  // Add the name class
  nameElement.classList.add("name");
  nameElement.innerText = pokemonData.name;

  const idElement = document.createElement("p");
  idElement.classList.add("id");
  idElement.innerText = `#${pokemonData.id}`;

  const imageElement = document.createElement("img");
  imageElement.classList.add("image");
  imageElement.setAttribute("src", pokemonData.sprites.front_default);
  imageElement.setAttribute("alt", pokemonData.name);

  // Add to the pokemon div
  pokemonDiv.appendChild(nameElement);
  pokemonDiv.appendChild(idElement);
  pokemonDiv.appendChild(imageElement);

  // Add the pokemon div to the container
  container.appendChild(pokemonDiv);

}



// Form submit handler
function handleFormSubmit(event){
  // Prevent the default behavior of the form
  event.preventDefault();

  // Get the value from the input
  const pokemonNumberToSearch = pokemonNumberInput.value;

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

      // Set the pokemon data
      pokemonData = data;

      // Draw the pokemon
      renderPokemon();

    })
    .catch((error) => {

    });

}


// Add our event handler for the form submit
pokemonForm.addEventListener("submit", handleFormSubmit);

// Add our event listener


/* <div class="pokemon">
          <h2 class="name">Pikachu</h2>
          <p class="id">#64</p>
          <img class="image" src="./images/pica.jpg" alt="Pikachu" />
          <ul class="types">
            <li>Water</li>
            <li>Flying</li>
          </ul>
        </div>
 */



// Fetch the data from the API
// fetch(`${API_URL}${pokemonNumberToSearch}`)
// .then((response) => {
//   // We can use .json() to get the json data from the response
//   if (response.status === 404) {
//     throw new Error("Pokemon not found");
//   }

//   return response.json();
// })
// .then((data) => {

//   console.log(data)
// })
// .catch((error) => {
//   console.log(error);
// });
