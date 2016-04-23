module.exports = function (src, callback) {
  var image = new Image

  if (!/^data/.test(src)) {
    image.crossOrigin = true
  }

  image.src = src
  image.onerror = callback
  image.onload = function () {
    callback(null, image)
  }
}
