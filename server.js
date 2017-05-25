const express = require('express');
const superagent = require('superagent');
const http =  require('superagent')
let app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
  res.sendFile('index.html')
})
let key = '1309DB1889014394F50D6775808A950B';
let account = '136791661';
app.get('/data',function(req,res){
  res.json({
    err:0,
    data:[
      {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496227958&di=41e51df305a2a2a2150621dc5f117f1e&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.doyo.cn%2Fimg%2F50%2F45%2Ff1959e9e781859000715.jpg'},
      {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495633248561&di=3481f58c3c7fd58cd3566b098157edbb&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F83a3cf5e5521b9d633084a61432584317a5a7fa0.jpg'},
      {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495633248561&di=1ebec14aa23c4f914bd5c0cce3d8fa68&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F881025.jpg'}
    ]
  })
})
app.get('/hero',function(req,res){
  superagent
    .get('http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1')
    .query('language=zh_CN')
    .query(`key=${key}`)
    .end(function(err,msg){
      if(err){
        console.log(err)
        return
      }
      res.json(msg.body)
    })
})
app.listen('3000',function(err){
  if(err){
    return
  }
  console.log("listen 3000")
})
