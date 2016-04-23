var run = require('tape').test
var expected = require('./expected')

module.exports = function(image, path) {
  run('it returns an ImageData object', function(test) {
    test.plan(1)
    image(path.trad, function(error, info) {
      var type = info.constructor.toString()
      test.ok(/ImageData/.test(type), 'it does')
    })
  })

  run('it returns the expected data', function(test) {
    test.plan(9)

    image(path.trad, function(error, info) {
      test.equal(
        info.data.length, expected.trad.length
      )
      test.equal(
        info.width, expected.trad.width
      )
      test.equal(
        info.height, expected.trad.height
      )
    })

    image(path.jerry, function(error, info) {
      test.equal(
        info.data.length, expected.jerry.length
      )
      test.equal(
        info.width, expected.jerry.width
      )
      test.equal(
        info.height, expected.jerry.height
      )
    })

    image(path.astronaut, function(error, info) {
      test.equal(
        info.data.length, expected.astronaut.length
      )
      test.equal(
        info.width, expected.astronaut.width
      )
      test.equal(
        info.height, expected.astronaut.height
      )
    })
  })
}
