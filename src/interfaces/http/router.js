const getNews = require('../../app/news/get');
const postNews = require('../../app/news/post');
const putNews = require('../../app/news/put');
const deleteNews = require('../../app/news/delete');

module.exports = (app) => {

    app.route('/api/news').get((req, res) => {
        const data = getNews();
        res.send(data);
    });

    app.route('/api/news').post((req, res) => {
        const data = postNews(req.body);
        res.send(data);
    });

    app.route('/api/news/:id').put((req, res) => {
        const data = putNews(req.params.id, req.body);
        res.send(data);
    });

    app.route('/api/news/:id').delete((req, res) => {
        const data = deleteNews(req.params.id);
        res.send(data);
    });
}