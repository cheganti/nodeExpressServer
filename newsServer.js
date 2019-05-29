const express = require('express');
const app = express();

const getRouter = require('../get');
const postRouter = require('../post');
const putRouter = require('../put');
const deleteRouter = require('../delete');

app.use(express.json());
app.use('/api/news', getRouter)
app.use('/api/news', postRouter)
app.use('/api/news', putRouter)
app.use('/api/news', deleteRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`we are listening on ${port}`));