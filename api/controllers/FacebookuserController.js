/**
 * FacebookuserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require('passport');

module.exports = {
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to FacebookuserController)
   */
  _config: {},
  'login': function(req,res,next){
  	console.log('login');
  	passport.authenticate('facebook')(req,res,next);
  },
  'login_callback': function(req,res,next){
  	console.log('login_callback');
  	/*passport.authenticate('facebook',function(err, user, info){
      if(err) {return next(err);}
      if(!user) { return res.redirect('/facebook/failure')}
      User.findOne({ facebook: user.username}, function(err, founduser){
        if(err) return next(err);
        if(!founduser) return res.redirect('/user/newsocial');
        return res.json(founduser);
      });
    })(req,res,next);*/
    passport.authenticate('facebook',{ successRedirect:'/user/checkuser'})(req,res,next);
  }

  
};
