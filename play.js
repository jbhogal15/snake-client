const connect = require('./client');





// establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: "165.227.47.243",// IP address here,
//     port: 50541 // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("data", (data) => {
//     console.log("server just sent you a message");
//     console.log(data);
//     console.log("it's got a sharp tongue this server");
//   });

//   return conn;
// };

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    if (key === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};



// conn.on("connect", () => {
//   conn.write("Move: up");
// });
// conn.on("connect", () => {
//   setTimeout(() => conn.write("Move: right"), 2000);
// });
// conn.on("connect", () => {
//   setTimeout(() => conn.write("Move: up"), 4000);
// });
// conn.on("connect", () => {
//   setTimeout(() => conn.write("Move: left"), 6000);
// });

