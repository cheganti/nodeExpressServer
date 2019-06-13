const mongoose = require('mongoose');
const News = {
  author: String,
  title: String
}
const newsModel = mongoose.model('News', News);
module.exports = newsModel;