var menubar = require('menubar');

var mb = menubar({
  index: 'http://localhost:3000',
  preloadWindow: true,
  width: 475,
  height: 370,
  icon: 'IconTemplate.png'
});

mb.on('ready', function ready () {
  console.log('app is running!');
});
