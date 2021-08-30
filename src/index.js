const { app, BrowserWindow, Menu } = require('electron');
Menu.setApplicationMenu(false)

let mainWindow = null

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    mainWindow.loadFile(__dirname + '/index.html')
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    })
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})