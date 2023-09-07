let KEY_SPACE = false; //32
let KEY_UP = false; //38
let KEY_DOWN = false; //40


// Keydown and Keyup events
// SPACEBAR
document.onkeydown = function (e) {
  if (e.keyCode == 32) { // when spacebar is pressed
    KEY_SPACE = true;
  }
};

document.onkeyup = function (e) {
    if (e.keyCode == 32) { // when spacebar is released
      KEY_SPACE = false;
    }
  };

  // UP ARROW

  document.onkeydown = function (e) {
    if (e.keyCode == 38) { // when up is pressed
      KEY_UP = true;
    }
  };

  document.onkeyup = function (e) {
    if (e.keyCode == 38) { // when up is released
      KEY_UP = false;
    }
  };

  // DOWN ARROW

  document.onkeydown = function (e) {
    if (e.keyCode == 40) { // when down is pressed
      KEY_UP = true;
    }
  };

  document.onkeyup = function (e) {
    if (e.keyCode == 40) { // when down is released
      KEY_UP = false;
    }
  };