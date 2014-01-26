/**
 * UserController
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

module.exports = {
    
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {},
  // TODO: check req, res, next <-- are all needed? what is 'next' used for?
  'new': function (req, res) {
  	res.view();
  },
  'newsocial': function(req, res){
    //console.log(req);
    res.view();
  },
  // TODO: check user has data (email, name) otherwise let user fill his/her information first
  // Ref: http://stackoverflow.com/questions/19268812/do-i-implement-serialize-and-deserialize-nodesjs-passport-redisstore
  //      http://www.geektantra.com/2013/08/implement-passport-js-authentication-with-sails-js/
  //      http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local
  //      http://mherman.org/blog/2013/11/10/social-authentication-with-passport-dot-js/#.UuUokGSmq-U
  'checkuser': function(req,res){
    res.send('Check user data completed?')
  },
  'create': function (req, res, next){
  	// Create a User with the params sent from new page
  	User.create( req.params.all(), function userCreated(err, user){
  		
  		if(err) return next(err);

  		res.json(user);
  	});
  }

};
