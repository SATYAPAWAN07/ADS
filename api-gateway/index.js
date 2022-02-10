var express = require('express');
var bodyParser = require('body-parser');


var router = require('./routers/router');
var config = require('./config');


var app = express();

const { app: {port}} = config;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log("API UP");
    res.send('API gateway');
});

app.use(router);

console.log('API gateway is running on port 5500');

app.listen(port);