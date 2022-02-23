// setup interface to handle user input from stdin

const { stdin } = require("process");
const { KEYS } = require('./constants');

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
  }
  connection.write(KEYS[key]);
}

stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
}