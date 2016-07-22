module.exports = {
  tictactoe: tictactoe,
  buildBoard: buildBoard,
  xMove: xMove,
  oMove: oMove,
  getWinner: getWinner
}

function tictactoe () {
  var board = buildBoard()
  var i = 9
  var winner = null

  while (i > 0) {
    board = randomMove(board, i)
    winner = getWinner(board)
    if (winner === ('X' || 'O')) {
      return [board, winner]
    }

    i = board.reduce(function(elemSum, elem){
      return elemSum + elem.reduce(function (sum, cell) {
        return cell === "-"? sum + 1 : sum
      }, 0)
    }, 0)
  }
  return [board, winner]
}

function buildBoard () {
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

function randomMove (board, i) {
  var x = getRandom()
  var y = getRandom()
  if (board[x][y] === "-" && i % 2 === 0) {
    return xMove(board, x, y)
  } else if (board[x][y] === "-" && i % 2 > 0) {
    return oMove(board, x , y)
  } else {
    return randomMove(board, i) 
  }
}

function getWinner(board) {
  var winner = null
  board.forEach(function (row, i, arr) {
    if ((row[0] === "X" || "O") && row[0] === row[1] && row[1] === row[2]) {
      winner = row[0]
    }
    if ((arr[0][i] === "X" || "O") && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      winner = arr[0][i]
    }
  })
  if ((board[0][0] === "X" || "O") && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    winner = board[0][0]
  }
  if ((board[0][2] === "X" || "O") && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    winner = board[0][2]
  }
  return winner
}

function getRandom () {
  return Math.floor((Math.random() * 3))
}