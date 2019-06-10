const News = require('../../domain/news/news');
const mongoose = require('mongoose');
module.exports = (body) => {
    const newsData = new News({
        _id: mongoose.Types.ObjectId(),
        author: body.author,
        title: body.title
    });
    return newsData.save()
        .then(result => {
            body.status(200).json({
                message: "Success"
            });
        });
}