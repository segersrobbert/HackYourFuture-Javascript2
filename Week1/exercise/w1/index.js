console.log('Hack your future Belgium!');

// EXERCISE 1

function changeHeader(){
    console.log("test");
    var header = document.querySelector('h1') 
    header.innerHTML = "Aimal Maarij" ;
};


document.getElementById("btn-changeHeader") .addEventListener("click", changeHeader)

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 

//  and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name

// ====================================== //


// EXERCISE 2

function changeImage(){
    console.log("test");
    var changeImage = document.getElementById("imageToChange")
    var changeInput = document.getElementById("imageInput")
    changeImage.src=changeInput.value 
}

document.getElementById("btn-changeImage") .addEventListener("click", changeImage)


// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src


// ====================================== //


// Exercise 3:



function addTodo() {
    var todoList = document.getElementById('todoList') //reference to ul element on HTML
    var todoInput = document.getElementById('todoInput') // reference to the input text box
    var liNode = document.createElement('li') // create new LI element
    var textNode = document.createTextNode(todoInput.value) // create new text node

    liNode.appendChild(textNode) // take the new create text node and append it li
    todoList.appendChild(liNode) // take the new create li element and append it ul/todoList
  }
 var addBtn = document.getElementById('btn-addTodo')
 addBtn.addEventListener('click', addTodo)


// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList
