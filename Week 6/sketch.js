let house
let pet
let park
let PetLocationX = 560
let PetLocationY = 380
let FatnessLevel = 700
let buttons = []
let SceneID = 0
let petname
let MentalHealth = 100
let ImmuneSystem = 100
let health = 100
let hunger = 100
let CoinCount = 0

function setup() {
  if (getItem('MentalHealth') === null){
    MentalHealth = 100
  } else{
    MentalHealth = getItem('MentalHealth')
  }
  if (getItem('ImmuneSystem') === null){
    ImmuneSystem = 100
  } else{
    ImmuneSystem = getItem('ImmuneSystem')
  }
  if (getItem('health') === null){
    health = 100
  } else{
    health = getItem('health')
  }
  if (getItem('hunger') === null){
    hunger = 100
  } else{
    hunger = getItem('hunger')
  }
  if (getItem('CoinCount') === null){
    CoinCount = 0
  } else{
    CoinCount = getItem('CoinCount')
  }
  createCanvas(1920, 1080)
  textSize(35)
  for (let count = 0; count < 4; count++){
  let button = createButton('UIElement')
  button.style('font-size', '35px')
  button.style('background-image', "url('Btn_Standard.png')");
  button.style('background-size', '100% 100%');
  button.style('background-repeat', 'no-repeat');
  button.style('border', 'none')
  button.style('background-blend-mode', 'multiply')
  button.style('mask-image', "url('Btn_Standard.png')")
  button.style('mask-size', '100% 100%')
  button.style('mask-repeat', 'no-repeat')
  buttons.push(button)
  }
  
  
}

function heal() {
  ImmuneSystem += 30
}

function feed() {
  hunger += 20
}

function play() {
  MentalHealth = 100
  CoinCount += random(1, 5)
}

function SceneCrackhouse() {
image(house, 0, 0, 1920, 1080)
hunger -= 0.05
MentalHealth -= 0.2
ImmuneSystem -= 0.1
}

function ScenePark() {
image(park, 0, 0, 1920, 1080)
hunger -= 0.1
MentalHealth -= 0.02
ImmuneSystem -= 0.105
}

function SceneSwitcher() {
  SceneID++
}

function draw() {
  background(220)
  storeItem('MentalHealth',MentalHealth)
  storeItem('ImmuneSystem',ImmuneSystem)
  storeItem('health',health)
  storeItem('hunger',hunger)
  storeItem('CoinCount',CoinCount)
  CoinCount += random(0.01, 0,1)
  console.log(CoinCount)
  buttons[0].style('background-color', '#b31d1d')
  buttons[0].elt.textContent = 'Medicine'
  buttons[0].position(50, 980)
  buttons[0].mousePressed(heal)
  buttons[1].style('background-color', '#a1296b')
  buttons[1].elt.textContent = 'Feed'
  buttons[1].position(210, 980)
  buttons[1].mousePressed(feed)
  buttons[2].style('background-color', '#3529a1')
  buttons[2].elt.textContent = 'Play'
  buttons[2].position(310, 980)
  buttons[2].mousePressed(play)
  buttons[3].style('background-color', '#49a129')
  buttons[3].elt.textContent = 'Go Elsewhere'
  buttons[3].position(410, 980)
  buttons[3].mousePressed(SceneSwitcher)
  if (SceneID == 0){
    SceneCrackhouse()
  } else if (SceneID == 1){
    ScenePark()
  }
  if (frameCount % 30 === 0){
      if (MentalHealth <= 0){
      health -= 20
      }
      if (ImmuneSystem <= 0){
      health -= 5
      }
      if (ImmuneSystem > 60){
      health += 10
      }
      if (hunger <= 0){
      ImmuneSystem -= 20
      }
  }
  if (hunger <= 0){
    FatnessLevel -= 10
  }
  if (SceneID == 3) {
    SceneID = 0
  }
  if (MentalHealth <= 0){
  MentalHealth = 0
  }
  if (ImmuneSystem <= 0){
  ImmuneSystem = 0
  }
  if (hunger <= 0){
  hunger = 0
  }
  if (health > 100){
    health = 100
  }
  if (ImmuneSystem > 100){
    ImmuneSystem = 100
  }
  if (hunger > 100){
    hunger = 100
  }
  image(pet, PetLocationX, PetLocationY, FatnessLevel, 700)
  noStroke()
  fill('#2f2f2faa')
  rect(0, 910, 1920, 200)
  rect(0, 0, 1920, 150)
  image(cur, 1720, 20, 100, 0)
  image(panel, 0, 0, 600, 300)
  stroke("#000000")
  fill("#ffffff")
  rect(50, 20, MentalHealth * 5, 50)
  rect(50, 80, health * 5, 50)
  rect(50, 150, ImmuneSystem * 5, 50)
  rect(50, 220, hunger * 5, 50)
  noStroke()
  fill('#000000')
  text(round(MentalHealth), 250, 60)
  text(round(ImmuneSystem), 250, 180)
  text(round(health), 250, 120)
  text(round(hunger), 200, 270)
  text("Hunger =", 50, 270)
  text("Immunity =", 50, 180)
  text("Health =", 50, 120)
  text("Happiness =", 50, 60)
  textSize(70)
  text(round(CoinCount), 1550, 100)
  textSize(35)
}

function preload() {
  pet = loadImage("im_gooning_dog.png")
  house = loadImage("House.png")
  park = loadImage("vies_park.png")
  cur = loadImage("im_gooning_coin.png")
  panel = loadImage("Pnl_Standard.png")
}