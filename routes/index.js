var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test for a get request sends test

router.get('/getpokemon', function(req, res,) {
  res.send('test get');
});

//test for a post request sends test
router.post('/postpokemon', function(req, res,) {
  res.send('test post');
});

//test for a put request sends test
router.put('/updatepokemon', function(req, res,) {
  res.send('test update');
});
//test for a delete request sends test
router.delete('/deletepokemon', function(req, res,) {
  res.send('test delete');
});


module.exports = router;
