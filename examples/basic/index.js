
/**
 * Module dependencies.
 */

var express = require('express'),
		app = module.exports = express(),
		io = require('socket.io').listen(app),
		interact = require('../../lib')(io); //should have listen for socket.io



// middleware

app.use(express.logger('dev'));


// mount

app.use(interact.room('test', 'view'));