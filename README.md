# Electron Broken Tray Icon Example

See this issue first: [electron/issues/3376](https://github.com/atom/electron/issues/3376)

This is an example displaying how Electron's [`NativeImage`](https://github.com/atom/electron/blob/master/docs/api/native-image.md)
does not use the appropriate dpi icon when using `NativeImage.toDataUrl`.

The icons are inside the `assets/` directory:
  - `icon@1x.png` (this image is stretched to show that it is using @1x when it
    shoudl use @2x)
  - `icon@2x.png`


## Screenshot

<img src="https://raw.githubusercontent.com/jstejada/electron-tray-icon-example/master/assets/screenshot.png">


## Run

- `npm install`
- To use `NativeImage.toDataUrl`: `npm run start -- --use-data-url`
- To use only `NativeImage.createFromPath`: `npm run start`
