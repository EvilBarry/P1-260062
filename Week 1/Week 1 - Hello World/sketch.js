function setup() {
  createCanvas(1000, 2200);

  // zet color mode naar HSB. dit is voor de tekst in stap een
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  
  //kleur tint loop gebaseerd op de tijd in frames
  //"% 360" staat er zodat de tint terug naar 0 gaat wanneer het 360 bereikt
  let h = frameCount % 360;
  
  //start stap een
  //zet de vulkleur naar de kleurenloop
  noStroke()
  fill(h, 100, 100);
  text("1   Mohammed El Malki", 2, 35,);
  textSize(35);
  //einde stap een

  //start stap twee
  //stap titel
  fill("#00baba");
  text("2 vlag", 2, 100);

  //vlag tekening
  noStroke();

  fill("#000000");
  rect(2, 110, 300, 50);
  
  stroke("#000000");
  strokeWeight(4);

  fill("#ffffff");
  rect(4, 160, 296, 70);

  noStroke();

  fill("#009639");
  rect(2, 210, 300, 50);

  fill("#ed2e38");
  triangle(2, 260, 80, 180, 2, 110);

  fill("#000000");
  text("#FreePalestine ❤️", 2, 330);
  //einde stap twee

  //start stap drie
  //stap titel
  noStroke();
  fill("#00baba");
  text("3 schaakbord", 400, 100);

  // schaakbord tekening
  noStroke();
  fill("#ffffff");
  square(400, 110, 300);

  fill("#000000");
  square(400, 210, 100);
  square(500, 110, 100);
  square(500, 310, 100);
  square(600, 210, 100);

  stroke("#000000");
  strokeWeight(4);
  noFill();
  square(400, 110, 300);
  //einde stap drie

  //start stap vier
  //stap titel
  noStroke();
  fill("#00baba");
  text("4 huis", 2, 500);

  //huis tekening
  stroke("#000000");
  strokeWeight(4);
  noFill();

  triangle(2, 700, 102, 600, 202, 700);
  square(3, 700, 200);
  rect(50, 800, 50, 100);
  //einde stap vier

  //start stap vijf
  //stap titel
  noStroke();
  fill("#00baba");
  text("5 stoplicht", 400, 500);

  //stoplicht tekening
  noStroke();
  fill("#505050");
  rect(450, 520, 100, 250);
  rect(475, 750, 50, 150);

  fill("#ff0000");
  circle(500, 570, 60);

  fill("#ff7b00");
  circle(500, 650, 60);

  fill("#00ff00");
  circle(500, 730, 60);
  //einde stap vijf

  //start stap zes
  //stap titel
  noStroke();
  fill("#00baba");
  text("6 dobbelsteen", 2, 1000);

  //dobbelsteen tekening
  stroke("#000000");
  fill("#ffffff");
  square(2, 1050, 300, 50);

  fill("#000000");
  circle(151, 1200, 100);
  //einde stap zes

  //start stap zeven
  //stap titel
  noStroke();
  fill("#00baba");
  text("7 Super Mario", 2, 1400);

  //pixel art van onze loodgieter
  fill("#b73121");
  square(122, 1410, 40);
  square(162, 1410, 40);
  square(202, 1410, 40);
  square(242, 1410, 40);
  square(282, 1410, 40);
  square(122, 1450, 40);
  square(162, 1450, 40);
  square(202, 1450, 40);
  square(242, 1450, 40);
  square(282, 1450, 40);
  square(82, 1450, 40);
  square(302, 1450, 40);
  square(342, 1450, 40);
  square(382, 1450, 40);
  square(402, 1450, 40);
  square(162, 1690, 40);
  square(162, 1730, 40);
  square(282, 1730, 40);
  square(162, 1770, 40);
  square(202, 1770, 40);
  square(242, 1770, 40);
  square(282, 1770, 40);
  square(122, 1810, 40);
  square(202, 1810, 40);
  square(242, 1810, 40);
  square(322, 1810, 40);
  square(122, 1850, 40);
  square(162, 1850, 40);
  square(202, 1850, 40);
  square(242, 1850, 40);
  square(282, 1850, 40);
  square(322, 1850, 40);
  square(82, 1890, 40);
  square(122, 1890, 40);
  square(162, 1890, 40);
  square(202, 1890, 40);
  square(242, 1890, 40);
  square(282, 1890, 40);
  square(322, 1890, 40);
  square(362, 1890, 40);
  square(82, 1930, 40);
  square(122, 1930, 40);
  square(162, 1930, 40);
  square(282, 1930, 40);
  square(322, 1930, 40);
  square(362, 1930, 40);

  fill("#6b6d00");
  square(82, 1490, 40);
  square(122, 1490, 40);
  square(162, 1490, 40);
  square(282, 1490, 40);
  square(282, 1530, 40);
  square(42, 1530, 40);
  square(42, 1570, 40);
  square(42, 1610, 40);
  square(82, 1610, 40);
  square(122, 1530, 40);
  square(122, 1570, 40);
  square(162, 1570, 40);
  square(322, 1570, 40);
  square(282, 1610, 40);
  square(322, 1610, 40);
  square(362, 1610, 40);
  square(402, 1610, 40);
  square(82, 1690, 40);
  square(122, 1690, 40);
  square(202, 1690, 40);
  square(242, 1690, 40);
  square(282, 1690, 40);
  square(42, 1730, 40);
  square(82, 1730, 40);
  square(122, 1730, 40);
  square(202, 1730, 40);
  square(242, 1730, 40);
  square(2, 1770, 40);
  square(42, 1770, 40);
  square(82, 1770, 40);
  square(122, 1770, 40);
  square(402, 1730, 40);
  square(362, 1730, 40);
  square(322, 1730, 40);
  square(402, 1770, 40);
  square(362, 1770, 40);
  square(322, 1770, 40);
  square(442, 1770, 40);
  square(82, 1810, 40);
  square(362, 1810, 40);
  square(42, 1970, 40);
  square(82, 1970, 40);
  square(122, 1970, 40);
  square(322, 1970, 40);
  square(362, 1970, 40);
  square(402, 1970, 40);
  square(42, 2010, 40);
  square(82, 2010, 40);
  square(122, 2010, 40);
  square(322, 2010, 40);
  square(362, 2010, 40);
  square(402, 2010, 40);
  square(2, 2010, 40);
  square(442, 2010, 40);

  fill("#ed9c23");
  square(202, 1490, 40);
  square(242, 1490, 40);
  square(322, 1490, 40);
  square(82, 1570, 40);
  square(82, 1530, 40);
  square(162, 1530, 40);
  square(202, 1530, 40);
  square(242, 1530, 40);
  square(322, 1530, 40);
  square(362, 1530, 40);
  square(402, 1530, 40);
  square(202, 1570, 40);
  square(242, 1570, 40);
  square(282, 1570, 40);
  square(362, 1570, 40);
  square(402, 1570, 40);
  square(442, 1570, 40);
  square(122, 1610, 40);
  square(162, 1610, 40);
  square(202, 1610, 40);
  square(242, 1610, 40);
  square(122, 1650, 40);
  square(162, 1650, 40);
  square(202, 1650, 40);
  square(242, 1650, 40);
  square(282, 1650, 40);
  square(322, 1650, 40);
  square(362, 1650, 40);
  square(2, 1810, 40);
  square(42, 1810, 40);
  square(162, 1810, 40);
  square(282, 1810, 40);
  square(402, 1810, 40);
  square(442, 1810, 40);
  square(2, 1850, 40);
  square(42, 1850, 40);
  square(82, 1850, 40);
  square(362, 1850, 40);
  square(402, 1850, 40);
  square(442, 1850, 40);
  square(2, 1890, 40);
  square(42, 1890, 40);
  square(402, 1890, 40);
  square(442, 1890, 40);
}