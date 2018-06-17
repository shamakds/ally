const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, '/dist');

app.use('/', express.static(public));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000);
