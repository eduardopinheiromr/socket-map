console.log("WATAFOCK");

class Chat {
  constructor(selectors) {
    this.socket = io();
    this.template = new MessageTemplates();
    this.messages = document.querySelector(selectors.messages);
    this.form = document.querySelector(selectors.form);
    this.input = document.querySelector(selectors.input);

    // SOCKET EVENTS
    this.socket.on("chat message", (msg) => this.renderMessage(msg));
    this.socket.on("load history", (history) => this.loadHistory(history));
  }

  submit(event) {
    console.log("Testando essa desgraça");
    event.preventDefault();
    if (this.input.value) {
      this.socket.emit("chat message", input.value);
      input.value = "";
    }
  }

  renderMessage(msg) {
    this.messages.innerHTML += this.template.message(msg);
    window.scrollTo(0, document.body.scrollHeight);
  }

  loadHistory(history) {
    history.forEach((msg) => this.renderMessage(msg));
  }
}
