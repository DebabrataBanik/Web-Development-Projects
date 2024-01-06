let hitVal = document.querySelector('#hit');
let timerDiv = document.querySelector('#timer');
let scoreDiv = document.querySelector('#score');
const panelContent = document.querySelector('.panel-content');
let score;

let bubblesList = []

const makeBubbles = () => {
  panelContent.innerHTML = ''

  bubblesList = []
  for(let i = 0; i < 182; i++){
    const rdn = Math.floor(Math.random() * 10)
    const bubble = document.createElement('bubble');
    bubble.classList.add('bubble');
    bubble.textContent = rdn;
    panelContent.append(bubble);
    bubblesList.push(bubble);
  } 

  bubblesList.forEach(bubble => {
    bubble.addEventListener('click', () =>{
      console.log(bubble, 'was clicked')
        if(bubble.textContent===hitVal.textContent){
          increaseScore()
          getNewHit()
          makeBubbles()
        } else{
          getNewHit()
          makeBubbles()
        }
      } 
    )
  });
  // return bubblesList
}
// let bubbles = makeBubbles();

// const runTimer = () => {
  
  
// }

// runTimer();


const getNewHit = () => {
  rdn = Math.floor(Math.random() * 10)
  hitVal.textContent = rdn
}

getNewHit(); 

const increaseScore = () => {
  score+= 10
  scoreDiv.textContent = score
}

const playGame = () => {
  
  makeBubbles()
  getNewHit()
  panelContent.classList.add("panel-content")
  panelContent.classList.remove("msg")
  let timer = 60
  score = 0
  scoreDiv.textContent = score

  let funcTimer =  setInterval(() =>{
    if(timer>0){
      timer--;
      timerDiv.textContent = timer
    } else {
      clearInterval(funcTimer)
      panelContent.classList.add('msg')
      panelContent.classList.remove('panel-content')
      panelContent.innerHTML = `<div>You final score is ${scoreDiv.textContent}</div>
      <div class='new-game'>New Game</div>
      `
      let newGame = document.querySelector('.new-game');
      newGame.addEventListener('click', () =>{
        playGame();
      })
    }  
  }, 1000)
}

playGame();
