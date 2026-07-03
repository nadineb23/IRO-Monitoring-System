// main.js
// This is the main process of the Electron application. It handles window creation
// and other system-level interactions.

const { app, BrowserWindow } = require('electron');
const path = require('path');

/**
 * Creates the main browser window for the Electron application.
 */
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600, // Set a minimum width for responsiveness
    minHeight: 400, // Set a minimum height for responsiveness
    webPreferences: {
      // Preload script to expose Node.js APIs to the renderer process safely.
      // For this simple example, we don't need a preload script, but it's good practice.
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // It's safer to keep nodeIntegration off and use a preload script for specific APIs.
      contextIsolation: true, // Recommended for security.
      enableRemoteModule: false, // Deprecated and should be false for security.
    },
    // Set a default background color for the window
    backgroundColor: '#1a202c', // Tailwind's gray-900 for dark mode feel
    show: false, // Don't show the window until it's ready to prevent flash of unstyled content
  });

  // Load the login.html of the app as the starting page.
  // The __dirname variable holds the path to the directory where the current script is.
  mainWindow.loadFile(path.join(__dirname, 'login.html')); // Changed from index.html to login.html

  // Open the DevTools.
  // Uncomment the line below to open developer tools for debugging.
  // mainWindow.webContents.openDevTools();

  // Show the window once it's ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On macOS, it's common for applications and their menu bar to stay active
  // until the user quits explicitly with Cmd + Q.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
