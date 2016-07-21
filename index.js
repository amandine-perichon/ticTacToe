function tictactoe () {
  // Initial board
  var board = [["-","-","-"],
              ["-","-","-"],
              ["-","-","-"]]
  return board
}

function move (character) {
  // x and y are between 0 and 2
  return (function (board, x, y) {
    board[x][y] = character
    return board
  })
}

var xMove = move("X")
var oMove = move("O")

console.log("Inside index", typeof xMove)
var board = [["-","-","-"],
            ["-","-","-"],
            ["-","-","-"]]
console.log("Inside index", xMove(board, 1, 1))

module.exports = {
  tictactoe: tictactoe,
  xMove: xMove,
  oMove: oMove
}
