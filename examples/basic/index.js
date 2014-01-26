
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();

// middleware

app.use(express.logger('dev'));

// mount

//app.use(require('interact'));