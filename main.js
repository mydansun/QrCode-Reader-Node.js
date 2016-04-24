var http = require('http');
var url = require('url');
var fs = require("fs");
var superagent = require('superagent');
var randomString = require('random-string');

image = require('get-image-data');
BitMatrix = require("./jsqrcode/bitmat.js");
require("./jsqrcode/grid.js");
require("./jsqrcode/qrcode.js");
FinderPatternFinder = require("./jsqrcode/findpat.js");
Detector = require("./jsqrcode/detector.js");
GF256Poly = require("./jsqrcode/gf256poly.js");
GF256 = require("./jsqrcode/gf256.js");
ReedSolomonDecoder = require("./jsqrcode/rsdecoder.js");
Decoder = require("./jsqrcode/decoder.js");
Version = require("./jsqrcode/version.js");
FormatInformation = require("./jsqrcode/formatinf.js");
ErrorCorrectionLevel = require("./jsqrcode/errorlevel.js");
DataBlock = require("./jsqrcode/datablock.js");
BitMatrixParser = require("./jsqrcode/bmparser.js");
require("./jsqrcode/datamask.js");
AlignmentPatternFinder = require("./jsqrcode/alignpat.js");
QRCodeDataBlockReader = require("./jsqrcode/databr.js");

var port = 23001;


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour = date.getHours();
    var strMinute = date.getMinutes();
    var strSecond = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour;
    }

    if (strMinute >= 0 && strMinute <= 9) {
        strMinute = "0" + strMinute;
    }

    if (strSecond >= 0 && strSecond <= 9) {
        strSecond = "0" + strSecond;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + strHour + seperator2 + strMinute + seperator2 + strSecond;
    return currentdate;
}


http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	var arg = url.parse(req.url, true).query;
	if(pathname != '/reader'){
		res.writeHead(302, {'Location': 'https://mydansun.github.io/QrCode-Reader-Node.js/'});
        res.end();
		return;
	}

	if(arg.hasOwnProperty('url') === false){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({status:0,error:'Need url parameter'}));
		return;
	}

	var target = arg.url;
	var regexp = /^(http|https):\/\/(.*?)$/;
    if(!regexp.test(target)){
    	res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({status:0,error:'The parameter should be a URL address'}));
		return;
    }

    var options = url.parse(target);
    options.method = 'GET';
    options.buffer = true;
    console.log("--------------------" + getNowFormatDate() + "--------------------");
    console.log("Start download: " + target);
    superagent
        .get(target)
        .buffer(true)
        .timeout(10000)
        .redirects(3)
        .end(function (err, sres) {
            if (err) {
                console.log(err);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({status:0,error:err.message}));
            }else{
                var localFile = './downloads/' + (new Date()).valueOf() + "_" + randomString({length: 6}) + ".file";
                fs.writeFile(localFile, sres.body,function(err) {
                    if (err) {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({status:0,error:'Image save failed'}));
                        return;
                    }
                    console.log("Writing completed: " + localFile);
                    console.log("Start decode: " + localFile);
                    qrcode.decode(localFile,function(status,result){
                        fs.unlink(localFile);
                        if(result !== null){
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.end(JSON.stringify({status:status,content:result}));
                        }
                    });
                });
            }
        });
}).listen(port);
console.log('Server running at port ' + port +' on ' + getNowFormatDate());