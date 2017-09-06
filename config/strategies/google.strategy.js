var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {
	passport.use(new GoogleStrategy({
		clientID: '193315083638-ke1c7d2cmobhmquuchib6miah7gnv4tc.apps.googleusercontent.com',
		clientSecret: 'dnz2YvmfecyZOD2-qaI8F599',
		callbackURL: 'http://localhost:3000/auth/google/callback'},
		function(accessToken, refreshToken, profile, done) {
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