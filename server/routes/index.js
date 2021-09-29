const rootRouter = require('express').Router();
const auth = require('./authRoutes');

rootRouter.use('/', auth);

module.exports = rootRouter;