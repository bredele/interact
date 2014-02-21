
/**
 * Dependencies
 */

var app = require('express')(),
		io = require('socket.io');


var tokens = {},
		rooms = {};


app.get('*', function(req, res, next) {
	var view = tokens[req.url];
	if(view) {
		res.render(view);
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
	var token = Math.random().toString(36).substring(7);
	console.log(token);
	tokens['/' + token] = view;
	rooms[name] = token;
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