//mijn variabelen. "Square[letter]_State" staat voor de kleur van de blokjes. ik had deze beter
//kunnen benoemen maar dat boeit mij niet.
let SquareA = 0
let SquareA_State = "#3b3b3b"
let SquareB = 0
let SquareB_State = "#3b3b3b"
let SquareC = 0
let SquareC_State = "#3b3b3b"
let SquareD = 0
let SquareD_State = "#3b3b3b"
let SquareE = 0
let SquareE_State = "#3b3b3b"
let SquareF = 0
let SquareF_State = "#3b3b3b"
let SquareG = 0
let SquareG_State = "#3b3b3b"
let SquareH = 0
let SquareH_State = "#3b3b3b"
let SquareI = 0
let SquareI_State = "#3b3b3b"
let turn = 0
let P1Win = 0
let P2Win = 0
let P1Score = 0
let P2Score = 0
let Restart = 0
let DrawRestart = 0

function setup() {
  createCanvas(1200, 800);
  textSize(50)
  noStroke()
}

function draw() {
  background(220)
  fill("#000000")
  text(P1Score, 900, 500)
  text("-", 950, 500)
  text(P2Score, 1000, 500)
  square(50, 50, 700, 50)
  fill(SquareA_State)
  square(325, 325, 150)
  fill(SquareB_State)
  square(325, 525, 150)
  fill(SquareC_State)
  square(325, 125, 150)
  fill(SquareD_State)
  square(125, 325, 150)
  fill(SquareE_State)
  square(525, 325, 150)
  fill(SquareF_State)
  square(525, 525, 150)
  fill(SquareG_State)
  square(125, 525, 150)
  fill(SquareH_State)
  square(125, 125, 150)
  fill(SquareI_State)
  square(525, 125, 150)

  if (SquareA == 0){
    SquareA_State = "#3b3b3b"
  }
  if (SquareA == 2){
    SquareA_State = "#2a06f3"
  }
  if (SquareA == 3){
    SquareA_State = "#ff1900"
  }
  if (SquareB == 0){
    SquareB_State = "#3b3b3b"
  }
  if (SquareB == 2){
    SquareB_State = "#2a06f3"
  }
  if (SquareB == 3){
    SquareB_State = "#ff1900"
  }
  if (SquareC == 0){
    SquareC_State = "#3b3b3b"
  }
  if (SquareC == 2){
    SquareC_State = "#2a06f3"
  }
  if (SquareC == 3){
    SquareC_State = "#ff1900"
  }
  if (SquareD == 0){
    SquareD_State = "#3b3b3b"
  }
  if (SquareD == 2){
    SquareD_State = "#2a06f3"
  }
  if (SquareD == 3){
    SquareD_State = "#ff1900"
  }
  if (SquareE == 0){
    SquareE_State = "#3b3b3b"
  }
  if (SquareE == 2){
    SquareE_State = "#2a06f3"
  }
  if (SquareE == 3){
    SquareE_State = "#ff1900"
  }
  if (SquareF == 0){
    SquareF_State = "#3b3b3b"
  }
  if (SquareF == 2){
    SquareF_State = "#2a06f3"
  }
  if (SquareF == 3){
    SquareF_State = "#ff1900"
  }
  if (SquareG == 0){
    SquareG_State = "#3b3b3b"
  }
  if (SquareG == 2){
    SquareG_State = "#2a06f3"
  }
  if (SquareG == 3){
    SquareG_State = "#ff1900"
  }
  if (SquareH == 0){
    SquareH_State = "#3b3b3b"
  }
  if (SquareH == 2){
    SquareH_State = "#2a06f3"
  }
  if (SquareH == 3){
    SquareH_State = "#ff1900"
  }
  if (SquareI == 0){
    SquareI_State = "#3b3b3b"
  }
  if (SquareI == 2){
    SquareI_State = "#2a06f3"
  }
  if (SquareI == 3){
    SquareI_State = "#ff1900"
  }

  if (SquareA == 2 && SquareB == 2 && SquareC == 2){
    P1Win = 1
  }else if (SquareA == 2 && SquareD == 2 && SquareE == 2){
    P1Win = 1
  }else if (SquareH == 2 && SquareC == 2 && SquareI == 2){
    P1Win = 1
  }else if (SquareG == 2 && SquareB == 2 && SquareF == 2){
    P1Win = 1
  }else if (SquareH == 2 && SquareA == 2 && SquareF == 2){
    P1Win = 1
  }else if (SquareG == 2 && SquareA == 2 && SquareI == 2){
    P1Win = 1
  }else if (SquareH == 2 && SquareD == 2 && SquareG == 2){
    P1Win = 1
  }else if (SquareI == 2 && SquareE == 2 && SquareF == 2){
    P1Win = 1
  }else if (SquareA == 3 && SquareB == 3 && SquareC == 3){
    P2Win = 1
  }else if (SquareA == 3 && SquareD == 3 && SquareE == 3){
    P2Win = 1
  }else if (SquareH == 3 && SquareC == 3 && SquareI == 3){
    P2Win = 1
  }else if (SquareG == 3 && SquareB == 3 && SquareF == 3){
    P2Win = 1
  }else if (SquareH == 3 && SquareA == 3 && SquareF == 3){
    P2Win = 1
  }else if (SquareG == 3 && SquareA == 3 && SquareI == 3){
    P2Win = 1
  }else if (SquareH == 3 && SquareD == 3 && SquareG == 3){
    P2Win = 1
  }else if (SquareI == 3 && SquareE == 3 && SquareF == 3){
    P2Win = 1
  }else if (SquareA !== 0 && SquareB !== 0 && SquareC !== 0 && 
            SquareD !== 0 && SquareE !== 0 && SquareF !== 0 && 
            SquareG !== 0 && SquareH !== 0 && SquareI !== 0){
    fill("#414142")
    text("Draw!", 900, 50)
    DrawRestart = 1
  }

  if (P1Win == 1){
    fill("#3333ff")
    text("Player 1 won!", 900, 50)
  }
  if (P2Win == 1){
    fill("#ff3333")
    text("Player 2 won!", 900, 50)
  }

  if (P1Win == 1 || P2Win == 1 || DrawRestart == 1){
    fill("#535353")
    rect(950, 500, 200, 100)
    fill("#000000")
    text("restart", 1000, 550)
    Restart = 1
  }

  if (mouseX >= 325 && mouseX <= 475 && mouseY >= 325
      && mouseY <= 475 && SquareA !== 2 && SquareA !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(325, 325, 150)
  }else if (mouseX >= 325 && mouseX <= 475 && mouseY >= 525
            && mouseY <= 675 && SquareB !== 2 && SquareB !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(325, 525, 150)
  }else if (mouseX >= 325 && mouseX <= 475 && mouseY >= 125
            && mouseY <= 275 && SquareC !== 2 && SquareC !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(325, 125, 150)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 325
            && mouseY <= 475 && SquareD !== 2 && SquareD !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(125, 325, 150)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 325
            && mouseY <= 475 && SquareE !== 2 && SquareE !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(525, 325, 150)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 525
            && mouseY <= 675 && SquareF !== 2 && SquareF !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(525, 525, 150)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 525
            && mouseY <= 675 && SquareG !== 2 && SquareG !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(125, 525, 150)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 125
            && mouseY <= 275 && SquareH !== 2 && SquareH !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(125, 125, 150)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 125
            && mouseY <= 275 && SquareI !== 2 && SquareI !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(525, 125, 150)
  }else {
    noFill()
  }
}

