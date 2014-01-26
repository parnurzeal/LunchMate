var passport = require('passport')
	, FacebookStrategy = require('passport-facebook').Strategy;

passport.use( new FacebookStrategy({
	clientID: '595631140509355',
	clientSecret: '036661e0569c922af31ca0e97899522d',
	callbackURL: '/facebookuser/login_callback'
	},
	function(accessToken, refreshToken, profile, done){
		// make User.findOrCreate again later
		//User.findOne({ })
		User.findOne({ oauthID: profile.id}, function(err, user){
			if(err) return done(err);
			if(!user){
				var user = {
					oauthID: profile.id,
					facebook: profile.username,
				}
				User.create(user, function userCreated(err, user){
					if(err) return done(err);
					else return done(null,user);
				});
			}
			done(null,user);
		});
		/*console.log(profile);
		done(null, profile);*/
	}
	));

passport.serializeUser(function(user, done) {	
	console.log("serializeUser");
	/*console.log(user);*/
	/*if(user.provider==='facebook'){
		user.facebook = user.username;
		done(null, user.facebook);
	}*/
	done(null, user.oauthID);
});

passport.deserializeUser(function(id, done) {
	console.log("deserializeUser");
	// need to fix to support all social login
	User.findById(id, function(err, user) {
		console.log("Found user", user);
    	done(err, user);
  	});
});