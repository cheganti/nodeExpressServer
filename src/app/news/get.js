const News = require('../../domain/news/news');
module.exports = (body) => {
    return News.find()
        .then(result => {
            res.status(200).json({
                message: result
            });
        });
}