function mouseClicked() {
    if (mouseButton === LEFT){
    if (Restart == 1){
      if (mouseX >= 950 && mouseX <= 1150 && mouseY >= 500 && mouseY <= 600){
      SquareA = 0
      SquareA_State = "#3b3b3b"
      SquareB = 0
      SquareB_State = "#3b3b3b"
      SquareC = 0
      SquareC_State = "#3b3b3b"
      SquareD = 0
      SquareD_State = "#3b3b3b"
      SquareE = 0
      SquareE_State = "#3b3b3b"
      SquareF = 0
      SquareF_State = "#3b3b3b"
      SquareG = 0
      SquareG_State = "#3b3b3b"
      SquareH = 0
      SquareH_State = "#3b3b3b"
      SquareI = 0
      SquareI_State = "#3b3b3b"
      turn = 0
      Restart = 0
      DrawRestart = 0
      
      if (P1Win == 1){
        P1Score++
        P1Win = 0
      }
      
      if (P2Win == 1){
        P2Score++
        P2Win = 0
      }
      }
    }
    if (turn === 0 && SquareA !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 325 && mouseY <= 475){
        SquareA = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareB !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 525 && mouseY <= 675){
        SquareB = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareC !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 125 && mouseY <= 275){
        SquareC = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareD !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 325 && mouseY <= 475){
        SquareD = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareE !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 325 && mouseY <= 475){
        SquareE = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareF !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 525 && mouseY <= 675){
        SquareF = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareG !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 525 && mouseY <= 675){
        SquareG = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareH !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 125 && mouseY <= 275){
        SquareH = 2
        turn = 1
      }
    }
    if (turn === 0 && SquareI !== 3 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 125 && mouseY <= 275){
        SquareI = 2
        turn = 1
      }
    }
    if (turn === 1 && SquareA !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 325 && mouseY <= 475){
        SquareA = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareB !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 525 && mouseY <= 675){
        SquareB = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareC !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 325 && mouseX <= 475 && mouseY >= 125 && mouseY <= 275){
        SquareC = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareD !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 325 && mouseY <= 475){
        SquareD = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareE !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 325 && mouseY <= 475){
        SquareE = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareF !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 525 && mouseY <= 675){
        SquareF = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareG !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 525 && mouseY <= 675){
        SquareG = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareH !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 125 && mouseX <= 275 && mouseY >= 125 && mouseY <= 275){
        SquareH = 3
        turn = 0
      }
    }
    if (turn === 1 && SquareI !== 2 && P1Win !== 1 && P2Win !== 1){
      if (mouseX >= 525 && mouseX <= 675 && mouseY >= 125 && mouseY <= 275){
        SquareI = 3
        turn = 0
      }
    }
  }
}
