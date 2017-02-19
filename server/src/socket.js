
const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const Path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const {debug}=require('./configs');
const store = new MongoDBStore(
	{
		uri: 'mongodb://localhost:27017/client',
		collection: 'Sessions',
	});
store.on('error', function (e) {
	console.log(e);
});
app.set('trust proxy', 1);

module.exports = {
	Router: Express.Router,
	session: {
		maxAge: 36000000,
		store,
	},
	start({port, router, publicPath,}){
		port = process.env.PORT || port;
		app.get('*.mp4', (req, res, next) => {
			// console.log(req);
			next();
		});
		app.get('*.js', (req, res, next) => {
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
			store,
		}));
		app.use(router);
		app.use((req, res) => {
			console.log(req.url);
			res.sendFile(Path.resolve(publicPath, 'index.html'));
		});
		app.use((error, req, res) => {
			console.log(req.url);
			console.log(error);
			res.send('invalid operation');
		});
		app.listen(port, () => {
			console.log(`server is listening at ${port}.`);
		});
	},
};