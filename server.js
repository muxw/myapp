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
  let openId = req.body.xml.tousername[0];
  let myid = req.body.xml.fromusername[0];
  let time = new Date().getTime();
  let msg = `
  <xml>
  <ToUserName><![CDATA[${openId}]]></ToUserName>
  <FromUserName><![CDATA[myid]]></FromUserName>
  <CreateTime>${time}</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[你好]]></Content>
  </xml>`
  res.writeHead(200,{'Content-Type':'application/xml'})
  res.send(msg);
})
let key = '1309DB1889014394F50D6775808A950B';
let account = '136791661';
app.listen('80', function (err) {
  if (err) {
    return
  }
  console.log("listen 80")
})
