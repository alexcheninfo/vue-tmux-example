const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain
const path = require('path')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/resources/icon.png'
  })

  if (process.env.NODE_ENV === 'dev') {
    mainWindow.loadURL('http://localhost:8080/')
    mainWindow.openDevTools()
  } else {
    mainWindow.loadURL('file://' + __dirname + '/index.html')
  }

  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  ipc.on('submit', function () {
    console.log('Triggered from the renderer process')
  })
})
