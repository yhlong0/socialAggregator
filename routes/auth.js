var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/google/callback')
	.get(passport.authenticate('google', {
		successRedirect: '/users/',
		failureRedirect:'/error/'
}));
debugger;
router.route('/google')
	.get(passport.authenticate('google', {
		scope: ['profile', 'email']
}));

module.exports = router;