'use strict';

module.exports = function (arg) {
    var router = arg.Router();
    router.use('/Posts', require('./posts')(arg));
    router.use('/Session', require('./session')(arg));
    return router;
};