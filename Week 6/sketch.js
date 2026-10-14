let house
let pet
let PetLocationX = 560
let PetLocationY = 380
let FatnessLevel = 700
let MentalHealth = 100
let ImmuneSystem = 100
let health = 100

function setup() {
  createCanvas(1920, 1080)
  textSize(35)
  let button = createButton('medicin');
	button.position(300, 800);
	button.style('background-color', '#268c8e');
	button.style('font-size', '16px');
	button.mousePressed(heal);
  
}

function heal() {
  ImmuneSystem += 30
}

function draw() {
  background(220)
  if (frameCount == 60){
    frameCount = 0
  }
  if (frameCount == 30){
      MentalHealth--
      if (MentalHealth <= 0){
      health -= 20
      }
      if (ImmuneSystem <= 0){
      health -= 5
      }
      if (ImmuneSystem >= 60){
      health += 10
      }
  }
  ImmuneSystem -= 0.1
  image(house, 0, 0, 1920, 1080)
  image(pet, PetLocationX, PetLocationY, FatnessLevel, 700)
  rect(50, 20, MentalHealth * 5, 50)
  text("Happiness =", 50, 60)
  text(MentalHealth, 250, 60)
  rect(50, 80, health * 5, 50)
  text("Health =", 50, 140)
  text(health, 250, 140)
  rect(50, 150, ImmuneSystem * 5, 50)
  text("Blessings =", 50, 150)
  text(ImmuneSystem, 250, 150)
}

function preload() {
  pet = loadImage("im_gooning_dog.png")
  house = loadImage("House.png")
}