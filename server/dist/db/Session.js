'use strict';var _require = require('./context'),db = _require.db;

module.exports = {
    create: function create(_ref) {var _ref$username = _ref.username,username = _ref$username === undefined ? '' : _ref$username,_ref$password = _ref.password,password = _ref$password === undefined ? '' : _ref$password;
        return new Promise(function (resolve, reject) {
            db.collection('users').
            findOne({ username: username, password: password }).
            then(function (doc) {
                if (doc) {
                    resolve(doc);
                } else

                resolve(null);
            }).
            catch(function (e) {return reject(e);});
        });
    } };