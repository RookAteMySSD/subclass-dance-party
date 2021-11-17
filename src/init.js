$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);

    $(dancer.$node).mouseover(function(event) {
      let top = $("body").height() * Math.random();
      let left = $("body").width() * Math.random();
      dancer.setPosition(top, left);
    });

    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    //window.dancers.length = # of positions
    //$("body").width() / # postions = increment #
    let increment = (($(window).width()) * (2 / 3)) / window.dancers.length;
    // set left pos to min possible and set right to middle
    let leftPos = $(window).width() / 2;
    let rightPos = $(window).width() / 2;
    if (go === true) {
      go = false;
    }
    leftPos += increment;
    for (let i = 0; i < window.dancers.length; i++) {
      // increment left
      if (i % 2 === 0) {
        dancers[i].lineUp(leftPos -= increment);
      }
      if (i % 2 === 1) {
        // send dancer to position
        dancers[i].lineUp(rightPos += increment);
      }
    }
  });

  $('.pairOff').on('click', function(event) {
    alert('running this more then once is not advised and may result in injury');
    if (go === true) {
      go = false;
    }
    let loopLen = window.dancers.length;
    if (window.dancers.length % 2 === 1) {
      loopLen--;
    }

    for (let i = 0; i < loopLen; i += 2) {
      console.log(i);
      let top = $("body").height() * Math.random();
      let left = $("body").width() * Math.random();
      window.dancers[i].setPosition(top, left);
      window.dancers[i + 1].setPosition(top, left);
      window.dancers[i].circleDance(0);
      window.dancers[i + 1].circleDance(180);
    }
    //initialize a 'pairedOff' array which contains inelligible pair partners
    // let pairedOff = [];
    // for (let x = 0; x < window.dancers.length; x++) {
    //   let interDist = [];
    //   let sortedDist = [];
    //   if(pairedOff.includes(x) === false) {
    //     //if window.dancers[x] is in pairedOff, skip (x++)
    //     //distances array for each [x]

    //     for (let i = 0; i < window.dancers.length; i++) {
    //       //if i = x, push null
    //       //if window.dancers[i] is in pairedOff, push a null value to interdistance array
    //       //Push each find distance value to distance array
    //       if((i === x) || pairedOff.includes(i)) {
    //         interDist.push(null);
    //       } else {
    //         interDist.push(findDistance(window.dancers[i], window.dancers[x]));
    //       }
    //     }
    //     //sort distances array in a new array
    //     //take lowest value, check index of that value in interDistance array
    //     //Index of lowest val in interDistance = index of dancer in window.dancer
    //     //Push that index of dancer into pairedOff
    //     sortedDist = interDist.sort((a, b) => {
    //       return a - b;
    //     });
    //     console.log(interDist);
    //     if(sortedDist !== []) {
    //       console.log(`${x} pairing off with ${interDist.indexOf(sortedDist[sortedDist.length - 1])}`);
    //       pairedOff.push(interDist.indexOf(sortedDist[sortedDist.length - 1]));
    //       pairedOff.push(x);
    //     }

    //     console.log(`Sorted Dists = ${sortedDist}`);

    //   }
    // }

    // console.log(`Final paired off list: ${pairedOff}`);
  });

  // distance to dancer =  Math.sqrt((x2 - x1) + (y2 - y1))
  // const findDistance = function(dancer1, dancer2) {
  //   let distance = Math.sqrt( Math.abs( (dancer2.left - dancer1.left) + (dancer2.top - dancer1.top) ) );
  //   console.log(distance);
  //   return distance;
  // };


});

