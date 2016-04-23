var get = require('get-image')
var shared = require('./shared')

var canvas = null
var supported = (function(document) {
  canvas = document.createElement('canvas')
  return !!(
    canvas.getContext &&
    canvas.getContext('2d')
  )
})(document)

module.exports = function(path, callback) {
  if (!supported) {
    return callback(new Error(
      'Your browser doesn’t the ' +
      '<canvas> element'
    )) 
  }

  get(path, function(error, image) {
    error ?
      callback(error) :
      callback(null, shared(canvas)(image))
  })
}
