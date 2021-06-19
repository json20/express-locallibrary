let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cool', function(req, res, next) {
  res.send('this page is cool');
});
module.exports = router;
