const newsRep = require('../../infra/repositories/news')
module.exports = (req) => {
    return newsRep().postnews(req);
}