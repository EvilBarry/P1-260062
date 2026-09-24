//mijn variabelen. "Square[letter]_State" staat voor de kleur van de blokjes. ik had deze beter
//kunnen benoemen maar dat boeit mij niet.
let P1ColorPicked = 0
let P2ColorPicked = 0
let DefColor = "#353535"
let DefP1Color = "#101ee0"
let DefP2Color = "#f41212"
let P1Color
let P2Color = DefP2Color
let XtrColor1 = "#00ff08"
let XtrColor2 = "#ea00ff"
let XtrColor3 = "#eaff00"
let XtrColor4 = "#ff8800"
let XtrColor5 = "#37b5c6"
let XtrColor6 = "#3c0d4a"
let SquareA = 0
let SquareA_State = DefColor
let SquareB = 0
let SquareB_State = DefColor
let SquareC = 0
let SquareC_State = DefColor
let SquareD = 0
let SquareD_State = DefColor
let SquareE = 0
let SquareE_State = DefColor
let SquareF = 0
let SquareF_State = DefColor
let SquareG = 0
let SquareG_State = DefColor
let SquareH = 0
let SquareH_State = DefColor
let SquareI = 0
let SquareI_State = DefColor
let turn = 0
let P1Win = 0
let P2Win = 0
let P1Score = 0
let P2Score = 0
let Restart = 0
let DrawRestart = 0
let SquareLocationX = 325
let SquareLocationY = 325
let SquareSize = 150

function setup() {
  createCanvas(1200, 800)
  textSize(50)
  noStroke()
}

function draw() {
  background(220)

  if (P1ColorPicked == 0){
    P1Color = DefP1Color
  }
  if (P1ColorPicked == 1){
    P1Color = XtrColor1
  }
  if (P1ColorPicked == 2){
    P1Color = XtrColor2
  }
  if (P1ColorPicked == 3){
    P1Color = XtrColor3
  }
  if (P2ColorPicked == 0){
    P2Color = DefP2Color
  }
  if (P2ColorPicked == 1){
    P2Color = XtrColor4
  }
  if (P2ColorPicked == 2){
    P2Color = XtrColor5
  }
  if (P2ColorPicked == 3){
    P2Color = XtrColor6
  }
  
  if (turn == 0){
    background(P2Color)
  }else {
    background(P1Color)
  }

  if (P1Win == 1 || P2Win == 1 || DrawRestart == 1){
    background("#666464")
    fill("#535353")
    rect(950, 500, 200, 100)
    fill("#000000")
    text("restart", 1000, 550)
    Restart = 1
  }

  fill("#000000")
  text(P1Score, 1000, 100)
  text("-", 1050, 100)
  text(P2Score, 1100, 100)
  text("Player 1 Color", 850, 150)
  text("Player 2 Color", 850, 300)
  square(50, 50, 700, 50)
  square(1060, 180, 60, 10)
  square(1060, 330, 60, 10)
  fill("#ffffff")
  text("D", 1070, 225)
  text("D", 1070, 375)
  fill(XtrColor1)
  square(850, 180, 60, 10)
  fill(XtrColor2)
  square(920, 180, 60, 10)
  fill(XtrColor3)
  square(990, 180, 60, 10)
  fill(XtrColor4)
  square(850, 330, 60, 10)
  fill(XtrColor5)
  square(920, 330, 60, 10)
  fill(XtrColor6)
  square(990, 330, 60, 10)
  fill(SquareA_State)
  square(SquareLocationX, SquareLocationY, SquareSize)
  fill(SquareB_State)
  square(SquareLocationX, SquareLocationY + 200, SquareSize)
  fill(SquareC_State)
  square(SquareLocationX, SquareLocationY - 200, SquareSize)
  fill(SquareD_State)
  square(SquareLocationX - 200, SquareLocationY, SquareSize)
  fill(SquareE_State)
  square(SquareLocationX + 200, SquareLocationY, SquareSize)
  fill(SquareF_State)
  square(SquareLocationX + 200, SquareLocationY + 200, SquareSize)
  fill(SquareG_State)
  square(SquareLocationX - 200, SquareLocationY + 200, SquareSize)
  fill(SquareH_State)
  square(SquareLocationX - 200, SquareLocationY - 200, SquareSize)
  fill(SquareI_State)
  square(SquareLocationX + 200, SquareLocationY - 200, SquareSize)

  if (SquareA == 0){
    SquareA_State = DefColor
  }
  if (SquareA == 2){
    SquareA_State = P1Color
  }
  if (SquareA == 3){
    SquareA_State = P2Color
  }
  if (SquareB == 0){
    SquareB_State = DefColor
  }
  if (SquareB == 2){
    SquareB_State = P1Color
  }
  if (SquareB == 3){
    SquareB_State = P2Color
  }
  if (SquareC == 0){
    SquareC_State = DefColor
  }
  if (SquareC == 2){
    SquareC_State = P1Color
  }
  if (SquareC == 3){
    SquareC_State = P2Color
  }
  if (SquareD == 0){
    SquareD_State = DefColor
  }
  if (SquareD == 2){
    SquareD_State = P1Color
  }
  if (SquareD == 3){
    SquareD_State = P2Color
  }
  if (SquareE == 0){
    SquareE_State = DefColor
  }
  if (SquareE == 2){
    SquareE_State = P1Color
  }
  if (SquareE == 3){
    SquareE_State = P2Color
  }
  if (SquareF == 0){
    SquareF_State = DefColor
  }
  if (SquareF == 2){
    SquareF_State = P1Color
  }
  if (SquareF == 3){
    SquareF_State = P2Color
  }
  if (SquareG == 0){
    SquareG_State = DefColor
  }
  if (SquareG == 2){
    SquareG_State = P1Color
  }
  if (SquareG == 3){
    SquareG_State = P2Color
  }
  if (SquareH == 0){
    SquareH_State = DefColor
  }
  if (SquareH == 2){
    SquareH_State = P1Color
  }
  if (SquareH == 3){
    SquareH_State = P2Color
  }
  if (SquareI == 0){
    SquareI_State = DefColor
  }
  if (SquareI == 2){
    SquareI_State = P1Color
  }
  if (SquareI == 3){
    SquareI_State = P2Color
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
    fill(P1Color)
    text("Player 1 won!", 900, 50)
  }
  if (P2Win == 1){
    fill(P2Color)
    text("Player 2 won!", 900, 50)
  }

  if (mouseX >= 325 && mouseX <= 475 && mouseY >= 325
      && mouseY <= 475 && SquareA !== 2 && SquareA !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX, SquareLocationY, SquareSize)
  }else if (mouseX >= 325 && mouseX <= 475 && mouseY >= 525
            && mouseY <= 675 && SquareB !== 2 && SquareB !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX, SquareLocationY + 200, SquareSize)
  }else if (mouseX >= 325 && mouseX <= 475 && mouseY >= 125
            && mouseY <= 275 && SquareC !== 2 && SquareC !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX, SquareLocationY - 200, SquareSize)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 325
            && mouseY <= 475 && SquareD !== 2 && SquareD !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX - 200, SquareLocationY, SquareSize)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 325
            && mouseY <= 475 && SquareE !== 2 && SquareE !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX + 200, SquareLocationY, SquareSize)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 525
            && mouseY <= 675 && SquareF !== 2 && SquareF !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX + 200, SquareLocationY + 200, SquareSize)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 525
            && mouseY <= 675 && SquareG !== 2 && SquareG !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX - 200, SquareLocationY + 200, SquareSize)
  }else if (mouseX >= 125 && mouseX <= 275 && mouseY >= 125
            && mouseY <= 275 && SquareH !== 2 && SquareH !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX - 200, SquareLocationY - 200, SquareSize)
  }else if (mouseX >= 525 && mouseX <= 675 && mouseY >= 125
            && mouseY <= 275 && SquareI !== 2 && SquareI !== 3
            && P1Win !== 1 && P2Win !== 1){
  fill("#ffffff")
  square(SquareLocationX + 200, SquareLocationY - 200, SquareSize)
  }else {
    noFill()
  }
}

