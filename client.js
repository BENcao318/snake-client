const net = require("net");
// const { stderr } = require("process");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (e) => {
    console.log(e);
    // console.log('Successfully connected to game server');
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write('Name: BYC');
  });

  // conn.on("connect", () => {
    // setInterval(() => {
    //   conn.write('Move: up');
    //   setTimeout(() => {
    //     conn.write('Move: left');
    //   }, 300)
    // }, 600)
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);
  // });

  return conn;
};





module.exports = {
  connect,
}