var x = -24
var y = -24

function setup() {
  createCanvas(200,200)
}

function draw() {
  background(51,102,255)
   fill(0,153,0)
   stroke(255)
  rect(75,75,25,25)
   fill(128,0,64)
   noStroke()
  ellipse(125,125,50,50)
   fill(100,75)
  ellipse(100,100,100,100)
   fill(0,255,0)
   noStroke()
  ellipse(x,y,25,25)
    fill(0)
  rect(0,150,50,50)
  
  x = x + 1
  y = y + 1
  
  if (x > 35 && y > 35) {
    fill(255,0,0)
    ellipse(35,35,25,25)
  }
  
  }