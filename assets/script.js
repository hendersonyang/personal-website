particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  }); 

document.getElementById("notice").style.marginLeft = window.innerWidth
let windowwidth = window.innerWidth
windowwidth -= 300
setInterval(()=>{
  windowwidth -= 1
  if (windowwidth < -100) {
    windowwidth = window.innerWidth
    return
  }
  document.getElementById("notice").style.marginLeft = `${windowwidth}px`
  console.log(windowwidth)
}, 25)