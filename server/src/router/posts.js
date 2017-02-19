module.exports = function ({Router, Rest, Post,}) {
    const rest = new Rest('posts', (res, result) => res.json(result));
    const router = Router();
    router.all('*', (req, res, next) => {
        if (req.method === 'GET' || req.session.user)return next();
        else res.send({ce: 311});
    });
    router.route('/')
        .get((req, res, next) => {
            rest.gets({
                res,
                skip: req.query.sp,
                limit: req.query.lt,
                sort: {time: -1},
                result: docs => {
                    return {ce: 233, da: docs.map(doc => new Post(doc))};
                },
                error: (e) => {
                    return {ce: 400, e};
                },
            });
        })
        .post((req, res, next) => {
            rest.post({
                res,
                doc: new Post(req.body),
                result: () => {
                    return {ce: 233};
                },
                error: (e) => {
                    return {ce: 400, e};
                },
            });
        })
        .delete((req, res, next) => {
            rest.deletes({
                res,
                query: {},
                result: () => {
                    return {ce: 233};
                },
                fail: () => {
                    return {ce: 300};
                },
                error: () => {
                    return {ce: 400};
                },
            });
        });
    router.route('/:id')
        .get((req, res, next) => {
            rest.get({
                res,
                id: req.params.id,
                result: doc => {
                    return {ce: 233, da: new Post(doc)};
                },
                fail: () => {
                    return {ce: 300};
                },
                error: () => {
                    return {ce: 400};
                },
            });
        })
        .put((req, res, next) => {
            rest.put({
                res,
                id: req.params.id,
                update: req.body,
                result: () => {
                    return {ce: 233,};
                },
                fail: () => {
                    return {ce: 300};
                },
                error: () => {
                    return {ce: 400};
                },
            })
        })
        .delete((req, res, next) => {
            rest.delete({
                res,
                id: req.params.id,
                result: () => {
                    return {ce: 233};
                },
                fail: () => {
                    return {ce: 300};
                },
                error: () => {
                    return {ce: 400};
                },
            });
        });
    return router;
};