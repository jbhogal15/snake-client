
const {PORT, IP} = require('./constants');

//connect function
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("successfully connected to game server");
    conn.write("Name: NIT");
  });
  conn.on("data", (data) => {
    console.log("server just sent you a message");
    console.log(data);
    console.log("it's got a sharp tongue this server");
  });
 
  return conn;
};


module.exports = connect;

