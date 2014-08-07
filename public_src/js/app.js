
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


// Ambient light
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
//scene.add( light );

// Directional light
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
directionalLight.position.set( 1, 1, 1);
scene.add( directionalLight );



var sphere = new THREE.Mesh(  new THREE.SphereGeometry( 30, 10, 10 ), new THREE.MeshLambertMaterial( {color: 0xff0000} ));
scene.add( sphere );


var circleSegmentContainer = new THREE.Object3D()
circleSegmentContainer.scale.x = 100
circleSegmentContainer.scale.y = 100

scene.add(circleSegmentContainer);



var circleSegment1 = new CircleSegment()
circleSegmentContainer.add(circleSegment1.mesh);

var circleSegment2 = new CircleSegment()
circleSegmentContainer.add(circleSegment2.mesh);
circleSegment2.mesh.scale.x = 2
circleSegment2.mesh.scale.y = 2

var circleSegment3 = new CircleSegment()
circleSegmentContainer.add(circleSegment3.mesh);
circleSegment3.mesh.scale.x = 4
circleSegment3.mesh.scale.y = 4


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

  circleSegment1.mesh.rotation.z += 0.01;
  circleSegment2.mesh.rotation.z += -0.007;
  circleSegment3.mesh.rotation.z += -0.002;

  circleSegment1.mesh.rotation.y += -0.005;
  circleSegment2.mesh.rotation.y += -0.01;
  circleSegment3.mesh.rotation.y += -0.002;

  renderer.render( scene, camera );
  
}