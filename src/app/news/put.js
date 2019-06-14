const newsRep = require('../../infra/repositories/news')
module.exports = (news) => {
    return newsRep().putnews(news);
}