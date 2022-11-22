let name = prompt('Username?');
var update = false;
var role = "User";
var blockedemojis = ["👑", "🛡️"];
const socket = new
SimpleSocket({
  project_id: "62c1184e90dea7465b203165",
  project_token: "client_ddfb18c07a37b6a73be7205c4234de4440b"
});
socket.subscribe("newchat", function(data) {
  document.getElementById("chatholder").value += data.text;
  document.getElementById('chatholder').scrollTop = 9999999;
  console.log(data);
  // Code to run when receiving event (Such as creating the chat on screen);
});
if (update == true) {
  document.write("We are updating, please come back later!");
}
function startapp() {
  window.location = "/app";
  socket.publish("newchat", { text: "Someone has connected!" });
}
function sendmsg() {
  var input = document.getElementById("msgholder").value;
  var emojitag = document.getElementById("emojiholder").value;
    if (input == "") {
    alert("Text cannot be blank");
  } else if (name == "") {
    name = "User";
  } else if (emojitag == "") {
  socket.publish("newchat", { text: ("[" + name + "]: " + input + " \n") });
  document.getElementById("msgholder").value = "";
  document.getElementById("nameholder").hidden = true;
  document.getElementById('chatholder').scrollTop = 9999999;
  } else {
  socket.publish("newchat", { text: ("(" + emojitag + ") " + "[" + name + "]: " + input + " \n") });
  document.getElementById("msgholder").value = "";
  document.getElementById("nameholder").hidden = true;
  document.getElementById('chatholder').scrollTop = 9999999;
  }
}
var emojitag = document.getElementById("emojiholder").value;
var input = document.getElementById("msgholder").value;
while (emojitag >= 2) {
  document.getElementById("emojiholder").value = "";
}
