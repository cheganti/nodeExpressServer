const { Router } = require('express')
const getNews = require('../../../../app/news/get');
const postNews = require('../../../../app/news/post');
const putNews = require('../../../../app/news/put');
const deleteNews = require('../../../../app/news/delete');

module.exports = () => {
  const appRouter = Router()
  appRouter.route('/').get((req, res) => {
    const data = getNews();
    res.send(data);

  });

  appRouter.route('/').post((req, res) => {
    const data = postNews(req.body);
    res.send(data);
  });

  appRouter.route('/:id').put((req, res) => {
    const data = putNews(req.params.id, req.body);
    res.send(data);
  });

  appRouter.route('/:id').delete((req, res) => {
    const data = deleteNews(req.params.id);
    res.send(data);
  });
  return appRouter;
}