class Form {
  constructor() {
    console.log('Hello');
    const createForm = document.createElement('FORM');
    createForm.appendChild(this.createInput());
    createForm.appendChild(this.createCheckbox());
    createForm.appendChild(this.createButton());
    createForm.appendChild(this.newButton());
    var formElement = createForm;
    document.body.appendChild(formElement);

    console.log(formElement);
  }

  createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Submit';
    button.addEventListener('click', console.log('yes'));
    return button;
  }

  createInput() {
    const input = document.createElement('input');
    return input;
  }
  newButton() {
    const button2 = document.createElement('button');
    button2.innerHTML = 'submit2';
    button2.addEventListener('click', this.ramzi);
    document.body.appendChild(button2);

    return button2;
  }

  ramzi() {
    console.log('fdsfdsdf');
    return;
  }

  inputFunc() {
    console.log(this.input.value);
    if (this.input.value.length > 3) {
      console.log('its more than 3');
    } else {
      console.log('its less than 3');
    }
    return;
  }

  createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
  }
}
const form1 = new Form('formId');
