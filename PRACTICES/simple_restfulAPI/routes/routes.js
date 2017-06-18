// var app = require( '../app.js' );

var appRouter = function(app) {
    app.get("/account", function(req, res) {
        console.log(req.query);
        var accountMock = {
            "username": "leonardo",
            "password": "123456",
            "twitter": "@leonardo"
        }
        if(!req.query.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/account", function(req, res) {
            console.log( req.body );
        if(!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });

};
 
module.exports = appRouter;