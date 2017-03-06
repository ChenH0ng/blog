'use strict';

module.exports = function (_ref) {
	var Router = _ref.Router,
	    Session = _ref.Session,
	    session = _ref.session;
	var maxAge = session.maxAge,
	    store = session.store;

	var router = Router();
	router.route('/').post(function (req, res, next) {
		Session.create(req.body).then(function (user) {
			if (user) {
				req.session.cookie.expires = new Date(Date.now() + maxAge);
				req.session.user = user;
				res.json({ ce: 233, da: user });
			} else res.json({ ce: 300 });
		});
	}).get(function (req, res, next) {
		if (req.session.user) {
			req.session.cookie.expires = new Date(Date.now() + maxAge);
			res.json({ ce: 233, da: req.session.user });
		} else res.json({ ce: 300 });
	}).delete(function (req, res, next) {
		if (req.session.user) {
			store.destroy(req.sessionID, function () {
				return res.json({ ce: 233 });
			});
		} else res.json({ ce: 300 });
	});
	return router;
};