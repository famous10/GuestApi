var Guest = require('../models/guest');

exports.visitors = function (req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")   
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");


    Guest.find(function(err, guests) {
        if (err) {
            throw err;
        }
        else{
            console.log(guests);
            res.json(guests);
        }
    });
}

exports.guest = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")   
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    console.log(req.body);
    var newGuest = new Guest({ name: req.body.name, email:req.body.email, phone:req.body.phone});
    newGuest.save (function(err,response) {
        if (err) {
            throw err;
        }
        else{
            res.json({'create': true});
        }
    })
}