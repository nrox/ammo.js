console.log(process.argv);
var utils = './testutils.js';
var test = process.argv[2] || './basics.js';
var fs = require('fs');
var Ammo = require('../builds/temp.js');

console.log('temp.js Ammo loaded: ' + !!Ammo.btVector3);
console.log('loading ' + test);
console.log('');

fs.readFile(utils, 'utf8', function(err, data) {
  if (err) throw err;
  eval(data);
  fs.readFile(test, 'utf8', function(err, data) {
    if (err) throw err;
    eval(data);
  });
});

