const express = require('express');
const http = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
const hero = require('./test.json');
const bodyParser = require('body-parser')
const xmlParser = require('express-xml-bodyparser');
let app = express();
app.use(xmlParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('index.html')
})
app.get('/wechat', (req, res) => {
  res.send(req.query.echostr)
})
app.get('/api/data', function (req, res) {
  res.json(hero)
})
app.post('/wechat', function (req, res) {
  console.log(req.body);
  let data = req.body.xml
  let time = new Date().getTime();
  var resMsg = '<xml>' +
    '<ToUserName><![CDATA[' + data.fromusername + ']]></ToUserName>' +
    '<FromUserName><![CDATA[' + data.tousername + ']]></FromUserName>' +
    '<CreateTime>' + new Date().getTime() + '</CreateTime>' +
    '<MsgType><![CDATA[text]]></MsgType>' +
    '<Content><![CDATA['+data.content+']]></Content>' +
    '</xml>';
  console.log(resMsg)
  res.writeHead(200,{"Content-Type":"application/xml"})
  res.end(msg);
})
let key = '1309DB1889014394F50D6775808A950B';
let account = '136791661';
app.listen('80', function (err) {
  if (err) {
    return
  }
  console.log("listen 80")
})
