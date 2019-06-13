const newsRep = require('../../infra/repositories/news')
module.exports = (id) => {
    return newsRep().deletenews(id);
}