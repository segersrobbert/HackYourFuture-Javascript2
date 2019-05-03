console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

document.querySelector('#btn-changeImage');
const btnNewImage = document.querySelector('#btn-changeImage');
console.log(btnNewImage);

function changeImage() { 
const img = document.querySelector('#imageToChange');
const imgInput = document.querySelector('#imageInput');
console.log(imgInput.value);
  img.src = imgInput.value;
}

btnNewImage.addEventListener('click', changeImage);




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
document.querySelector('#btn-addTodo');
const btnToDo = document.querySelector('#btn-addTodo');
console.log(btnToDo);

function newToDo () {
    const toDo = document.querySelector('#todoList');
    const toDoInput = document.querySelector('#todoInput');
    console.log(toDoInput.value);
    var li = document.createElement('li');
    li.innerHTML = toDoInput.value; 
    const ul = document.querySelector('ul');  
    ul.appendChild(li);
}
btnToDo.addEventListener('click', newToDo);

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


