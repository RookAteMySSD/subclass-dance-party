var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// console.log(MakeBlinkyDancer.prototype.step);
// MakeBlinkyDancer.prototype.stepRunner = function() {
//   MakeBlinkyDancer.prototype.step();
//   this.$node.toggle();
// };

makeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

// MakeBlinkyDancer.prototype.beginStep = funciton() {
//   setInterval(this.step, 100);
// }

//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };