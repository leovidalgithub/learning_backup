const restify = require('restify');
const request = require('request');
const server  = restify.createServer();
const cors    = require('cors');

server.use(cors());

server.get('/spotifyToken', (req, res, next) => {
    request.post({url: 'https://accounts.spotify.com/api/token', form: {
                    grant_type: 'client_credentials',
                    client_id: '28d6fe31e6de4ebba620e1c16e2b1abe',
                    client_secret: '0eb56c71396c49b2a3bc917b25b04e80'
                }
    }, (err, httpResponse, body) => {
        res.send(200, JSON.parse(body));
        // res.json(body);
    })
});

server.listen(5000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
