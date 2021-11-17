var Pusheen = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer pusheen" src="https://c.tenor.com/XKJysAaxZuwAAAAC/pusheen-happy.gif">');
  this.setPosition(top, left);
  this.goWild();

};

Pusheen.prototype = Object.create(MakeDancer.prototype);
Pusheen.prototype.constructor = Pusheen;

Pusheen.prototype.goWild = function() {
  var $span = this.$node;

  var maxLeft = $(window).width() - $span.width();
  var maxTop = $(window).height() - $span.height();
  var leftPos = Math.floor(Math.random() * (maxLeft + 1));
  var topPos = Math.floor(Math.random() * (maxTop + 1));
  this.recordPos(topPos, leftPos);
  $span.animate({
    left: leftPos,
    top: topPos
  }, 1000, 'swing');
};

var go = true;

Pusheen.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  if (go === true) {
    this.goWild();
  }
};

Pusheen.prototype.lineUp = function (xPos) {
  this.recordPos(500, xPos);
  this.$node.animate({
    left: xPos,
    top: 500
  }, 500, 'swing');
};

// var $span = this.$node;

//   $span.fadeOut(1000, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1));
//     var topPos = Math.floor(Math.random() * (maxTop + 1));

//     $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
//   });