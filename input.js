const connect = require('./client');
let connection;

const handleUserInput = function(key) {
   
  if (key === '\u0003') {
    process.stdout.write('exited game\n');
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "j") {
    connection.write("Say: HElLO THERE");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();

  return stdin;
};


module.exports = setupInput;