
/**
 * Module dependencies.
 */

var express = require('express'),
		app = module.exports = express(),
		interact = require('../../lib').listen(app); //we should pass socket, port in second arg


// settings

app.set('views', __dirname);
app.set('view engine', 'jade');

// middleware

app.use(express.logger('dev'));

// mount

app.use(interact('test', 'view'));