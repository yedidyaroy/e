var canvas;
var quiz;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz(100,100);
}


function draw(){
  background("pink");
  quiz.display();
}
