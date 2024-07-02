const goalContainers = document.querySelectorAll('.goal')
const goals = document.querySelectorAll('.text')
const checkboxes = document.querySelectorAll('.checkbox')
const error = document.querySelector('.message')

// checkboxes.forEach(checkbox => {
//   checkbox.disabled = true

//   const inputArr = [...goals]
//   let emptyField;

//   goals.forEach(goal => {
//     goal.addEventListener('change', () => {
//       emptyField = inputArr.every((goal) => goal.value )
//       if(emptyField) {
//         checkbox.disabled = false
//       } else {
//         error.innerHTML = `Please enter all your goals.`
//       }
//     }) 
//   })
// }) 

// goals.forEach(goal => {
//   goal.addEventListener('click', ()=> {
//     error.innerHTML = ''
//   })  
// })

checkboxes.forEach(checkbox => {
  checkbox.disabled = true; // Disable checkbox initially

  goals.forEach(goal => {
    goal.addEventListener('change', () => {
      const hasEmptyFields = [...goals].some(input => input.value.trim() === '');
      // Check for empty fields, disable/enable checkbox, and update error message
      error.innerHTML = hasEmptyFields ? 'Please enter all your goals.' : ''; // Set error message if empty fields
      checkbox.disabled = hasEmptyFields;
    });
  });
});

