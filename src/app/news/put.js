const News = require('../../domain/news/news');
const mongoose = require('mongoose');
module.exports = (id, body, res) => {
    News.update({
        _id: id,
    },
        { $set: { title: body.title } })
        .then(result => {
            console.log(result)
            res.json({
                message: result
            });
        });
}