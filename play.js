const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("server just sent you a message");
    console.log(data);
    console.log("it's got a sharp tongue this server");
  });

  return conn;
};

console.log("Connecting ...");
connect();

