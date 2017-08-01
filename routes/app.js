var express = require('express');
var router = express.Router();
var User = require('../models/user');
/*
router.get('/', function (req, res, next) {
    res.render('index');
});


router.get('/json', function (req, res, next) {
    res.json({"first_name": "andy","last_name": "lisac"});
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});

router.post('/message', function(req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});
*/

router.get('/', function (req, res, next) {

    User.findOne({email: 'yasmi@gmail.com'}, function(err, doc){
        if(err){
            return res.send('Error');
        }
        res.render('message', {email:doc});
    });

});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Swhwarz',
        password: 'secret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
