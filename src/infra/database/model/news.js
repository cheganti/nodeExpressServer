const News = require('../../../domain/news/news')
const mongoose = require('mongoose')
const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('News', News);