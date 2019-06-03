const controller = require('./utils/create_controller')

module.exports = (appRouter) => {
  
    appRouter.use('/api/news/', controller('news'))
}