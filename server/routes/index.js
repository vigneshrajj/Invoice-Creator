const rootRouter = require('express').Router();
const auth = require('./authRoutes');
const invoice = require('./invoiceRoutes');

rootRouter.use('/', auth);
rootRouter.use('/invoice', invoice);

module.exports = rootRouter;