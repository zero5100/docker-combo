console.log("I'm here!");

var xhttpAPI = new XMLHttpRequest();
xhttpAPI.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("test-api").innerHTML = this.responseText;
  } else if (this.readyState == 4) {
    alert("API is down!");
  }
};
xhttpAPI.open("GET", "/api", true);
xhttpAPI.send();

var xhttpDB = new XMLHttpRequest();
xhttpDB.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("test-database").innerHTML = this.responseText;
  } else if (this.readyState == 4) {
    alert("Database is down!");
  }
};
xhttpDB.open("GET", "/api/name", true);
xhttpDB.send();
