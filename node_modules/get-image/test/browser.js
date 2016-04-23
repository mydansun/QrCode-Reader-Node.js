var fs = require('fs')
var data = require('../browser')

require('./shared')(data, {
  trad: fs.readFileSync(__dirname + '/images/trad.txt'),
  astronaut: fs.readFileSync(__dirname + '/images/astronaut.txt')
})
