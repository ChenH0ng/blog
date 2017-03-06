'use strict';

var URL = 'mongodb://localhost:27017/blog';
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var context = require('./context');
module.exports = function (cb) {
    var client = mongodb.MongoClient;
    client.connect(URL, function (err, db) {
        if (err) console.log(err);
        var handleClose = function handleClose(e) {
            db.close(function () {
                console.log(e);
                process.exit(0);
            });
        };
        process.on('SIGINT', handleClose);
        process.on('uncaughtException', handleClose);
        context.db = db;
        cb({
            ID: function ID(id) {
                return new ObjectID(id);
            },
            Post: require('./Models').Post,
            Rest: require('./Rest'),
            Session: require('./Session')
        });
    });
};
//# sourceMappingURL=index.js.map