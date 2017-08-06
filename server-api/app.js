const express = require('express')
    , app = express();

// app.use("/", express.static("public"));
app.get('/api', function(req, res) {
  console.log("Got request on /api");
  res.send('Hello Buddy!');
});

const server = app.listen(3000, function() {
  console.log('combo-server-api listening on port 3000!');
});

module.exports.app = app;
module.exports.server = server;
