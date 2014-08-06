
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

var geometry = new THREE.BoxGeometry( 200, 200, 200 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );


var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


var renderer = new THREE.CanvasRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);


/*
var circleSegmentContainer = new PIXI.Graphics();
circleSegmentContainer.scale.x = 100
circleSegmentContainer.scale.y = 100
circleSegmentContainer.position.x = width * 0.5
circleSegmentContainer.position.y = height * 0.46
stage.addChild(circleSegmentContainer)

var circleSegment1 = new CircleSegment()
circleSegmentContainer.addChild(circleSegment1.graphics)

console.log("get local: " + JSON.stringify(circleSegment1.graphics.getLocalBounds()))
console.log("get pivot: " + JSON.stringify(circleSegment1.graphics.pivot))
*/

/*
var circleSegment2 = new CircleSegment()
circleSegment2.graphics.x = 200
stage.addChild(circleSegment2.graphics)
*/


requestAnimationFrame(animate);

var lastUpdate = Date.now();


// Animation loop
function animate() {

  requestAnimationFrame(animate);

  var now = Date.now();
  var dt = now - lastUpdate;
  lastUpdate = now;

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render( scene, camera );
  
}