const { app, BrowserWindow, ipcMain } = require("electron");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 300,
		height: 300,
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true,
			preload: __dirname + "/preload.js",
		},
		show: false,
		resizable: false,
		autoHideMenuBar: true,
	});

	win.loadFile("index.html");

	win.on("ready-to-show", () => {
		win.show();
	});
};

app.on("ready", () => {
	createWindow();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

ipcMain.on("print", (event, msg) => {
	console.log(msg);
});
