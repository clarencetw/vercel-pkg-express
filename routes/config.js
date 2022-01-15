var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(global.gConfig);
});

module.exports = router;
