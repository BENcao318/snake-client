const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.31.197.153',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (e) => {
    // code that does something when the connection is first established
    console.log(e);
  });

  return conn;
};





module.exports = {
  connect,
}