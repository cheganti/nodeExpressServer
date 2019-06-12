const newsRep = require('../../infra/repositories/news')
module.exports = () => {
    return newsRep().postnews;
}