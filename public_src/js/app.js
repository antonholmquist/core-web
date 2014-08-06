
var PIXI = require('./libs/pixi/pixi')

var CircleSegment = require('./objects/CircleSegment')

var instance = new CircleSegment(10)


var width = window.innerWidth;
var height = window.innerHeight;

// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer (or autoDetectRenderer)
var renderer = new PIXI.WebGLRenderer(width, height, null, false, true);

renderer.view.style.width = width + "px";
renderer.view.style.height = height + "px";
renderer.view.style.display = "block";

/*
window.onresize = function(event) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.view.style.width = width + "px";
  renderer.view.style.height = height + "px";
  renderer.width = width;
  renderer.height = height;
};*/

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage(0x00426b);


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

/*
var circleSegment2 = new CircleSegment()
circleSegment2.graphics.x = 200
stage.addChild(circleSegment2.graphics)
*/


requestAnimationFrame(animate);

var lastUpdate = Date.now();


// Animation loop
function animate() {

  var now = Date.now();
  var dt = now - lastUpdate;
  lastUpdate = now;

  renderer.render(stage);

  circleSegment1.graphics.rotation += dt * 0.0004


  requestAnimationFrame(animate);
}