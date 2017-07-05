const express = require('express');
const http = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
const hero = require('./test.json');
const bodyParser = require('body-parser')
const xmlParser = require('express-xml-bodyparser');
const routes = require('./router/index');
const wechat = require('./router/wechat')
const work = require('./router/work')
const test = require('./router/test')
let app = express();

//设置post收内容
app.use(xmlParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//设置静态目录
app.use(express.static('public'));

app.use('/api', routes);
app.use('/wechat',wechat);
app.use('/register-payplatform/rest/register',work);
app.get('/',(req,res) => {
  res.redirect('/home');
})
app.use('/test',test)
app.listen('80', function (err) {
  if (err) {
    return
  }
  console.log("listen 80")
})
