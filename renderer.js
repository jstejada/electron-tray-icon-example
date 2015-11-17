var path = require('path');
var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var NativeImage = remote.require('native-image');

var tray = null;
var ICON_PATH = path.join(__dirname, 'assets', 'icon.png');

console.log('Setting tray...');
console.log('Device pixel ratio: ' + window.devicePixelRatio);
var menuTemplate = [{label: 'Hello world!'}]

var useDataUrl = location.search === '?useDataUrl';
if (useDataUrl) {
  tray = new Tray(
    NativeImage.createFromDataUrl(
      NativeImage.createFromPath(ICON_PATH).toDataUrl()
    )
  );
} else {
  tray = new Tray(
    NativeImage.createFromPath(ICON_PATH)
  );
}
tray.setContextMenu(Menu.buildFromTemplate(menuTemplate));

