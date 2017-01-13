#! /usr/bin/env node
const spawn = require('child_process').spawn;
var path = require('path');

const jscodeshift = spawn(path.join(__dirname, 'node_modules/.bin/jscodeshift'), ['--transform', path.join(__dirname, 'transform.js')].concat(process.argv.slice(2)));
jscodeshift.stdin.end();
jscodeshift.stdout.pipe(process.stdout);
jscodeshift.stderr.pipe(process.stderr);
