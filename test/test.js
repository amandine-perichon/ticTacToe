var test = require("tape")
var game = require("../index")

test('initial', function (t) {
  t.plan(1)
  t.equal('a', 'a')
})

test('create an empty board', function (t){
  //Arrange
  var expected = [["-","-","-"],["-","-","-"],["-","-","-"]]
  //Act
  var actual = game.buildBoard()
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

test('make a move as X', function (t){
  //Arrange
  var board = [["-","-","-"],["-","-","-"],["-","-","-"]]
  var expected = [["-","-","-"],["-","X","-"],["-","-","-"]]
  //Act
  var actual = game.xMove(board, 1, 1)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

test('make a move as O', function (t){
  //Arrange
  var board = [["-","-","-"],["-","-","-"],["-","-","-"]]
  var expected = [["-","-","-"],["-","O","-"],["-","-","-"]]
  //Act
  var actual = game.oMove(board, 1, 1)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

/*
test('can fill in the board with random moves', function (t){
  //Arrange
  var board = [["-","-","-"],["-","-","-"],["-","-","-"]]
  var expected = 0
  //Act
  var actual = game.tictactoe()[0].reduce(function(elemSum, elem){
    return elemSum + elem.reduce(function (sum, cell) {
      return cell === "-"? sum + 1 : sum
    }, 0)
  }, 0)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})
*/

test('can detect a win across', function (t){
  //Arrange
  var board = [["X","X","X"],
              ["O","O","X"],
              ["X","O","O"]]
  var expected = "X"
  //Act
  var actual = game.getWinner(board)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

test('can detect a win down', function (t){
  //Arrange
  var board = [["X","X","O"],
              ["O","X","O"],
              ["X","O","O"]]

  var expected = "O"
  //Act
  var actual = game.getWinner(board)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

test('can detect a win diagonally', function (t){
  //Arrange
  var board = [["X","X","O"],
              ["O","X","O"],
              ["X","O","X"]]
  var expected = "X"
  //Act
  var actual = game.getWinner(board)
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})

test('can provide board and winner', function (t){
  //Arrange
  var expected = [2, 'object', 'string']
  //Act
  var play = game.tictactoe()
  console.log(play)
  var actual = [play.length, typeof play[0], typeof play[1]]
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})