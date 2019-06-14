const mongoose = require('mongoose');
module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/newsCollection', { useNewUrlParser: true });
        const db = mongoose.connection
        db.on('error', () => {
            reject('connection error')
        })
        db.once('open', () => {
            resolve('Connected to MongoDB')
        });
    });
}