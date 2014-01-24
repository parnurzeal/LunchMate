var passport = require('passport')
	, FacebookStrategy = require('passport-facebook').Strategy;

passport.use( new FacebookStrategy({
	clientID: '595631140509355',
	clientSecret: '036661e0569c922af31ca0e97899522d',
	callbackURL: '/facebookuser/login_callback'
	},
	function(accessToken, refreshToken, profile, done){
		// make User.findOrCreate again later
		console.log(profile);
		done(null,profile);
	}
	));

passport.serializeUser(function(user, done) {	
	console.log("serializeUser");
	console.log(user);
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log("deserializeUser");
	User.findById(id, function(err, user) {
		console.log("Found user", user);
    	done(err, user);
  	});
});