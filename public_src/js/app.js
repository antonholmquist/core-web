
var PIXI = require('./libs/pixi/pixi')

var CircleSegment = require('./objects/CircleSegment')

var instance = new CircleSegment(10)


// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
var renderer = new PIXI.WebGLRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;


var circleSegmentContainer = new PIXI.Graphics();
circleSegmentContainer.scale.x = 100
circleSegmentContainer.scale.y = 100
circleSegmentContainer.position.x = 400
circleSegmentContainer.position.y = 300
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




// Animation loop
function animate() {

  renderer.render(stage);


  circleSegment1.graphics.rotation += 0.001

  //circleSegment2.graphics.x += 1

  requestAnimationFrame(animate);
}