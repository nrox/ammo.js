function assert(x, msg) {
  if (!x) {
    print('   Failure: ' + msg);
    //print(new Error().stack);
  } else {
    print('   OK:      ' + msg);
  }
}

function assertEq(x, y, msg) {
  assert(x === y, (msg ? msg + ' : ' : '') + x + ' should be equal to ' + y + '.');
}

function assertNeq(x, y, msg) {
  assert(x !== y, (msg ? msg + ' : ' : '') + x + ' should not be equal to ' + y + '.');
}

function assertLeq(x, y, msg) {
  assert(x < y, (msg ? msg + ' : ' : '') + x + ' should be less than to ' + y + '.');
}

function getClosureMapping() {
  var raw = read('../builds/ammo.vars');
  var ret = {};
  raw.split('\n').forEach(function(line) {
    var parts = line.split(':');
    ret[parts[0]] = parts[1];
  });
  return ret;
}

function print(s) {
  console.log(s);
}
