const express = require('express');
const router = express.Router();
const path = require('path');
router.post('/', function (req, res) {
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
  res.end(resMsg);
})
router.get('/token', (req,res) => {
  res.send(req.query.echostr)
})
module.exports = router;