'use strict';

class Form {


    constructor() {
        this.formElement = null;
        console.log('hello');
        const newForm = document.createElement('form');
        this.formElement = newForm;

    };


    createButton() {
        const newButton = document.createElement('button')
        this.formElement.appendChild('newButton');
        document.getElementByTagName("button").addEventListener("click", myFunction);
    };


    createInput() {
        const newInput = document.createElement('input');
        this.formElement.appendChild(document.createElement('newInput'));

    };

    createCheckbox() {
        const newCheckBox = document.createElement('checkbox');
        this.formElement.appendChild(document.createElement('newCheckbox'));
    };

}



const form1 = new Form('formId');
form1.createButton();
form1.createInput();
form1.newCheckBox();

console.log(form1);