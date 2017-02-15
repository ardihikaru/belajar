// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res){
    //res.send('hello! cuk norris! ddd');
    res.sendFile(path.join(__dirname, '../index.html'));
});

// route for about page
router.get('/about', function(req, res){
    // res.send('hello! This is about page!');
	res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/contact');
router.post('/contact');

