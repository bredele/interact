
/**
 * Dependencies
 */

var io = require('socket.io');


/**
 * Listen application.
 *
 * @param  {Express|Number} app 
 * @api public
 */

module.exports.listen = function(app) {
	var port = 80;
	if(typeof app === 'number') port = app;
	//we should pass app or socket
	var socket = io.listen(port);
	return function(name, view) {
			//initialize room name
			//create token (if not passed)
			//redirect to view if get token
		  console.log('room', name);
		  return function(req, res, next) {

		  };
	};
};
