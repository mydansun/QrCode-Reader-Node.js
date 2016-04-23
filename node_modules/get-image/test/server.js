var data = require('../')
var fs = require('fs')

fs.readFile(__dirname + '/images/astronaut.jpg', function (err, buf) {
  require('./shared')(data, {
    trad: __dirname + '/images/trad.jpg',
    astronaut: buf
  })
})
