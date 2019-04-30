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
const ChangeImageButton = document.querySelector('#btn-changeImage');
const imgElement = document.querySelector('#imageToChange');
const imageInput = document.getElementById('imageInput');
const changeImage = () => {
  imgElement.src = imageInput.value;
};
ChangeImageButton.addEventListener('click', changeImage); // in this ES6 new method this part should after the function

//or
/*
ChangeImageButton.addEventListener('click', () => {
  const imgElement = document.querySelector('#imageToChange');
  const imageInput = document.getElementById('imageInput');
  //console.log(imageInput.value);
  imgElement.src = imageInput.value;
});
*/

// or
/*function changeImage() {
  const imgElement = document.querySelector('#imageToChange');
  const imageInput = document.getElementById('imageInput');
  //console.log(imageInput.value);
  imgElement.src = imageInput.value;
}




*/
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

const addTodoButton = document.getElementById('btn-addTodo');
const getTodoList = document.querySelector('#todoList');
const getTodoInput = document.querySelector('#todoInput');
const createLiElement = document.createElement('li');
const addTodo = () => {
  createLiElement.innerHTML = getTodoInput.value;
  getTodoList.appendChild(createLiElement);
};
addTodoButton.addEventListener('click', addTodo);
