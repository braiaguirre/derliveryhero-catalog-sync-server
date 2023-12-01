const Router = require('express');

const userRouter = require('../../../../henry-pf/server/src/Routes/userRouter.js');
const typeRouter = require('../../../../henry-pf/server/src/Routes/typeRouter.js');
const reviewRouter = require('../../../../henry-pf/server/src/Routes/reviewRouter.js');
const serviceRouter = require('../../../../henry-pf/server/src/Routes/serviceRouter.js');
const transactionRouter = require('../../../../henry-pf/server/src/Routes/transactionRouter.js');
const igPostRouter = require('../../../../henry-pf/server/src/Routes/igPostRouter.js');
const configRouter = require('../../../../henry-pf/server/src/Routes/configRouter.js');
const textBlogRouter = require('../../../../henry-pf/server/src/Routes/textBlogRouter.js');
const keywordRouter = require('../../../../henry-pf/server/src/Routes/keywordRouter.js');
const stripeRouter = require('../../../../henry-pf/server/src/Routes/stripeRouter.js');

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/type', typeRouter);
mainRouter.use('/review', reviewRouter);
mainRouter.use('/service', serviceRouter);
mainRouter.use('/transaction', transactionRouter);
mainRouter.use('/igpost', igPostRouter);
mainRouter.use('/config', configRouter);
mainRouter.use('/textblog', textBlogRouter);
mainRouter.use('/stripe', stripeRouter);
mainRouter.use('/keyword', keywordRouter);

module.exports = mainRouter;