const userModel = require('../../../infra/database/model/user');
module.exports = () => {
    const getall = () => {
        return new Promise((resolve, reject) => {
            userModel.find({}).then(data => {
                if (data && data.length > 0) {
                    resolve(data);
                } else {
                    reject("err")
                }
            })
        });
    }

    const postuser = (user) => {
        return new Promise((resolve, reject) => {
            userModel.create(user).then(result => {
                if (result._id) {
                    resolve(result);
                } else {
                    reject("post failed")
                }
            })
        });
    }

    const putuser = (user) => {
        return new Promise((resolve, reject) => {
            userModel.updateOne({ _id: user.id, }, { $set: { title: user.title } }).then(result => {
                if (user.nModified == 0) {
                    reject("record is not been updated");
                } else {
                    resolve(result);
                }
            });
        });
    }

    const deleteuser = (id) => {
        return new Promise((resolve, reject) => {
            userModel.deleteOne({ _id: id }).then(result => {
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
        postuser,
        putuser,
        deleteuser
    }
}