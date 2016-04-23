# get-image-data
get-image-data is a browser/server utility that extracts RGBA data from images. It also provides the image’s height and width.
 
[![Build status](https://travis-ci.org/michaelrhodes/get-image-data.png?branch=master)](https://travis-ci.org/michaelrhodes/get-image-data)

[![Browser support](https://ci.testling.com/michaelrhodes/get-image-data.png)](https://ci.testling.com/michaelrhodes/get-image-data)

## Install

``` sh
$ npm install get-image-data
```

## Usage

### Browser & Server
``` js
var image = require('get-image-data')

image('./image.jpg', function(error, info) {
  var height = info.height
  var width = info.width
  var data = info.data

  for (var i = 0, l = data.length, i < l; i += 4) {
    var red = data[i]
    var green = data[i + 1]
    var blue = data[i + 2]
    var alpha = data[i + 3]  
  }
})
```

### Note
The image data will be contained within either a [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray) or a [CanvasPixelArray](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPixelArray) depending on the environment. This shouldn’t be a problem, but it’s worth knowing.


### License
[MIT](http://opensource.org/licenses/MIT)
