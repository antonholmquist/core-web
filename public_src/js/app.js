
var PIXI = require('./libs/pixi/pixi')
var THREE = require('./libs/three/three')

var CircleSegment = require('./objects/CircleSegment')

var instance = new CircleSegment(10)


var width = window.innerWidth;
var height = window.innerHeight;

// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer (or autoDetectRenderer)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 1000;


var circleSegmentContainer = new THREE.Object3D()
circleSegmentContainer.scale.x = 100
circleSegmentContainer.scale.y = 100

scene.add(circleSegmentContainer);


var circleSegment1 = new CircleSegment()
circleSegmentContainer.add(circleSegment1.mesh );




console.log("circleSegment1.mesh: ", circleSegment1.mesh.scale.x)


var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
});

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);

requestAnimationFrame(animate);

var lastUpdate = Date.now();


// Animation loop
function animate() {

  requestAnimationFrame(animate);

  var now = Date.now();
  var dt = now - lastUpdate;
  lastUpdate = now;

  circleSegment1.mesh.rotation.z += 0.02;

  renderer.render( scene, camera );
  
}