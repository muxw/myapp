const express = require('express');
const router = express.Router();
const path = require('path');
let hero = require('../test.json');
let superagent = require('superagent');
router.get('/data', function (req, res) {
  res.json(hero)
})
router.get('/news', (req, res) => {
  superagent
    .get('http://news-at.zhihu.com/api/4/news/latest')
    .end((err, msg) => {
      res.json(msg.body)
    })
})
router.get('/before', (req, res) => {
  let date = req.query.date;
  superagent
    .get('http://news-at.zhihu.com/api/4/news/before/' + date)
    .end((err, msg) => {
      res.json(msg.body)
    })
})
router.get('/article/:id', (req, res) => {
  let id = req.params.id;
  superagent
    .get('https://news-at.zhihu.com/api/4/news/' + id)
    .end((err, msg) => {
      res.json(msg.body)
    })
})
router.get('/themes', (req, res) => {
  superagent
    .get('https://news-at.zhihu.com/api/4/themes')
    .end((err, msg) => {
      res.json(msg.body)
    })
})
module.exports = router;