const News = require('../../domain/news/news');
module.exports = (body) => {
    const newsData = new News({
        author: body.author,
        title: body.title
    });
    newsData.save()
        .then(result => {
            body.status(200).json({
                message: "Success"
            });
        });
}