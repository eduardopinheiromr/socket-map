const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const history = [];
const users = [];

app.use("/", express.static("app"));

function createUser(socket) {
  const user = {
    id: socket.client.id,
    handShakeDate: socket.handshake.time,
    socket_id: socket.id,
  };

  users.push(user);
}

io.on("connection", (socket) => {
  createUser(socket);

  console.log(users);

  // Sending chat history
  io.emit("load history", history);

  socket.on("chat message", (msg) => {
    history.push(msg);
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
