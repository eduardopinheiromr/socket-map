module.exports = class MessageTemplates {
  constructor() {}

  message(msg) {
    return `
              <li>${msg}</li>
          `;
  }
};
