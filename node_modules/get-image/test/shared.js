var test = require('tape').test

module.exports = function (image, path) {
  test('it works for path.trad', function (assert) {
    image(path.trad, function (error, img) {
      var type = img.constructor.toString()
      assert.ok(
        /(Image|HTMLImageElement)/.test(type),
        'it returns an Image or HTMLImageElement'
      )
      // IE may not support the complete property, but that’s okay.
      assert.ok(img.complete !== false, 'the image loaded')
      assert.end()
    }) 
  })
  test('it works for path.astronaut', function (assert) {
    image(path.astronaut, function (error, img) {
      var type = img.constructor.toString()
      assert.ok(
        /(Image|HTMLImageElement)/.test(type),
        'it returns an Image or HTMLImageElement'
      )
      // IE may not support the complete property, but that’s okay.
      assert.ok(img.complete !== false, 'the image loaded')
      assert.end()
    })
  })
}
