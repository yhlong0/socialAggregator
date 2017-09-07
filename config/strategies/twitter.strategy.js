var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function() {
	passport.use(new TwitterStrategy({
		consumerKey: '62UNQNOL5uJVHeAPkKQEEBBu6',
		consumerSecret: 'ahOuPdlkNorjY62TTonqkdqLwZ8bE3u47oqhzeSbQ8FqQivsBT',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'},
		function(token, tokenSecret, profile, done) {
			var user = {};
			
			//user.email = profile.emails[0].value;
			user.image = profile._json.profile_image_url;
			user.displayName = profile.displayName;

			user.twitter = {};
			user.twitter.id = profile.id;
			user.twitter.token = token;

			done(null, user);
		}
	));
};