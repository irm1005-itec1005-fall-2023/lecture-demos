/*
 * Lecture 16: Working with the DOM and Events
 *
 * Topics:
 *  DOM
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 18");



//
// Grab data from a form and display it on the page
//

// Get a reference to the form
//const form = document.querySelector("#form-1");

let formA = document.getElementById("form-1");

formA.addEventListener("submit",handleWhenAUserClickedSubmit);

let inputNumber = document.getElementById("number-input");

let numbersListOfThings = document.getElementById("form-results-1");

function handleWhenAUserClickedSubmit(event){

  // Prevent the default behavior of the form
  event.preventDefault();

  // Console log the value of the input
  console.log("USER ENTERED:" , inputNumber.value);


  let tempNumber = document.createElement("li");

  tempNumber.textContent = inputNumber.value;

  numbersListOfThings.appendChild(tempNumber);

  inputNumber.value= "";

  console.log("Form Submitted");
}

// Add an event listener to the form
//form.addEventListener("submit", handleSubmit);

// Create a simple function that will be called when the form is submitted
//function handleSubmit(event) {

//     // Prevent the default behavior of the form
//     event.preventDefault();

//     // Get a reference to the input
//     const input = document.querySelector("#number-input");

//     // Get the value of the input
//     const inputValue = input.value;

//     // Create a reference to the list
//     const list = document.querySelector("#form-results");

//     // Create a new list item
//     const listItem = document.createElement("li");

//     // Set the text content of the list item to the input value
//     listItem.textContent = inputValue;

//     // Add the list item to the list
//     list.appendChild(listItem);

//     // Clear the input
//     input.value = "";
// }





//
// Grab data from a form and display it on the page
// Put the data into an array and then display the array
//

// Add a comment
let superHeroNameForm = document.getElementById("form-2");

let superHeroNameInput = document.getElementById("name-input-1");

let superHeroList = document.getElementById("name-list-1");

let superHeroCountP = document.getElementById("super-hero-count");

// Array of super heroes
let superHeroArray = ["Tony", "HawkEye"];

superHeroNameForm.addEventListener("submit", handleSuperHeroFormSubmit);

function handleSuperHeroFormSubmit(event){

  // Prevent the default behavior of the form
  event.preventDefault();

  // Get the value of the input
  const inputValue = superHeroNameInput.value;

  // Check that inputValue is not empty

  // Push the new hero onto the array
  superHeroArray.push(inputValue);

  renderList(); // Call the renderList function

}


function renderList() {
  console.log("Render List:", superHeroArray);

  superHeroList.innerHTML = "";

  for(let index = 0; index < superHeroArray.length; index++) {


    let tempName = document.createElement("li");

  tempName.textContent = superHeroArray[index];

  superHeroList.prepend(tempName);

  }

  if ( superHeroArray.length === 0 ) {
    superHeroCountP.textContent = "No Super Heroes Yet - Blame Thanos!"
  }
  else {
    superHeroCountP.textContent = "There are " + superHeroArray.length + " Super Heroes!";
  }


}

// You can load array data from local storage
// Do that here


// Call it the first time
renderList();
