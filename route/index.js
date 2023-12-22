const { Router } = require('express');

const route = Router();

const authRouter = require('./auth');

route.use('/api', authRouter);

module.exports = route;
