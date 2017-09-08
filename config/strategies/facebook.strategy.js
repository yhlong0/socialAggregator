var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function() {
	passport.use(new FacebookStrategy({
		clientID: '154980668418867',
		clientSecret: '9a6a2e5f444c0b2e9dc1cda3f7c40d51',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'},
		function(accessToken, refreshToken, profile, done) {
			var user = {};
			
			var query = {
				'facebook.id': profile.id
			};
			User.findOne(query, function(error, user) {
				if(user) {
					console.log('found user');
					done(null, user);
				} else {
					console.log('Not found');
					var user = new User;
					//user.email = profile.;
					//user.image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.pexels.com%2Fphotos%2F126407%2Fpexels-photo-126407.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&docid=hVpvvL-HxQGRYM&tbnid=5xi0KKhBZfafhM%3A&vet=10ahUKEwjjlazXi5TWAhVDiFQKHcX1BJIQMwiTAigBMAE..i&w=2067&h=1163&bih=989&biw=1920&q=cat%20image%20&ved=0ahUKEwjjlazXi5TWAhVDiFQKHcX1BJIQMwiTAigBMAE&iact=mrc&uact=8';
					user.displayName = profile.displayName;

					user.facebook = {};
					user.facebook.id = profile.id;
					user.facebook.token = accessToken;

					user.save();
					return done(null, user);
				}
			});

		}
	));
};