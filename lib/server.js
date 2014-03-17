
/**
 * Dependencies
 * @api pruvate
 */

var express = require('express'),
    mixin = require('./utils').mixin,
    Store = require('store-component'),
		io = require('socket.io'),
		http = require('http');


/**
 * Expose 'interact'
 */

module.exports = interact;


//expose express api

mixin(interact, express);


/**
 * interact constructor.
 * @api public
 */

function interact(port) {

	/**
	 * Express server.
	 * @type {Express}
	 * @api public
	 */
	
	var app = express();


	/**
	 * Rooms and tokens store.
	 * Store will allow to synchronise rooms
	 * with redis.
	 * 
	 * @type {Store}
	 * @api private
	 */
	
	var rooms = new Store(),
			tokens = new Store();


	/**
	 * HTTP server to server socket.io
	 * @api private
	 */
	
	var server = http.createServer(app);


	if(port) server.listen(port);


	/**
	 * Socket.io init.
	 * @api private
	 */
	
	var socket = io.listen(server);


	//mount interact server
	
	app.get('*', function(req, res, next) {
		var name = tokens.get(req.url.substring(1)),
				room = rooms.get(name);

		if(room) {
			res.render(room.view);
		}
		next();
	});


	/**
	 * Create or get room.
	 * example:
	 *
	 *   app.room('test', 'view');
	 *   app.room('test', 'view', 'token');
	 *   app.room('test');
	 *   
	 * @param  {String} name 
	 * @param  {String} view 
	 * @param  {String} token 
	 * @return {String}
	 * @api public
	 */
	
	app.room = function(name, view, token) {
		if(!view) return rooms.get(name);

		token = token || Math.random().toString(36).substring(7);
		console.log(token);
		//set stores
		rooms.set(name, {
			view: view,
			token: token
		});
		tokens.set(token, name);

		//initialize room
		socket.of(name).on('connection', function(socket) {

		});
	};


	/**
	 * Listen interact server.
	 * Initialize io server.
	 * example:
	 *
	 *   app.listen(8080);
	 *   
	 * @param  {Number} port
	 * @api public
	 */
	
	app.listen = function(port) {
		server.listen(port | 80);
	};


	return app;
}
