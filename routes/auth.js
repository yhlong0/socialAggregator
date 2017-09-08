var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/google/callback')
	.get(passport.authenticate('google', {
		successRedirect: '/users/',
		failureRedirect:'/error/'
}));

router.route('/google')
	.get(passport.authenticate('google', {
		scope: ['profile', 'email']
}));

router.route('/twitter/callback')
	.get(passport.authenticate('twitter', {
		successRedirect: '/users/',
		failureRedirect:'/error/'
}));

router.route('/twitter')
	.get(passport.authenticate('twitter'));

router.route('/facebook/callback')
	.get(passport.authenticate('facebook', {
		successRedirect: '/users/',
		failureRedirect:'/error/'
}));

router.route('/facebook')
	.get(passport.authenticate('facebook'));

module.exports = router;