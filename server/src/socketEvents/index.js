module.exports = (system) => {
  system.socket.on("connection", (socket) => {
    const user = system.user.create(socket);

    console.log("User connected: ", user.name);

    system.socket.emit("start load", {
      message: "Socket.IO working",
      user,
      history: system.history,
      users: system.user.list,
    });

    system.socket.on("new message", ({ user, content }) => {
      console.log({ content });
      const sendedAt = new Date();
      system.history.push({ user, content, sendedAt });
      system.socket.emit("chat message", { user, content, sendedAt });
    });

    system.socket.on("join room", (data) => {
      system.socket.join(data.user.name);

      const welcome = {
        message: "Welcome to your room, " + data.user.name,
      };

      system.socket.emit("welcome room", welcome);
    });

    system.socket.on("disconnect", (reason) => {
      console.log("# User disconnected: " + user.name, reason);
      system.user.logOut(user);
      system.socket.emit("user disconnected", system.user.list);
    });
  });
};
