    var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  tick = select('#tick'),
  check = select('#check'),
  allLines = selectAll('#lines path') 
TweenMax.set(tick, {
  drawSVG:'0 70%'
}),
TweenMax.set(allLines, {
  drawSVG:'0 0'
})
var checked = 0

  function playSplat(){
  var tl = new TimelineMax()
 tl.set(allLines, {
  drawSVG:'0% 0%'
})
   .to(tick, 0.5, {
    drawSVG:'70% 100%'
  })
  .to(allLines, 0.2, {
    drawSVG:'0% 70%',
  },'-=0.1')
  .to(allLines, 0.2, {
    drawSVG:'100% 100%',
  })
 checked = 1 
}



  function revSplat(){
  var tl = new TimelineMax()
 tl.to(tick, 0.5, {
    drawSVG:'0 70%'
  })
  
 checked = 0 
 }

check.onclick = function(e){
  if (checked == 0){
      playSplat();
  }
else{
  revSplat();
}
}
