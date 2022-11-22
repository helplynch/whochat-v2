// Let this only be used for developers
let name = "User"
const socket = new
SimpleSocket({
  project_id: "62c1184e90dea7465b203165",
  project_token: "client_ddfb18c07a37b6a73be7205c4234de4440b"
});
socket.subscribe("newchat", function(data) {
  document.getElementById("chatholder").value += data.text
  console.log(data);
  // Code to run when receiving event (Such as creating the chat on screen);
});
function startapp() {
  window.location = "/app";
  socket.publish("newchat", { text: "Someone has connected!" })
}
function sendmsg() {
  var input = document.getElementById("msgholder").value
  var rank = document.getElementById("rankholder").value
  if (rank == "Owner") {
    name = document.getElementById("nameholder").value
  socket.publish("newchat", { text: ("👑[" + name + "]: " + input + " \n") })
  document.getElementById("msgholder").value = ""
  } else if (rank == "Admin") {
    name = document.getElementById("nameholder").value
  socket.publish("newchat", { text: ("🛡️[" + name + "]: " + input + " \n") })
  document.getElementById("msgholder").value = ""
  }
}
