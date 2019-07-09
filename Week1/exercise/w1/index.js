console.log('Hack your future Belgium!');

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test
// 1b: inside this function: select the header element and assign that to a variable called "header"
// 1c: change the inner html of the header element to your name
// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

function changeHeader(){
    console.log("change Header function");
    header.innerHTML = "SALIHA";
}
var header = document.querySelector('h1');
header.addEventListener('click', changeHeader);


// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test
// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked
// inside this function:
// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"
// 2d: select the image element and assign to a variable called "imageToChange"
// 2e: to change the image: assign the imageInputValue to the image src

function changeImage(){
    console.log("change Image function");
    var imageInputValue = document.querySelector('#imageInput');
    var imageToChange = document.querySelector('#imageToChange');
    imageToChange.src = imageInputValue.value;
}

var buttonChangeImage = document.querySelector('#btn-changeImage');
buttonChangeImage.addEventListener('click', changeImage);



// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event
// 3b: define addTodo() function, in this function:
// 3c: get todoList element
// 3d: get todoInput element & log todoInput value
// 3e: create a <li> element
// 3f: set created <li> element innerHtml to todoInput value
// 3g: add <li> element to todoList


var toDoButton = document.querySelector('#btn-addTodo');
toDoButton.addEventListener('click', addTodo);

function addTodo(){
    var toDoList = document.querySelector('#todoList');
    var newToDo = document.querySelector('#todoInput');
    var newLi = document.createElement("li");
    newLi.innerHTML = newToDo.value;
    toDoList.appendChild(newLi);
}

