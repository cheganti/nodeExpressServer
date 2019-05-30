const express = require('express');
const router = express.Router();

module.exports = router.get('/', (req, res) => {
    res.send(news);
});

const news = [
    { id: 1, name: 'news1' },
    { id: 2, name: 'news2' },
    { id: 3, name: 'news3' }
]
