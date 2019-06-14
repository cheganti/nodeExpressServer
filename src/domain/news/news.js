const t = require('tcomb')
const News = t.struct({
  title: t.String,
  author: t.String
})
module.exports = {
  News
}