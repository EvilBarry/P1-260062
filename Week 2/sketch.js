let MovementRight = -40

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#3ebcee");
  MovementRight++
  noStroke()
  fill("#cdb6379e")
  circle(MovementRight, 60, 120)
  fill("#e0881c9e")
  circle(MovementRight, 60, 90)
  fill("#ffe760")
  circle(MovementRight, 60, 80)
  fill("#525252")
  triangle(0, 800, 350, 800, 175, 300)
  triangle(230, 800, 580, 800, 405, 300)
  fill("#797979")
  triangle(115, 800, 465, 800, 290, 200)
  fill("#35d966")
  rect(0, 600, 800, 200)
  ellipse(650, 800, 400, 1200)
  fill("#805a22")
  rect(50, 425, 20, 200)
  rect(250, 425, 20, 200)
  fill("#4ca266")
  circle(60, 425, 150)
  circle(260, 425, 150)
  fill("#ffe760")
  square(610, 150, 80)
  fill("#b52525")
  triangle(610, 150, 690, 150, 650, 100)
  fill("#525252")
  rect(0, 650, 800, 150)
  fill("#805a22")
  rect(50, 425, 20, 200)
  rect(250, 425, 20, 200)
  rect(750, 600, 20, 200)
  fill("#4ca266")
  circle(60, 425, 150)
  circle(260, 425, 150)
  circle(760, 600, 150)
  if(MovementRight >= 840){
    MovementRight = -40
  }
  
}
