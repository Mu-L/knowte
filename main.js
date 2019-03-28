"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var windowStateKeeper = require("electron-window-state");
// Logging needs to be imported in main.ts also. Otherwise it just doesn't work anywhere else.
// See post by megahertz: https://github.com/megahertz/electron-log/issues/60
// "You need to import electron-log in the main process. Without it, electron-log doesn't works in a renderer process."
var electron_log_1 = require("electron-log");
var mainWindow, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
// Workaround: Global does not allow setting custom properties.
// We need to cast it to "any" first.
var globalAny = global;
// Workaround to send messages between Electron windows
var EventEmitter = require('events');
var GlobalEventEmitter = /** @class */ (function (_super) {
    __extends(GlobalEventEmitter, _super);
    function GlobalEventEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GlobalEventEmitter;
}(EventEmitter));
;
globalAny.globalEmitter = new GlobalEventEmitter();
// By default, electron-log logs only to file starting from level 'warn'. We also want 'info'.
electron_log_1.default.transports.file.level = 'info';
function createWindow() {
    var gotTheLock = electron_1.app.requestSingleInstanceLock();
    if (!gotTheLock) {
        electron_1.app.quit();
    }
    else {
        electron_1.app.on('second-instance', function (event, commandLine, workingDirectory) {
            // Someone tried to run a second instance, we should focus our window.
            if (mainWindow) {
                if (mainWindow.isMinimized()) {
                    mainWindow.restore();
                }
                mainWindow.focus();
            }
        });
        // Load the previous state with fallback to defaults
        var mainWindowState = windowStateKeeper({
            defaultWidth: 850,
            defaultHeight: 600
        });
        // Create the window using the state information
        mainWindow = new electron_1.BrowserWindow({
            'x': mainWindowState.x,
            'y': mainWindowState.y,
            'width': mainWindowState.width,
            'height': mainWindowState.height,
            backgroundColor: '#fff',
            frame: false,
            icon: path.join(__dirname, 'build/icon/icon.png'),
            show: false
        });
        // Let us register listeners on the window, so we can update the state
        // automatically (the listeners will be removed when the window is closed)
        // and restore the maximized or full screen state
        mainWindowState.manage(mainWindow);
        if (serve) {
            require('electron-reload')(__dirname, {
                electron: require(__dirname + "/node_modules/electron")
            });
            mainWindow.loadURL('http://localhost:4200');
        }
        else {
            mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, 'dist/index.html'),
                protocol: 'file:',
                slashes: true
            }));
        }
        // mainWindow.webContents.openDevTools();
        // Emitted when the window is closed.
        mainWindow.on('closed', function () {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
            // When the main window is closed, quit the app (This also closes all other windows)
            electron_1.app.quit();
        });
        // 'ready-to-show' doesn't fire on Windows in dev mode. In prod it seems to work. 
        // See: https://github.com/electron/electron/issues/7779
        mainWindow.on('ready-to-show', function () {
            mainWindow.show();
            mainWindow.focus();
        });
        // Makes links open in external browser
        var handleRedirect = function (e, url) {
            // Check that the requested url is not the current page
            if (url != mainWindow.webContents.getURL()) {
                e.preventDefault();
                require('electron').shell.openExternal(url);
            }
        };
        mainWindow.webContents.on('will-navigate', handleRedirect);
        mainWindow.webContents.on('new-window', handleRedirect);
    }
}
function createNoteWindow(notePath, noteId) {
    // Load the previous state with fallback to defaults
    var noteWindowState = windowStateKeeper({
        defaultWidth: 600,
        defaultHeight: 400,
        path: notePath,
        file: noteId + ".state"
    });
    // Create the window using the state information
    var noteWindow = new electron_1.BrowserWindow({
        'x': noteWindowState.x,
        'y': noteWindowState.y,
        'width': noteWindowState.width,
        'height': noteWindowState.height,
        backgroundColor: '#fff',
        frame: false,
        show: false
    });
    // Let us register listeners on the window, so we can update the state
    // automatically (the listeners will be removed when the window is closed)
    // and restore the maximized or full screen state
    noteWindowState.manage(noteWindow);
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        noteWindow.loadURL("http://localhost:4200#/note?id=" + noteId);
    }
    else {
        noteWindow.loadURL("file://" + __dirname + "/dist/index.html#/note?id=" + noteId);
    }
    noteWindow.on('ready-to-show', function () {
        noteWindow.show();
        noteWindow.focus();
    });
    // Makes links open in external browser
    var handleRedirect = function (e, url) {
        // Check that the requested url is not the current page
        if (url != noteWindow.webContents.getURL()) {
            e.preventDefault();
            require('electron').shell.openExternal(url);
        }
    };
    noteWindow.webContents.on('will-navigate', handleRedirect);
    noteWindow.webContents.on('new-window', handleRedirect);
}
try {
    electron_log_1.default.info("+++ Starting +++");
    // OPen note windows
    electron_1.ipcMain.on('open-note-window', function (event, arg) {
        createNoteWindow(arg.notePath, arg.noteId);
    });
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    electron_1.app.on('ready', createWindow);
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        electron_log_1.default.info("+++ Stopping +++");
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        // if (process.platform !== 'darwin') {
        //   app.quit();
        // }
        electron_1.app.quit();
    });
    electron_1.app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow();
        }
    });
}
catch (e) {
    // Catch Error
    // throw e;
}
//# sourceMappingURL=main.js.map