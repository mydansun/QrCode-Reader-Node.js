# get-image
get-image is a simple module that creates a preloaded `<img>` for a given src.

[![Build status](https://travis-ci.org/michaelrhodes/get-image.png?branch=master)](https://travis-ci.org/michaelrhodes/get-image)

[![Browser support](https://ci.testling.com/michaelrhodes/get-image.png)](https://ci.testling.com/michaelrhodes/get-image)

## Install

``` sh
$ npm install get-image
```

## Usage

### Browser & Server
``` js
var image = require('get-image')

image('./image.jpg', function(error, img) {
  document.body.appendChild(img)
})
```

### License
[MIT](http://opensource.org/licenses/MIT)
