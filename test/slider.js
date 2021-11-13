
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slider");
var  preSlide=document.querySelector(".leftslider");
var totalSlide=slides.length;
var index=0;


nextSlide.onclick=function () {
    next("next");
}

preSlide.onclick=function () 
{
   next("pre");
}
function next(direction){

   if(direction=="next"){
       index++;
       if(index==totalSlide){
           index=0;
       }
   }
   else{
       if(index==0){
           index=totalSlides-1;
       }
       else{
           index--;
       }
   }
   for(i=0;i<slides.length;i++){

      slides[i].classList.remove("active");
   }
slides[index].classList.add("active")
}


// -----------timer------------------

const minusButton = document.getElementById("minusButton");

const plusButton = document.getElementById("plusButton");

const h2 = document.getElementById("h2");

class player {
  constructor(name) {
    this._name = name;
    this._score = 0;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  incrementScore() {
    this._score++;
  }
  decrementScore() {
    this._score--;
  }
}

let player1 = new player("player1"); // Create new player1

minusButton.addEventListener("click", function() {
  player1.decrementScore(); // Minus 1 to  player score
  h2.innerHTML = player1.score; // appends minus 1 to div
});

plusButton.addEventListener("click", function() {
  player1.incrementScore(); // Add 1 to  player score
  h2.innerHTML = player1.score; // appends plus 1 to div
});

