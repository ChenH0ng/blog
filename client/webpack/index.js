/**
 * Created by Exper1ence on 2016/12/26.
 */
const merge = require('webpack-merge');
const base = require('./base');
const build = require('./build');
const debug = require('./debug');

switch (process.env.npm_lifecycle_event) {
    case 'b':
        module.exports = merge(base, build);
        break;
    case 'd':
        module.exports = merge(base, debug);
        break;
    default:
        module.exports = base;
        break;
}