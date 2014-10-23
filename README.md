Mechanisms simulation.

## Physics Engine

Based on a [bullet physics](http://bulletphysics.org/) port to javascript: [kripken/ammo.js](https://github.com/kripken/ammo.js "kripken/ammo.js").


##ammo.idl changes

###reference

Refer to [webidl ref](http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html)

###discussion

[issue 60](https://github.com/kripken/ammo.js/issues/60)

###example

btVector3.cross was added with this line to interface btVector3:

	[Value] btVector3 cross([Const,Ref] btVector3 v);

in bullet:

	btVector3 	cross (const btVector3 &v) const

