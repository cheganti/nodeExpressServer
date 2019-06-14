const newsModel = require('../../../infra/database/model/news');
module.exports = () => {
  const getall = () => {
    return new Promise((resolve, reject) => {
      newsModel.find({}).then(data => {
        if (data && data.length > 0) {
          resolve(data);
        } else {
          reject("err")
        }
      })
    });
  }

  const postnews = (news) => {
    return new Promise((resolve, reject) => {
      newsModel.create(news).then(result => {
        if (result._id) {
          resolve(result);
        } else {
          reject("post failed")
        }
      })
    });
  }

  const putnews = (news) => {
    return new Promise((resolve, reject) => {
      newsModel.updateOne({ _id: news.id, }, { $set: { title: news.title } }).then(result => {
        if (news.nModified == 0) {
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