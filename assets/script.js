particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  }); 

document.getElementById("notice").style.left = window.innerWidth
let windowwidth = window.innerWidth
let windowheight = window.innerHeight/100*4
setInterval(()=>{
  windowwidth -= 2
  windowheight += 0.5
  if (windowwidth < -300) {
    windowwidth = window.innerWidth
    windowheight = window.innerHeight/100*4
    return
  }
  document.getElementById("notice").style.left = `${windowwidth}px`
  document.getElementById("notice").style.top = `${windowheight}px`
}, 25)