var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function() {
	passport.use(new TwitterStrategy({
		consumerKey: '193315083638-ke1c7d2cmobhmquuchib6miah7gnv4tc.apps.googleusercontent.com',
		consumerSecret: 'dnz2YvmfecyZOD2-qaI8F599',
		callbackUrl: 'http://localhost:3000/auth/twitter/callback',
		passReqToCallback: true},
		function(req, Token, tokenSecret, profile, done) {
			var user = {};
			
			user.email = profile.emails[0].value;
			user.image = profile._json.image.url;
			user.displayName = profile.displayName;

			user.google = {};
			user.google.id = profile.id;
			user.google.token = accessToken;

			done(null, user);
		}
	));
};