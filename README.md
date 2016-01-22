# crtrdg-tty

> keyboard module for crtrdg games that works in the terminal

Useful for testing and debugging core game logic outside the browser, e.g. because you have separate modules for game logic and rendering. Works well with `crtrdg.js` games, but can be used just as well independently.

## install

    npm install --save crtrdg-touch

## example

call

	npm start

inside this module, press or hold keys to see the associated events

## API

### `create`

create the tty object

```javascript
var TTY = require('crtrdg-tty')

var tty = TTY()
```

### `tty.on('keyDown')`

key down events

provides a key code for the key pressed from `vkey`

### `tty.on('keyUp')`

key up events

provides a key code for the key let up from `vkey`

### `tty.keysDown`

object with currently pressed keys set to true

**example**

```javascript
tty.on('keyDown', function () {
  console.log(tty.keysDown)
})

>> {<up>: true}
```
