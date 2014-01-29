
/**
 * Module dependencies.
 */

var express = require('express'),
		app = module.exports = express(),
		interact = require('../../lib').listen(3000); //we should pass socket, app or port



// middleware

app.use(express.logger('dev'));


// mount

app.use(interact('test', 'view'));