let counter = 0
let colorpicker = 0
let eightballX = 0
let eightballY = 0

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  counter++
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20)
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120)
  text(counter, 60, 180)
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240)
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20)
  if(counter >= 500){
    counter = 0
  }
  if(keyIsDown (66)){
    square(60, 40, 60)
  }
  if(colorpicker >= 3){
    colorpicker = 0
  }
  noStroke()
  fill("#a8a8a8")
  rect(20, 245, 30, 80)
  rect(27, 315, 15, 40)

  if(colorpicker < 1){
    fill("#f01a1a")
  circle(35, 260, 20)
  fill("#000000")
  circle(35, 285, 20)
  circle(35, 310, 20)
  }
  if(colorpicker >= 1 && colorpicker < 2){
    fill("#000000")
  circle(35, 260, 20)
  circle(35, 310, 20)
  fill("#e3c21b")
  circle(35, 285, 20)
  }
  if(colorpicker >= 2 && colorpicker < 3){
    fill("#000000")
  circle(35, 260, 20)
  circle(35, 285, 20)
  fill("#19db29")
  circle(35, 310, 20)
  }
  fill("#000000")
  circle(eightballX + 360, eightballY + 60, 50)
  fill("#ffffff")
  circle(eightballX + 360, eightballY + 60, 35)
  fill("#000000")
  text("8", eightballX + 355, eightballY + 65)
  fill("#ffffff")
  stroke("#000000")
  if(keyIsDown (87) || keyIsDown (38)){
    eightballY--
  }
  if(keyIsDown (83) || keyIsDown (40)){
    eightballY++
  }
  if(keyIsDown (65) || keyIsDown (37)){
    eightballX--
  }
  if(keyIsDown (68) || keyIsDown (39)){
    eightballX++
  }
}

function keyPressed() {
  if (keyCode == 32) {
    counter = 0
  }
  if (keyCode == 13) {
    colorpicker++
  }
}
