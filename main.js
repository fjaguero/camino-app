var menubar = require('menubar');
var electron = require('electron');
var Menu = require("menu");

var mb = menubar({
  "index": 'https://usecamino.com',
  "preloadWindow": true,
  "width": 475,
  "height": 370,
  "icon": "icon.png",
  "show-dock-icon": false
});

mb.on('ready', function ready () {
  console.log('app is running!');
});

mb.on('after-create-window', function() {
  // Add copy-paste, undo and quit keyboard shortcuts
  var shortcuts = [{
    label: "Shortcuts",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(shortcuts));
})
