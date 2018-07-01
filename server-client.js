const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const mimeTypes = require('mime-types');
const port = process.env.port || 4000;

const User = require("./src/common/classes/User");

const dbPath = path.join(__dirname, "db");
const filePath = path.join(dbPath, "users.json");

function resolvePath(url, fileName) {
    let filePath = path.join(url, fileName);
    if (!fs.existsSync(path.join(url, fileName))) {
        filePath = path.join(url, '/build', fileName);
    }
    return path.resolve(filePath);
}

app.use(cors());
app.use(bodyParser());

function sendErrorMessage(res, message) {
    res.status(400).end(JSON.stringify({ errorMessage: message }))
}

app.get('/user/:id', (req, res) => {
    if(!fs.existsSync(dbPath) || !fs.existsSync(filePath)) {
        return sendErrorMessage(res, 'User was NOT found');
    }

    const userID = req.params.id;
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if(!users[userID]) {
        return sendErrorMessage(res, `User ${userID} was NOT found`);
    }

    res.status(200).end(JSON.stringify(users[userID]));
});
app.post('/user', (req, res) => {
    if(!fs.existsSync(dbPath)) {
        fs.mkdirSync(dbPath);
    }
    if(!fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, '{}');
    }
    console.log(req.body);
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = new User(Object.assign({ createOn: Date.now() }, req.body));
    users[user.name] = user;
    fs.writeFileSync(filePath, JSON.stringify(users));
    res.status(200).end(JSON.stringify(user));
});

app.get('*', function(req, res) {
    let url = resolvePath(__dirname, req.url);
    if (fs.lstatSync(url).isDirectory()) {
        url = resolvePath(path.join(__dirname, req.url), 'index.html');
    }

    res.set(200).set({ 'Content-Type': mimeTypes.contentType(url) }).end(fs.readFileSync(url));
});

app.listen(port, () => (console.log(`Listen on port: ${port}`)));
