var passport = require("passport");

// this middleware also need to be moved to policies
// ref: http://stackoverflow.com/questions/18215906/add-express-middleware-for-param-validations

module.exports.express = {
    customMiddleware: function(app){
      console.log('Express middleware for passport');
      app.use(passport.initialize());
      // need to use passport session later for transmit user session across page.
      // the problem is we need passport.serializeUser and passport.deserializeUser implemented as well.
      // ref: http://stackoverflow.com/questions/15350704/passport-js-failing-to-serialize-user
      // ref2: http://passportjs.org/guide/configure/
      app.use(passport.session());
	}
};