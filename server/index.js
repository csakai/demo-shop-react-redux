const express = require('express');
const path = require('path');
const api = require('../mock-api');
const port = process.env.PORT || 8080;

const app = express();

api(app, '');

app.use('/static', express.static(path.resolve(__dirname, '../dist/')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
    if (err) console.log(err);

    console.log(`Listening on port ${port}!`);
});
