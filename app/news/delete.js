const express = require('express');
const router = express.Router();
const news = require('./news');

router.delete('/:id', (req, res) => {
    const newsData = news.find(c => c.id === parseInt(req.params.id));
    if (!newsData) return res.status(404).send('The news with given Id was not found');
    const index = news.indexOf(newsData);
    news.splice(index, 1);
    res.send(newsData);
});

module.exports = router;