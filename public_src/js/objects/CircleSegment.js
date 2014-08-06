var PIXI = require('../libs/pixi/pixi')

function CircleSegment() {
  //this.a = x;

  // Create graphics objects
  this.graphics = new PIXI.Graphics();

  this.updateGraphics();
};


CircleSegment.prototype.move = function() {
  this.a = this.a + 1;
  return this.a;
};

// Update the graphics object
CircleSegment.prototype.updateGraphics = function() {

  var graphics = this.graphics;
  
    // begin a green fill..
  graphics.beginFill(0xffffff);
   
  // draw a triangle using lines
  graphics.moveTo(-1, 1);

  graphics.lineTo(1, 1);
  graphics.lineTo(1, -1);
  graphics.lineTo(-1,-1);
   
  // end the fill
  graphics.endFill();

};



module.exports = CircleSegment