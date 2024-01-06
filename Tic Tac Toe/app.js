let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('.reset')
let msgBtn = document.querySelector('.msg')
let header = document.querySelector('header')
let newGame = document.querySelector('.new-game')

let turn0 = true
let count = 0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (turn0) {
      box.innerText = 'O'
      box.style.color = 'black'
      turn0 = !true
    } else {
      box.innerText = 'X'
      box.style.color = 'red'
      turn0 = true
    }
    box.disabled = true;
    count++

    let isWinner = checkWinner()
    if(count===9 && !isWinner){
      msgBtn.innerText = 'It is a draw'
      header.classList.remove('hide')
      disableBoxes()
    }
  })
})

const checkWinner = () => {
  for(let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText
    if(pos1 != '' && pos2 != '' && pos3 != '') {
      if(pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1)
        return true
      }
    }
  }
}

const showWinner = (winner) => {
  msgBtn.innerText = `Congratulations, our winner is ${winner}`
  header.classList.remove('hide')
  disableBoxes()
}

const disableBoxes = () => {
  for(box of boxes){
    box.disabled = true
  }
}

const enableBoxes = () => {
  for(box of boxes){
    box.disabled = false
    box.innerText = ''
    box.style=''
  }
}

const resetGame = () => {
  turn0 = true
  count = 0
  enableBoxes()
  header.classList.add('hide')
}

resetBtn.addEventListener('click', resetGame)
newGame.addEventListener('click', resetGame)