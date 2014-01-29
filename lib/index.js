
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

module.exports = function(app) {
	
};

module.exports.room = require('./middleware/room');