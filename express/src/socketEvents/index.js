module.exports = (system) => {
  system.socket.on("connection", (socket) => {
    const user = system.user.create(socket);

    console.log("User connected: ", user.name);

    socket.emit("start load", {
      message: "Socket.IO working",
      user,
      history: system.history,
      users: system.user.list,
    });

    socket.on("new message", (msg) => {
      system.history.push({ msg });
      system.socket.emit("chat message", msg);
    });
  });

  system.socket.on("join room", (data) => {
    socket.join(data.user.name);

    const welcome = {
      message: "Welcome to your room, " + data.user.name,
    };

    socket.emit("welcome room", welcome);
  });
};
