function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  //canvas kleur
  background("#ffffff");

  //rand breedte
  strokeWeight(30);


  //compositie met verschillende kleuren vierkanten
  fill("#0000ff");
  square(740, 500, 500);

  fill("#ff0000");
  square(540, 500, 500);

  fill("#ffff00");
  square(1050, 700, 300);

  fill("#00ff00");
  square(1060, 610, 60);

  fill("#ffffff");
  square(1140, 480, 210);
}
