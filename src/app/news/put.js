const news = require('../../domain/news');
module.exports = (id, body) => {
    const newsData = news.find(c => c.id === parseInt(id));
    newsData.name = body.name;
    return newsData;
}