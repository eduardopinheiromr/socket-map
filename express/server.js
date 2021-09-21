const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3001;
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

app.use("/", express.static("app"));

const System = require("./src/services/System");

const history = [];
const users = [];

const systemData = {
  socket: io,
  users,
  history,
};

const system = new System(systemData);

require("./src/socketEvents")(system);

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
