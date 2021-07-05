console.log('Hack your future Belgium!');

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name
// Answer Exercise 1
//=============================//
// function
function changeHeader(){
    console.log('hello');
    let header = document.querySelector('h1');
    header.innerHTML = 'Berihu';
}
// Event listener
let change_button = document.getElementById('change-header');
change_button.addEventListener('click',changeHeader);
// ====================================== //

// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src
// Answer to exercise -2
//==================================//
//function
function changeImage(){
    let imageInputValue = document.getElementById('imageInput').value;
    let imageToChange = document.getElementById('imageToChange');
    imageToChange.src = imageInputValue;
}
// Event Listener
let change_image_button = document.getElementById('btn-changeImage');
change_image_button.addEventListener('click',changeImage);
// ====================================== //
// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList
//================================================//
//Answer to exercise 3
//Event Listener
let add_todo_button =  document.getElementById('btn-addTodo');
add_todo_button.addEventListener('click',addTodo);

//function
function addTodo(){
    let list = document.getElementById('todoList');
    let new_list= document.createElement('li');
    let item_text =  document.getElementById('todoInput').value;
    let list_text = document.createTextNode(item_text);
    new_list.appendChild(list_text);
    if(item_text ===''){// if input value is empty
        alert('please add some item')
    } else {
        list.appendChild(new_list);// adding created 'li' element to 'ul'
    }
}
