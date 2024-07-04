const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')

const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected')
      }
    })
  }

  const movieIndex = localStorage.getItem('movieIndex')
  if(movieIndex !== null){
    movieSelect.selectedIndex = movieIndex
  }
}

// const ticketPrice = Number(movieSelect.value)
let  ticketPrice = +movieSelect.value

// storing movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('movieIndex', movieIndex)
  localStorage.setItem('moviePrice', moviePrice)
}

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))

  count.innerText = selectedSeats.length
  total.innerText = selectedSeats.length * ticketPrice
}

 

// movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  
  setMovieData(e.target.selectedIndex, e.target.value)
  // console.log(e.target.selectedIndex, e.target.value)

  updateSelectedCount() 
})

container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
  }

  updateSelectedCount()
})

populateUI()
updateSelectedCount()