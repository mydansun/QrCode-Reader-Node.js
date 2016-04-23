var fs = require('fs')
var Canvas = require('canvas')
var get = require('get-image')
var shared = require('./shared')

module.exports = function (input, callback) {
  get(input, function(error, image) {
    if (error) {
      callback(error)
      return
    }
 
    var canvas = new Canvas(
      image.width, image.height
    )

    callback(null, shared(canvas)(image))
  })
}
