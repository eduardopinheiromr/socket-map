const User = require("./User");

module.exports = class System {
  constructor(data) {
    this.user = new User();
    this.socket = data.socket;
    this.history = data.history;
  }
};
