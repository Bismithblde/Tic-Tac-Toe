const grids = document.getElementsByClassName("grid")
let gridArray = 
[['', '', ''], 
['', '', ''], 
['', '', '']]
let gameEnded = false
const Player1 = {
    letter: 'X'

  }
const Player2 = {
    letter: 'O'

  }
let count = 0;
let currentPlayer = Player1
let winner = ""
function clicked(player, i) {
  if (gridArray[grids[i].id[0]][grids[i].id[1]] == '') {
    let h1 = document.createElement("h1")
    let div = grids[i]
    h1.textContent = player.letter
    div.appendChild(h1)
    console.log(gridArray)
    gridArray[grids[i].id[0]][grids[i].id[1]] = player.letter
  }

}

function checkForWin(gridArray) {
  if (gridArray[0][0] === gridArray[0][1] && gridArray[0][0] === gridArray[0][2]) {
    if (gridArray[0][0] !== ''){
      winner = gridArray[0][0]
      return true
      

    }
  }
  if (gridArray[1][0] === gridArray[1][1] && gridArray[1][0] === gridArray[1][2]) {
    if (gridArray[1][0] !== ''){
      winner = gridArray[1][0]
      return true
      
    }
  }
  if (gridArray[2][0] === gridArray[2][1] && gridArray[2][0] === gridArray[2][2]) {
    if (gridArray[2][0] !== ''){
      winner = gridArray[2][0]
      return true
      
    }
  }
  if (gridArray[0][0] === gridArray[1][0] && gridArray[0][0] === gridArray[2][0]) {
    if (gridArray[0][0] !== ''){
      winner = gridArray[0][0]
      return true
      
    }
  }
  if (gridArray[0][1] === gridArray[1][1] && gridArray[0][1] === gridArray[2][1]) {
    if (gridArray[0][1] !== ''){
      winner = gridArray[0][1]
      return true
      
    }
  }
  if (gridArray[0][2] === gridArray[1][2] && gridArray[0][2] === gridArray[2][2]) {
    if (gridArray[0][2] !== ''){
      winner = gridArray[0][2]
      return true
      
    }
  }
  if (gridArray[0][0] === gridArray[1][1] && gridArray[0][0] === gridArray[2][2]) {
    if (gridArray[0][0] !== ''){
      winner = gridArray[0][0]
      return true
      
    }
  }
  if (gridArray[0][2] === gridArray[1][1] && gridArray[0][2] === gridArray[2][0]) {
    if (gridArray[0][2] !== ''){
      winner = gridArray[0][2]
      return true  
      
    }
  }
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      if (gridArray[k][l] !== '') {
        count += 1
      }
    }
  }
  if (count === 9) {
    winner = "NOONE"
    return true

  } else {
    count = 0
  }
  
}

for (let i=0;i<9; i++) {
    grids[i].onclick = function() {
      clicked(currentPlayer, i)
      if (currentPlayer == Player1) {
        document.getElementsByClassName("player")[0].textContent = "Player: O"
        currentPlayer = Player2
      }
      else {
        document.getElementsByClassName("player")[0].textContent = "Player: X"

        currentPlayer = Player1
      }
      if (checkForWin(gridArray)) {
        document.getElementsByClassName("player")[0].textContent = "WINNER IS " + winner 
        for (let i=0;i<9; i++) {
          grids[i].onclick = function() {

          }
        }
      }
    
    }
}



