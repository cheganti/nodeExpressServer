const News = require('../../domain/news');
module.exports = (body) => {
    const newsData = {
        name: body.name
    }
    return "Post Successfull"
}