const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

// error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add('error')
  // formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// success message
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove('error')
  formControl.classList.add('success') 
}

// check if email is valid
const checkEmail = (input) => {
  res = String(input.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (res){
      showSuccess(input)
    } else {
      showError(input, 'Email is invalid')
    }
}
// check function
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if(input.value.trim() === ''){
      showError(input, `${capitalize(input.id)} is required`);
    }
  })
}

// Capitalize input name
const capitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1)
} 

const checkLength = (input, min, max) => {
  if(input.value.length < min){
    showError(input, `${capitalize(input.id)} must be more than ${min} characters`)
  } else if(input.value.length > max){
    showError(input, `${capitalize(input.id)} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

const checkPasswordMatch = (pw1, pw2) => {
  if(pw1.value != pw2.value) {
    showError(pw2, 'Passwords do not match')
  }
}


// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()

  // if(username.value === ''){
  //   showError(username, 'Please enter username')
  // } else {
  //   showSuccess(username)
  // }

  // if(email.value === ''){
  //   showError(email, 'Please enter email')
  // } else if(!isValidEmail(email.value)){
  //   showError(email, 'Enter valid email')
  // }  else {
  //   showSuccess(email)
  // }

  // if(password.value === ''){
  //   showError(password, 'Please enter password')
  // } else {
  //   showSuccess(password)
  // }

  // if(password2.value === ''){
  //   showError(password2, 'Please enter password')
  // } else {
  //   showSuccess(password2)
  // }

  checkRequired([username,email,password,password2])
  checkLength(username, 3, 20)
  checkLength(password, 6, 25)
  checkLength(password2, 6, 25)
  checkEmail(email)
  checkPasswordMatch(password,password2)
})