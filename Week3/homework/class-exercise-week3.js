'use strict';
{
  class Form {

    constructor() {
      this.formElement = null;
      const newForm = document.createElement('form');
      document.getElementsByTagName('div')[0].appendChild(newForm);
      this.formElement = newForm;
    }
    createButton() {
      const newButton = document.createElement('button');
      this.formElement.appendChild(newButton);
      newButton.innerHTML = "Button";
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
  //console.log('Hello');

  const form1 = new Form('form');
  form1.createButton(); //I just want button for from 1, so make it outside the constructor
  form1.createInput(); //yukarıdakilerden istediğim methodları seçiyorum

  const form2 = new Form('form');
  form2.createButton();
  form2.createInput();
  form2.createCheckBox();

  console.log(form1);
  console.log(form2);
}

