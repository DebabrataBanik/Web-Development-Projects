let box = document.querySelector('.box')

const mousemove = (details) => {
  gsap.to(box ,{
    left: details.clientX + 'px'
  })
}


window.addEventListener('mousemove', mousemove)

