const { ipcRenderer } = require("electron");
const btnExample = document.getElementById("btn-example");

btnExample.addEventListener("click", () => {
	ipcRenderer.send("print", "Hello from renderer.js!");
});
