const express = require('express');
const app = express();
app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); //res.header("Access-Control-Allow-Origin", "http://localhost");
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header('Access-Control-Allow-Headers', '*'); // res.header( 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept' );
        next();
    });

app.get('/route1', (req,res,net) => {
    setTimeout(() => {
        res.send('Send Route-1');
    }, 12000);
});
app.get('/route2', (req, res, net) => {
    // setTimeout(() => {
        // res.send('Send Route-2');
        res.sendFile(__dirname +'/images/header-89122.jpg');
        // res.attachment(__dirname +'/images/header-89122.jpg');
    // }, 1000);
});



let server = app.listen(5000, () => {
    console.log('CV running at port %s', server.address().port);
});
