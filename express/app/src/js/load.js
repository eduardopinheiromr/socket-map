function loadScript(script) {
  const head = document.querySelector("head");

  head.innerHTML += `
      <script src="./src/js/${script}.js"></script>
      `;

  console.log("Script " + script + " loaded");
}

loadScript("entities/Chat");
loadScript("entities/MessageTemplates");
