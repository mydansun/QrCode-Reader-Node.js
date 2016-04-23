var fs = require('fs')
var Canvas = require('canvas')

module.exports = function (src, callback) {
  Buffer.isBuffer(src) ?
    load(null, src) :
    fs.readFile(src, load)

  function load (error, buffer) {
    if (error) {
      callback(error)
      return
    }

    var image = new Canvas.Image
    image.src = buffer

    callback(null, image)
  } 
}
