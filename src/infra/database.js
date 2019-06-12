//export this db
const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/newsCollection', { useNewUrlParser: true });
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
        console.log('Connected to MongoDB')
    })
}