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
  var actual = game()
  //Assert
  t.deepEqual(actual, expected)
  t.end()
})
