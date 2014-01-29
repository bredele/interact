
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
	
	//we should return an app to return view. But
	//does it take the default template engine?
	return function() {
		return room.apply(io.listen(port), arguments);
	};
};


function room(name, view) {
	//initialize room name
	//create token (if not passed)
	//redirect to view if get token
	
	this
		.of(name)
		.on('connection', function(socket) {

		});

  return function(req, res, next) {
  	console.log('haha');
  };
}