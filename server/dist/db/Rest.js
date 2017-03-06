'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('./context'),
    db = _require.db;

var ObjectID = require('mongodb').ObjectID;

var Rest = function () {
    function Rest(name, handlerFinish) {
        _classCallCheck(this, Rest);

        this._collection = db.collection(name);
        this._handleFinish = handlerFinish;
    }

    _createClass(Rest, [{
        key: 'get',
        value: function get(_ref) {
            var _this = this;

            var query = _ref.query,
                id = _ref.id,
                result = _ref.result,
                fail = _ref.fail,
                error = _ref.error,
                res = _ref.res;

            new Promise(function (resolve) {
                _this._collection.findOne(id ? { _id: new ObjectID(id) } : query).then(function (doc) {
                    return resolve(doc);
                }).catch(function (e) {
                    return _this._handleFinish(res, error(e));
                });
            }).then(function (doc) {
                if (doc) _this._handleFinish(res, result(doc));else _this._handleFinish(res, fail());
            }).catch(function (e) {
                _this._handleFinish(res, error(e));
            });
        }
    }, {
        key: 'gets',
        value: function gets(_ref2) {
            var _this2 = this;

            var query = _ref2.query,
                result = _ref2.result,
                fail = _ref2.fail,
                error = _ref2.error,
                res = _ref2.res,
                _ref2$skip = _ref2.skip,
                skip = _ref2$skip === undefined ? 0 : _ref2$skip,
                _ref2$limit = _ref2.limit,
                limit = _ref2$limit === undefined ? 5 : _ref2$limit,
                _ref2$sort = _ref2.sort,
                sort = _ref2$sort === undefined ? {} : _ref2$sort;

            new Promise(function (resolve) {
                _this2._collection.find(query).sort(sort).skip(parseInt(skip)).limit(parseInt(limit)).toArray().then(function (docs) {
                    return resolve(docs);
                }).catch(function (e) {
                    return _this2._handleFinish(res, error(e));
                });
            }).then(function (docs) {
                _this2._handleFinish(res, result(docs));
            }).catch(function (e) {
                _this2._handleFinish(res, error(e));
            });
        }
    }, {
        key: 'post',
        value: function post(_ref3) {
            var _this3 = this;

            var doc = _ref3.doc,
                result = _ref3.result,
                error = _ref3.error,
                res = _ref3.res;

            new Promise(function (resolve) {
                _this3._collection.insertOne(doc).then(function () {
                    return resolve();
                }).catch(function (e) {
                    return _this3._handleFinish(res, error(e));
                });
            }).then(function () {
                _this3._handleFinish(res, result());
            }).catch(function (e) {
                _this3._handleFinish(res, error(e));
            });
        }
    }, {
        key: 'put',
        value: function put(_ref4) {
            var _this4 = this;

            var query = _ref4.query,
                id = _ref4.id,
                result = _ref4.result,
                fail = _ref4.fail,
                error = _ref4.error,
                res = _ref4.res,
                update = _ref4.update;

            new Promise(function (resolve) {
                _this4._collection.updateOne(id ? { _id: new ObjectID(id) } : query, update).then(function (cr) {
                    resolve(cr.result);
                }).catch(function (e) {
                    return _this4._handleFinish(res, error(e));
                });
            }).then(function (r) {
                if (r.n === 0) _this4._handleFinish(res, fail());else _this4._handleFinish(res, result());
            }).catch(function (e) {
                return _this4._handleFinish(res, error(e));
            });
        }
    }, {
        key: 'delete',
        value: function _delete(_ref5) {
            var _this5 = this;

            var query = _ref5.query,
                id = _ref5.id,
                result = _ref5.result,
                fail = _ref5.fail,
                error = _ref5.error,
                res = _ref5.res;

            new Promise(function (resolve) {
                _this5._collection.deleteOne(id ? { _id: new ObjectID(id) } : query).then(function (cr) {
                    return resolve(cr.result);
                }).catch(function (e) {
                    return _this5._handleFinish(res, error(e));
                });
            }).then(function (r) {
                if (r.n === 0) _this5._handleFinish(res, fail());else _this5._handleFinish(res, result());
            }).catch(function (e) {
                return _this5._handleFinish(res, error(e));
            });
        }
    }, {
        key: 'deletes',
        value: function deletes(_ref6) {
            var _this6 = this;

            var query = _ref6.query,
                ids = _ref6.ids,
                result = _ref6.result,
                fail = _ref6.fail,
                error = _ref6.error,
                res = _ref6.res;

            new Promise(function (resolve) {
                if (query) {
                    _this6._collection.deleteMany(query).then(function (cr) {
                        if (cr.result.n === 0) resolve(fail());else resolve(result());
                    });
                } else {
                    var results = [];
                    Promise.all(ids.map(function (id) {
                        return _this6._collection.deleteOne({ _id: new ObjectID(id) }).then(function (cr) {
                            if (cr.result.n === 0) results.push(fail());else results.push(result());
                        });
                    })).then(function () {
                        return resolve(results);
                    });
                }
            }).then(function (result) {
                _this6._handleFinish(res, result);
            }).catch(function (e) {
                _this6._handleFinish(res, error(e));
            });
        }
    }]);

    return Rest;
}();

module.exports = Rest;