/** / Mijn variabelen. "counter" wordt gebruikt
voor de teller in opdracht 2, "colorpicker" voor de stoplicht in opdracht 3,
en "eightballX" en "eightballY" voor de magic eightball in opdracht 4./**/
let counter = 0
let colorpicker = 0
let eightballX = 0
let eightballY = 0

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  counter++   //hier telt de teller elke frame
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20)
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120)
  text(counter, 60, 180)
  text("3. Druk op enter om van rood -> oranje -> groen te gaan.", 20, 240)
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20)
  if(counter >= 500){ //als de teller 500 bereikt, springt hij terug naar 0
    counter = 0
  }
  if(keyIsDown (66)){ //als 'b' is ingedrukt, komt een vierkant tevoorschijn
    square(60, 40, 60)
  }
  if(colorpicker >= 3){ //als de waarde van mijn variabele "colorpicker" 3 bereikt, springt
    colorpicker = 0     //het terug naar 0.
  }
  noStroke()
  fill("#a8a8a8")
  rect(20, 245, 30, 80)
  rect(27, 315, 15, 40)

  if(colorpicker < 1){ //als de waarde van mijn variabele "colorpicker" minder dan 1 is,
    fill("#f01a1a")  //zijn deze cirkels zichtbaar.
  circle(35, 260, 20)
  fill("#000000")
  circle(35, 285, 20)
  circle(35, 310, 20)
  }
  if(colorpicker >= 1 && colorpicker < 2){   //als de waarde van mijn variabele "colorpicker"
    fill("#000000")                        //meer of evenveel als 1 is, maar minder dan 2,
  circle(35, 260, 20)                        //zijn deze cirkels zichtbaar.
  circle(35, 310, 20)
  fill("#e3c21b")
  circle(35, 285, 20)
  }
  if(colorpicker >= 2 && colorpicker < 3){   //als de waarde van mijn variabele "colorpicker"
    fill("#000000")                        //meer of evenveel als 2 is, maar minder dan 3,
  circle(35, 260, 20)                        //zijn deze cirkels zichtbaar.
  circle(35, 285, 20)
  fill("#19db29")
  circle(35, 310, 20)
  }
  /** /eightball tekening. maakt gebruik vaan de variabelen "eightball X" en "eightballY"
      voor de positie./**/
  fill("#000000")
  circle(eightballX + 360, eightballY + 60, 50)
  fill("#ffffff")
  circle(eightballX + 360, eightballY + 60, 35)
  fill("#000000")
  text("8", eightballX + 355, eightballY + 65)
  fill("#ffffff")
  stroke("#000000")
  if(keyIsDown (87) || keyIsDown (38)){ //als 'w' of pijl omhoog ingedrukt is, gaat de
    eightballY--                        //waarde van "eightballY" omlaag
  }
  if(keyIsDown (83) || keyIsDown (40)){ //als 's' of pijl omlaag ingedrukt is, gaat de
    eightballY++                        //waarde van "eightballY" omhoog
  }
  if(keyIsDown (65) || keyIsDown (37)){ //als 'a' of pijl naar links ingedrukt is, gaat de
    eightballX--                        //waarde van "eightballX" omlaag
  }
  if(keyIsDown (68) || keyIsDown (39)){ //als 'd' of pijl naar rechts ingedrukt is, gaat de
    eightballX++                        //waarde van "eightballX" omhoog
  }
  if(eightballY >= 380){ //als de waarde van "eightballY" groter is dan 380, springt deze
    eightballY = 0       //terug naar 0.
  }
  if(eightballY <= -105){ //als de waarde van "eightballY" kleiner is dan 105, springt deze
    eightballY = 0        //terug naar 0.
  }
  if(eightballX <= -400){ //als de waarde van "eightballX" kleiner is dan -400, springt deze
    eightballX = 0        //terug naar 0.
  }
   if(eightballX >= 355){ //als de waarde van "eightballX" groter is dan 355, springt deze
    eightballX = 0        //terug naar 0.
  }
}

function keyPressed() {
  if (keyCode == 32) { //als de spatiebalk ingedrukt wordt, gaat de waarde van de "counter"
    counter = 0        //variabele terug naar 0.
  }
  if (keyCode == 13) { //als 'enter' ingedrukt wordt, gaat de waarde van de "colorpicker"
    colorpicker++      //met 1 omhoog
  }
}
