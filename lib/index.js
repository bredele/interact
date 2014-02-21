
/**
 * Dependencies
 */

var app = require('express')(),
		io = require('socket.io');

var tokens = {};

app.get('*', function(req, res, next) {
	var room = rooms[req.url];
	if(room) {
		res.render(room);
	}
	next();
});

/**
 * Listen application.
 *
 * @param  {Express|Number} app 
 * @api public
 */

module.exports.listen = function(server) {
	if(!server) throw new Error('You should attach an express server');
	return function() {

    //TODO: right now the app is global but we should instantiate it
    //multiple times

		//configure
		app.set('views', server.get('views'));
		app.set('view engine', server.get('view engine'));
		
		//create room
		room.apply(io.listen(server), arguments);

		return app;
	};
};


function room(name, view) {
	tokens['/olivier'] = view;
	//initialize room name
	//create token (if not passed)
	//redirect to view if get token
	
	// this
	// 	.of(name)
	// 	.on('connection', function(socket) {

	// 	});

  return function(req, res, next) {
  	console.log('haha');
  };
}