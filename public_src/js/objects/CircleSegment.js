var THREE = require('../libs/three/three')



var testMaterial = new THREE.ShaderMaterial( {

  uniforms: {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new THREE.Vector2() },
    color: [1, 0.5, 0.5, 1]
  },
  vertexShader: 
  'void main() { \
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 2.0 ); \
  }',
  fragmentShader: 
  'precision highp float; \
  void main(void) { \
    gl_FragColor = vec4(0, 1.0, 0.2, 1.0); \
  }'

} );


function CircleSegment() {
  //this.a = x;

  var geometry = new THREE.Geometry();

  geometry.vertices.push(
    new THREE.Vector3( -80,  80, 0 ),
    new THREE.Vector3( -80, -80, 0 ),
    new THREE.Vector3(  80, -80, 0 )
  );

  geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

  geometry.computeBoundingBox();

  

  var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  var mesh = new THREE.Mesh( geometry, testMaterial );


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