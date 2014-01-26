#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

// options

program
  .option('-p, --port <n>', 'set port number [3000]', parseInt)
  .option('-e, --example <n>', 'run example')  
  .parse(process.argv);

// title

process.title = 'interact.io';

// listen

var port = program.port || 3000;

require('../examples/' + program.example).listen(port);
console.log('application listening on port %d', port);