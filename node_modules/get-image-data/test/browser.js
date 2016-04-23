var fs = require('fs')
var data = require('../browser')

require('./shared')(data, {
  trad: fs.readFileSync(__dirname + '/images/trad.txt'),
  jerry: fs.readFileSync(__dirname + '/images/jerry.txt'),
  astronaut: fs.readFileSync(__dirname + '/images/astronaut.txt')
})
