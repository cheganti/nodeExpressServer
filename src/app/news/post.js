const express = require('express');
const router = express.Router();
const Joi = require('joi');
const error_handler = require('../../../src/interfaces/http/middlewares/error_handler');

router.post('/', (req, res) => {
    const { error } = error_handler(req.body); // result error
    if (error) return res.status(400).send(error.details[0].message);
    const newsData = {
        id: news.length + 1,
        name: req.body.name
    }
    news.push(newsData);
    res.send(newsData);
});

const news = [
    { id: 1, name: 'news1' },
    { id: 2, name: 'news2' },
    { id: 3, name: 'news3' }
]
module.exports = router;

