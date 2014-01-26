
/**
 * Module dependencies.
 */

var express = require('express'),
		interact = require('../../lib');


//exports

var app = module.exports = express();


// middleware

app.use(express.logger('dev'));


// mount

app.use(interact.room('test'));