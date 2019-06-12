const newsRep = require('../../infra/repositories/news')
module.exports = (id, body, res) => {
    return newsRep().putnews;
}