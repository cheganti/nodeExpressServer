const News = require('./news')

module.exports = ({ database }) => {
  const newsModel = database.models.News

  return {
    NewsRepository: News({ model: newsModel })
  }
}