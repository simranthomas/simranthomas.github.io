const express = require('express');

const axios = require('axios');

const app = express();
app.get('/', function(req, res) {
    res.send('Hello World I am Simran');
})
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})