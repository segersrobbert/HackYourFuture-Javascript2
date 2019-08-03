/* to do:
- Create a class called `Form`
- Add a `null` variable (eg: formElement)
- Create a methods `createButton` and create an HTML button element in it 
*/

// create class call 'Form'
class Form {
  constructor() {
    //give a form variable with 'null' as a value
    this.formElement = null;

    console.log('hello');
    //create a form element and put in formElement
    this.formElement = document.createElement('form');
    document.getElementsByTagName('div')[0].appendChild(this.formElement);
  }
  //add method to this class to create a button
  createButton() {
    //create button
    this.newButton = document.createElement('button');
    this.newButton.type = 'submit';

    //and add to formElement
    this.formElement.appendChild(this.newButton);
    this.newButton.innerHTML = 'Click this button';
  }
  render() {}
  createInput() {
    //create input
    this.input = document.createElement('input');
    this.input.type = 'text';
    //and add to formElement
    this.formElement.appendChild(this.input);
  }
  createCheckbox() {
    //create checkbox element
    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    //and add to formElement
    this.formElement.appendChild(this.checkbox);
  }
}

const form1 = new Form('formId');
form1.createButton();
form1.createInput();
form1.createCheckbox();
console.log(form1);

//<form id='formId'>
