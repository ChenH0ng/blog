const merge = require('webpack-merge');
const base = require('./base');

switch (process.env.npm_lifecycle_event) {
    default:
        module.exports = base;
        break;
}