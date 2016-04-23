# QrCode-Reader-Node.js
QrCode Reader for Node.js

JavaScript QRCode reader for Node.js

This is a port of LazarSoft / jsqrcode https://github.com/LazarSoft/jsqrcode

## Local version
How to use?
```sh
node main.js
```
## Online version
https://qr.api.onlyke.com/reader?url=[image_url]

A example: https://qr.api.onlyke.com/reader?url=https://github.com/mydansun/QrCode-Reader-Node.js/raw/master/test/test.jpg

## Return data

### Error

```json
{
	"status":0,
	"error":"There are some errors"
}
```

### Success
```json
{
	"status": 1,
	"content": "The text of QR"
}
```
