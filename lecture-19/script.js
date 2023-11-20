/*
 * Lecture 19: Working with the DOM and Events
 *
 * Topics:
 *  Let's build out our Superhero Name App
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 19");

//
// Grab data from a form and display it on the page
// Put the data into an array and then display the array
//

// Create our variables
let superHeroArray = [];
let superHeroForm = document.getElementById("form-superhero");
let superHeroList = document.getElementById("superhero-name-list");
let superHeroInput = document.getElementById("name-input-1");

// Handle Submit Form
superHeroForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();

  // Grab the value from the input
  //console.log("Name of Superhero: ", superHeroInput.value);

  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  superHeroArray.push(superHeroInput.value);

  // Clear the input
  // superHeroInput.value = "";
  superHeroForm.reset();

  // Draw the list
  renderData();
}


// Render the data to the page
function renderData() {

  console.log("Render Data", superHeroArray);

  // Clear the list
  superHeroList.innerHTML = "";

  for (let i=0; i < superHeroArray.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = superHeroArray[i];

    let tempButton = document.createElement("button");

    tempButton.textContent = "Click me";

    tempButton.dataset.super = i;

    // You can actually add an event handler here
    tempButton.addEventListener("click", function(event){
      console.log("You clicked me");

      console.log("You clicked on", event.target.dataset.super);

      // Remove this item from the array
      superHeroArray.splice(event.target.dataset.super, 1);

      // Re-render the list
      renderData();

    });

    tempListItem.appendChild(tempButton);

    superHeroList.appendChild(tempListItem);

  }
}


// Call renderlist for the first time
