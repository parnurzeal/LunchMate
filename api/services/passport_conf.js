var passport = require('passport')
	, FacebookStrategy = require('passport-facebook').Strategy;

passport.use( new FacebookStrategy({
	clientID: '595631140509355',
	clientSecret: '',
	callbackURL: '/facebookuser/login_callback'
	},
	function(accessToken, refreshToken, profile, done){
		// make User.findOrCreate again later
		console.log(profile);
		done(null,profile);
	}
	));
