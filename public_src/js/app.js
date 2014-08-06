
var PIXI = require('./libs/pixi/pixi')

var CircleSegment = require('./objects/CircleSegment')

var instance = new CircleSegment(10)


// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
var renderer = new PIXI.WebGLRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;

/*
var bunnyTexture = PIXI.Texture.fromImage("bunny.png");
var bunny = new PIXI.Sprite(bunnyTexture);

bunny.position.x = 400;
bunny.position.y = 300;

bunny.scale.x = 2;
bunny.scale.y = 2;

stage.addChild(bunny);
*/

{
  
  var graphics = new PIXI.Graphics();


    // begin a green fill..
  graphics.beginFill(0x00ff00);
   
  // draw a triangle using lines
  graphics.moveTo(0,0);

  graphics.lineTo(50, 100);
  graphics.lineTo(-50, 100);
  graphics.lineTo(0,0);
   
  // end the fill
  graphics.endFill();

  graphics.position.x = 50
  


  // add it the stage so we see it on our screens.. 
  stage.addChild(graphics);  

}



requestAnimationFrame(animate);




// Animation loop
function animate() {

  renderer.render(stage);

  requestAnimationFrame(animate);
}