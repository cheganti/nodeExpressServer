const News = require('../../domain/news/news');
module.exports = (id, res) => {
    News.deleteOne({
        _id: id
    })
        .then(result => {
            res.status(200).json({
                message: result
            });
        });
}