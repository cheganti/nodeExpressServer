const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String
});

module.exports = mongoose.model('News', newsSchema);