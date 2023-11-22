/*
 * Lecture 19: Working with the DOM and Events
 *
 * Topics:
 *  Let's build out our Superhero Name App
 */

// Welcome to JavaScript!

// Console log is a function that prints to the console
console.log("🥰 Lecture 20");

//
// Grab data from a form and display it on the page
// Put the data into an array and then display the array
//


// const superHeroButton1 = document.getElementById("superhero-1");

// superHeroButton1.addEventListener("click", clickButton1 )

// function clickButton1 (event){
//   console.log("Button 1 clicked");
// }


const superHeroListA = document.getElementById("superhero-name-list-a");


superHeroListA.addEventListener("click", superHeroListClickHandler )

function superHeroListClickHandler(event){
  // console.log("You clicked inside the list", event.target);

  if (event.target.tagName === "BUTTON"){
    console.log("You clicked on a button");

    console.log("The id of the button is", event.target.id);

    console.log("The data superhero value is", event.target.dataset.superhero)

    console.log("The data superhero id", event.target.dataset.id)

    remoteTodoItem(event.target.dataset.id);
    markTodoItemCompleted(event.target.dataset.id);

    renderData();
    renderList();

  }
}


// Super Hero Name App
// Using the data attribute as a way to store the id of the item


// Create our variables
let superHeroArray = [];
let superHeroForm = document.getElementById("form-superhero");
let superHeroList = document.getElementById("superhero-name-list-b");
let superHeroInput = document.getElementById("name-input-B");



// // Handle Submit Form
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


// // Render the data to the page
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

    tempListItem.appendChild(tempButton);

    superHeroList.appendChild(tempListItem);

  }
}


// Call renderlist for the first time



superHeroList.addEventListener("click", superHeroListClickHandlerB )

function superHeroListClickHandlerB(event){



  if (event.target.tagName === "BUTTON"){
    console.log("You clicked on a button");

    console.log("The data superhero id", event.target.dataset.super)

    var indexToRemove = event.target.dataset.super;

    superHeroArray.splice(indexToRemove,1)

  }

  renderData();

}
