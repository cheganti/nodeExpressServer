const express = require('express');
const app = express();
const routes = require('./src/interfaces/http/router')
const logger = require('./src/infra/logging/logger');
app.use(express.json());
const mongoose = require('mongoose');

routes(app);

app.use((req, res, next) => {
    res.status(404).send('Incorrect API Endpoint!');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err.status
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`we are listening on ${port}`));