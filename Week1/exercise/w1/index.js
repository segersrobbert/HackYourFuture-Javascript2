console.log('Hack your future, right?!');

const selectHeader = document.querySelector('h1');
console.log('header: ', selectHeader);

// EXERCISE:
// select "change image" button (querySelector)
const selectButtonChangeImage = document.getElementById('btn-changeImage');

// define changeImage() function
const changeImage = () => {
  // in this function:
  //    get image element
  const selectImage = document.querySelector('img');
  //    get imageInput element
  const selectImageInput = document.getElementById('imageInput');
  //    log input value
  console.log(selectImageInput.value);
  //    set image src to imageInput element value
  selectImage.src = selectImageInput.value;
}
// add click event listener
// execute changeImage() function on click event
selectButtonChangeImage.addEventListener('click', changeImage);



// ====================================== //

// BONUS:
// select "add todo" button (querySelector)
const getToDoButton = document.querySelector('#btn-addTodo');
console.log(getToDoButton);
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