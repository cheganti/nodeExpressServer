const express = require('express');
const app = express();
const postRouter = require('./src/app/news/post');
const getRouter = require('./src/app/news/get');
const putRouter = require('./src/app/news/put');
const deleteRouter = require('./src/app/news/delete');

app.use(express.json());
app.use('/api/news', postRouter);
app.use('/api/news', getRouter);
app.use('/api/news', putRouter);
app.use('/api/news', deleteRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`we are listening on ${port}`));