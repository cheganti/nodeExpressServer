const news = require('../data/news');

module.exports = (id, body) => {
console.log(id+ "---"+ body);
const newsData = news.find(c => c.id === parseInt(id));
newsData.name = body.name;
return newsData;
}