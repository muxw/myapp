const express = require('express');
const router = express.Router();
const path = require('path');
let hero = require('../test.json')
router.get('/data', function (req, res) {
  res.json(hero)
})
module.exports = router;