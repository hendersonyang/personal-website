particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  }); 

document.getElementById("notice").style.left = window.innerWidth
let windowwidth = window.innerWidth
setInterval(()=>{
  windowwidth -= 2
  if (windowwidth < -300) {
    windowwidth = window.innerWidth
    return
  }
  document.getElementById("notice").style.left = `${windowwidth}px`
}, 25)