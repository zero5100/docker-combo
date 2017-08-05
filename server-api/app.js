const express = require('express')
    , app = express();

app.use("/", express.static("public"));

const server = app.listen(3000, function() {
  console.log('node-project listening on port 3000!');
});

module.exports.app = app;
module.exports.server = server;
