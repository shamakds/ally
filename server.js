const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const Server = require('./src/common/classes/game/server');

function resolvePath(url, fileName) {
    let filePath = path.join(url, fileName);
    if (!fs.existsSync(path.join(url, fileName))) {
        filePath = path.join(url, '/build', fileName);
    }
    return path.resolve(filePath);
}

const gameServer = new Server({});

app.use(cors());
app.get('/game', (req, res) => {
    res.status(200).end(JSON.stringify({ game: gameServer }));
});

app.listen(4004);
