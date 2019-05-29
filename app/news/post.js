const express = require('express');
const router = express.Router();
const news = require('./news');
const validateNews = require('../../validator/validation');

router.post('/', (req, res) => {
    const { error } = validateNews(req.body); // result error
    if (error) return res.status(400).send(error.details[0].message);
    const newsData = {
        id: news.length + 1,
        name: req.body.name
    }
    news.push(newsData);
    res.send(newsData);
});

module.exports = router;