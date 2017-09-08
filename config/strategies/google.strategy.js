var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/userModel');

module.exports = function() {
	passport.use(new GoogleStrategy({
		clientID: '193315083638-ke1c7d2cmobhmquuchib6miah7gnv4tc.apps.googleusercontent.com',
		clientSecret: 'dnz2YvmfecyZOD2-qaI8F599',
		callbackURL: 'http://localhost:3000/auth/google/callback'},
		function(accessToken, refreshToken, profile, done) {
			var user = {};
			
			var query = {
				'google.id': profile.id
			};
			User.findOne(query, function(error, user) {
				if(user) {
					console.log('found user');
					done(null, user);
				} else {
					console.log('Not found');
					var user = new User;
					user.email = profile.emails[0].value;
					user.image = profile._json.image.url;
					user.displayName = profile.displayName;

					user.google = {};
					user.google.id = profile.id;
					user.google.token = accessToken;

					user.save();
					done(null, user);
				}
			});

		}
	));
};