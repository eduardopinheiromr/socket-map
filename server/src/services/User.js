const generateRandomName = require("../utils/generateRandomName");

module.exports = class User {
  constructor() {
    this.list = [];
  }

  create(socket) {
    const user = {
      id: socket.client.id,
      name: generateRandomName(),
      handShakeDate: socket.handshake.time,
      socket_id: socket.id,
      connected: socket.connected,
    };

    this.list.push(user);

    return user;
  }

  logOut(user) {
    this.list = this.list.filter((userLogged) => userLogged.id !== user.id);
  }
};
