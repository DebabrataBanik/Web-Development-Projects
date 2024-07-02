const display = document.getElementById('display');
const operators = document.querySelectorAll('#operator');
const calc = document.querySelector('#calculate');
const clr = document.querySelector('#clear');

operators.forEach(operator => {
  operator.addEventListener('click', () =>{
    display.value += operator.innerText;
  })
})

const calculate = () => {
  try {
    display.value = (eval(display.value)).toFixed(2)
  } catch (error) {
    display.value = `Error`
  }
}

calc.addEventListener('click', calculate)

clr.addEventListener('click', () => {
  display.value = ''
})