let MovementRight = -100 //mijn variabele MovementRight, met -100 als startgetal
let MovementLeft = 900 //mijn variabele MovementLeft, met 900 als startgetal
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#00AFFF");
  MovementRight++ //voeg 1 aan de waarde van MovementRight voor elke frame
  MovementLeft -- //trek 1 af van de waarde van MovementLight voor elke frame
  if(MovementRight > 900){ //als de waarde van MovementRight boven de 900 is,
    MovementRight = -100   //dan springt de waarde terug naar het begingetal,
  }
  if(MovementLeft < -100){ //als de waarde van MovementLeft onder de -100 is,
    MovementLeft = 900   //dan springt de waarde terug naar het begingetal.
  }
  circle(MovementRight, 200, 50)
  circle(MovementLeft, 600, 50)
}
