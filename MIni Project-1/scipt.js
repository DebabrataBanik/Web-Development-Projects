let box = document.querySelector('.box')

const mousemove = (det) => {
  let boxPosi = box.getBoundingClientRect()
  let boxMousePosi = det.clientX - boxPosi.left
  if (boxMousePosi<boxPosi.width/2){
    let greenVal = gsap.utils.mapRange(0, boxPosi.width/2, 0, 255, boxMousePosi)
    let blueVal = gsap.utils.mapRange(0, boxPosi.width/2, 0, 255, boxMousePosi)
    gsap.to(box, {
      backgroundColor: `rgba(255 ${greenVal} ${blueVal})`,
      // ease: 'power4.inOut',
    })
  } else{
    greenVal = gsap.utils.mapRange(boxPosi.width/2, boxPosi.width, 255, 0, boxMousePosi)
    redVal = gsap.utils.mapRange(boxPosi.width/2, boxPosi.width, 255, 0, boxMousePosi)
    gsap.to(box, {
      backgroundColor: `rgba(${redVal} ${greenVal} 255`,
      // ease: 'power4.inOut'
    })
  }
}


box.addEventListener('mousemove', mousemove)


box.addEventListener('mouseleave', () => {
  gsap.to(box, {
    backgroundColor: 'white'
  })
})

