var menubar = require('menubar');

var mb = menubar({
  "index": 'https://usecamino.com',
  "preloadWindow": true,
  "width": 475,
  "height": 370,
  "icon": "icon.png",
  "show-dock-icon": true
});

mb.on('ready', function ready () {
  console.log('app is running!');
});
