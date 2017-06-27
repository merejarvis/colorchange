//eventListener linked
//target input field
var inputField= document.querySelector('input')
var button= document.querySelector('.start')
var colordisplay = document.querySelector('.colordisplay')
var h1= document.querySelector('h1')
var arr= ['yellow', 'red', 'blue', 'green', 'orange', 'purple']
var score= document.querySelector('.score')

  function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//function button display
function buttonDisplay(){
  colordisplay.textContent= arr[(Random(0,5))]
}


//function background change
function changeColour(){
document.body.style.backgroundColor = arr[(Random(0,5))];
}

function change(){
  setInterval(changeColour,1000)
  setInterval(buttonDisplay, 1000)
}

button.addEventListener('click', change)
colordisplay.addEventListener('click', clickCompare)


//function score display
var scorey = 0

//function click
function clickCompare(){
  if (colordisplay.textContent === document.body.style.backgroundColor){
  scorey += 1
  score.textContent = scorey
  }
}
