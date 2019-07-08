console.log('Hack your future Belgium!');
console.dir();

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name

function changeHeader() {
  console.log('function header in console to test');
  var header = document.querySelector('h1');
  // getElementByTagName("h1")[0];

  header.innerHTML = "Nelson Najarro  ";
}
document.getElementById("Change-header").addEventListener("click", changeHeader);

// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src

function changeImage() {
  console.log('function changeImage in console to test');
  var imageInputValue = document.querySelector('input');
  var imageToChange = document.querySelector('img');
  imageToChange.src = imageInputValue.value;
}

document.getElementById("btn-changeImage").addEventListener("click", changeImage);

// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList

function addTodo() {
  var todoList = document.getElementById("todoList");
  var todoInput = document.getElementById("todoInput");
  console.log(todoInput.value);

  // Create a <li> node
  var liNode = document.createElement("LI");
  // Create a text node
  var textNode = document.createTextNode(todoInput.value);
  // Append the text to <li>
  liNode.appendChild(textNode);
  // Append <li> to <ul> with id="todoList"
  todoList.appendChild(liNode);
}

const Addbuton = document.getElementById("btn-addTodo");
Addbuton.addEventListener("click", addTodo);

