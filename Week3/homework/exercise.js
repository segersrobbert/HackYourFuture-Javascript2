//- Create a class called `Form`
//- Add a `null` variable (eg: formElement)
//- Create a methods `createButton` and create an HTML button element in it

class Form {
  constructor(formElement) {
    console.log('Hello');
    const newForm = document.createElement('form');
    document.getElementsByTagName('div')[0].appendChild(newForm);
    this.formElement = newForm;
  }

  createButton() {
    const newButton = document.createElement('button');
    this.formElement.appendChild(newButton);
    newButton.innerHTML = ' Button ';
  }

  createInput() {
    const newInput = document.createElement('input');
    this.formElement.appendChild(newInput);
  }
  createCheckBox() {
    const newCheckBox = document.createElement('checkbox');
    this.formElement.appendChild(newCheckBox);
  }
}
const form1 = new Form('formId');
form1.createButton();
form1.createInput();
form1.createCheckBox();

console.log(form1);
