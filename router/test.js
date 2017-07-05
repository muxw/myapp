const express = require('express');
const router = express.Router();
const path = require('path');
let i = 0;
router.get('/',(req,res)=>{
    i++
    if(i=20){
        res.json('{"code":"50004","message":"支付失败","returnMsg":"请扫描微信支付授权码（以10/11/12/13/14/15为前缀的18位数字）"}')
    }
})
module.exports = router;