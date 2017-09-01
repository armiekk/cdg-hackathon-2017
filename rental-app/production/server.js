const express = require('express');
const path = require('path');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var prodServer = process.env.RENTAL_API_URL || 'http://api-service:3000';
// Constants
const PORT = process.env.RENTAL_APP_PORT || 4200;

const app = express();

app.all('/api/*', function (req, res) {
    apiProxy.web(req, res, { target: prodServer });
});

// App
app.use(express.static('./dist'));

app.use('/*', function (req, res) {
    res.sendFile(path.resolve('dist', 'index.html'));
});



app.listen(PORT);
console.log('Running on ' + PORT);