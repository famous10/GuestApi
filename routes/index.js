var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexcontroller');
var Guest = require('../models/guest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/visitors', function(req, res, next) {
  Guest.find(function(err, guests) {
    if (err) {
        throw err;
    }
    else{
        console.log(guests);
        res.json(guests);
    }
});
});

router.post('/guest', controller.guest);

module.exports = router;