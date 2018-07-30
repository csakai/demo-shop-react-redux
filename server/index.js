const express = require('express');
const path = require('path');
const api = require('../mock-api');

const app = express();

api(app, '');

app.use('/static', express.static(path.join(__dirname, '../dist/')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.PORT || 80, err => {
    if (err) console.log(err);

    console.log(`Listening on port ${process.env.PORT || 80}!`);
});
