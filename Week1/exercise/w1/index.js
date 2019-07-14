console.log('Hack your future Belgium!');

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name


// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src


// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList


window.onload = function(){
    console.log('Hack your future Belgium!');

    // EXERCISE 1
    
    // 1a: create a function called "changeHeader", put a console.log() inside this function to test

    /* function changeHeader() {
        console.log("test 2");
    }; */

    // 1b: inside this function: select the header element and assign that to a variable called "header"

    /* function changeHeader() {
        var headerToChange = document.getElementById("myHeadChange"); 
        console.log(headerToChange)
    }; */

    // 1c: change the inner html of the header element to your name
    
    function changeHeader() {
        var headerToChange = document.getElementById("myHeadChange");
        headerToChange.innerHTML = "Melrose"
    };

    // 1d: add an event listener to the "Change header" button 
    //and call the "changeHeader" function when clicked ( you should see your console.log() )
    //function changeHeader(); 
    var btn_changhead = document.getElementById("btn-changeHeader");
    btn_changhead.addEventListener("click", function(){
        changeHeader()
    });
    

    // EXERCISE 2

    // 2a: create a function called "changeImage", put a console.log() inside this function to test
    function changeImage(){
        console.log("test image");
    };
    // 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked
    var btn_changeImage = document.getElementById("btn-changeImage");
    btn_changeImage.addEventListener("click", function () {
        changeImage()
    })
    // inside this function:

    // 2c: select the "imageInput" element and assign to a variable called "imageInputValue"
    function changeImage() {
        var imageInputValue = "https://www.w3schools.com/w3css/img_nature_wide.jpg"
        var imageToChange = document.getElementById("imageToChange");
        imageToChange.src = imageInputValue;
    };
   
    // 2d: select the image element and assign to a variable called "imageToChange"
    //var imageToChange =
    // 2e: to change the image: assign the imageInputValue to the image src


    // Exercise 3:

    // 3a: select "add todo" button & add click event listener to execute addTodo() function on click event
    var btn_addTodo = document.getElementById("btn-addTodo");
    btn_addTodo.addEventListener("click", function () {
        addTodo()
    })
    // 3b: define addTodo() function, in this function:

   /*  function addTodo(){
        console.log("addTodo")
    }; */

// 3c: get todoList element
    var todoList = document.getElementById("todoList");
// 3d: get todoInput element & log todoInput value
    var todoInput = document.getElementById("todoInput")
// 3e: create a <li> element
    var li = document.createElement("li"); 
// 3f: set created <li> element innerHtml to todoInput value
    li.innerHTML = todoInput.value
// 3g: add <li> element to todoList
    function addTodo() {
        console.log("addTodo")
        li.innerHTML = todoInput.value
        todoList.append(li)
    };
}
/* 
// ====================================== //
 */
