const News = require('../../domain/news/news');
const newsRep = require('../../infra/repositories/news')

module.exports = (newsRep) => {
    // code for getting all the items
    const all = () => {
      return Promise
        .resolve()
        .then(() =>
        newsRep.getAll({
            attributes: [
              'title', 'author'
            ]
          })
        )
        .catch(error => {
          throw new Error(error)
        })
    }
    return {
      all
    }
  }