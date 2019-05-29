const express = require('express');
const router = express.Router();
const news = require('./news');

router.get('/', (req, res) => {
    res.send(news);
});

module.exports = router;

    // router.get('/api/news/:id', (req, res) => {
    //     const newsData = news.find(c => c.id === parseInt(req.params.id));
    //     if (!newsData) return res.status(404).send('The news with given Id was not found');
    //     res.send(newsData);
    // });