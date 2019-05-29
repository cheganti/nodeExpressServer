const express = require('express');
const router = express.Router();
const news = require('./news');
const validateNews = require('../../validator/validation');

router.put('/:id', (req, res) => {
    const newsData = news.find(c => c.id === parseInt(req.params.id));
    if (!newsData) return res.status(404).send('The news with given Id was not found');

    const { error } = validateNews(req.body); // result error
    if (error) return res.status(400).send(error.details[0].message);

    newsData.name = req.body.name;
    res.send(newsData);
});

module.exports = router;