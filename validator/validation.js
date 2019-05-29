const Joi = require('joi');

const validateNews = (newsData) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(newsData, schema);
}

module.exports = validateNews