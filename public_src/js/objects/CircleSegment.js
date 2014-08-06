var THREE = require('../libs/three/three')


var testMaterial = new THREE.ShaderMaterial( {

  uniforms: {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new THREE.Vector2() },
    color: [1, 0.5, 0.5, 1]
  },
  attributes: {
    aAlpha: {
      type: 'f',
      value: [1,0.5,0]
    }
  },
  vertexShader: 
  'attribute float aAlpha; \
  varying float vAlpha; \
  void main() { \
    vAlpha = aAlpha; \
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 ); \
  }',
  fragmentShader: 
  'precision highp float; \
  varying float vAlpha; \
  void main(void) { \
    gl_FragColor = vec4(1.0, 1.0, 0.2, 1.0); \
  }'

} );


function CircleSegment() {

  var geometry = new THREE.Geometry();

  // Half number of total vertices
  var verticesPerRound = 10

  var innerRadius = 0.7
  var outerRadius = 1


  for (var i = 0; i < verticesPerRound; i++) {

    var angle = 2 * Math.PI * i / (verticesPerRound - 1)

    var inner = new THREE.Vector3(
      Math.cos(angle) * innerRadius,
      Math.sin(angle) * innerRadius,
      0
    );

    var outer = new THREE.Vector3(
      Math.cos(angle) * outerRadius,
      Math.sin(angle) * outerRadius,
      0
    );

    geometry.vertices.push(inner) // i * 2 + 0
    geometry.vertices.push(outer) // i * 2 + 1

    if (i > 0) {

      geometry.faces.push(new THREE.Face3(
        i * 2 + 0,
        i * 2 - 2,
        i * 2 - 1
      ));

      geometry.faces.push(new THREE.Face3(
        i * 2 + 1,
        i * 2 - 0, 
        i * 2 - 1
      ));

    }

  }

  geometry.computeBoundingBox();

  var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  var mesh = new THREE.Mesh( geometry, testMaterial );


  this.mesh = mesh;

};


CircleSegment.prototype.move = function() {
  this.a = this.a + 1;
  return this.a;
};

// Update the graphics object
CircleSegment.prototype.updateGraphics = function() {



};



module.exports = CircleSegment