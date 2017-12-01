// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
const readline = require('readline');

// Speed up the mouse.
robot.setMouseDelay(2);
 
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
 

setInterval(function() {
  for (var x = 0; x < width; x++)
  {
      y = height * Math.sin((twoPI * x) / width) + height;
      robot.moveMouse(x, y);
  }
}, 5000);


var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );



// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  if ( key === 'c' || key ==='x') {
    process.exit();
  }
  // write the key to stdout all normal like
  console.log(key);
  // process.stdout.write( key );
});