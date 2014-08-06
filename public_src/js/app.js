
var PIXI = require('./libs/pixi/pixi')

var CircleSegment = require('./objects/CircleSegment')

var instance = new CircleSegment(10)


// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
var renderer = new PIXI.WebGLRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;



var circleSegment1 = new CircleSegment()
stage.addChild(circleSegment1.graphics)

var circleSegment2 = new CircleSegment()
circleSegment2.graphics.x = 200
stage.addChild(circleSegment2.graphics)


requestAnimationFrame(animate);




// Animation loop
function animate() {

  renderer.render(stage);

  circleSegment2.graphics.x += 1

  requestAnimationFrame(animate);
}