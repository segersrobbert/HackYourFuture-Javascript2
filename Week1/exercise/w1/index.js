console.log('Hack your future Belgium!');

function changeHeader() {
  console.log('test');
  header.innerHTML = 'ramzi';
}
const header = document.querySelector('h1');

header.addEventListener('click', changeHeader);
document.getElementById('btn-header').addEventListener('click', changeHeader);
// EXERCISE 1

// 1a: create a functi[on called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name

// ====================================== //

function changeImage() {
  var imageInputValue = document.getElementById('imageInput');
  var imageToChange = document.querySelector('img');
  console.dir(imageInputValue);
  imageToChange.src = imageInputValue.value;
}

document.getElementById('btn-changeImage').addEventListener('click', changeImage);

// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src

// ====================================== //

function addTodo() {
  var todolist = document.getElementById('todoList');
  var todo_input = document.querySelector('#todoInput');
  //the above one its the same of document.getElementById ('todoInput')
  console.log(todoInput.value);
  var element_li = document.createElement('li');
  element_li.innerHTML = todo_input.value;
  todolist.appendChild(element_li);
}

document.getElementById('btn-addTodo').addEventListener('click', addTodo);

// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList
