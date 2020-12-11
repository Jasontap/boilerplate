const apiRouter = require('express').Router()


apiRouter.use('/favorite', require('./favorite'))
apiRouter.use('/users', require('./user'))


module.exports = apiRouter