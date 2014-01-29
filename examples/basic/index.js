
/**
 * Module dependencies.
 */

var express = require('express'),
		app = module.exports = express(),
		interact = require('../../lib').listen(app);



// middleware

app.use(express.logger('dev'));


// mount

app.use(interact('test', 'view'));