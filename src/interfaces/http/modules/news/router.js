const { Router } = require('express')
const getNews = require('../../../../app/news/get');
const postNews = require('../../../../app/news/post');
const putNews = require('../../../../app/news/put');
const deleteNews = require('../../../../app/news/delete');
const logger = require('../../../../infra/logging/logger');
const News = require('../../../../domain/news')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newsCollection', { useNewUrlParser: true });

module.exports = () => {
  const appRouter = Router()
  appRouter.route('/').get((req, res) => {
    News.find()
    .exec()
    .then(result => {
      res.status(200).json({
        message: result
      });
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/').post((req, res) => {
    const newsData = new News({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name
    })
    newsData.save()
    .then(result => {
      res.status(200).json({
        message: result
      });
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/:id').put((req, res) => {
    const id = req.params.id;
    News.update({
      _id: id,
    },
    { $set: { name: req.body.name } })
    .then(result => {
      res.status(200).json({
        message: result
      });
    });
    logger.info(`Api End Point ${req.originalUrl}`);
  });

  appRouter.route('/:id').delete((req, res) => {
    const id = req.params.id;
    News.remove({
      _id: id
    })
    .then(result => {
      res.status(200).json({
        message: result
      });
    });
    const data = deleteNews(req.params.id);
    res.send(data);
    logger.info(`Api End Point ${req.originalUrl}`);
  });
  return appRouter;
}