'use strict';module.exports = function (_ref) {var Router = _ref.Router,Rest = _ref.Rest,Post = _ref.Post;
    var rest = new Rest('posts', function (res, result) {return res.json(result);});
    var router = Router();
    router.all('*', function (req, res, next) {
        if (req.method === 'GET' || req.session.user) return next();else
        res.send({ ce: 311 });
    });
    router.route('/').
    get(function (req, res, next) {
        rest.gets({
            res: res,
            skip: req.query.sp,
            limit: req.query.lt,
            sort: { time: -1 },
            result: function result(docs) {
                return { ce: 233, da: docs.map(function (doc) {return new Post(doc);}) };
            },
            error: function error(e) {
                return { ce: 400, e: e };
            } });

    }).
    post(function (req, res, next) {
        rest.post({
            res: res,
            doc: new Post(req.body),
            result: function result() {
                return { ce: 233 };
            },
            error: function error(e) {
                return { ce: 400, e: e };
            } });

    }).
    delete(function (req, res, next) {
        rest.deletes({
            res: res,
            query: {},
            result: function result() {
                return { ce: 233 };
            },
            fail: function fail() {
                return { ce: 300 };
            },
            error: function error() {
                return { ce: 400 };
            } });

    });
    router.route('/:id').
    get(function (req, res, next) {
        rest.get({
            res: res,
            id: req.params.id,
            result: function result(doc) {
                return { ce: 233, da: new Post(doc) };
            },
            fail: function fail() {
                return { ce: 300 };
            },
            error: function error() {
                return { ce: 400 };
            } });

    }).
    put(function (req, res, next) {
        rest.put({
            res: res,
            id: req.params.id,
            update: req.body,
            result: function result() {
                return { ce: 233 };
            },
            fail: function fail() {
                return { ce: 300 };
            },
            error: function error() {
                return { ce: 400 };
            } });

    }).
    delete(function (req, res, next) {
        rest.delete({
            res: res,
            id: req.params.id,
            result: function result() {
                return { ce: 233 };
            },
            fail: function fail() {
                return { ce: 300 };
            },
            error: function error() {
                return { ce: 400 };
            } });

    });
    return router;
};