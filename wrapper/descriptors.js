/*
 Data representation of objects
 */


var Descriptor = {
  body: {
    x: 0,
    y: 0,
    z: 0,
    dx: 1,
    dy: 1,
    dz: 1,
    shape: {
      sphere: {
        radius: 1,
        ammo: ['btSphereShape'],
        three: ['BoxGeometry', 'dx', 'dy', 'dz']
      },
      box: {
        ammo: ['btBoxShape', ['dx', 'dy', 'dz']],
        three: ['BoxGeometry', 'dx', 'dy', 'dz']
      },
      cylinder: {
        dx: 1, dy: 1, dz: 1
      },
      cone: {
        dx: 1, dy: 1
      }
    },
    material: {

    }
  },
  material: {

  }

};