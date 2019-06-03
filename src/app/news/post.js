const news = require('../data/news');
module.exports = (body) => {
    const newsData = {
        id: news.length + 1,
        name: body.name
    }
    news.push(newsData);
    return "Post Successfull"
}