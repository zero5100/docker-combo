console.log("Starting node-project...");

// Catch all signal events
const signals = ["SIGUSR1", "SIGINT", "SIGTERM", "SIGPIPE", "SIGHUP", "SIGBREAK", "SIGWINCH"];
signals.map(function(sigName) {
  process.on(sigName, function() {
    console.log("Received " + sigName + "!");

    console.log("Exiting with code (0)");
    process.exit(0);
  });
});

// Catches uncaught exceptions
process.on('uncaughtException', function(err) {
  console.log("Received uncaughtException!");
  if (err) { console.error("ERROR", err.stack || err); }

  console.log("Exiting with code (1)");
  process.exit(1);
});

// Cleanup the app when server is closing
process.on('exit', function() {
  if (server) {
    console.log("Closing down server...");
    server.close();
  }
});

console.log("Checking config...");
if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV has not been set!");
}
console.log("Config OK!");

console.log("Loading app...");
const server = require('./app').server;
console.log("App OK!");
