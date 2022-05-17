const form = document.getElementById('form')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false
let passwordsMatch = false

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity()
  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    return
  }
  // Check to see if passwords match
  if (password1.value === password2.value) {
    passwordsMatch = true
    password1.style.borderColor = 'green'
    password2.style.borderColor = 'green'
  } else {
    passwordsMatch = false
    message.textContent = 'Make sure passwords match.'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    password1.style.borderColor = 'red'
    password2.style.borderColor = 'red'
    return
  }

  // If Form is Valid and Passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!'
    message.style.color = 'green'
    messageContainer.style.borderColor = 'green'
    return
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  }

  console.log('user', user)
}

function processFormData(e) {
  e.preventDefault()
  // Validate Form
  validateForm()
  // Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData()
  }
}

// Event Listener
form.addEventListener('submit', processFormData)
