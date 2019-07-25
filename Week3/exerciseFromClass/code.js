"use_strict";

class Form {
    constructor() {
        console.log("form constructor")
        this.formElem = null;
        this.formElem = document.createElement("form")
        this.formElem.setAttribute("id", "formId")
    }
    createButton() {
        this.formBtn = null;
        this.formBtn = document.createElement("button")
        this.formElem.appendChild(this.formBtn)
    }
    createInput() {
        this.formInput = null;
        this.formInput = document.createElement("input")
        this.formInput.setAttribute("type", "text")
        this.formElem.appendChild(this.formInput)
    }
    createCheckbox() {
        this.formCheckbox = null;
        
    }
}

const form1 = new Form("formId")
console.log(form1)