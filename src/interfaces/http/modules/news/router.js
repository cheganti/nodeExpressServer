const { Router } = require('express')
const getNews = require('../../../../app/news/get');
const postNews = require('../../../../app/news/post');
const putNews = require('../../../../app/news/put');
const deleteNews = require('../../../../app/news/delete');
const logger = require('../../../../infra/logging/logger');

module.exports = () => {
  const appRouter = Router()
  appRouter.route('/').get((req, res) => {
    const data = getNews();
    console.log(data);
    res.send(data);
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/').post((req, res) => {
    const data = postNews(req.body);
    res.send(data);
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/:id').put((req, res) => {
    const data = putNews(req.params.id, req.body, res);
    res.send(data);
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/:id').delete((req, res) => {
    const data = deleteNews(req.params.id, res);
    res.send(data);
    logger.info(`Api End Point ${req.originalUrl}`);
  });
  return appRouter;
}