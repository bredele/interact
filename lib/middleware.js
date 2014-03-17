
/**
 * Dependencies
 */

var app = require('express')(),
		io = require('socket.io');

//TODO: may be use redis

var tokens = {},
		rooms = {};


//token redirection

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

module.exports = function(server, socket) {
	if(!server) throw new Error('You should attach an express server');

	// server.get('/interact/interact.io', function(req, res, next) {
	// 	console.log('youhouuuu');
	// 		next();
	// });

	//return middleware
	return function() {

    //TODO: right now the app is global but we should instantiate it
    //multiple times

		//configure
		app.set('views', server.get('views'));
		app.set('view engine', server.get('view engine'));

		//create room
		room.apply(io.listen(socket), arguments);

		return app;
	};
};

function tokenize(str) {
	var token = Math.random().toString(36).substring(7);
	return str || token;
}

/**
 * Create interact room.
 * example:
 *
 *   app.use(interact('roomName', 'viewName'));
 *   app.use(interact('roomName', 'viewName', 'token'));
 *   
 * @param  {String} name 
 * @param  {String} view 
 * @param {String} token 
 * @api pubic
 */

function room(name, view, token) {
	var token = tokenize(token);
	tokens['/' + token] = view;
	rooms[name] = token;
	console.log(token);
	
	this
		.of(name)
		.on('connection', function(socket) {
			socket.on('init', function(room) {
				console.log('init');
				// rooms.push(room);
				// //also join?
			});

			socket.on('join', function(room) {
				console.log('join');
				// if(rooms.indexOf(room) > -1){
				// 	socket.join(room);
				// 	_room = room;
				// }
			});

			socket.on('leave', function(room) {
				console.log('leave');
				// socket.leave(room);
			});

			socket.on('data', function(data) {
				console.log('data');
				// //if null send to everybody
				// if(_room){
				// 	socket.broadcast.to(_room).emit("message", data);
				// }
			});
		});

  return function(req, res, next) {
  	console.log('haha');
  };
}