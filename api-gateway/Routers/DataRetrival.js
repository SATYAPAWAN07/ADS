var express = require('express');
var config = require('../config');
const apiAdapter = require('./apiAdapter');

var router = express.Router();

const { routeURLS: {imageService}} = config;

const api = apiAdapter(imageService);

router.post('/usertoimage', (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data);
    });
});