function mouseClicked() {
    if (mouseButton === LEFT){
      if (mouseX >= 1060 && mouseX <= 1120 && mouseY >= 180 && mouseY <= 240){
        P1ColorPicked = 0
      }
      if (mouseX >= 850 && mouseX <= 910 && mouseY >= 180 && mouseY <= 240){
        P1ColorPicked = 1
      }
      if (mouseX >= 920 && mouseX <= 980 && mouseY >= 180 && mouseY <= 240){
        P1ColorPicked = 2
      }
      if (mouseX >= 990 && mouseX <= 1050 && mouseY >= 180 && mouseY <= 240){
        P1ColorPicked = 3
      }
      if (mouseX >= 1060 && mouseX <= 1120 && mouseY >= 330 && mouseY <= 390){
        P2ColorPicked = 0
      }
      if (mouseX >= 850 && mouseX <= 910 && mouseY >= 330 && mouseY <= 390){
        P2ColorPicked = 1
      }
      if (mouseX >= 920 && mouseX <= 980 && mouseY >= 330 && mouseY <= 390){
        P2ColorPicked = 2
      }
      if (mouseX >= 990 && mouseX <= 1050 && mouseY >= 330 && mouseY <= 390){
        P2ColorPicked = 3
      }
    if (Restart == 1){
      if (mouseX >= 950 && mouseX <= 1150 && mouseY >= 500 && mouseY <= 600){
      SquareA = 0
      SquareA_State = DefColor
      SquareB = 0
      SquareB_State = DefColor
      SquareC = 0
      SquareC_State = DefColor
      SquareD = 0
      SquareD_State = DefColor
      SquareE = 0
      SquareE_State = DefColor
      SquareF = 0
      SquareF_State = DefColor
      SquareG = 0
      SquareG_State = DefColor
      SquareH = 0
      SquareH_State = DefColor
      SquareI = 0
      SquareI_State = DefColor
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
