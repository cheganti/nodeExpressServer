const express = require('express');
const app = express();
const logger = require('./logs/logger');

const getRouter = require('./app/news/get');
const postRouter = require('./app/news/post');
const putRouter = require('./app/news/put');
const deleteRouter = require('./app/news/delete');

app.use(express.json());
app.use('/api/news', getRouter);
app.use('/api/news', postRouter);
app.use('/api/news', putRouter);
app.use('/api/news', deleteRouter);

const port = process.env.PORT || 3000;


app.listen(port, () => logger.info(`we are listening on ${port}`));