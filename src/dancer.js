// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.recordPos = function(top, left) {
  this.top = top;
  this.left = left;
  console.log(`dancer has new pos of ${top}, ${left}`);
};

MakeDancer.prototype.setPosition = function(topPos, leftPos) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  this.recordPos(topPos, leftPos);
  this.$node.animate({
    left: leftPos,
    top: topPos
  }, 500, 'swing');
};


MakeDancer.prototype.circleDance = function(startAngle) {
  let unit = 50;
  let leftPos = this.left;
  let topPos = this.top;
  const animate = function() {
    let rad = startAngle * (Math.PI / 180);
    this.$node.css({
      left: leftPos + (250 + Math.cos(rad) * unit) + 'px',
      top: topPos + (unit * (1 - Math.sin(rad))) + 'px'
    });
    startAngle--;
  };
  //Need to replace this so it can be stopped
  let timer = setInterval(animate.bind(this), 10);
};




//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };