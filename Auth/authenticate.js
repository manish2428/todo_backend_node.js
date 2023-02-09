var jwt = require('jsonwebtoken');
// var config = require('./config');

module.exports = function(req,res,next){
    const bearerHeader = req.headers['authorization'] 
    req.authenticated = false;
    if (bearerHeader){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded){
            if (err){
                console.log(err);
                req.authenticated = false;
                req.decoded = null;
            } else {
                req.decoded = decoded;
                req.authenticated = true;
            }
        });
    }else{
        return res.json({"message":"Unauthorized"})
    }
    next();
}