This JavaScript mini-project is for understanding certain use cases.
I have used GSAP here. mapRange() function to map mouse movements inside a box which is used to change the background color of the box accordingly.

GSAP creates an animation timeline and queues it for execution. So when I had to use another evenListener on the box its function using js dom code wouldn't come into effect.
mouseleave Callback: The mouseleave event triggers immediately, but GSAP's animation queue might still be running, causing the box.style.backgroundColor = 'white' line to execute before the previous animation finishes.
