
// EXERCISE:

const changeImageBtn = document.getElementById("btn-changeImage");// select "change image" button (querySelector)
const changeImageF = () => {
     
   
   var value = document.getElementById('imageInput').value;
   document.getElementById('imageToChange').src=value;
}

changeImageBtn.addEventListener("click", () =>changeImageF()); 

const addToDoBtn = document.getElementById('btn-addTodo');

const changeAddToDoF = () => {
   
   var todoInput = document.getElementById('todoInput').value;
    listNode = document.getElementById('todoList');
    liNode = document.createElement('LI');
    textNode = document.createTextNode(todoInput);
    const todoList = listNode.removeChild(listNode.getElementsByTagName('li')[0]);
    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
    
  }
  addToDoBtn.addEventListener("click", () => changeAddToDoF());
  