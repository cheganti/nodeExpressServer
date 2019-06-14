const { Router } = require('express');
const getNews = require('../../../../app/news/get');
const postNews = require('../../../../app/news/post');
const putNews = require('../../../../app/news/put');
const deleteNews = require('../../../../app/news/delete');
const logger = require('../../../../infra/logging/logger');

module.exports = () => {
  const appRouter = Router();

  appRouter.route('/').get((req, res) => {
    getNews().then((data) => {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/').post((req, res) => {
    postNews(req.body).then((data) => {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
  });

  appRouter.route('/:id').put((req, res) => {
    putNews(req.body).then((data) => {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
  });

  appRouter.route('/:id').delete((req, res) => {
    deleteNews(req.params.id).then((data) => {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });
  return appRouter;
}