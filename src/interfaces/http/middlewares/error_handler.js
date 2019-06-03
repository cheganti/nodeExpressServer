const Joi = require('joi');
const error_handler = (newsData) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(newsData, schema);
}

module.exports = error_handler