// setup interface to handle user input from stdin

const { stdin } = require("process");
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  return stdin;
};

const handleUserInput = function(key) {
  if(key === '\u0003') {
    process.exit();
  } else if( key === '\u0077') {
    connection.write('Move: up');
  } else if( key === '\u0061') {
    connection.write('Move: left');
  } else if( key === '\u0073') {
    connection.write('Move: down');
  } else if( key === '\u0064') {
    connection.write('Move: right');
  } else if( key === '\u0076') {
    connection.write('Say: I will win!!!');
  }
}


// // const stdin = setupInput();
// stdin.setRawMode(true);
// stdin.setEncoding("utf8");
stdin.on("data", handleUserInput);



// const stdin = setupInput();
// stdin.on("data", handleUserInput);
module.exports = {
  setupInput,
}