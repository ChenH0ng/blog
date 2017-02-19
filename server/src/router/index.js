module.exports = function (arg) {
    const router =arg.Router();
    router.use('/Posts', require('./posts')(arg));
    router.use('/Session', require('./session')(arg));
    return router;
};