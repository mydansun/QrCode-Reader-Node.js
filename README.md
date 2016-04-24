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

# QrCode-Reader-Node.js
实现图片中的二维码识别，基于Node.js

基于 LazarSoft / jsqrcode https://github.com/LazarSoft/jsqrcode

## 本地部署
如何使用
```sh
node main.js
```
## 在线版本
https://qr.api.onlyke.com/reader?url=[图片地址]

一个例子： https://qr.api.onlyke.com/reader?url=https://github.com/mydansun/QrCode-Reader-Node.js/raw/master/test/test.jpg

## 返回数据

### 识别错误

```json
{
	"status":0,
	"error":"这里是错误信息"
}
```

### 识别成功
```json
{
	"status": 1,
	"content": "这是二维码的文本内容"
}
```
