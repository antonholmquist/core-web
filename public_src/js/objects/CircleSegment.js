

function CircleSegment(x) {
  this.a = x;

};


CircleSegment.prototype.move = function() {
  this.a = this.a + 1;
  return this.a;
};



module.exports = CircleSegment