const { Router } = require('express')
const getNews = require('../../../../app/news/get');
const postNews = require('../../../../app/news/post');
const putNews = require('../../../../app/news/put');
const deleteNews = require('../../../../app/news/delete');
const logger = require('../../../../infra/logging/logger');

module.exports = () => {
  const appRouter = Router();

  appRouter.route('/').get((req, res) => {
    const getUseCase = getNews();
    getUseCase().then(function (data) {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/').post((req, res) => {
    const postUseCase = postNews();
    postUseCase(req.body).then(function (data) {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
  });

  appRouter.route('/:id').put((req, res) => {
    const putUseCase = putNews();
    putUseCase(req.body).then(function (data) {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
  });

  appRouter.route('/:id').delete((req, res) => {
    const deleteUseCase = deleteNews();
    deleteUseCase(req.params.id).then(function (data) {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });
  return appRouter;
}