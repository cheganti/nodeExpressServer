const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
  id: String,
  author: String,
  title: String
});
module.exports = mongoose.model('News', newsSchema)