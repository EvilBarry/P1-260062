let ArrIndividuals = [
  ['blud 1', 'blud 2', 'blud 3', 'blud 4', 'blud 5'],
  ['blud 6', 'blud 7', 'blud 8', 'blud 9', 'blud 10'],
  ['blud 11', 'blud 12', 'blud 13', 'blud 14', 'blud 15'],
  ['blud 16', 'blud 17', 'blud 18', 'blud 19', 'blud 20'],
  ['blud 21', 'blud 22', 'blud 23', 'blud 24', 'blud 25'],
]


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let index = 1
  for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
      if (index % 2 == 0){
        fill("#ffffff")
      } else{
        fill("#000000")
      }
      square(j * 50 + 25, i * 50 + 25, 50)
      fill("#d02222")
      text(ArrIndividuals[i][j], j * 50 + 25, i * 50 + 35)
      index++
    }
  }
}
