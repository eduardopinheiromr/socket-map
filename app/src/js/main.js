const Chat = require("./entities/Chat");

const selectors = {
  messages: "#messages",
  form: "#form",
  input: "#input",
};

const chat = new Chat(selectors);
