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
    };

    this.list.push(user);

    return user;
  }
};
