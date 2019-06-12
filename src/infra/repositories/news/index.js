const News = require('../../../domain/news/news');
const mongoDB = require('../../database');
const mongoose = require('mongoose');
var newsModel = mongoose.model('News', News);

module.exports = () => {
  mongoDB();
  const getall = () => {
    return new Promise((resolve, reject) => {
      newsModel.find({}).then(data => {
        if (data && data.length >0) {
          resolve(data);
        } else {
          reject("err")
        }
      })
    });
  }

  const postnews = (request) => {
    return new Promise((resolve, reject) => {
      newsModel.create(request).then(result => {
        if (result._id) {
          resolve(result);
        } else {
          reject("post failed")
        }
      })
    });
  }

  const putnews = (request) => {
    return new Promise((resolve, reject) => {
      newsModel.updateOne({ _id: request.id, }, { $set: { title: request.title, author: request.author } }).then(result => {
        if (request.nModified == 0) {
          reject("record is not been updated");
        } else {
          resolve(result);
        }
      });
    });
  }

  const deletenews = (id) => {
    return new Promise((resolve, reject) => {
      newsModel.deleteOne({ _id: id }).then(result => {
        if (result.deletedCount == 0) {
          reject("delete operation failed");
        } else {
          resolve(result);
        }
      });
    });
  }

  return {
    getall,
    postnews,
    putnews,
    deletenews
  }
}


