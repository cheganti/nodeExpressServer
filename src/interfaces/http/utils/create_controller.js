const path = require('path')

module.exports = function createControllerRoutes(controllerUri) {
  const controllerPath = path.resolve('src/interfaces/http/modules/' + controllerUri + '/router')
  const Controller = require(controllerPath)

  return Controller();
}