var angle = 45;
var a = 132;
//var depth = 100;
var count = 0;

function setup() { 
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);

} 

function draw() { 
  background(0);
        noStroke();
    fill(255, 255, 255);
    textSize(10);
text("M. A. Koch, PhD. 2020", width-115, height-8);
fill(0,255,255,100);
  translate(width/2, height-200);
  generate(a);
    

    noLoop();
}

function generate(len) {
 rect(0, 0, len, len);
  count++
  if (count >= 255){count = 0;}
  fill(count,255,255,100);
  translate(0, -len);
    
  if (len > 1) {
  push();
  translate(len/2, 0);
  rotate(angle);
  generate(len * 0.7071)
  pop();
  push();
    translate(-len/2, 0);
  rotate(-angle);
  generate(len * 0.7071)
  pop();  
  }
}