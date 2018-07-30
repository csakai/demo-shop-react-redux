const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const items = require('./items');

module.exports = function(app, apiPath='/api') {
    const api = express();
    api.use(cors());
    api.use(bodyParser.json());
    api.use(bodyParser.urlencoded({ extended: true }));

    api.get('/get-items', (req, res) => {
        res.json(items);
    });

    api.post('/checkout', (req, res) => {
        const hasError = !req.body.items;
        let status;

        if (hasError) {
            status = 400;
            response = {
                status: 'error',
                error: 'Invalid request.',
            };
        } else {
            status = 200;
            response = {
                status: 'success',
                message: 'Your order was placed successfully.',
            };
        }

        res.status(status).json(response);
    });
    app.use(apiPath, api);
}
