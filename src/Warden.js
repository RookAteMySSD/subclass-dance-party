var Warden = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer Warden" src="https://c.tenor.com/9JQdkkxaJTwAAAAM/for-honor.gif">');
  this.setPosition(top, left);
  this.goWild();
};

Warden.prototype = Object.create(MakeDancer.prototype);
Warden.prototype.constructor = Warden;

Warden.prototype.goWild = function() {
  var $span = this.$node;

  var maxLeft = $(window).width() - $span.width();
  var maxTop = $(window).height() - $span.height();
  var leftPos = Math.floor(Math.random() * (maxLeft + 1));
  var topPos = Math.floor(Math.random() * (maxTop + 1));

  $span.animate({
    left: leftPos,
    top: topPos
  }, 500, 'linear');
};

Warden.prototype.lineUp = function (xPos) {
  this.recordPos(500, xPos);
  this.$node.animate({
    left: xPos,
    top: 500
  }, 500, 'swing');
};