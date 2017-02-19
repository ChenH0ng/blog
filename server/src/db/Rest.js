const {db}=require('./context');
const ObjectID = require('mongodb').ObjectID;
class Rest {
    constructor(name, handlerFinish) {
        this._collection = db.collection(name);
        this._handleFinish = handlerFinish;
    }
    
    get({query, id, result, fail, error, res}) {
        new Promise(resolve => {
            this._collection.findOne(id ? {_id: new ObjectID(id)} : query)
                .then(doc => resolve(doc))
                .catch(e => this._handleFinish(res, error(e)));
        })
            .then(doc => {
                if (doc)
                    this._handleFinish(res, result(doc));
                else
                    this._handleFinish(res, fail());
            })
            .catch(e => {
                this._handleFinish(res, error(e));
            });
    }
    
    gets({query, result, fail, error, res, skip = 0, limit = 5, sort = {},}) {
        new Promise(resolve => {
            this._collection.find(query).sort(sort).skip(parseInt(skip)).limit(parseInt(limit)).toArray()
                .then(docs => resolve(docs))
                .catch(e => this._handleFinish(res, error(e)));
        })
            .then(docs => {
                this._handleFinish(res, result(docs))
            })
            .catch(e => {
                this._handleFinish(res, error(e));
            });
    }
    
    post({doc, result, error, res,}) {
        new Promise(resolve => {
            this._collection.insertOne(doc)
                .then(() => resolve())
                .catch(e => this._handleFinish(res, error(e)));
        })
            .then(() => {
                this._handleFinish(res, result());
            })
            .catch(e => {
                this._handleFinish(res, error(e));
            });
    }
    
    put({query, id, result, fail, error, res, update}) {
        new Promise(resolve => {
            this._collection.updateOne(id ? {_id: new ObjectID(id)} : query, update)
                .then(cr => {
                    resolve(cr.result);
                })
                .catch(e => this._handleFinish(res, error(e)));
        })
            .then(r => {
                if (r.n === 0)
                    this._handleFinish(res, fail());
                else
                    this._handleFinish(res, result());
            })
            .catch(e => this._handleFinish(res, error(e)));
    }
    
    delete({query, id, result, fail, error, res,}) {
        new Promise(resolve => {
            this._collection.deleteOne(id ? {_id: new ObjectID(id)} : query)
                .then(cr => resolve(cr.result))
                .catch(e => this._handleFinish(res, error(e)));
        })
            .then(r => {
                if (r.n === 0)
                    this._handleFinish(res, fail());
                else
                    this._handleFinish(res, result());
            })
            .catch(e => this._handleFinish(res, error(e)));
    }
    
    deletes({query, ids, result, fail, error, res,}) {
        new Promise(resolve => {
            if (query) {
                this._collection.deleteMany(query)
                    .then(cr => {
                        if (cr.result.n === 0)
                            resolve(fail());
                        else
                            resolve(result());
                    })
            }
            else {
                let results = [];
                Promise.all(ids.map(id =>
                    this._collection.deleteOne({_id: new ObjectID(id)})
                        .then(cr => {
                            if (cr.result.n === 0)
                                results.push(fail());
                            else
                                results.push(result());
                        })))
                    .then(() => resolve(results));
            }
        })
            .then(result => {
                this._handleFinish(res, result);
            })
            .catch(e => {
                this._handleFinish(res, error(e));
            });
    }
}
module.exports = Rest;