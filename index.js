module.exports = {
  tictactoe: tictactoe,
  xMove: xMove,
  oMove: oMove
}

function tictactoe () {
  // Initial board
  var board = [["-","-","-"],
              ["-","-","-"],
              ["-","-","-"]]
  return board
}


function xMove (board, x, y) {
  board[x][y] = "X"
  return board
}

function oMove (board, x, y) {
  board[x][y] = "O"
  return board
}

// can alternate X and O

// can make a random move

// can detect a win across

// can detect a win down

// can detect a win diagonally
