const taskContainer = document.getElementById('task__container')
const addBtn = document.querySelector('.add__task--btn')
const clearBtn = document.querySelector('.clear__task--btn')
const msgContainer = document.querySelector('.message__container')
const task = document.querySelector('.task')

function createElementwithAttributes(tag, attributes){
  const element = document.createElement(tag)
  Object.keys(attributes).forEach(key => element[key] = attributes[key])

  return element
}

const displayMessage = () => {
  const msg = document.createTextNode(`Can't add more than 5 tasks`)
  if(!msgContainer.hasChildNodes()) {
    msgContainer.appendChild(msg)
  }
  addBtn.disabled = true
}

const clearMessage = () => {

  if(msgContainer.hasChildNodes()) {
    msgContainer.innerHTML = ''
  }
  addBtn.disabled = false
}


function createTask(){
  if (taskContainer.childElementCount < 5){
    const task = createTaskElement()
    taskContainer.appendChild(task)
    clearMessage()
    saveData()
  }
  else {
    displayMessage()
  }
}

function createTaskElement(text = '', checked){

  const textBox = createElementwithAttributes('input', {
    'type': 'text',
    'placeholder': 'Enter task...',
    'className': 'input--box' + (checked ? ' completed' : ''),
    'value': text
  })

  const checkBox = createElementwithAttributes('input', {
    'type': 'checkbox',
    'className': 'checkbox',
    'disabled': !text,
    'checked': checked
  })

  let task = document.createElement('div')
  task.className = 'task'

  task.appendChild(checkBox)
  task.appendChild(textBox)

  return task
}

taskContainer.addEventListener('input', e => {
  const target = e.target;

  if (target.type === 'text') {
    const checkbox = target.previousElementSibling;

    checkbox.disabled = !target.value.trim();

    if(target.value === ''){
      checkbox.checked = false;
      target.classList.remove('completed');
    }
  }
  saveData()
})

taskContainer.addEventListener('click', e => {
  const target = e.target;

  if(target.type === 'checkbox') {
    if (target.checked){
      target.nextElementSibling.classList.add('completed');
    } else {
      target.nextElementSibling.classList.remove('completed');
    }
  }
  saveData();
  clearMessage()
})

const clearCompletedTasks = () => {
  const tasks = document.querySelectorAll('.task')

  tasks.forEach(task => {
    if(task.firstElementChild.checked){
      task.remove()
    }
  })
  clearMessage()
  saveData()
}

addBtn.addEventListener("click", createTask)

clearBtn.addEventListener('click', clearCompletedTasks)

function saveData() {
  const tasks = document.querySelectorAll('.task');
  const tasksArray = Array.from(tasks).map(task => {
    const textBox = task.querySelector('.input--box');
    const checkBox = task.querySelector('.checkbox');
    return {
      text: textBox.value,
      checked: checkBox.checked
    };
  });
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

const loadData = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => {
    const taskElement = createTaskElement(task.text, task.checked);
    taskContainer.appendChild(taskElement);
  });
}

loadData()