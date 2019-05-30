const express = require('express');
const router = express.Router();
const error_handler = require('../../../src/interfaces/http/middlewares/error_handler');

module.exports = router.put('/:id', (req, res) => {
    const newsData = news.find(c => c.id === parseInt(req.params.id));
    if (!newsData) return res.status(404).send('The news with given Id was not found');

    const { error } = error_handler(req.body); // result error
    if (error) return res.status(400).send(error.details[0].message);

    newsData.name = req.body.name;
    res.send(newsData);
});

const news = [
    { id: 1, name: 'news1' },
    { id: 2, name: 'news2' },
    { id: 3, name: 'news3' }
]