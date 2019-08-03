/* eslint-disable spaced-comment */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
function evalLength() {
  let a = document.getElementsByTagName('input').value.length;
  console.log(a);
  return a;
}

class Form {
  constructor() {
    console.log('HELLOOOOOO');
    this.formElement = null;
    this.formElement = document.createElement('form');
    document.getElementById('one').appendChild(this.formElement);
  }

  createButton() {
    this.formElement.appendChild(document.createElement('button'));
  }
  createInput() {
    this.formElement.appendChild(document.createElement('input'));
  }
  createCheckBox() {
    this.formElement.appendChild(document.createElement('input').setAttribute('type', 'checkbox'));
  }
}

const form1 = new Form('formId');
form1.createButton();
form1.createInput();
form1.createCheckBox();
console.log(form1);

document.getElementsByTagName('button')[0].addEventListener('click', evalLength);
