function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  if (score >= 90){
    fill("#00ff00")
    text("uitstekend!", 200, 100)
  }
  else if (score >= 70 && score <= 89){
    fill("#ffff00")
    text("Goed gedaan!", 200, 100)
  }
  else if (score >= 50 && score <= 69){
    fill("#FFA500")
    text("Voldoende.", 200, 100)
  }
  else if (score <= 49){
    fill("#ff0000")
    text("Onvoldoende.", 200, 100)
  }
}