/*
 Data representation of objects
 */
var _ = require('./lib/underscore.js');
var Ammo = require('../builds/ammo.js');
var debugLog = require('./debug-log.js');

var description = {
  physics: {
    //position x,y,z and as an array
    x: 0, y: 0, z: 0,
    position: [0, 0, 0],
    //velocity in each coordinate and as array
    vx: 1, vy: 1, vz: 1,
    velocity: [0, 0, 0]
  },
  //shapes
  shape: {
    sphere: {
      r: 1,
      bullet: ['btSphereShape', 'r'],
      three: ['SphereGeometry', 'r']
    },
    box: {
      dx: 1, dy: 1, dz: 1,
      bullet: ['btBoxShape', ['btVector3', 'dx', 'dy', 'dz']],
      three: ['BoxGeometry', 'dx', 'dy', 'dz']
    },
    cylinder: {
      r: 1, dy: 1,
      bullet: ['btCylinderShape', ['btVector3', 'r', 'dy', 'r']],
      three: ['CylinderGeometry', 'r', 'r', 'dy']
    },
    cone: {
      r: 1, dy: 1,
      bullet: ['btConeShape', 'r', 'dy'],
      three: ['CylinderGeometry', 0, 'r', 'dy']
    }
  },
  material: {
    friction: 0.1,
    restitution: 0.1,
    color: 333333, //hex
    opacity: 1,
    type: {
      phong: {

      }
    }
  },
  body: {
    physics: {},
    shape: {},
    material: {}
  }
};

function construct(constructor, args) {
  //http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
  function F() {
    return constructor.apply(this, args);
  }

  F.prototype = constructor.prototype;
  return new F();
}

function constructWithDescription(lib, list, desc) {
  var args = [];
  var arg;
  var s;
  var fn;
  if (typeof list == 'string') {
    return constructWithDescription(lib, list.split(' '), desc);
  }
  for (var i in list) {
    if (!list.hasOwnProperty(i)) continue;
    arg = list[i];
    if (i == 0) {
      fn = lib[arg];
      continue;
    }
    switch (typeof arg) {
      case 'number':
        args.push(arg);
        break;
      case 'string':
        if (desc[arg] !== undefined) {
          args.push(desc[arg]);
        } else {
          args.push(arg);
        }
        break;
      case 'object':
        args.push(constructWithDescription(lib, args, desc));
    }
  }
  return construct(fn, args);
}


function Shape(type, data) {
  var desc = _.extend(_.clone(description.shape[type]), data || {});
  this.bullet = constructWithDescription(Ammo, desc.bullet, desc);
}

var v3;
//console.log(v3 = new Shape('box'));

debugLog('btVector3', constructWithDescription(Ammo, ['btVector3', 'dx', 'dy', 'dz'], {dx: 1, dy: 2, dz: 3}));
debugLog('btVector3', constructWithDescription(Ammo, ['btVector3', -1, -2, -3]));
