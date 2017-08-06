console.log("I'm here!");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("test").innerHTML = this.responseText;
  } else if (this.readyState == 4) {
    alert("API is down!");
  }
};
xhttp.open("GET", "/api", true);
xhttp.send();