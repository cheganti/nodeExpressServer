const express = require('express');
const app = express();

const getRouter = require('./app/news/get');
const postRouter = require('./app/news/post');
const putRouter = require('./app/news/put');
const deleteRouter = require('./app/news/delete');

app.use(express.json());
app.use('/api/news', getRouter);
app.use('/api/news', postRouter);
app.use('/api/news', putRouter);
app.use('/api/news', deleteRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`we are listening on ${port}`));