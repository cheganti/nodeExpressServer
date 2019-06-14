const newsRep = require('../../infra/repositories/news')
module.exports = (news) => {
    return newsRep().postnews(news);
}