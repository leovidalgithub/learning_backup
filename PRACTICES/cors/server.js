var express = require('express')
var cors = require('cors')
var app = express()

// ------------------------------------------- 1º case -------------------------------------------
    app.use(cors());
    app.get('/products/:id', function (req, res, next) {
        res.json({msg: 'This is CORS-enabled for all origins!'})
    });
// ------------------------------------------- ------- -------------------------------------------
// ------------------------------------------- 2º case -------------------------------------------
    app.get('/products/:id', cors(), function (req, res, next) {
        res.json({msg: 'Individual. This is CORS-enabled for a Single Route'})
    });
// ------------------------------------------- ------- -------------------------------------------
// ------------------------------------------- 3º case -------------------------------------------
    var corsOptions = {
      origin: 'http://example.com',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.get('/products/:id', cors(corsOptions), function (req, res, next) {
        res.json({msg: 'This is CORS-enabled for only example.com.'})
    });
// ------------------------------------------- ------- -------------------------------------------
// ------------------------------------------- 4º case -------------------------------------------
    var whitelist = ['http://example1.com', 'http://example2.com'];
    var corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
    };
    app.get('/products/:id', cors(corsOptions), function (req, res, next) {
        res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
    });
// ------------------------------------------- ------- -------------------------------------------

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
});
