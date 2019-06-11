const News = require('../../../domain/news/news');
// import db here
const mongoDB = require('../../database')


module.exports = (News) => {
 const getAll = (...args) =>
  News.findAll(...args).then((entity) =>
    entity.map((data) => {
      return News(data)
    })
  )
}