let userScore = 0
let compScore = 0

let userScoreId = document.querySelector('#user-score')
let compScoreId = document.querySelector('#comp-score')


let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('.msg-container')

choices.forEach(choice =>{
  choice.addEventListener('click', () =>{
    let userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})

const playGame = (userChoice) =>{
  let compChoice = genCompChoice()
  console.log(`UserChoice: ${userChoice}`)
  console.log(`CompChoice: ${compChoice}`)

  if(userChoice === compChoice){
    msg.innerText = "It's a draw"
    msg.style.backgroundColor = ''
    msg.style.color = ''
  } else{
    let userWin = true
    if(userChoice === 'rock'){
      userWin = compChoice === 'scissors' ? true : false
    } else if(userChoice === 'paper'){
      userWin = compChoice === 'rock' ? true : false
    } else{
      userWin = compChoice === 'paper' ? true : false
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

const genCompChoice = () =>{
  options = ['rock','paper','scissors']
  rdnIdx = Math.floor(Math.random()*3)
  return options[rdnIdx] 
}

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++
    userScoreId.innerText = userScore
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = 'Green'
    msg.style.color = 'white'
  } else{
    compScore++
    compScoreId.innerText = compScore
    msg.innerText = `You lose, ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = 'red'
    msg.style.color = 'white'
  }
}