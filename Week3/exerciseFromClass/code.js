"use_strict";

class Form {
    constructor(id) {
        this.formElem = null;
        this.formElem = document.createElement("form")
        this.formElem.setAttribute("id", id)
        document.body.appendChild(this.formElem)

    }
    createButton() {
        this.formBtn = null;
        this.formBtn = document.createElement("button")
        this.formElem.appendChild(this.formBtn)
        this.formBtn.appendChild(document.createTextNode("Click Me!"));

    }
    createInput() {
        this.formInput = null;
        this.formInput = document.createElement("input")
        this.formInput.setAttribute("type", "text")
        this.formElem.appendChild(this.formInput)
    }
    createCheckbox() {
        this.formCheckbox = null;
        this.formCheckbox = document.createElement("input")
        this.formCheckbox.setAttribute("type", "checkbox")
        this.formElem.appendChild(this.formCheckbox)
    }
}

const form1 = new Form("formId")
form1.createButton()
form1.createCheckbox()
form1.createInput()
console.log(form1)
