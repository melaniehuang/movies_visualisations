function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(200); 
}

function draw() {

  background(255);
  noFill();
  beginShape();  
  vertex(30, 20);
  bezierVertex(80, 0, 80, 75, 30, 75);
  endShape();
} 

