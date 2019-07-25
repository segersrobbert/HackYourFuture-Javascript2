
// Class form definition
class Form {
  // eslint-disable-next-line space-before-function-paren
  constructor(form) {
    this.form = form
    this.formobj = document.createElement('FORM')
    this.formobj.setAttribute('class', form)
    const formTitle = document.createElement('H2')
    formTitle.innerHTML = 'Form No ' + indexForm
    this.formobj.appendChild(formTitle)
    document.body.appendChild(this.formobj)
    this.addButton()
    this.addInput()
    this.addCheckbox()
  }

  // Method
  addButton () { // Add button Element
    const button = document.createElement('INPUT')
    button.setAttribute('type', 'BUTTON')
    button.setAttribute('id', 'button' + this.form)
    button.setAttribute('value', 'ClickOnMeToEvaluateLenght')
    this.formobj.appendChild(button)
    button.addEventListener('click', () => { this.evaluateLenght(this.form) })
  }

  addInput () { // Add Input
    const input = document.createElement('INPUT')
    input.setAttribute('id', 'input' + this.form)
    this.formobj.appendChild(input)
  }

  addCheckbox () { // Add CheckBox Its description in h3 elemente and other h4 to present the result
    const check = document.createElement('INPUT')
    check.setAttribute('type', 'CHECKBOX')
    check.setAttribute('caption', 'CHECKBOX')
    check.setAttribute('id', 'checkbox' + this.form)
    check.setAttribute('value', 'true')
    const h3 = document.createElement('h3')
    h3.innerHTML = 'Check to calculate String Leght:'
    const h4result = document.createElement('h4')
    h4result.setAttribute('id', 'result' + this.form)
    this.formobj.appendChild(h3)
    this.formobj.appendChild(check)
    this.formobj.appendChild(h4result)
  }

  evaluateLenght (id) { // Show the result
    const input = document.getElementById('input' + id)
    const h4 = document.getElementById('result' + id)
    const check = document.getElementById('checkbox' + id)
    const str = input.value
    if (check.checked) {
      h4.innerHTML = `This input have ${str.length} characters.`
    } else {
      h4.innerHTML = ` Please!!. Check to checkBox to use the function`
    }
  }
}
// Function to Create form Object
function createForm () {
  indexForm++
  // eslint-disable-next-line no-unused-vars
  const newform1 = new Form('id' + indexForm)
}
// Function to Add the Initial Button
function start () {
  const buttonToStart = document.createElement('INPUT')
  buttonToStart.setAttribute('type', 'BUTTON')
  buttonToStart.setAttribute('id', 'startButton')
  buttonToStart.setAttribute('value', 'ClickOnMeToCreateAForm')
  document.body.appendChild(buttonToStart)
  buttonToStart.addEventListener('click', createForm)
}
var indexForm = 0
start()
