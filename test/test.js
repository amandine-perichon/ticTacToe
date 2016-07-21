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
  var actual = game.tictactoe()
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
