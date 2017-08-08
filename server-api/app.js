const express = require("express")
    , app = express();

const db = require("./db");

// app.use("/", express.static("public"));
app.get("/api", function(req, res) {
  console.log("Got request on /api");
  res.send("Hello Buddy!");
});

app.get("/api/name", function(req, res) {
  console.log("Got request on /api/name");

  db.all("people")
  .then(function(people) {
    res.send("HIS NAME IS " + people[0].name);
  })
  .catch((err) => {
    res.send("BAD THING " + err);
  });
});

const server = app.listen(3000, function() {
  console.log("combo-server-api listening on port 3000!");
});

module.exports.app = app;
module.exports.server = server;
