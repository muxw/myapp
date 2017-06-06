const express = require('express');
const http = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
const hero = require('./test.json');
let app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('index.html')
})
app.get('/wechat', (req,res) =>{
  res.send(req.query.echostr)
})
app.get('/api/data',function(req,res){
  res.json(hero)
})
app.post('/chat',function(req,res){
  console.log(req.query);
  res.send("321")
})
let key = '1309DB1889014394F50D6775808A950B';
let account = '136791661';
app.listen('80', function (err) {
  if (err) {
    return
  }
  console.log("listen 80")
})
