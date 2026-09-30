let BackgroundR = 0
let BackgroundG = 0
let BackgroundB = 0
let particles;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  BackgroundR = randomGaussian(0, 122)
  BackgroundG = randomGaussian(0, 122)
  BackgroundB = randomGaussian(0, 122)
  // Create a new p5.Geometry object with random spheres.
  particles = buildGeometry(createParticles);
}

function draw() {
  background(BackgroundR, BackgroundG, BackgroundB)
  // Enable orbiting with the mouse.
  orbitControl();

  // Turn on the lights.
  lights()

  // Style the particles.
  noStroke()
  fill(225)

  // Draw the particles.
  model(particles)

  // Calculate the bounding box.
  let bbox = particles.calculateBoundingBox()

  // Translate to the bounding box's center.
  translate(bbox.offset.x, bbox.offset.y, bbox.offset.z)
  noFill()
  box(bbox.size.x, bbox.size.y, bbox.size.z)
}

function createParticles() {
  for (let i = 0; i < 200; i += 1) {
    // Calculate random coordinates.
    let x = randomGaussian(0, 1000)
    let y = randomGaussian(0, 1000)
    let z = randomGaussian(0, 1000)
    let size = randomGaussian(3, 15)
    let r = randomGaussian(0, 255)
    let g = randomGaussian(0, 255)
    let b = randomGaussian(0, 255)

    push()
    // Translate to the particle's coordinates.
    translate(x, y, z)
    // Draw the particle.
    fill(r, g, b)
    sphere(size)
    pop()
  }
}