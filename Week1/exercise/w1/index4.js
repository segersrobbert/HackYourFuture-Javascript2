console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);


// select "change image" button (querySelector)
const changeImageButton = document.querySelector("#btn-changeImage");
console.log("changeImageButton",changeImageButton);

// define changeImage() function
const changeImage= () => {

const image = document.getElementById("imageToChange");
console.log("image:" + image);
//    get imageInput element
const imageInput = document.getElementById("imageInput");
//    log input value
console.log("imageInput:" + imageInput.value);
//    set image src to imageInput element value
image.src = imageInput.value;
}
changeImageButton.addEventListener("click", changeImage);

// ====================================== //

// BONUS:
// select "add todo" button (querySelector)
const getToDoButton = document.querySelector('#btn-addTodo');
console.log(getToDoButton);
// add click event listener
// execute addTodo() function on click event
// define addTodo() function
const addTodo = () => {
// in this function:
//    get todoList element
const getTodoList = document.querySelector('#todoList');
//    get todoInput element
const getTodoInput = document.querySelector('#todoInput');
//    log todoInput element value
console.log(getTodoInput.value);
//    create <li> element
const createListElement = document.createElement('li');
//    set <li> element innerHtml to todoInput value
createListElement.innerHTML = getTodoInput.value;
  console.log(createListElement);
//    add <li> element to todoList
getTodoList.appendChild(createListElement);
}
// add click event listener
// execute addTodo() function on click event
getToDoButton.addEventListener('click', addTodo);