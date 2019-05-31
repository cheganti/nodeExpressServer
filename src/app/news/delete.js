const news = require('../data/news');

module.exports = (id) => {
    const newsData = news.find(c => c.id === parseInt(id));

    const index = news.indexOf(newsData);
    news.splice(index, 1);
    return newsData;
}