var THREE = require('../libs/three/three')

function CircleSegment() {
  //this.a = x;

  var geometry = new THREE.Geometry();

  geometry.vertices.push(
    new THREE.Vector3( -10,  10, 0 ),
    new THREE.Vector3( -10, -10, 0 ),
    new THREE.Vector3(  10, -10, 0 )
  );

  geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

  geometry.computeBoundingBox();

  

  var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  var mesh = new THREE.Mesh( geometry, material );


  this.mesh = mesh;

  //this.updateGraphics();
};


CircleSegment.prototype.move = function() {
  this.a = this.a + 1;
  return this.a;
};

// Update the graphics object
CircleSegment.prototype.updateGraphics = function() {



};



module.exports = CircleSegment