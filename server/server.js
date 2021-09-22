const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const port = 3001;

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
