// EXERCISE:
// select "change image" button (querySelector)
// add click event listener
// execute changeImage() function on click event
// define changeImage() function
// in this function:
//    get image element
//    get imageInput element
//    log input value
//    set image src to imageInput element value

// ====================================== //
//------------------GET AND CREATE ELEMENTS--------------------

const ChangeImageButton = document.querySelector('#btn-changeImage');
const imgElement = document.querySelector('#imageToChange');
const imageInput = document.getElementById('imageInput');

//------------------FUNCTION--------------------

//------------------FIRST--------------------
/*
const changeImage = () => {
  imgElement.src = imageInput.value;
};
ChangeImageButton.addEventListener('click', changeImage); // in this ES6 new method this part should after the function
*/

//------------------SECOND--------------------

/*
ChangeImageButton.addEventListener('click', () => {
  imgElement.src = imageInput.value;
});
*/

//------------------THIRD------------------

function changeImage() {
  imgElement.src = imageInput.value;
}
ChangeImageButton.addEventListener('click', changeImage); //declare before or after function

// BONUS:
// select "add todo" button (querySelector)
// add click event listener
// execute addTodo() function on click event
// define addTodo() function
// in this function:
//    get todoList element
//    get todoInput element
//    log todoInput element value
//    create <li> element
//    set <li> element innerHtml to todoInput value
//    add <li> element to todoList

// If you didn't create "li" elemen inside the function, it is not create new li element each click.
// Otherwise, it will override the li element created once.

//------------------GET AND CREATE ELEMENTS--------------------
const addTodoButton = document.getElementById('btn-addTodo');
const getTodoInput = document.querySelector('#todoInput');
const getTodoList = document.querySelector('#todoList');
//------------------FUNCTION--------------------

//------------------FIRST--------------------

const addTodo = () => {
  const createLiElement = document.createElement('li');
  createLiElement.innerHTML = getTodoInput.value;
  getTodoList.appendChild(createLiElement);
};
addTodoButton.addEventListener('click', addTodo);

//------------------SECOND--------------------
// const getTodoInput = document.querySelector('#todoInput');
// const getTodoList = document.querySelector('#todoList');
// addTodoButton.addEventListener('click', () => {
//   const createLiElement = document.createElement('li');
//   createLiElement.innerHTML = getTodoInput.value;
//   getTodoList.appendChild(createLiElement);
// });

//------------------THIRD------------------

// function addTodo() {
//   const createLiElement = document.createElement('li');
//   createLiElement.innerHTML = getTodoInput.value;
//   getTodoList.appendChild(createLiElement);
// }
// addTodoButton.addEventListener('click', addTodo);
