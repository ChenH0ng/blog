'use strict';

var Express = require('express');
var app = Express();
var bodyParser = require('body-parser');
var Path = require('path');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

var _require = require('./configs'),
    debug = _require.debug;

var store = new MongoDBStore({
	uri: 'mongodb://localhost:27017/client',
	collection: 'Sessions'
});
store.on('error', function (e) {
	console.log(e);
});
app.set('trust proxy', 1);

module.exports = {
	Router: Express.Router,
	session: {
		maxAge: 36000000,
		store: store
	},
	start: function start(_ref) {
		var port = _ref.port,
		    router = _ref.router,
		    publicPath = _ref.publicPath;

		port = process.env.PORT || port;
		app.get('*.mp4', function (req, res, next) {
			// console.log(req);
			next();
		});
		app.get('*.js', function (req, res, next) {
			if (!debug) {
				req.url = req.url + '.gz';
				res.set('Content-Encoding', 'gzip');
			}
			next();
		});
		app.use(Express.static(publicPath));
		app.use(bodyParser.json());
		app.use(session({
			secret: 'Gakk1mylove',
			resave: !!0,
			saveUninitialized: !!0,
			store: store
		}));
		app.use(router);
		app.use(function (req, res) {
			console.log(req.url);
			res.sendFile(Path.resolve(publicPath, 'index.html'));
		});
		app.use(function (error, req, res) {
			console.log(req.url);
			console.log(error);
			res.send('invalid operation');
		});
		app.listen(port, function () {
			console.log('server is listening at ' + port + '.');
		});
	}
};
//# sourceMappingURL=socket.js.map