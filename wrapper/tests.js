var debug = require('./debug-utils.js');
var factory = require('./description.js');

//factory.setAmmo(require('../builds/ammo.js'));
factory.setThree(require('./lib/three.js'));

var box = new factory.Shape('box',{dx:3, dy:5.3});

debug.inspect(box, 'box');
debug.keys(box.ammo, 'box.ammo');
debug.inspect(box.three, 'box.three');
