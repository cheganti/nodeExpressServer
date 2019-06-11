const t = require('tcomb')
const News = t.struct({
  author: t.String,
  title: t.String
})
module.exports = News