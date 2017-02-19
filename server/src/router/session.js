module.exports = function ({Router, Session, session,}) {
	const {maxAge, store}=session;
	const router =  Router();
	router.route('/')
		.post((req, res, next) => {
			Session.create(req.body)
				.then(user => {
					if (user) {
						req.session.cookie.expires = new Date(Date.now() + maxAge);
						req.session.user = user;
						res.json({ce: 233, da: user});
					}
					else
						res.json({ce: 300});
				});
		})
		.get((req, res, next) => {
			if (req.session.user) {
				req.session.cookie.expires = new Date(Date.now() + maxAge);
				res.json({ce: 233, da: req.session.user});
			}
			else
				res.json({ce: 300});
		})
		.delete((req, res, next) => {
			if (req.session.user) {
				store.destroy(req.sessionID, () => res.json({ce: 233}));
			}
			else
				res.json({ce: 300});
		});
	return router;
};